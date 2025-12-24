"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    ChevronDown,
    Home,
    Info,
    Map,
    Mountain,
    Users,
    Globe,
    Menu,
    Compass,
    Tent,
    CloudSnow,
    Camera,
    Heart,
    Zap,
    X,
    Contact,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const closeAll = () => {
        setActivitiesOpen(false);
        setRegionsOpen(false);
        setMobileOpen(false);
        setMobileActivitiesOpen(false);
        setMobileRegionsOpen(false);
    };
    const [activitiesOpen, setActivitiesOpen] = useState(false);
    const [regionsOpen, setRegionsOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileActivitiesOpen, setMobileActivitiesOpen] = useState(false);
    const [mobileRegionsOpen, setMobileRegionsOpen] = useState(false);

    // Close dropdowns when clicking outside
    const activitiesRef = useRef<HTMLDivElement>(null);
    const regionsRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        closeAll();
    }, [pathname]);
    return (
        <nav className="fixed w-full top-0 left-0 z-50 bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="group flex-shrink-0 flex items-center gap-3"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
                            <Mountain className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                            Trek<span className="text-blue-400">Nepal</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-4 space-x-1 lg:space-x-4">
                        <Link
                            href="/"
                            className="group flex items-center gap-2 py-2 rounded-xl text-white/90 hover:text-white transition-all duration-300 font-medium"
                        >
                            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="group flex items-center gap-2 py-2 rounded-xl text-white/90 hover:text-white transition-all duration-300 font-medium"
                        >
                            <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            About
                        </Link>

                        {/* Activities Dropdown */}
                        <div className="relative" ref={activitiesRef}>
                            <button
                                onClick={() => {
                                    setActivitiesOpen(!activitiesOpen);
                                    setRegionsOpen(false); // close other dropdown
                                }}
                                className="flex items-center gap-2 py-2 rounded-xl text-white/90 hover:text-white transition-all duration-300 font-medium group cursor-pointer"
                            >
                                <Map className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Activities
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                        activitiesOpen ? "-rotate-180" : ""
                                    }`}
                                />
                            </button>

                            <div
                                className={`absolute top-full left-35 -translate-x-1/2 mt-3 w-80 bg-white/95 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl py-4 overflow-hidden transition-all duration-300 ease-in-out ${
                                    activitiesOpen
                                        ? "max-h-250 opacity-100 translate-y-0"
                                        : "max-h-0 opacity-0 -translate-y-2"
                                }`}
                            >
                                <div className="px-5 pb-3 mb-2 border-b border-gray-100">
                                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-blue-500" />{" "}
                                        Adventure Types
                                    </h3>
                                </div>

                                <div className="px-2 space-y-1">
                                    <DropdownItem
                                        href="/activities/trekking"
                                        icon={
                                            <Compass className="w-5 h-5 text-blue-500" />
                                        }
                                        title="Classic Trekking"
                                        desc="Everest, Annapurna & more"
                                        onClick={closeAll}
                                    />
                                    <DropdownItem
                                        href="/activities/climbing"
                                        icon={
                                            <CloudSnow className="w-5 h-5 text-indigo-500" />
                                        }
                                        title="Peak Climbing"
                                        desc="Scale 6000m+ summits"
                                        onClick={closeAll}
                                    />
                                    <DropdownItem
                                        href="/activities/tours"
                                        icon={
                                            <Camera className="w-5 h-5 text-emerald-500" />
                                        }
                                        title="Cultural Tours"
                                        desc="Monasteries & heritage sites"
                                        onClick={closeAll}
                                    />
                                    <DropdownItem
                                        href="/activities/heli-tours"
                                        icon={
                                            <Tent className="w-5 h-5 text-orange-500" />
                                        }
                                        title="Luxury Heli-Tours"
                                        desc="The Himalayas from above"
                                        onClick={closeAll}
                                    />
                                    <DropdownItem
                                        href="/activities/yoga"
                                        icon={
                                            <Heart className="w-5 h-5 text-rose-500" />
                                        }
                                        title="Yoga & Wellness"
                                        desc="Spiritual retreats in nature"
                                        onClick={closeAll}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Regions Dropdown */}
                        <div className="relative" ref={regionsRef}>
                            <button
                                onClick={() => {
                                    setRegionsOpen(!regionsOpen);
                                    setActivitiesOpen(false); // close other dropdown
                                }}
                                className="flex items-center gap-2 py-2 rounded-xl text-white/90 hover:text-white transition-all duration-300 font-medium group cursor-pointer"
                            >
                                <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Regions
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                        regionsOpen ? "-rotate-180" : ""
                                    }`}
                                />
                            </button>

                            <div
                                className={`absolute top-full -left-5 mt-3 w-80 bg-white/95 backdrop-blur-2xl border border-white/50 rounded-2xl shadow-2xl py-4 overflow-hidden transition-all duration-300 ease-in-out ${
                                    regionsOpen
                                        ? "max-h-100 opacity-100 translate-y-0"
                                        : "max-h-0 opacity-0 -translate-y-2"
                                }`}
                            >
                                <div className="px-5 pb-3 mb-2 border-b border-gray-100">
                                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                        <Map className="w-4 h-4 text-blue-500" />{" "}
                                        Nepal Destinations
                                    </h3>
                                </div>

                                <div className="px-2 space-y-1">
                                    <DropdownItem
                                        href="/regions/everest"
                                        icon={
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        }
                                        title="Everest Region"
                                        desc="The roof of the world"
                                        onClick={closeAll}
                                    />
                                    <DropdownItem
                                        href="/regions/annapurna"
                                        icon={
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        }
                                        title="Annapurna Circuit"
                                        desc="Diverse trails & lush forests"
                                        onClick={closeAll}
                                    />
                                    <DropdownItem
                                        href="/regions/manaslu"
                                        icon={
                                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                                        }
                                        title="Manaslu Region"
                                        desc="The remote spirit of Nepal"
                                        onClick={closeAll}
                                    />
                                    <DropdownItem
                                        href="/regions/mustang"
                                        icon={
                                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                                        }
                                        title="Upper Mustang"
                                        desc="The forbidden desert kingdom"
                                        onClick={closeAll}
                                    />
                                    <DropdownItem
                                        href="/regions/langtang"
                                        icon={
                                            <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                        }
                                        title="Langtang Valley"
                                        desc="Valley of glaciers & peaks"
                                        onClick={closeAll}
                                    />
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/contactus"
                            className="group flex items-center gap-2 py-2 rounded-xl text-white/90 hover:text-white transition-all duration-300 font-medium"
                        >
                            <Contact className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 rounded-xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-white"
                        >
                            <span
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                                    mobileOpen
                                        ? "rotate-90 opacity-0"
                                        : "rotate-0 opacity-100"
                                }`}
                            >
                                <Menu className="w-6 h-6" />
                            </span>

                            <span
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                                    mobileOpen
                                        ? "rotate-0 opacity-100"
                                        : "-rotate-90 opacity-0"
                                }`}
                            >
                                <X className="w-6 h-6" />
                            </span>

                            {/* spacer so button keeps size */}
                            <span className="block w-7 h-7" />
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
    ${
        mobileOpen
            ? "max-h-250 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
    }
  `}
                >
                    <div
                        className={`w-full pb-6 transform transition-all ease-[cubic-bezier(0.16,1,0.3,1)]`}
                    >
                        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl py-4">
                            {/* Main links */}
                            <div className="flex flex-col gap-6 px-6">
                                <Link
                                    className="flex items-center gap-3 text-white text-sm font-medium"
                                    href="/"
                                >
                                    <Home className="w-5 h-5" />
                                    Home
                                </Link>

                                <Link
                                    className="flex items-center gap-3 text-white text-sm font-medium"
                                    href="/about"
                                >
                                    <Info className="w-5 h-5" />
                                    About
                                </Link>
                            </div>

                            {/* Activities */}
                            <div className="mt-6 px-6">
                                <button
                                    onClick={() => {
                                        setMobileActivitiesOpen(
                                            !mobileActivitiesOpen
                                        );
                                        setMobileRegionsOpen(false); // Close the other dropdown
                                    }}
                                    className="w-full flex justify-between items-center text-white font-medium cursor-pointer"
                                >
                                    <span className="flex items-center gap-3">
                                        <Map className="w-5 h-5" />
                                        Activities
                                    </span>
                                    <ChevronDown
                                        className={`transition-transform duration-300 ${
                                            mobileActivitiesOpen
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        mobileActivitiesOpen
                                            ? "max-h-250 opacity-100 translate-y-0"
                                            : "max-h-0 opacity-0 -translate-y-2"
                                    }`}
                                >
                                    <div className="mt-4 ml-4 space-y-4 border-l border-white/20 pl-5">
                                        <MobileItem
                                            icon={
                                                <Compass className="w-4 h-4" />
                                            }
                                            label="Trekking"
                                            onClick={closeAll}
                                            href="/activities/trekking"
                                        />
                                        <MobileItem
                                            icon={
                                                <Camera className="w-4 h-4" />
                                            }
                                            label="Cultural Tour"
                                            onClick={closeAll}
                                        />
                                        <MobileItem
                                            icon={<Zap className="w-4 h-4" />}
                                            label="Expedition"
                                            onClick={closeAll}
                                        />
                                        <MobileItem
                                            icon={<Tent className="w-4 h-4" />}
                                            label="Jungle Safari"
                                            onClick={closeAll}
                                        />
                                        <MobileItem
                                            icon={
                                                <CloudSnow className="w-4 h-4" />
                                            }
                                            label="Climbing"
                                            onClick={closeAll}
                                        />
                                        <MobileItem
                                            icon={<Users className="w-4 h-4" />}
                                            label="River Rafting"
                                            onClick={closeAll}
                                        />
                                        <MobileItem
                                            icon={<Heart className="w-4 h-4" />}
                                            label="Hiking"
                                            onClick={closeAll}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Regions */}
                            <div className="mt-6 px-6">
                                <button
                                    onClick={() => {
                                        setMobileRegionsOpen(
                                            !mobileRegionsOpen
                                        );
                                        setMobileActivitiesOpen(false); // Close the other dropdown
                                    }}
                                    className="w-full flex justify-between items-center text-white font-medium cursor-pointer"
                                >
                                    <span className="flex items-center gap-3">
                                        <Globe className="w-5 h-5" />
                                        Trip Regions
                                    </span>
                                    <ChevronDown
                                        className={`transition-transform duration-300 ${
                                            mobileRegionsOpen
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        mobileRegionsOpen
                                            ? "max-h-250 opacity-100 translate-y-0"
                                            : "max-h-0 opacity-0 -translate-y-2"
                                    }`}
                                >
                                    <div className="mt-4 ml-4 space-y-4 border-l border-white/20 pl-5">
                                        <MobileItem label="Everest Region" onClick={closeAll}/>
                                        <MobileItem label="Annapurna Region" onClick={closeAll}/>
                                        <MobileItem label="Langtang Region" onClick={closeAll}/>
                                        <MobileItem label="Kanchenjunga Region" onClick={closeAll}/>
                                        <MobileItem label="Manaslu Region" onClick={closeAll}/>
                                    </div>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="mt-6 px-6">
                                <Link
                                    className="flex items-center gap-3 text-white text-sm font-medium"
                                    href="/contact"
                                >
                                    <Contact className="w-5 h-5" />
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// Helper component for Dropdown Items
function DropdownItem({
    href,
    icon,
    title,
    desc,
    onClick,
}: {
    href: string;
    icon: React.ReactNode;
    title: string;
    desc: string;
    onClick?: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group/item"
        >
            <div className="mt-1 group-hover/item:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <div className="text-sm font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors">
                    {title}
                </div>
                <div className="text-xs text-gray-500 line-clamp-1">{desc}</div>
            </div>
        </Link>
    );
}

function MobileItem({
    icon,
    label,
    onClick,
    href
}: {
    icon?: React.ReactNode;
    label: string;
    onClick?: () => void;
    href?: string;
}) {
    return (
        <Link href={href || "/"} onClick={onClick} className="flex items-center gap-3 text-white/80 text-sm">
            {icon && <span>{icon}</span>}
            <span>{label}</span>
        </Link>
    );
}
