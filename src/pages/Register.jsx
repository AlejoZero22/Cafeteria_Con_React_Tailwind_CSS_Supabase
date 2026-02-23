import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const handleRegister = async () => {
        if (!email.includes("@")) {
            setMessage("El correo no tiene @ y no es valido... Ni para eso sirves")
            return
        }
    

        const { error } = await supabase.auth.signUp({
        email,password,
        })
        if (error) {
            setMessage(error.message)
        } else {
            setMessage("Cuenta creada Exitosamente... Almenos haces algo bien")
        }
    }
   
    return (
    <div>
        <input type="email" 
        placeholder="Correo"
        onChange={(e) => setEmail(e.target.value)}/>

        <input type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}/>

        <button onClick={handleRegister}>Crear Cuenta</button>
        <p>{message}</p>
    </div>
    )
}

export default Register