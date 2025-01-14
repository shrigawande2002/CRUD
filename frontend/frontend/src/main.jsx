import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Show from './pages/Show.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  }, 
  {
    path:"/show",
    element:<Show/>
  },
  {
    path:"/insert",
    element:<App/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
