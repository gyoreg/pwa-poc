import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import FooterNav from "./components/FooterNav.jsx";
import InstallPrompt from "./components/InstallPrompt.jsx";
import "./App.css";

// Define the tabs available in the application. Each tab has an id and a label
// used for display. Additional tabs can be added here, and the switch logic
// below will render different content for each.
const TABS = [
  { id: "home", label: "Home" },
  { id: "search", label: "Search" },
  { id: "profile", label: "Profile" },
];

export default function App() {
  // Active tab state. Controls which tab's content is displayed.
  const [tab, setTab] = useState("home");

  // Determine the content to display based on the active tab. By using
  // useMemo with tab as a dependency, the content only re-renders when
  // the tab changes, improving performance.
  const content = useMemo(() => {
    switch (tab) {
      case "home":
        return (
          <>
            <h2>Home</h2>
            <p>Welcome to your new PWA, built with Vite and React!</p>
            <p>Use this template as a starting point for your application.</p>
          </>
        );
      case "search":
        return (
          <>
            <h2>Search</h2>
            <p>This page is a placeholder for a search interface.</p>
            <p>Replace this with your own search functionality.</p>
          </>
        );
      case "profile":
        return (
          <>
            <h2>Profile</h2>
            <p>This page is a placeholder for user profile and settings.</p>
            <p>Customize it to suit your app's needs.</p>
          </>
        );
      default:
        return null;
    }
  }, [tab]);

  return (
    <div className="appShell">
      {/* Header component with title and subtitle */}
      <Header title="My React PWA" subtitle="Header + footer menu" />
      {/* In-app install prompt button. It appears only when the PWA is installable */}
      <InstallPrompt />
      {/* Main content area. The content changes based on the active tab. */}
      <main className="appMain">{content}</main>
      {/* Footer navigation component. Handles switching between tabs. */}
      <FooterNav tabs={TABS} activeTab={tab} onChange={setTab} />
    </div>
  );
}