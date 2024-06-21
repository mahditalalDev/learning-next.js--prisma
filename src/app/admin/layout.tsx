import AdminSidebar from "@/components/admin/AdminSidebar";
import React from "react"
interface AdminDashboardLayoutProps {
    children: React.ReactNode;
}

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
    return (
        <div className="overflow-height flex items-center justify-between overflow-hidden">
            <div className="overflow-height w-15 lg:w-1/5 bg-purple-600 text-white p-1 lg:p-5" >
                <AdminSidebar />
            </div>
            <div className="w-full overflow-height lg:w-4/5 overflow-y-scroll">
                {children}
            </div>
        </div>
    )
}

export default AdminDashboardLayout