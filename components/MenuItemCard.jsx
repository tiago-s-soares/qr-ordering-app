"use client";
import { useCart } from "@/hooks/useCart";

export default function MenuItemCard({ item }) {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 flex flex-col items-center transition hover:shadow-md">
      <img
        src={item.image || "/placeholder.png"}
        alt={item.name}
        className="h-24 w-full object-cover rounded-xl mb-2"
      />
      <div className="w-full text-center">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
        <p className="text-lg font-bold mt-1 text-primary">€{item.price.toFixed(2)}</p>
      </div>
      <button
        onClick={() => addItem(item)}
        className="mt-3 bg-accent text-dark w-full rounded-xl py-2 font-semibold hover:bg-[#f5a864]"
      >
        Add to Cart
      </button>
    </div>
  );
}