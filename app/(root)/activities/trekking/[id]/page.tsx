"use client";
// TrekPage.tsx
import React, { useState } from "react";
import { kanchenjungaTrek } from "@/lib/data";
import type { ItineraryDay, Pricing, Review, TripDetails } from "@/lib/data";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const TrekPage: React.FC = () => {
    const {
        title,
        overview,
        tripDetails,
        itinerary,
        images,
        reviews,
        pricing,
        transport,
    } = kanchenjungaTrek[0];

    const [showAllItinerary, setShowAllItinerary] = useState(false);

    const initialItinerary = itinerary.slice(0, 5);
    const remainingItinerary = itinerary.slice(5);

    const heroImage = images[0];

    return (
        <div className="min-h-screen text-slate-50 overflow-hidden">
            {/* HERO */}
            <section className="relative overflow-hidden h-[50vh] md:h-[60vh] lg:h-[70vh]">
                {heroImage && (
                    <Image
                        src="/KAN.jpg"
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
                <div className="absolute inset-0" />
                <div className="relative mx-auto flex h-full max-w-6xl items-end justify-between px-6 pb-10">
                    <div className="max-w-2xl space-y-4">
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                            <span className="rounded-full bg-emerald-500/90 px-3 py-1 font-medium text-slate-950">
                                {overview.durationDays}-Day Trek
                            </span>
                            <span className="rounded-full bg-slate-900/70 px-3 py-1">
                                {overview.difficulty}
                            </span>
                            <span className="rounded-full bg-slate-900/70 px-3 py-1">
                                {overview.altitudeRange}
                            </span>
                        </div>

                        <h1 className="text-3xl font-semibold md:text-4xl">
                            {title}
                        </h1>
                        <p className="text-emerald-300 text-sm">
                            {overview.location.region},{" "}
                            {overview.location.country}
                        </p>
                        <p className="max-w-xl text-sm text-slate-200">
                            {overview.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* MAIN GRID */}
            <main className="max-w-6xl mx-auto grid gap-8 py-8 px-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                {/* LEFT COLUMN */}
                <div className="space-y-8 h-fit">
                    {/* Key Facts */}
                    <section className="grid gap-3 text-xs sm:grid-cols-3 text-slate-50">
                        <Fact
                            label="Country"
                            value={overview.location.country}
                        />
                        <Fact label="Region" value={overview.location.region} />
                        <Fact
                            label="Duration"
                            value={`${overview.durationDays} days`}
                        />
                        <Fact
                            label="Altitude range"
                            value={overview.altitudeRange}
                        />
                        <Fact label="Difficulty" value={overview.difficulty} />
                        <Fact
                            label="Best season"
                            value={overview.bestSeason.join(" • ")}
                        />
                    </section>

                    {/* Highlights */}
                    <section className="space-y-3 rounded-2xl p-5 bg-white backdrop-blur-xl border border-slate-200/60 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
                        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
                            Highlights
                        </h2>
                        <ul className="grid gap-2 text-sm md:grid-cols-2">
                            {overview.highlights.map((h) => (
                                <li
                                    key={h}
                                    className="flex items-center justify-start gap-3"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                                    <span className="text-slate-900">{h}</span>
                                </li>
                            ))}
                        </ul>
                        {overview.location.bordering.length > 0 && (
                            <p className="mt-2 text-xs text-slate-400">
                                Borders:{" "}
                                {overview.location.bordering.join(", ")}
                            </p>
                        )}
                    </section>

                    {/* Itinerary */}
                    <section className="space-y-3 rounded-2xl p-5 bg-white backdrop-blur-xl border border-slate-200/60 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
                                Daily itinerary
                            </h2>
                            <span className="text-xs text-slate-400">
                                {itinerary.length} listed days
                            </span>
                        </div>

                        <div className="space-y-3">
                            {initialItinerary.map((day) => (
                                <ItineraryCard key={day.day} day={day} />
                            ))}

                            {showAllItinerary &&
                                remainingItinerary.map((day) => (
                                    <ItineraryCard key={day.day} day={day} />
                                ))}

                            {remainingItinerary.length > 0 && (
                                <button
                                    onClick={() =>
                                        setShowAllItinerary(!showAllItinerary)
                                    }
                                    className="mt-2 text-sm text-blue-400 hover:underline cursor-pointer "
                                >
                                    {showAllItinerary
                                        ? "Show Less"
                                        : "Show More"}
                                </button>
                            )}
                        </div>
                    </section>

                    {/* Transport */}
                    <section className="grid gap-4 p-5 md:grid-cols-2 text-sm text-slate-900 bg-white/10 backdrop-blur-xl border border-slate-200/60 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl rounded-xl">
                        {/* Getting There */}
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-sky-500/20 text-sky-600">
                                <MapPin size={16} className="shrink-0" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xs font-semibold uppercase tracking-wide">
                                    Getting There
                                </h3>
                                <p className="mt-1 text-xs">
                                    {transport.toStartPoint}
                                </p>
                            </div>
                        </div>

                        {/* Return */}
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-600">
                                <ArrowRight size={16} className="shrink-0" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xs font-semibold uppercase tracking-wide">
                                    Return
                                </h3>
                                <p className="mt-1 text-xs">
                                    {transport.fromEndPoint}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* RIGHT COLUMN */}
                <aside className="space-y-6">
                    <BookingCard pricing={pricing} tripDetails={tripDetails} />
                    <PricingDetails pricing={pricing} />
                    <Reviews reviews={reviews} />
                </aside>
            </main>
        </div>
    );
};

export default TrekPage;

/* ----- Fact ----- */
const Fact = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col items-start gap-2 rounded-xl p-4 bg-white backdrop-blur-xl border border-slate-200/60 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
        <p className="text-[10px] uppercase tracking-wide text-slate-500">
            {label}
        </p>
        <p className="mt-1 text-xs text-slate-900">{value}</p>
    </div>
);

/* ----- Itinerary Card ----- */
const ItineraryCard: React.FC<{ day: ItineraryDay }> = ({ day }) => (
    <details className="p-3 group rounded-xl border bg-white/10 backdrop-blur-xl border-slate-200/40 shadow-xl overflow-hidden">
        <summary className="flex cursor-pointer items-center justify-between text-sm text-slate-900 select-none">
            <div className="flex items-center">
                <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[11px] text-white">
                    D{day.day}
                </span>
                <span className="text-slate-700">{day.title}</span>
            </div>
            <div className="flex items-center">
                <span className="text-xs text-slate-500 group-open:hidden">
                    View
                </span>
                <span className="hidden text-xs text-slate-500 group-open:inline">
                    Hide
                </span>
                <svg
                    className="ml-2 w-3 h-3 text-slate-400 transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </summary>

        <div className="px-3">
            <div className="mt-3 space-y-2 text-xs text-slate-900">
                <p className="text-sm">{day.description}</p>
                {day.overnight && (
                    <p className="text-xs text-slate-500">
                        Overnight: {day.overnight}
                    </p>
                )}
            </div>
        </div>
    </details>
);

/* ----- Booking Card ----- */
const BookingCard: React.FC<{ pricing: Pricing; tripDetails: TripDetails }> = ({
    pricing,
    tripDetails,
}) => (
    <div className="rounded-2xl p-5 bg-white backdrop-blur-xl border border-slate-200/60 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
        <p className="text-xs uppercase tracking-wide text-slate-400">
            Trip Price
        </p>
        <p className="mt-1 text-2xl font-semibold text-blue-600">
            ${pricing.costPerPerson.toLocaleString("en-US")}
            <span className="text-sm font-normal text-slate-300">
                {" "}
                / person
            </span>
        </p>

        <div className="mt-4 space-y-3 text-xs text-slate-100">
            <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-400">Start Date</label>
                <input
                    type="date"
                    className="h-9 rounded-lg border border-slate-300 px-2 text-xs outline-none focus:border-blue-400 text-slate-600"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-400">
                    Travelers (max {tripDetails.participants.max})
                </label>
                <input
                    type="number"
                    min={tripDetails.participants.min}
                    max={tripDetails.participants.max}
                    defaultValue={tripDetails.participants.max}
                    className="h-9 rounded-lg border border-slate-300 px-2 text-xs outline-none focus:border-blue-400 text-slate-600"
                />
            </div>
        </div>

        <button className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 cursor-pointer">
            Reserve your spot
        </button>

        <p className="mt-3 text-[11px] text-slate-400">
            Secure booking • No hidden fees
        </p>
    </div>
);

/* ----- Pricing Details ----- */
const PricingDetails: React.FC<{ pricing: Pricing }> = ({ pricing }) => (
    <section className="grid gap-4 grid-cols-1 text-sm text-slate-600">
        {/* Included */}
        <div className="space-y-2 bg-white backdrop-blur-xl rounded-xl p-5 border border-slate-200/40 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Included
            </h3>
            <ul className="mt-1 space-y-1 text-xs">
                {pricing.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                    </li>
                ))}
            </ul>
        </div>

        {/* Not Included */}
        <div className="space-y-2 bg-white backdrop-blur-xl rounded-xl p-5 border border-slate-200/40 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-rose-300">
                Not Included
            </h3>
            <ul className="mt-1 space-y-1 text-xs">
                {pricing.excludes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-rose-400 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

/* ----- Reviews ----- */
const Reviews: React.FC<{ reviews: Review[] }> = ({
    reviews,
}) => (
    <section className="text-slate-900 space-y-3 rounded-2xl p-5 text-sm bg-white backdrop-blur-xl border border-slate-200/60 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            Reviews
        </h3>
        <div className="space-y-3">
            {reviews.map((r) => (
                <div
                    key={r.user + r.comment}
                    className="rounded-xl bg-white backdrop-blur-xl border border-slate-200/60 shadow-xl transition-all duration-300 p-3"
                >
                    <div className="flex items-center justify-between text-xs">
                        <span className="font-medium ">{r.user}</span>
                        <span className="text-amber-300">
                            {"★".repeat(r.rating)}
                        </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-600">{r.comment}</p>
                </div>
            ))}
        </div>
    </section>
);
