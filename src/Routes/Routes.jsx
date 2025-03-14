import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/Home/Shared/NewsDetails/NewsDetails";
import PrivateRoute from "./Private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
                loader: () => fetch('../../public/news.json')
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/newDetails/:_id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
            }
        ]
    },
]);

export default router;