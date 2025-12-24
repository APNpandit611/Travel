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
            <main className="min-h-screen bg-[linear-gradient(to_right_bottom,#6faadf,#5fa1d4,#4f98c9,#3f8fbe,#5f7f3a,#6f8f45,#7f9f50,#8faf5b,#9fbf66,#8fb85f,#7fb158,#6fa951)]


 text-white">{children}</main>
            <Footer />
        </div>
    );
}
