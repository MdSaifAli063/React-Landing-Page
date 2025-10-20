import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import './index.css'
  // import App from './App.jsx' // If App is your layout, you can use it instead of Layout

  import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'

  // Make sure these components exist and paths are correct
  import Layout from './layout.jsx'
  import Home from './components/Home/Home.jsx'
  import About from './components/About/About.jsx'
  import User from './components/User/User.jsx'
  import Contact from './components/Contact/Contact.jsx'
  import Github, {githubInfoLoader}  from './components/Github/Github.jsx'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {/* Use index route for the default child */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route  path="user" element={<User />} />
        <Route path=":userId" element={<User />} />
        <Route 
        loader ={githubInfoLoader}
        path="github" element={<Github />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    )
  )

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )