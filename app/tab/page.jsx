"use client";
import { useTab } from "@/hooks/useTab";
import { useRouter } from "next/navigation";

export default function TabPage() {
    const { items } = useTab();
    const unpaid = items || [];
    const router = useRouter();

    const total = unpaid.reduce((sum, i) => sum + i.price * i.qty, 0);

    return (
        <div className="p-4">
            <header className="sticky top-0 bg-background z-10 py-3 border-b border-gray-200 text-center">
                <h1 className="text-2xl font-bold text-dark">My Tab 🍻</h1>
            </header>

            {unpaid.length === 0 ? (
                <p className="text-center text-secondary mt-10">
                    You have no open orders.
                </p>
            ) : (
                <ul className="divide-y divide-gray-100 mt-4">
                    {unpaid.map((item, idx) => (
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
            )}

            {unpaid.length > 0 && (
                <div className="mt-6 p-4 bg-gray-50 rounded-xl shadow-sm">
                    <div className="flex justify-between text-lg font-semibold mb-4">
                        <span>Total</span>
                        <span>€{total.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={() => alert('Payment flow coming soon!')}
                        className="bg-primary text-white w-full rounded-xl py-3 font-medium hover:bg-secondary transition"
                    >
                        Pay Now
                    </button>
                    <div></div>
                    <button
                        onClick={() => router.push("/menu")}
                        className="mt-3 bg-accent text-dark w-full rounded-xl py-3 font-medium hover:bg-secondary"
                    >
                        Back to Menu
                    </button>
                </div>
            )}
        </div>
    );
}