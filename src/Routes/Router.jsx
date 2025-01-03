import Home from '../Layouts/Home';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import CatagoryNews from '../Pages/CatagoryNews';
import Auth from '../Layouts/Auth';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NewsDetails from '../Pages/NewsDetails';
import PrivateRoutes from './PrivateRoutes';

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
      path: "/news/:id",
      element: (
      <PrivateRoutes>
        <NewsDetails></NewsDetails>
      </PrivateRoutes>),
      loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
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
          element: <Register></Register>
        }
      ]
    }
  ]);


export default Router;