function Login() {
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Iniciar Sesion</h2>

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
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Entrar</button>

        </div>
    )
}
export default Login