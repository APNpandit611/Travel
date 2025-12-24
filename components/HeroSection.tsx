import Image from "next/image";
import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-image.jpg" // replace with your Nepal hero image
                    alt="Himalayas"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg">
                    Explore the Magic of Nepal
                </h1>
                <p className="text-white text-lg md:text-2xl lg:text-3xl mb-8 max-w-2xl drop-shadow-md">
                    Trek the Himalayas, experience rich culture, and create unforgettable memories.
                </p>

                <div className="flex gap-4 flex-wrap justify-center">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-lg">
                        Find Your Adventure
                    </button>
                    <button className="bg-white text-blue-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-medium shadow-lg">
                        Learn More
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 animate-bounce">
                    <ArrowDown className="text-white w-6 h-6 mx-auto" />
                    <span className="text-white text-sm mt-1">Scroll Down</span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
