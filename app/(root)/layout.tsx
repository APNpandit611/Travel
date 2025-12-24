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
            <main className="min-h-screen bg-[linear-gradient(to_right_bottom,#4b6cb7,#182848,#2c3e50,#1a2a47,#16283c,#1f3b57,#1b2f4d,#162940,#1a324e,#1c3350,#1f3654,#223858)] text-white">{children}</main>
            <Footer />
        </div>
    );
}
