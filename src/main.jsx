import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
/* import App from './App.jsx' */
/* import './index.css' */
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home'
import Error from './components/Error'
import ContactUs from './routes/ContactUs'
//import Hero from './components/Hero'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Error/>,
  /*   children:[
      {
        path:'/',
        element:<Hero/>
      },
    ] */
  },
  {
    path:'/quienes-somos',
    element:<ContactUs/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/*  <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
