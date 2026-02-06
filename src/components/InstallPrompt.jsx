// A React component that displays a button allowing users to install the PWA
// when the application meets the installation criteria. It listens for the
// `beforeinstallprompt` event and stores the event so it can be triggered
// later when the user clicks the install button. Once the PWA is installed
// or the prompt is dismissed, the button is hidden again.

import { useState, useEffect } from "react";

export default function InstallPrompt() {
  // Hold the deferred install prompt event when available
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  // Control visibility of the install button
  const [visible, setVisible] = useState(false);

  // Listen for the beforeinstallprompt event fired by the browser
  useEffect(() => {
    const handler = (e) => {
      // Prevent the default mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      setVisible(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  // Hide the button if the app has been installed
  useEffect(() => {
    const onInstalled = () => {
      setVisible(false);
    };
    window.addEventListener("appinstalled", onInstalled);
    return () => window.removeEventListener("appinstalled", onInstalled);
  }, []);

  // Trigger the installation prompt when the button is clicked
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    // Show the install prompt
    const { outcome } = await deferredPrompt.prompt();
    // Reset the deferred prompt variable. It can only be used once.
    setDeferredPrompt(null);
    // Hide the button regardless of the user's choice
    setVisible(false);
    // Log the result (optional)
    console.log(`User response to the install prompt: ${outcome}`);
  };

  // If not visible, render nothing
  if (!visible) return null;

  return (
    <button className="installButton" onClick={handleInstallClick} type="button">
      Install App
    </button>
  );
}