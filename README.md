React Landing Page using Routings
A modern, responsive landing page built with React, Vite, React Router, and Tailwind CSS. Features a clean blue/white theme, accessible components, and mobile-first layout.


Preview
Hero section with Download CTA and visible SVG icon
Responsive images with balanced sizing
Clean typography and spacing
Client-side routing with React Router
Tech Stack
React 18
Vite (dev server and build)
React Router v6
Tailwind CSS
Getting Started
Prerequisites

Node.js 18+ recommended
npm, pnpm, or yarn
Install dependencies

npm install
pnpm install
yarn
Run in development

npm run dev
pnpm dev
yarn dev
Build for production

npm run build
pnpm build
yarn build
Preview production build

npm run preview
pnpm preview
yarn preview
Project Structure (example)
React-router/

src/
components/
Home/Home.jsx
About/About.jsx
Contact/Contact.jsx
User/User.jsx
Github/Github.jsx
main.jsx
index.css
package.json
tailwind.config.js
postcss.config.js
README.md
Note: Your structure may vary slightly; adjust as needed.

Key Files
src/components/Home/Home.jsx
Landing hero with heading, CTA button, and two preview images
Uses Tailwind for spacing, colors, and responsiveness
src/main.jsx
React Router setup and route definitions
src/index.css
Tailwind base, components, and utilities
Tailwind Setup (quick reference)
Ensure Tailwind is configured for Vite + React:

tailwind.config.js
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
Routing
Example routes (adjust to your app):

/ → Home
/about → About
/contact → Contact
/user or /:userId → User
/github → Github
Environment Variables
If any route fetches data (e.g., Github), create a .env file at project root:

.env
.env.local
Do not commit env files; they should be in .gitignore.

Deployment
Build output is generated in dist/. You can deploy to:

Vercel
Netlify
GitHub Pages
Any static host
For SPA routing on static hosts, ensure unknown routes fall back to index.html (e.g., Netlify _redirects rule: /* /index.html 200).

Screenshots (optional)
You can embed images used in Home.jsx:

https://www.etelligens.com/wp-content/uploads/2019/10/reactjs-development-inner-image.webp
https://invozone.com/static/19942c4c160415eba7900cb1ef27f4ee/history_of_reactjs_044b51ac71.webp
Features
⚛️ React component-driven development
🧭 Client-side routing with React Router
🎨 Tailwind CSS for rapid, responsive styles
⚡ Fast HMR and builds via Vite
♿ Accessible color contrast and alt text
📱 Mobile-first design
Scripts
Common package.json scripts:

dev: Start Vite dev server
build: Build for production
preview: Preview production build locally
lint/test: Add as needed
Contributing
Fork the repo and create a feature branch
Follow code style conventions and keep components focused
Open a pull request describing your changes
License
MIT License. See LICENSE for details.