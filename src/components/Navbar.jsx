import { Link } from "react-router-dom";

function Navbar() {

    const { session } = useAuth()
    const handleLogout = async() => {
        await supabase.auth.signOut()
    }
    return (
        <nav className="flex justify-between p-4 bg-gray-200">
            <Link to="/">Home</Link>
            <h1 className="font-bold text-lg">Coffe Vip</h1>

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