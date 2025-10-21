# ⚛️ React Landing Page using Routings
<p align="center">
  A modern, responsive landing page built with <b>React</b>, <b>Vite</b>, <b>React Router</b>, and <b>Tailwind CSS</b>.
  Features a clean blue/white theme, accessible UI components, and a mobile-first design 🌐
</p>

<p align="center">
  <!-- Badges -->
  <a href="https://react.dev" target="_blank">
    <img src="https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white" alt="React" />
  </a>
  <a href="https://vitejs.dev" target="_blank">
    <img src="https://img.shields.io/badge/Vite-4+-646CFF?logo=vite&logoColor=white" alt="Vite" />
  </a>
  <a href="https://reactrouter.com" target="_blank">
    <img src="https://img.shields.io/badge/React%20Router-v6-CA4245?logo=reactrouter&logoColor=white" alt="React Router" />
  </a>
  <a href="https://tailwindcss.com" target="_blank">
    <img src="https://img.shields.io/badge/TailwindCSS-3+-38B2AC?logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  </a>
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License" />
  </a>
</p>

<hr>


## 🌟 Preview
- 🏠 Hero Section with download CTA & SVG icon
- 🖼️ Responsive Images with perfect balance
- ✍️ Clean Typography and spacious layout
- 🔁 Client-side Routing with React Router

## 🖼️ Screenshots
![image](https://github.com/MdSaifAli063/React-Landing-Page/blob/4ae119b0ce4eeae7ed533b7d5c6780228e4ae351/Screenshot%202025-10-22%20011229_edited.png)

![image](https://github.com/MdSaifAli063/React-Landing-Page/blob/ab79531ccf9475fa82de76dece623a5918bd7b2e/Screenshot%202025-10-22%20011327_edited.png)

![image](https://github.com/MdSaifAli063/React-Landing-Page/blob/2a97cc3a662db39871326c73a5ec71e240527a32/Screenshot%202025-10-22%20011440_edited.png)
## 🧠 Tech Stack
| ⚙️ Tool                | 💡 Purpose                       |
| ---------------------- | -------------------------------- |
| ⚛️ **React 18**        | UI library for components        |
| ⚡ **Vite**             | Fast dev server & build tool     |
| 🧭 **React Router v6** | Client-side routing              |
| 🎨 **Tailwind CSS**    | Utility-first responsive styling |

## 🚀 Getting Started

 ### ✅ Prerequisites
Make sure you have:
- 🧩 Node.js 18+ (recommended)
- 📦 npm, pnpm, or yarn

### 📥 Install Dependencies
```bash
npm install
# or
pnpm install
# or
yarn
```
### 💻 Run in Development
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```
### 🏗️ Build for Production
```bash
npm run build
# or
pnpm build
# or
yarn build
```
### 🔍 Preview Production Build
```bash
npm run preview
# or
pnpm preview
# or
yarn preview
```
## 📁 Project Structure (Example)
```pgsql
React-router/
├── src/
│   ├── components/
│   │   ├── Home/Home.jsx
│   │   ├── About/About.jsx
│   │   ├── Contact/Contact.jsx
│   │   ├── User/User.jsx
│   │   └── Github/Github.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```
> 💡 Your structure may vary slightly — adjust as needed.

## 🗝️ Key Files
src/components/Home/Home.jsx

🏠 Landing hero with heading, CTA, and preview images<br>
🎨 Styled using Tailwind for responsive spacing and colors

src/main.jsx

🧭 Contains React Router setup and route definitions

src/index.css

🎨 Includes Tailwind’s base, components, and utilities

## 🪶 Tailwind Setup (Quick Reference)

tailwind.config.js
```js
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
```
index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🧭 Routing
| Path                  | Description    |
| --------------------- | -------------- |
| `/`                   | Home           |
| `/about`              | About          |
| `/contact`            | Contact        |
| `/user` or `/:userId` | User           |
| `/github`             | GitHub Section |


## 🔐 Environment Variables
If your routes fetch data (e.g., GitHub API), create a .env file:
```bash
.env
.env.local
```
> 🚫 Don’t commit .env files — add them to .gitignore


## 🌍 Deployment

After building, the output is in dist/

You can deploy easily to:

- ▲ Vercel
- 🌐 Netlify
- 🐙 GitHub Pages
- ☁️ Any static host

> ⚠️ For SPA routing on static hosts, make sure unknown routes fallback to index.html
Example (Netlify _redirects):

## ✨ Features

- ⚛️ Component-driven architecture
- 🧭 Seamless routing with React Router
- 🎨 Tailwind CSS for instant design control
- ⚡ Fast HMR & optimized builds (Vite)
- ♿ Accessibility-first design
- 📱 Mobile-first layout

## 🧩 Scripts
| Command             | Description              |
| ------------------- | ------------------------ |
| `npm run dev`       | Start dev server         |
| `npm run build`     | Build for production     |
| `npm run preview`   | Preview production build |
| `npm run lint/test` | Optional quality checks  |

## 🤝 Contributing

- 🍴 Fork this repo
- 🌿 Create a new feature branch
- 🧱 Follow consistent code style
- 🔁 Open a pull request with details

## 📜 License
🪪 Licensed under the MIT License — see LICENSE for details.
