import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div lang="en">
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-gray-100/10 to-gray-200/20 backdrop-blur-xl shadow-inner text-slate-900">
                {children}
            </main>

            <Footer />
        </div>
    );
}
