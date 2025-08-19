import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddCoffe from './Pages/AddCoffe';
import UpdateCoffe from './Pages/UpdateCoffe';
import Root from './Layout/Root';
import Home from './Pages/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'addCoffe',
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: 'updateCoffe',
        element: <UpdateCoffe></UpdateCoffe>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
