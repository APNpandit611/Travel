import React from "react";
import {
    Calendar,
    MapPin,
    Mountain,
    Users,
    Clock,
    ArrowUpRight,
} from "lucide-react";
import type { Trek } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const SingleTrekCard = ({ trek }: { trek: Trek }) => {
    const { trekId, overview, pricing, title, images } = trek;

    return (
        <div className="group relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={images[0]}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    fill
                />
                {/* Difficulty Badge */}
                <div className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-gray-800 backdrop-blur-md">
                    {overview.difficulty}
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="flex flex-col gap-1">
                        <span className="flex items-center text-xs text-white/80">
                            <MapPin className="mr-1 h-3 w-3" />{" "}
                            {overview.location.region},{" "}
                            {overview.location.country}
                        </span>
                        <h3 className="text-xl font-bold text-white leading-tight">
                            {title}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6 border-b border-slate-100 pb-6">
                    <div className="flex flex-col items-center">
                        <Clock className="h-5 w-5 text-emerald-500 mb-1" />
                        <span className="text-[10px] uppercase text-slate-400 font-semibold">
                            Days
                        </span>
                        <span className="text-sm font-bold text-slate-700">
                            {overview.durationDays}
                        </span>
                    </div>
                    <div className="flex flex-col items-center border-x border-slate-100 px-2">
                        <Mountain className="h-5 w-5 text-blue-500 mb-1" />
                        <span className="text-[10px] uppercase text-slate-400 font-semibold">
                            Max Alt
                        </span>
                        <span className="text-sm font-bold text-slate-700">
                            5,143m
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="h-5 w-5 text-orange-500 mb-1" />
                        <span className="text-[10px] uppercase text-slate-400 font-semibold">
                            Group
                        </span>
                        <span className="text-sm font-bold text-slate-700">
                            {trek.tripDetails.participants.max}
                        </span>
                    </div>
                </div>

                {/* Description Snippet */}
                <p className="text-sm text-slate-600 line-clamp-2 mb-4 italic">
                    {overview.description}
                </p>

                {/* Seasonal Tags */}
                <div className="flex gap-2 mb-6">
                    {overview.bestSeason.map((season: string) => (
                        <span
                            key={season}
                            className="rounded-md bg-slate-50 px-2 py-1 text-[10px] font-bold text-slate-500 ring-1 ring-inset ring-slate-200"
                        >
                            {season}
                        </span>
                    ))}
                </div>

                {/* Footer / CTA */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">
                            From
                        </p>
                        <p className="text-2xl font-black text-slate-900">
                            ${pricing.costPerPerson}
                        </p>
                    </div>

                    <Link href={`/activities/trekking/${trekId}`} className="flex items-center justify-center rounded-2xl bg-blue-600 p-4 text-white transition-all hover:bg-blue-700 hover:shadow-lg active:scale-95 cursor-pointer">
                        <span className="mr-2 text-sm font-bold">
                            View Trip
                        </span>
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleTrekCard;
