import React, {
  StrictMode
} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />
        }
      ],
    }
  ]
);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
