import { useState } from "react"
import { useNavigate }  from "react-router-dom"
import { supabase } from "../lib/supabaseClient"


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if (error) {
            setMessage(error.message)
        } else {
            navigate("/productos")
        }
    }

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Iniciar Sesion</h2>

            <input
                type="email"
                placeholder="Correo"
                className="w-full border p-2 mb-3 rounded"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                className="w-full border p-2 mb-3 rounded"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" >Entrar</button>
            <p className="text-red-500 mt-3">{message}</p>

        </div>
    )
}
export default Login