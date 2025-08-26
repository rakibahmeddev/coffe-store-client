import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddCoffe from './Pages/AddCoffe';
import UpdateCoffe from './Pages/UpdateCoffe';
import Root from './Layout/Root';
import Home from './Pages/Home';
import Coffes from './components/Coffes';
import CoffeDetails from './Pages/CoffeDetails';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/coffe'),
      },
      {
        path: 'addCoffe',
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: 'updateCoffe/:id',
        element: <UpdateCoffe></UpdateCoffe>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffe/${params.id}`),
      },
      {
        path: 'coffeDetails/:id',
        element: <CoffeDetails></CoffeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffe/${params.id}`),
      },
      {
        path: 'signIn',
        element: <SignIn></SignIn>,
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
