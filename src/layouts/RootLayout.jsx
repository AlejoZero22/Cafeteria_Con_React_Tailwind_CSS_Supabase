import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="p-6">
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout