import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/home/index.jsx'
import About from './pages/about/index.jsx'
import Portofolio from './pages/portofolio/index.jsx'
import Contact from './pages/contact/index.jsx'

const routerComponent = createBrowserRouter([
  {
    element: <App/>,
    children:
    [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/portofolio',
        element:<Portofolio/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ routerComponent }/>
  </React.StrictMode>,
)
