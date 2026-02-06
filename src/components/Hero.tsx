import Link from "next/link";

export function Hero() {
    return (
        <header className="relative h-screen min-h-[700px] flex items-center justify-center cinematic-bg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark"></div>
            <div className="relative z-10 max-w-4xl text-center px-6">
                <span className="inline-block text-xs uppercase tracking-[0.4em] mb-6 opacity-80 text-white">
                    Advanced Wellness Protocol
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[1.1] mb-8">
                    Biological Tools for a Faster Brain and a Calmer Body
                </h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
                    <Link
                        href="#feed"
                        className="group flex items-center text-sm uppercase tracking-widest font-bold text-white"
                    >
                        Explore The Brief
                        <span className="material-icons ml-2 group-hover:translate-y-1 transition-transform">
                            expand_more
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
