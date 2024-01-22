import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailPaket from './pages/DetailPaket/DetailPaket.jsx';
import CariMobil from './pages/CariMobil/CariMobil.jsx';

const router = createBrowserRouter([
      { path: "/", element: <App /> },
      { path: "/carimobil", element: <CariMobil /> },
      { path: "/detailpaket/:name/:category/:price?", element: <DetailPaket /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
            <RouterProvider router={router} />
      </React.StrictMode>
);
