import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout_Root'
import About from './components/About/About.component'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact.component'
import Params from './components/Params/ParamsFromURL'
import Github, {gitHubInfoLoader} from './components/GitHub/Github.component'

// const Router = createBrowserRouter([
//   {
//     pathL: '/',
//     element: <Layout/>,
//     children:[
//       { path: '', element: <Home/> },
//       { path: '/about', element: <About/> },
//       { path: '/contact', element: <Contact/> },
//     ]
//   }
// ])

const Router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='contact/:userId' element={<Params/>} />
          {/* <Route path='github' element={<Github/>} /> */}
          <Route 
          loader={gitHubInfoLoader}
          path='github' 
          element={<Github/>} />
         </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/> 
  </StrictMode>,
)
