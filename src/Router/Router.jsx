import { createBrowserRouter } from "react-router-dom";
import CategorieDetail from "../CategorieDetail/CategorieDetail";
import AddProduct from "../components/dashboard/AddProduct";
import AllUser from "../components/dashboard/AllUser";
import MyOreders from "../components/dashboard/MyOreders";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Blog from "../components/Shared/Blog";
import ErrorPage from "../components/Shared/ErrorPage";
import Products from "../components/Shared/Products";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AdminRoute from "../Routes/AdminRoute";
import PrivateRoute from "../Routes/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/categorieDetail/:id',
                element: <PrivateRoute><CategorieDetail></CategorieDetail></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categoriy/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOreders></MyOreders>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/alluser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])