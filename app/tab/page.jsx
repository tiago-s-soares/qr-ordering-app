"use client";
import { useTab } from "@/hooks/useTab";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TabPage() {
    const { items, clear } = useTab();       // unpaid tab items
    const { clear: clearCart } = useCart();  // cart reset if needed
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

    const handlePayment = async () => {
        if (items.length === 0) return alert("Your tab is empty!");
        setLoading(true);

        try {
            // Simulate payment process
            await new Promise((r) => setTimeout(r, 1000));

            // ✅ Clear both stores
            clear();
            clearCart();

            // ✅ Redirect to success page
            router.push("/payment-success");
        } catch (err) {
            console.error(err);
            alert("Payment failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            {/* Header */}
            <header className="sticky top-0 bg-background z-10 py-3 border-b border-gray-200 text-center">
                <h1 className="text-2xl font-bold text-dark">My Tab 🍻</h1>
            </header>

            {/* Empty state */}
            {items.length === 0 ? (
                <>
                    <p className="text-center text-secondary mt-10">
                        You have no open orders.
                    </p>
                    <div className="mt-6 p-4 bg-gray-50 rounded-xl shadow-sm">
                        <button
                            onClick={() => router.push("/menu")}
                            className="bg-accent text-dark w-full rounded-xl py-3 font-medium hover:opacity-90 transition mt-4"
                        >
                            ← Back to Menu
                        </button>
                    </div>
                </>
            ) : (
                <>
                    {/* Tab items */}
                    <ul className="divide-y divide-gray-100 mt-4">
                        {items.map((item, idx) => (
                            <li key={idx} className="flex justify-between py-3">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-secondary">Qty: {item.qty}</p>
                                </div>
                                <p className="font-semibold text-primary">
                                    €{(item.price * item.qty).toFixed(2)}
                                </p>
                            </li>
                        ))}
                    </ul>

                    {/* Summary + Actions */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-xl shadow-sm">
                        <div className="flex justify-between text-lg font-semibold mb-4">
                            <span>Total</span>
                            <span>€{total.toFixed(2)}</span>
                        </div>

                        {/* Pay Now */}
                        <button
                            onClick={handlePayment}
                            disabled={loading}
                            className="bg-primary text-white w-full rounded-xl py-3 font-medium hover:bg-secondary transition disabled:opacity-60"
                        >
                            {loading ? "Processing Payment..." : "Pay Now"}
                        </button>

                        {/* Back to Menu */}
                        <button
                            onClick={() => router.push("/menu")}
                            className="bg-accent text-dark w-full rounded-xl py-3 font-medium hover:opacity-90 transition mt-4"
                        >
                            ← Back to Menu
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
