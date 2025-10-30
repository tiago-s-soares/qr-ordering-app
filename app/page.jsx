"use client";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-text px-6">
            {/* Logo or app name */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-dark mb-3 tracking-tight">
                    Bar do Field 🍸
                </h1>
                <p className="text-lg text-secondary">
                    Scan · Order · Relax
                </p>
            </div>

            {/* Illustration (optional placeholder) */}
            <div className="mb-12">
                <div className="w-56 h-56 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-5xl font-bold">QR</span>
                </div>
            </div>

            {/* Button */}
            <button
                onClick={() => router.push("/menu")}
                className="bg-accent text-dark text-lg font-semibold px-10 py-4 rounded-full shadow hover:opacity-90 transition"
            >
                Start Ordering
            </button>

            {/* Footer */}
            <footer className="absolute bottom-6 text-center text-sm text-secondary">
                Powered by QR Ordering System © {new Date().getFullYear()}
            </footer>
        </div>
    );
}
