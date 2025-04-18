import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/home.jsx';
import Html from './pages/html.jsx';
import Css from './pages/css.jsx';
import Js from './pages/javascript.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404</div>,
  },


  {
    path: "/html",
    element: <Html />,
  
  },
  {
    path: "/css",
    element: <Css />,
  
  },
  {
    path: "/javascript",
    element: <Js />,
  
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />  </StrictMode>,
)
