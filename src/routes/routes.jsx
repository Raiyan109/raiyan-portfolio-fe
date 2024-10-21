import { createBrowserRouter } from "react-router-dom";
import Custom404 from "../components/errorPage/Custom404";
import HomeLayout from "../components/layout/home/HomeLayout";
import AdminDashboard from "../components/layout/dashboard/AdminDashboard";
import AdminWelcome from "../components/layout/dashboard/AdminWelcome";
import AdminLogin from "../components/layout/dashboard/AdminLogin";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
    },
    {
        path: "/admin-login",
        element: <AdminLogin />,
    },
    {
        path: "admin-dashboard",
        element: <AdminDashboard />,
        children: [
            {
                path: "/admin-dashboard",
                element: <AdminWelcome />,
            },
            // {
            //     path: "create-facility",
            //     element: <CreateFacility />,
            // },
            // {
            //     path: "all-bookings",
            //     element: <AllBookings />,
            // },
            // {
            //     path: "make-admin",
            //     element: <MakeAdmin />,
            // },
        ]
    },
    {
        path: "*",
        element: <Custom404 />,
    },
]);

export default routes;