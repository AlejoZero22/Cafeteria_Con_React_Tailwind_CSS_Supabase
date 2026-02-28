import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import { useAuth } from "../context/AuthContext"

import CafeExpress from "../assets/CafeExpress.jpg"
import CafeCapussi from "../assets/CafeCapussi.jpg"
import CafeFiltrado from "../assets/CafeFiltrado.jpg"

function Productos() {
    const { session } = useAuth()

    const [showAddressForm, setShowAddressForm] = useState(false)
    const [selectProduct, setSelectProduct] = useState(null)
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    const productos = [
        {
            id: 1,
            nombre: "Cafe Expreso",
            precio: 3500,
            descripcion: "Cafe intenso con notas de Chocolate Oscuro perfecto para los amantes del cafe fuerte.",
            imagen: CafeExpress
        },
        {
            id: 2,
            nombre: "Cafe Capuccino",
            precio: 5000,
            descripcion: "Cafe suave con leche espumosa y un toque de canela, ideal para disfrutar en cualquier momento del dia.",
            imagen: CafeCapussi
        },
        {
            id: 3,
            nombre: "Cafe Filtrado",
            precio: 3000,
            descripcion: "Cafe para despertar tus sentidos y del sueño que tengas con sabores mas frutales y aromaticos, perfecto para los amantes del cafe de sabor y fragancia",
            imagen: CafeFiltrado
        }
    ]

    const createOrder = async (product, type, address = null, phone = null) => {
        if (!session) {
            alert("Ingresa con tu cuenta para poder realizar un pedido")
            return
        }

        const { error } = await supabase.from("orders").insert([
            { 
                user_id: session.user.id,
                product_name: product.nombre,
                type,
                address,
                phone,
                status: "preparando"
            },
        ])

        if (!error) {
            alert("pedido Realizado con exito")
            setShowAddressForm(false)
            setAddress("")
            setPhone("")
        } else {
            alert(`Error al hacer su pedido: ${error?.message}`)
            console.log("order error", error)
        }
    }

    const handleOrder = (product, type) => {
        if (type === "domicilio") {
            setSelectProduct(product)
            setShowAddressForm(true)
        } else {
            createOrder(product, "tienda")
        }
    }

    return (
        <section className="bg-[#1C1C1C] min-h-screen text-[#F5E6D3] px-8 py-16">
            <h2 className="text-4xl font-serif mb-12 text-center">Nuestros Cafes</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {productos.map((producto) => (
                    <div key={producto.id} className="group relative bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
                        <img src={producto.imagen} alt={producto.nombre} className="h-64 w-full object-cover" />
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex-col justify-center items-center text-center px-4 pointer-events-none">
                            <p className="text-sm mb-3">{producto.descripcion}</p>
                            <span className="text-lg font-semibold text-[#6F4E37]">{producto.precio}</span>
                        </div>

                        <div className="mt-4 flex flex-col gap-2">
                            <button onClick={() => handleOrder(producto, "tienda")} className="bg-[#6F4E37] text-white py-2 rounded hover:bg-[#8B5E3C]">Tomar en Tienda</button>
                            <button onClick={() => handleOrder(producto, "domicilio")} className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Domicilio</button>
                        </div>
                    </div>
                ))}
            </div>

            {showAddressForm && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
                    <div className="bg-[#2A2A2A] p-6 rounded-xl w-96">
                        <h3 className="text-xl mb-4">Datos para Domicilio</h3>

                        <input type="text"
                               placeholder="Dirección"
                               value={address}
                               onChange={(e) => setAddress(e.target.value)}
                               className="w-full mb-3 p-2 rounded text-black"
                        />
                        
                        <input type="text"
                               placeholder="Teléfono"
                               value={phone}
                               onChange={(e) => setPhone(e.target.value)}
                               className="w-full mb-3 p-2 rounded text-black"
                        />
                        <button onClick={() => createOrder(selectProduct, "domicilio", address, phone)} className="bg-green-600 w-full py-2 rounded text-white hover:bg-green-700">Confirmar Pedido</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Productos
