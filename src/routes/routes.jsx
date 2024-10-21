import { createBrowserRouter } from "react-router-dom";
import Custom404 from "../components/errorPage/Custom404";
import HomeLayout from "../components/layout/home/HomeLayout";
import AdminDashboard from "../components/layout/dashboard/AdminDashboard";
import AdminWelcome from "../components/layout/dashboard/AdminWelcome";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
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
            //     path: "facilities-table",
            //     element: <FacilitiesTable />,
            // },
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