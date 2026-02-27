import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabaseClient";

export default function AdminOrders() {
  const { role } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const {data, error} = await supabase.from("orders").select("*").order("created_at", { ascending: false });
    if (!error) {
      setOrders(data);
    }
    setLoading(false);
  }

  const markAsReady = async (orderId) => {
    await supabase.from("orders").update({ status: "lista" }).eq("id", orderId);
    fetchOrders();
  }

  if (role !== "admin") {
    return <p>No tienes permiso para ver esta pagina</p>
  }

  if (loading) return <p>Cargando Pedidos...</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Panel de Pedidos</h1>

      {orders.map((order) => (
        <div key={order.id} className="border p-4 rounded mb-3 flex justify-between items-center">
          <div>
            <p><strong>Producto:</strong> {order.product_name}</p>
            <p><strong>Tipo:</strong> {order.type}</p>
            <p><strong>Estado:</strong> {order.status}</p>
          </div>

          {order.status === "preparando" && (
            <button onClick={() =>markAsReady(order.id)} className="bg-green-500 text-white px-4 py-2 rounded">Marcar Como Listo</button>
          )}

        </div>
      ))}
    </div>
  )
}
