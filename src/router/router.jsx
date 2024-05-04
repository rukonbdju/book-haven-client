import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import Authors from "../pages/Authors/Authors";
import Ebooks from "../pages/Ebooks/Ebooks";
import Blogs from "../pages/Blogs/Blogs";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/home',
        element: <Home></Home>
    },
    {
        path: '/books',
        element: <Books></Books>
    },
    {
        path: '/ebooks',
        element: <Ebooks></Ebooks>
    },
    {
        path: '/authors',
        element: <Authors></Authors>
    },
    {
        path: '/blogs',
        element: <Blogs></Blogs>
    },
    {
        path: '/auth/login',
        element: <Login></Login>
    },
    {
        path: '/auth/register',
        element: <Register></Register>
    }
])

export default router;