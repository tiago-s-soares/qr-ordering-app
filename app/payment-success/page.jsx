"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SuccessPage() {
    const router = useRouter();

    // Optional: Auto-redirect back to menu after a few seconds
    useEffect(() => {
        const timer = setTimeout(() => router.push("/"), 5000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
            {/* Success Icon */}
            <div className="bg-accent/30 w-24 h-24 rounded-full flex items-center justify-center mb-6">
                <span className="text-5xl">✅</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-dark mb-2">
                Payment Successful!
            </h1>

            {/* Message */}
            <p className="text-secondary mb-8">
                Your order has been paid and is being prepared.<br />
                Thank you for visiting <strong>Bar do Field 🍸</strong>!
            </p>

            {/* Button */}
            <button
                onClick={() => router.push("/menu")}
                className="bg-accent text-dark text-lg font-semibold px-10 py-4 rounded-full shadow hover:opacity-90 transition"
            >
                Back to Menu
            </button>

            {/* Small footer note */}
            <p className="text-sm text-gray-500 mt-8">
                Redirecting automatically in a few seconds...
            </p>
        </div>
    );
}
