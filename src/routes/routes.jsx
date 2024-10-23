import { createBrowserRouter } from "react-router-dom";
import Custom404 from "../components/errorPage/Custom404";
import HomeLayout from "../components/layout/home/HomeLayout";
import AdminDashboard from "../components/layout/dashboard/AdminDashboard";
import AdminWelcome from "../components/layout/dashboard/AdminWelcome";
import AdminLogin from "../components/layout/dashboard/AdminLogin";
import CreateBlog from "../components/createBlog/CreateBlog";
import BlogDetails from "../components/blog/BlogDetails";
import ProtectedRoute from "../utils/ProtectedRoute";



const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
    },
    {
        path: "/blogs/:id",
        element: <BlogDetails />,
    },
    {
        path: "/admin-login",
        element: <AdminLogin />,
    },
    {
        path: "admin-dashboard",
        element: <ProtectedRoute>
            <AdminDashboard />
        </ProtectedRoute>,
        children: [
            {
                path: "/admin-dashboard",
                element: <AdminWelcome />,
            },
            {
                path: "create-blog",
                element: <CreateBlog />,
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