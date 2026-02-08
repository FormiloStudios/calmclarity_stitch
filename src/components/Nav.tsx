"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-background-dark/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <Link href="/" className="text-xl font-medium tracking-tight text-white">
                        CALM CLARITY
                    </Link>
                    <div className="hidden md:flex space-x-6 text-sm tracking-wide uppercase font-light">
                        <Link
                            href="/"
                            className="hover:text-muted transition-colors text-white"
                        >
                            Journal
                        </Link>
                        <Link
                            href="/story"
                            className={`transition-colors text-white ${isActive('/story') ? 'border-b border-primary pb-1' : 'hover:text-muted'}`}
                        >
                            The Story
                        </Link>
                    </div>
                </div>
                <div className="flex items-center space-x-6 text-white">
                    <button className="text-sm tracking-wide uppercase font-light hover:text-muted transition-colors">
                        Newsletter
                    </button>
                    <span className="material-symbols-outlined cursor-pointer hover:opacity-70 text-sm">
                        search
                    </span>
                </div>
            </div>
        </nav>
    );
}
