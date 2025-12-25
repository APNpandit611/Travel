import SearchFilter from "@/components/SearchFilter";
import SingleTrekCard from "@/components/SingleTrekCard";
import Image from "next/image";
import React from "react";
import { kanchenjungaTrek } from "@/lib/data";
const TrekkingListPage = () => {
    return (
        <main>
            <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/KAN.jpg"
                    alt="Himalayan Culture"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                <div className="relative z-10 text-center px-4 max-w-4xl -bottom-30">
                    <h1 className="text-5xl text-white md:text-7xl font-extrabold mb-6 leading-tight">
                        Find Your Next Adventure
                    </h1>
                    <p className="text-white max-w-2xl mx-auto md:text-xl leading-relaxed">
                        Explore the worlds most breathtaking trekking
                        destinations with our curated list of unforgettable
                        journeys.
                    </p>
                </div>
            </section>

            <SearchFilter />
            <section className="max-w-7xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10">
                {kanchenjungaTrek.map((kan) => (
                    <div key={kan.trekId}>
                        <SingleTrekCard trek={kan} />
                    </div>
                ))}
            </section>
        </main>
    );
};

export default TrekkingListPage;
