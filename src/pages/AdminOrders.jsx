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

  const deleteOrder = async (orderId) => {
    const { error } = await supabase.from("orders").delete().eq("id", orderId);
    if (!error) {
      fetchOrders();
    } else { console.log(error) }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Panel de Pedidos</h1>

      {orders.map((order) => (
        <div key={order.id} className={`p-4 rounded transition ${order.status === "lista" ? "bg-green-700" : "bg-green-800"}`}>
          <div>
            <p><strong>Producto:</strong> {order.product_name}</p>
            <p><strong>Tipo:</strong> {order.type}</p>
            <p><strong>Estado:</strong> {order.status}</p>
          </div>

          {order.status === "preparando" && (
            <button onClick={() =>markAsReady(order.id)} className="bg-green-500 text-white px-4 py-2 rounded">Marcar Como Listo</button>
          )}
          {order.status === "lista" && (
            <button onClick={() => deleteOrder(order.id)} className="bg-red-600 text-white px-3 py-1 rounded mt-2 hover:bg-red-700">Eliminar Pedido</button>
          )}

        </div>
      ))}
    </div>
  )
}
