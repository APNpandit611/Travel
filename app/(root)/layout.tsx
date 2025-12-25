import { DynamicBreadcrumbs } from "@/components/DynamicBreadCrumbs";
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
            <DynamicBreadcrumbs />
            <main className="min-h-screen bg-linear-to-br from-[#c33764] to-[#1d2671] backdrop-blur-xl shadow-inner text-slate-900">
                {children}
            </main>

            <Footer />
        </div>
    );
}
