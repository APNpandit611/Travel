import React from "react";
import Image from "next/image";
import {
    Mountain,
    Users,
    ShieldCheck,
    Globe,
    Leaf,
    Award,
    ArrowRight,
} from "lucide-react";

const About = () => {
    return (
        <main className="text-white">
            {/* ---------------- HERO ---------------- */}
            <section className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/about-image.jpg"
                    alt="Himalayan Culture"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                        Our <span className="text-sky-400">Story</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        Founded in the heart of the Himalayas, Trek Nepal exists
                        to connect the world with Nepal’s raw beauty, culture,
                        and high-altitude adventures — responsibly and
                        authentically.
                    </p>
                </div>
            </section>

            {/* ---------------- MISSION / VISION ---------------- */}
            <section className="relative z-10 -mt-24 px-4 max-w-7xl mx-auto ">
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            icon: <Mountain />,
                            title: "Our Mission",
                            desc: "To deliver sustainable, life-changing trekking experiences while preserving nature and empowering Himalayan communities.",
                            color: "bg-sky-600",
                        },
                        {
                            icon: <Globe />,
                            title: "Our Vision",
                            desc: "To become the most trusted Himalayan adventure company, known for integrity, safety, and positive impact.",
                            color: "bg-indigo-600",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/10 backdrop-blur-xl border border-white/15 p-10 rounded-3xl shadow-2xl"
                        >
                            <div
                                className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6`}
                            >
                                {item.icon}
                            </div>
                            <h2 className="text-2xl font-bold mb-4">
                                {item.title}
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- EXPERIENCE STATS ---------------- */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                    {[
                        { value: "17+", label: "Years Experience" },
                        { value: "10k+", label: "Happy Trekkers" },
                        { value: "150+", label: "Expeditions Led" },
                        { value: "100%", label: "Local Team" },
                    ].map((stat, i) => (
                        <div key={i}>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-sky-400">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- WHY CHOOSE US ---------------- */}
            <section className=" px-4 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    Why Trek With Us
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        {
                            icon: <Users />,
                            title: "Expert Local Guides",
                            desc: "Born and raised in the mountains — unmatched terrain knowledge.",
                        },
                        {
                            icon: <ShieldCheck />,
                            title: "Safety & Ethics",
                            desc: "Strict safety standards, premium equipment, responsible tourism.",
                        },
                        {
                            icon: <Award />,
                            title: "Certified & Trusted",
                            desc: "Government approved & active members of TAAN, NMA & NTB.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition backdrop-blur-md"
                        >
                            <div className="mb-6 text-sky-400">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- SUSTAINABILITY ---------------- */}
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
                    <div className="flex items-center gap-4 mb-6">
                        <Leaf className="text-emerald-400 w-8 h-8" />
                        <h2 className="text-3xl font-bold">
                            Responsible Travel
                        </h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed max-w-4xl">
                        We actively support environmental conservation, fair
                        porter treatment, waste-free trekking practices, and
                        village tourism initiatives. Every trek contributes to
                        local livelihoods and preservation of Himalayan
                        heritage.
                    </p>
                </div>
            </section>

            {/* ---------------- CTA ---------------- */}
            <section className="py-24 px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                    Ready to Explore the Himalayas?
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-10">
                    Join thousands of travelers who trusted Trek Nepal to guide
                    them safely into the world’s greatest mountains.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <button className="px-10 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-black font-bold flex items-center gap-2">
                        View Treks <ArrowRight />
                    </button>
                    <button className="px-10 py-4 rounded-2xl border border-white/20 hover:bg-white/10">
                        Contact Us
                    </button>
                </div>
            </section>
        </main>
    );
};

export default About;
