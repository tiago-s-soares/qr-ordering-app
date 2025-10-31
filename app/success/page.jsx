"use client";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-6">
            <h1 className="text-3xl font-bold text-primary mb-4">✅ Order Placed!</h1>
            <p className="text-gray-600 mb-6">
                Thank you for your order. The bar has received it and is preparing your drinks!
            </p>
            <button
                onClick={() => router.push("/menu")}
                className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90"
            >
                Back to Menu
            </button>
        </div>
    );
}