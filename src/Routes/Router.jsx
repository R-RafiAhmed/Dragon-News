import Home from '../Layouts/Home';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import CatagoryNews from '../Pages/CatagoryNews';
import Auth from '../Layouts/Auth';
import Login from '../Pages/Login';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
            path: "",
            element: <Navigate to={"/catagory/01"}></Navigate>
        },
        {
            path: "catagory/:id",
            element: <CatagoryNews></CatagoryNews>,
            loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
      ]
    },
    {
      path: "/news",
      element: <h2>This is News</h2>
    },
    {
      path: "/auth",
      element: <Auth></Auth>,
      children: [
        {
          path: "/auth/login",
          element: <Login></Login>
        },
        {
          path: "/auth/register",
          element: <h2>Register</h2>
        }
      ]
    }
  ]);


export default Router;