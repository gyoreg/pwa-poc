# My PWA

This project is a simple **Progressive Web Application (PWA)** built with [Vite](https://vitejs.dev/) and [React](https://react.dev/). It demonstrates how to set up an installable PWA with a header and a footer navigation menu. The app uses the [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa) to register a service worker and generate a web app manifest.

## Getting Started

To run this project locally, you'll need a recent version of Node.js (>= 16) and npm installed. Follow these steps:

```bash
npm install
npm run dev
```

This will start a development server at `http://localhost:5173` (or another available port). Navigate to that URL in your browser to see the app.

### Building for Production

To build the project for production and preview it locally:

```bash
npm run build
npm run preview
```

The preview command will serve the built application and provide an install prompt if your browser supports PWAs.

## Features

- **Service Worker:** The service worker is automatically generated and registered, enabling offline capabilities and caching of static assets.
- **Manifest:** A web app manifest is generated with icons and metadata required for installation.
- **Header & Footer Navigation:** A sticky header and footer navigation bar provide a simple UI structure for multiple pages.

## File Structure

```
my-pwa/
├── public/
│   └── icons/
│       ├── pwa-192.png   # 192x192 application icon
│       └── pwa-512.png   # 512x512 application icon
├── src/
│   ├── components/
│   │   ├── Header.jsx     # Header component
│   │   └── FooterNav.jsx  # Footer navigation component
│   ├── App.jsx            # Application shell with tabs
│   ├── App.css            # Application styling
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point and service worker registration
├── vite.config.js         # Vite configuration with PWA plugin
├── package.json           # Project metadata and scripts
└── README.md              # This file
```

## Customization

You can modify the tabs and their content by editing the `TABS` array in `src/App.jsx` and adjusting the `switch` statement accordingly. To change colors or fonts, modify `src/App.css`.

## License

This project is provided without any specific license. You are free to use it as a starting point for your own PWAs.