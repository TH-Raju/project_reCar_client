import { createBrowserRouter } from "react-router-dom";
import CategorieDetail from "../CategorieDetail/CategorieDetail";
import AddProduct from "../components/dashboard/AddProduct";
import AllUser from "../components/dashboard/AllUser";
import MyOreders from "../components/dashboard/MyOreders";
import MyProduct from "../components/dashboard/MyProduct";
import Payment from "../components/dashboard/Payment";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Blog from "../components/Shared/Blog";
import ErrorDisplay from "../components/Shared/ErrorDisplay";
import ErrorPage from "../components/Shared/ErrorPage";
import Faq from "../components/Shared/Faq";
import Products from "../components/Shared/Products";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AdminRoute from "../Routes/AdminRoute";
import PrivateRoute from "../Routes/PrivateRoute";
import AddCategoriy from "../components/dashboard/AddCategoriy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/categorieDetail/:id",
        element: (
          <PrivateRoute>
            <CategorieDetail></CategorieDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://resale-handing-server-side-770erufms-th-raju.vercel.app/categoriy/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorDisplay></ErrorDisplay>,
    children: [
      {
        path: "/dashboard",
        element: <MyOreders></MyOreders>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/addcategoriy",
        element: <AddCategoriy />,
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProduct></MyProduct>,
        loader: () =>
          fetch(
            "https://resale-handing-server-side-770erufms-th-raju.vercel.app/product"
          ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://resale-handing-server-side-770erufms-th-raju.vercel.app/bookings/${params.id}`
          ),
      },
      {
        path: "/dashboard/alluser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
