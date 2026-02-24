import { Link } from "react-router-dom";
import cafeInicio from "../assets/cafeInicio.jpg";

function Hero() {
    return (
        <section className="bg-[#F5E6D3] min-h-[80vh] flex items-center px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-5xl font-bold text-[#1C1C1C] mb-6 font-serif">Cafe Especial <br />
                    Hecho con el Mejor Cafe!!!
                    </h1>

                    <p className="text-lg text-[#1C1C1C]/70 mb-8">Usamos los mejores granos de CAFE y De las mejores FINCAS Productoras para 
                    un sabor excepcional.
                    </p>

                    <Link to="/productos" className="bg-[#6F4E37] text-white px-6 py-3 rounded-full hover:bg-[#55402c] transition">
                    Ver Productos
                    </Link>
                </div>
                <div>
                    <img src={cafeInicio} alt="Cafe Vip" className="rounded-2xl shadow-lg" />
                </div>
            </div>
                
        </section>
    )
}

export default Hero