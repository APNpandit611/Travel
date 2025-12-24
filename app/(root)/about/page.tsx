import React from "react";
import Image from "next/image";
import {
    Users,
    ShieldCheck,
    Globe,
    Leaf,
    Award,
    ArrowRight,
    Target,
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
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-slate-500/30" />

                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                        Our{" "}
                        <span className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                            Story
                        </span>
                    </h1>
                    <p className="text-white md:text-xl leading-relaxed">
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
                            icon: <Target size={24} />,
                            title: "Our Mission",
                            desc: "To deliver sustainable, life-changing trekking experiences while preserving nature and empowering Himalayan communities.",
                            color: "bg-sky-600",
                        },
                        {
                            icon: <Globe size={24} />,
                            title: "Our Vision",
                            desc: "To become the most trusted Himalayan adventure company, known for integrity, safety, and positive impact.",
                            color: "bg-indigo-500",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="
      group
      relative
      bg-white
      backdrop-blur-xl
      border border-slate-200/60
      p-10
      rounded-3xl
      shadow-xl
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-2xl
    "
                        >
                            {/* Icon */}
                            <div
                                className={`
        w-14 h-14
        ${item.color}
        rounded-2xl
        flex items-center justify-center
        mb-6
        shadow-md
        
      `}
                            >
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                                {item.title}
                            </h2>

                            {/* Description */}
                            <p className="text-slate-600 leading-relaxed text-base">
                                {item.desc}
                            </p>

                            {/* Subtle glow on hover */}
                            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5 group-hover:ring-black/10 transition" />
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
                            <p className="text-gray-500 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- WHY CHOOSE US ---------------- */}
            <section className=" px-4 max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-extrabold text-gray-700 text-center mb-16">
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
                            className="p-8 rounded-3xl bg-white/5 hover:bg-white/10 transition backdrop-blur-md group relative bg-linear-to-br from-white/80 to-slate-50/80 border border-slate-200/60 shadow-xl duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <div className="mb-6 text-sky-400">{item.icon}</div>
                            <h3 className="text-xl text-gray-950/80 font-bold mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- SUSTAINABILITY ---------------- */}
            <section className="pt-24 px-4 max-w-7xl mx-auto">
                <div className="transition backdrop-blur-md group relative bg-linear-to-br from-white/80 to-slate-50/80 border border-slate-200/60 shadow-xl duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-3xl p-12">
                    <div className="flex items-center gap-4 mb-6">
                        <Leaf className="text-emerald-400 w-8 h-8" />
                        <h2 className="text-3xl text-gray-950/80 font-bold">
                            Responsible Travel
                        </h2>
                    </div>
                    <p className="text-gray-500 leading-relaxed max-w-4xl">
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
                <h2 className="text-3xl text-gray-950/80 md:text-5xl font-extrabold mb-6">
                    Ready to Explore the Himalayas?
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-10">
                    Join thousands of travelers who trusted Trek Nepal to guide
                    them safely into the world’s greatest mountains.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <button className="px-10 py-4 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-bold flex items-center gap-2">
                        View Treks <ArrowRight />
                    </button>
                    <button className="px-10 py-4 text- rounded-2xl bg-slate-700/70 border border-slate-500/50 hover:bg-slate-600/70 text-white font-semibold">
                        Contact Us
                    </button>
                </div>
            </section>
        </main>
    );
};

export default About;
