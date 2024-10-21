import { Outlet } from "react-router-dom"
import AdminSidebar from "./AdminSidebar"


const AdminDashboard = () => {
    return (
        <div>
            <div>
                <div className=''>
                    <div className=''>
                        <AdminSidebar />
                    </div>
                    <div className="ml-0 md:ml-[80px]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard