import axios from "axios"
import { useEffect, useState } from "react"
import AdminSidebar from "./AdminSidebar"
import { useNavigate } from "react-router-dom"


const AdminWelcome = () => {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const res = await axios.get('https://raiyan-portfolio-be.vercel.app/api/v1/blog')
            // console.log(res.data.data);
            setBlogs(res.data.data)
        })()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        navigate('/admin-login');
    };

    return (

        <div className=''>
            <div className=''>
                <AdminSidebar />
            </div>
            <div className="ml-0 md:ml-[80px]">
                <button className="px-4 py-2 my-4 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out" onClick={handleLogout}>Logout</button>
                <div className="p-20">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {blogs?.map((blog) => (
                                <tr key={blog?._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{blog?.title}</td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                                        <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default AdminWelcome