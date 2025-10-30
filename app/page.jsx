"use client";
import { useEffect, useState } from "react";
import MenuItemCard from "@/components/MenuItemCard";
import axios from "axios";

export default function MenuPage() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMenu() {
      try {
        // For now, mock data
        setMenu([
          { id: 1, name: "Caipirinha", description: "Classic Brazilian cocktail", price: 7.5, image: "/placeholder.png" },
          { id: 2, name: "Mojito", description: "Mint, lime, and rum delight", price: 8.0, image: "/placeholder.png" },
          { id: 3, name: "Picanha Burger", description: "Brazilian beef burger with fries", price: 12.5, image: "/placeholder.png" },
          { id: 4, name: "Cheese Fries", description: "Crispy fries topped with cheese", price: 6.0, image: "/placeholder.png" },
        ]);
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading menu...</p>;

  return (
    <div className="p-4 pb-24">
      <header className="sticky top-0 bg-white z-10 py-3 border-b border-gray-200 text-center">
        <h1 className="text-2xl font-bold text-primary">Bar da Lua 🍸</h1>
        <p className="text-sm text-gray-500">Scan · Order · Enjoy</p>
      </header>

      <section className="grid grid-cols-2 gap-4 mt-4">
        {menu.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </section>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-center">
        <a
          href="/cart"
          className="bg-primary text-white px-6 py-3 rounded-full shadow-md w-full max-w-xs text-center font-medium"
        >
          View Cart
        </a>
      </footer>
    </div>
  );
}