import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Children } from 'react'
//Páginas
import { Home } from './routes/Home'
import { New } from './routes/New'
const router = createBrowserRouter ([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/new',
        element:<New />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
