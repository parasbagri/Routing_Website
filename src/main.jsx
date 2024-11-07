import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout_Root'
import About from './components/About/About.component'
import Home from './components/Home/Home'

const Router = createBrowserRouter([
  {
    pathL: '/',
    element: <Layout/>,
    children:[
      { path: '', element: <Home/> },
      { path: '/about', element: <About/> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/> 
  </StrictMode>,
)
