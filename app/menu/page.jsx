"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import MenuItemCard from "@/components/MenuItemCard";
import axios from "axios";

export default function MenuPage() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { items } = useCart();
  const totalQuantity = items.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    async function loadMenu() {
      try {
        // Mock Data
        setMenu([
          { id: 1, name: "Caipirinha", description: "Classic Brazilian cocktail", price: 7.5, image: "/caipirinha.jpg" },
          { id: 2, name: "Mojito", description: "Mint, lime, and rum delight", price: 8.0, image: "/mojito.jpg" },
          { id: 3, name: "Cheese Burger", description: "Brazilian beef burger with fries", price: 12.5, image: "/burger.jpg" },
          { id: 4, name: "French Fries", description: "Crispy fries topped with cheese", price: 6.0, image: "/fries.jpg" },
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
      <header className="sticky top-0 bg-background z-10 py-3 border-b border-gray-200 flex items-center justify-between px-4">
        <div>
          <h1 className="text-2xl font-bold text-dark">Bar do Field 🍸</h1>
          <p className="text-sm text-secondary">Scan · Order · Enjoy</p>
        </div>

        <button
          onClick={() => router.push("/tab")}
          className="bg-accent text-dark px-4 py-2 rounded-full text-sm font-semibold shadow hover:opacity-90 transition"
        >
          View Tab
        </button>
      </header>

      <section className="grid grid-cols-2 gap-4 mt-4">
        {menu.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </section>

      <footer className="fixed bottom-0 left-0 right-0 bg-background border-t border-gray-200 p-4 flex justify-center">
        <button
          onClick={() => router.push("/cart")}
          className="relative bg-primary text-white px-6 py-3 rounded-full shadow-md w-full max-w-xs text-center font-medium hover:opacity-90 transition"
        >
          View Cart
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-dark text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </button>
      </footer>
    </div>
  );
}

