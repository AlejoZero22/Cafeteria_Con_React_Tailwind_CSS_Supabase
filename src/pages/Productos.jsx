import CafeExpress from "../assets/CafeExpress.jpg"
import CafeCapussi from "../assets/CafeCapussi.jpg"
import CafeFiltrado from "../assets/CafeFiltrado.jpg"

function Productos() {
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

    return (
        <section className="bg-[#1C1C1C] min-h-screen text-[#F5E6D3] px-8 py-16">
            <h2 className="text-4xl font-serif mb-12 text-center">Nuestros Cafes</h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {productos.map((producto) => (
                    <div key={producto.id} className="group relative bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
                        <img src={producto.imagen} alt={producto.nombre} className="h-64 w-full object-cover" />
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex-col justify-center items-center text-center px-4">
                            <p className="text-sm mb-3">{producto.descripcion}</p>
                            <span className="text-lg font-semibold text-[#6F4E37]">{producto.precio}</span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{producto.nombre}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Productos
