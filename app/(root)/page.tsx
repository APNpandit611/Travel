import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
    return (
        <div className="relative">
            {/* Background Image */}
            <div className="fixed inset-0 -z-10">
                {/* <Image
                    src="/hero-image.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover h-full w-full"
                    priority
                /> */}
                {/* Optional overlay for readability */}
                <div className="absolute inset-0"></div>
            </div>

            {/* Page Content */}
            <div className="relative z-10">
                <HeroSection />
              
            </div>
        </div>
    );
}
 