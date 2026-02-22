import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
            <h1 className="font-bold text-lg">Coffe Vip</h1>

            <div>
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/login" className="hover:text-gray-300">Login</Link>
                <Link to="/register" className="hover:text-gray-300">Register</Link>
            </div>
        </nav>
    )
}

export default Navbar