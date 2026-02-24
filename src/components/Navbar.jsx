import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { session } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error al cerrar sesion:", error.message);
      return;
    }

    navigate("/login");
  };

  return (
    <nav className="bg-[#1c1c1c] text-[#f5E6D3] px-8 py-4 flex justify-between items-center shadow-md">
      <Link to="/">Home</Link>

      <div className="flex items-center space-x-6 text-sm uppercase tracking-wider">
        {!session ? (
          <>
            <Link to="/login" className="hover:text-[#6F4E37] transition">
              Login
            </Link>
            <Link to="/register" className="border border-[#F5E6D3] px-4 py-1 rounded-full hover:bg-[#F5E6D3] hover:text-[#1C1C1C] transition">Register</Link>
          </>
        ) : (
          <>
            <Link to="/productos" className="hover:text-[#6F4E37] transition">
              Productos
            </Link>
            <button
              onClick={handleLogout}
              className="border border-red-400 px-4 py-1 rounded-full hover:bg-red-500 hover:text-white transition">Cerrar Sesion</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
