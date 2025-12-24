import React from "react";
import {
    Mountain,
    MapPin,
    Phone,
    Mail,
    Instagram,
    Facebook,
    Youtube,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-slate-700/80">
            {/* Subtle top glow (matches hero tones) */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/60 to-slate-800/40 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Mountain className="w-6 h-6 text-sky-400" />
                        <h2 className="text-xl font-semibold text-white">
                            Trek Nepal
                        </h2>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed">
                        Journey through Nepal’s majestic Himalayas, sacred
                        trails, ancient cultures, and breathtaking viewpoints.
                    </p>

                    <div className="flex gap-4 mt-5 text-slate-400 [&_svg]:size-5 [&_svg]:hover:text-white [&_svg]:transition cursor-pointer">
                        <Instagram className="" />
                        <Facebook className="" />
                        <Youtube className="" />
                    </div>
                </div>

                {/* Destinations */}
                <div>
                    <h3 className="text-white font-medium mb-4">
                        Destinations
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-400 [&_li]:hover:text-white [&_li]:transition cursor-pointer">
                        <li className="">Everest Region</li>
                        <li className="">Annapurna Circuit</li>
                        <li className="">Manaslu Region</li>
                        <li className="">Upper Mustang</li>
                        <li className="">Langtang Valley</li>
                    </ul>
                </div>

                {/* Explore */}
                <div>
                    <h3 className="text-white font-medium mb-4">Explore</h3>
                    <ul className="space-y-2 text-sm text-slate-400 [&_li]:hover:text-white [&_li]:transition cursor-pointer">
                        <li className="">Treks & Tours</li>
                        <li className="">Viewpoints</li>
                        <li className="">Best Seasons</li>
                        <li className="">Travel Guide</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-medium mb-4">Contact</h3>
                    <ul className="space-y-3 text-sm text-slate-400 [&_li]:flex [&_li]:items-center [&_li]:gap-3 [&_svg]:size-4 [&_svg]:text-sky-400">
                        <li className="">
                            <MapPin className="" />
                            Kathmandu, Nepal
                        </li>
                        <li className="">
                            <Phone className="" />
                            +977 98XXXXXXXX
                        </li>
                        <li className="">
                            <Mail className="" />
                            info@travelnepal.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-white/10 py-6 text-center text-xs text-slate-400">
                <p>© 2025 Trek Nepal — All Rights Reserved</p>
                <p className="mt-1 tracking-widest uppercase text-slate-500">
                    Explore • Trek • Experience
                </p>
            </div>
        </footer>
    );
};

export default Footer;
