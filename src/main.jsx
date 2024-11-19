import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Home from './Layouts/Home';
import Router from './Routes/Router';
import AuthProvider from './Provider/AuthProvider';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//     children: [
//       {
//         path: "/catagory/:id",
//         element: <h2>This is catalog.</h2>
//       }
//     ]
//   },
//   {
//     path: "/news",
//     element: <h2>This is News</h2>
//   },
//   {
//     path: "/login",
//     element: <h2>This is Login</h2>
//   }
// ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>,
)
