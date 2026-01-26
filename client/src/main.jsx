import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './layout/MainLayout';
import { ClerkProvider } from '@clerk/clerk-react'
import Login from './routes/Login';
import Register from './routes/Register';


const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    children:[
      {path:'/login',element:<Login />},
      {path:'/register',element:<Register />}
    ]
  },
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
