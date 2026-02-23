import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {

    const { session, loading } = useAuth()

    if (loading) return <p>Cargando...</p>

    if (!session) {
        return <Navigate to="/login" />
    }
    return children
}

export default ProtectedRoute