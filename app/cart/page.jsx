"use client";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTab } from "@/hooks/useTab";

export default function CartPage() {
    const { items, removeItem, clear } = useCart();
    const { addOrder } = useTab();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    const handleCheckout = async () => {
        if (items.length === 0) return alert("Your cart is empty!");
        setLoading(true);

        try {
            // simulate sending to backend
            await new Promise((r) => setTimeout(r, 1000));

            // ✅ Move items from Cart to Tab
            addOrder(items);

            // ✅ Clear cart after ordering
            clear();

            router.push("/order-success");
        } catch (e) {
            console.error(e);
            alert("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 pb-24">
            <header className="sticky top-0 bg-white z-10 py-3 border-b border-gray-200 text-center">
                <h1 className="text-2xl font-bold text-primary">Your Cart 🛒</h1>
            </header>

            {items.length === 0 ? (
                <p className="text-center mt-10 text-gray-500">Your cart is empty.</p>
            ) : (
                <ul className="divide-y divide-gray-100 mt-4">
                    {items.map((item) => (
                        <li key={item.id} className="flex items-center justify-between py-3">
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="font-bold text-primary">€{(item.price * item.qty).toFixed(2)}</p>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-sm text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {items.length > 0 && (
                <div className="mt-6 p-4 bg-gray-50 rounded-xl shadow-sm">
                    <div className="flex justify-between text-lg font-semibold mb-4">
                        <span>Total</span>
                        <span>€{subtotal.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={handleCheckout}
                        disabled={loading}
                        className="bg-primary text-white w-full rounded-xl py-3 font-medium hover:bg-secondary transition disabled:opacity-50"
                    >
                        {loading ? "Processing..." : "Place Order"}
                    </button>
                </div>
            )}

            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-center">
                <button
                    onClick={() => router.push("/menu")}
                    className="text-primary font-medium hover:underline"
                >
                    ← Back to Menu
                </button>
            </footer>
        </div>
    );
}