import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Cinematic neural architecture background"
                    fill
                    priority
                    className="object-cover opacity-90"
                    quality={90}
                />
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background-dark"></div>
            </div>

            <div className="relative z-10 max-w-4xl text-center px-6">
                <span className="inline-block text-xs uppercase tracking-[0.4em] mb-6 opacity-90 text-white drop-shadow-md">
                    Science-backed calm for everyday life
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[1.1] mb-8 drop-shadow-lg">
                    Simple solutions for a faster brain and calmer body
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
                    <Link
                        href="#feed"
                        className="group flex items-center text-sm uppercase tracking-widest font-bold text-white drop-shadow-md"
                    >
                        Start Here
                        <span className="material-icons ml-2 group-hover:translate-y-1 transition-transform">
                            expand_more
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
