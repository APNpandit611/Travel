"use client";
// TrekPage.tsx
import React, { useState } from "react";
import { kanchenjungaTrek } from "@/lib/data";
import type { Trek, ItineraryDay, Pricing, TripDetails } from "@/lib/data";

const TrekPage: React.FC = () => {
  const { title, overview, tripDetails, itinerary, images, reviews, pricing, transport } =
    kanchenjungaTrek;

  const [showAllItinerary, setShowAllItinerary] = useState(false);

  const initialItinerary = itinerary.slice(0, 5);
  const remainingItinerary = itinerary.slice(5);

  const heroImage = images[0];

  return (
    <div className="min-h-screen text-slate-50">
      {/* HERO */}
      <section className="relative h-[420px] overflow-hidden">
        {heroImage && (
          <img
            src="/KAN.jpg"
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
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

            <h1 className="text-3xl font-semibold md:text-4xl">{title}</h1>
            <p className="text-emerald-300 text-sm">
              {overview.location.region}, {overview.location.country}
            </p>
            <p className="max-w-xl text-sm text-slate-200">{overview.description}</p>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <main className="mx-auto grid max-w-6xl gap-8 px-6 py-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        {/* LEFT COLUMN */}
        <div className="space-y-8">
          {/* Key Facts */}
          <section className="grid gap-3 rounded-2xl p-4 text-xs sm:grid-cols-3 text-slate-50">
            <Fact label="Country" value={overview.location.country} />
            <Fact label="Region" value={overview.location.region} />
            <Fact label="Duration" value={`${overview.durationDays} days`} />
            <Fact label="Altitude range" value={overview.altitudeRange} />
            <Fact label="Difficulty" value={overview.difficulty} />
            <Fact label="Best season" value={overview.bestSeason.join(" • ")} />
          </section>

          {/* Highlights */}
          <section className="space-y-3 rounded-2xl p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-50">
              Highlights
            </h2>
            <ul className="grid gap-2 text-sm md:grid-cols-2">
              {overview.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            {overview.location.bordering.length > 0 && (
              <p className="mt-2 text-xs text-slate-400">
                Borders: {overview.location.bordering.join(", ")}
              </p>
            )}
          </section>

          {/* Itinerary */}
          <section className="space-y-3 rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-50">
                Daily itinerary
              </h2>
              <span className="text-xs text-slate-400">{itinerary.length} listed days</span>
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
                  onClick={() => setShowAllItinerary(!showAllItinerary)}
                  className="mt-2 text-sm text-emerald-400 hover:underline"
                >
                  {showAllItinerary ? "Show Less" : "Load More"}
                </button>
              )}
            </div>
          </section>

          {/* Transport */}
          <section className="grid gap-4 md:grid-cols-2 text-sm text-slate-50">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide">Getting There</h3>
              <p className="mt-1">{transport.toStartPoint}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide">Return</h3>
              <p className="mt-1">{transport.fromEndPoint}</p>
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
  <div className="rounded-xl p-3 bg-slate-950/50">
    <p className="text-[10px] uppercase tracking-wide text-slate-400">{label}</p>
    <p className="mt-1 text-xs text-slate-100">{value}</p>
  </div>
);

/* ----- Itinerary Card ----- */
const ItineraryCard: React.FC<{ day: ItineraryDay }> = ({ day }) => (
  <details className="group rounded-xl border border-slate-800 bg-slate-950/60 p-3">
    <summary className="flex cursor-pointer items-center justify-between text-sm text-slate-100">
      <div>
        <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-[11px] text-emerald-300">
          D{day.day}
        </span>
        {day.title}
      </div>
      <span className="text-xs text-slate-500 group-open:hidden">View</span>
      <span className="hidden text-xs text-slate-500 group-open:inline">Hide</span>
    </summary>
    <div className="mt-2 space-y-1 text-xs text-slate-200">
      <p>{day.description}</p>
      {day.overnight && <p className="text-[11px] text-slate-400">Overnight: {day.overnight}</p>}
    </div>
  </details>
);

/* ----- Booking Card ----- */
const BookingCard: React.FC<{ pricing: Pricing; tripDetails: TripDetails }> = ({
  pricing,
  tripDetails,
}) => (
  <div className="rounded-2xl p-5 shadow-lg bg-slate-900/80">
    <p className="text-xs uppercase tracking-wide text-slate-400">Trip Price</p>
    <p className="mt-1 text-2xl font-semibold text-emerald-400">
      ${pricing.costPerPerson.toLocaleString()}
      <span className="text-sm font-normal text-slate-300"> / person</span>
    </p>

    <div className="mt-4 space-y-3 text-xs text-slate-100">
      <div className="flex flex-col gap-1">
        <label className="text-[11px] text-slate-400">Start Date</label>
        <input
          type="date"
          className="h-9 rounded-lg border border-slate-700 px-2 text-xs outline-none focus:border-emerald-400"
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
          className="h-9 rounded-lg border border-slate-700 px-2 text-xs outline-none focus:border-emerald-400"
        />
      </div>
    </div>

    <button className="mt-4 w-full rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
      Reserve your spot
    </button>

    <p className="mt-3 text-[11px] text-slate-400">Secure booking • No hidden fees</p>
  </div>
);

/* ----- Pricing Details ----- */
const PricingDetails: React.FC<{ pricing: Pricing }> = ({ pricing }) => (
  <section className="space-y-4 text-sm text-slate-100">
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Included</h3>
      <ul className="mt-2 space-y-1 text-xs">
        {pricing.includes.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wide text-rose-300">Not included</h3>
      <ul className="mt-2 space-y-1 text-xs text-slate-300">
        {pricing.excludes.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-rose-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/* ----- Reviews ----- */
const Reviews: React.FC<{ reviews: typeof kanchenjungaTrek.reviews }> = ({ reviews }) => (
  <section className="space-y-3 rounded-2xl p-5 text-sm text-slate-100 bg-slate-900/70">
    <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-200">Reviews</h3>
    <div className="space-y-3">
      {reviews.map((r) => (
        <div key={r.user + r.comment} className="rounded-xl border border-slate-800 bg-slate-950/70 p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium">{r.user}</span>
            <span className="text-amber-300">{'★'.repeat(r.rating)}</span>
          </div>
          <p className="mt-2 text-xs text-slate-200">{r.comment}</p>
        </div>
      ))}
    </div>
  </section>
);
