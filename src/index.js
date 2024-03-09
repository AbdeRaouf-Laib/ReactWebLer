import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/home';
import JavaScript from './pages/javaScript';
import Css from './pages/css';
import Html from './pages/html';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    errorElement: <p>Sorry...!!!</p>
  },
  {
    path: "/html",
    element:<Html/>,
    errorElement: <p>Sorry...!!!</p>
  },
  {
    path: "/css",
    element:<Css/>,
    errorElement: <p>Sorry...!!!</p>
  },
  {
    path: "/javascript",
    element:<JavaScript/>,
    errorElement: <p>Sorry...!!!</p>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

 