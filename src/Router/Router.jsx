import { createBrowserRouter } from "react-router-dom";
import CategorieDetail from "../CategorieDetail/CategorieDetail";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Blog from "../components/Shared/Blog";
import ErrorPage from "../components/Shared/ErrorPage";
import Main from "../layout/Main";
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
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])