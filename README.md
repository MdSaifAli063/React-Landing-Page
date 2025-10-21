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







