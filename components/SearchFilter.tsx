import { Search, ChevronDown, RotateCcw } from "lucide-react";
import React from "react";

const SearchFilter = () => {
    const filters = [
        { label: "Region", options: ["Everest", "Annapurna", "Manaslu"] },
        { label: "Activity", options: ["Trekking", "Climbing", "Yoga"] },
        { label: "Price", options: ["Under $500", "$1k - $2k", "$2k+"] },
    ];

    return (
        <section className="w-full flex items-start justify-center p-6">
            <div className="flex flex-col items-start md:flex-row gap-3 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2 ring-1 ring-black/5 w-full max-w-4xl">
                {/* 🔍 Search Input */}
                <div className="w-full md:flex-1 flex items-center gap-2 bg-white/80 rounded-xl px-3 py-2 border border-slate-200/50 focus-within:ring-2 ring-indigo-400/20 transition-all shadow-sm">
                    <Search className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <input
                        placeholder="Search treks..."
                        type="text"
                        className="w-full bg-transparent text-xs outline-none placeholder:text-slate-400 font-medium"
                    />
                </div>

                {/* 🛠 Filter selects */}
                <div className="w-full md:w-auto flex flex-wrap gap-2">
                    {filters.map((filter) => (
                        <div key={filter.label} className="relative">
                            <select className="appearance-none rounded-xl bg-white/80 border border-slate-200/40 px-3 py-2 pr-8 text-[11px] font-bold text-slate-600 outline-none hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                                <option value="">{filter.label}</option>
                                {filter.options.map((opt) => (
                                    <option key={opt}>{opt}</option>
                                ))}
                            </select>
                            {/* ChevronDown Icon */}
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-slate-400 pointer-events-none" />
                        </div>
                    ))}

                    {/* Buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            title="Reset"
                            className="p-2 rounded-xl text-slate-400 hover:bg-white hover:text-orange-500 hover:shadow-sm active:scale-90 transition-all shrink-0"
                        >
                            <RotateCcw className="h-3.5 w-3.5" />
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-xs font-bold shadow-lg transition-all active:scale-95 shrink-0 cursor-pointer">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchFilter;
