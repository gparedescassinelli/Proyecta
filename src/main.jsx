import React from 'react'
import ReactDOM from "react-dom/client";
import  { Suspense } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Cargando from "./components/Cargando";
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';

/* const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs")); */

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Cargando />}>
        <Home />
      </Suspense>
    ),

    errorElement: <Error />,
  },
  {
    path: "/quienes-somos",
    element: (
      <Suspense fallback={<Cargando />}>
        <ContactUs />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
  



