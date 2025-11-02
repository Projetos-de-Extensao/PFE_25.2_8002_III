# portal-monitor

Simple React (Vite) front-end scaffold for the Portal Monitor project.

Getting started (Windows PowerShell):

1. Open a terminal in this folder (`portal-monitor`).
2. Install dependencies:

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

This project uses the Tailwind play CDN for styling to keep the setup minimal for class/demo purposes. Replace the CDN with a proper Tailwind setup if you want production-ready CSS.

Files of interest:
- `index.html` — project entry (includes Tailwind CDN and Inter font)
- `src/main.jsx` — React entry
- `src/App.jsx` — app shell wiring Header, Login, Footer
- `src/pages/Login.jsx` — Login page built from prototype
- `src/components/Header.jsx` and `Footer.jsx` — shared components

Routing
- `/` — Login page
- `/register` — Registration page (form includes name, email, password confirmation and user type radio)

Notes
- The project uses `react-router-dom` for client-side routing so links use `Link` and navigation is handled in the browser. Install dependencies with `npm install` before running.
