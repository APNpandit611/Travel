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
            <main className="min-h-screen bg-[#020617] bg-[radial-gradient(circle_at_50%_0%,_rgba(30,58,138,0.3)_0%,_transparent_50%)] text-white">{children}</main>
            <Footer />
        </div>
    );
}
