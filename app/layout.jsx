import "./../styles/globals.css";

export const metadata = {
    title: "QR Ordering System",
    description: "Scan · Order · Pay · Enjoy",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-background text-text flex flex-col items-center">
                <main className="w-full max-w-md bg-background shadow-md min-h-screen border-t-4 border-accent relative">
                    {children}
                </main>
            </body>
        </html>
    );
}