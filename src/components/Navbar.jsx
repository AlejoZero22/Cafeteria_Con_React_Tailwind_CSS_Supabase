import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { session } = useAuth()
    const handleLogout = async() => {
        await supabase.auth.signOut()
    }
    return (
        <nav className="flex justify-between p-4 bg-gray-200">
            <Link to="/">Home</Link>

            <div>
                {!session ? (
                    <>
                        <Link to="/login" className="mr-4">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                ) : (
                    <>
                        <Link to="/Productos" className="mr-4">Productos</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar