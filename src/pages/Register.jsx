import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

function Register() {
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
            <h2 className="text-2x1 font-bold mb-4">Registrarse</h2>

            <input
                type="text"
                placeholder="Nombre"
                className="w-full border p-2 mb-3 rounded"
            />
            <input
                type="email"
                placeholder="Correo"
                className="w-full border p-2 mb-3 rounded"
            />
            <input
                type="password"
                placeholder="Contraseña"
                className="w-full border p-2 mb-3 rounded"
            />
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Crear Cuenta</button>
        </div>
    )
}

export default Register