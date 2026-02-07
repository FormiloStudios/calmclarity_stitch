"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center space-x-12">
                    <Link href="/" className="text-xl font-display font-bold tracking-tight">
                        CALM CLARITY
                    </Link>
                    <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
                        <Link
                            href="/"
                            className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary' : ''}`}
                        >
                            The Brief
                        </Link>
                        <Link
                            href="#"
                            className={`hover:text-primary transition-colors opacity-60`}
                        >
                            The Toolkit
                        </Link>
                        <Link
                            href="/story"
                            className={`hover:text-primary transition-colors ${isActive('/story') ? 'text-primary border-b border-primary pb-1' : 'opacity-60'}`}
                        >
                            The Story
                        </Link>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <button className="material-icons opacity-60 hover:opacity-100 transition-opacity">
                        search
                    </button>
                    <button className="px-5 py-2 border border-slate-900 dark:border-white text-xs uppercase tracking-widest font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                        Subscribe
                    </button>
                </div>
            </div>
        </nav>
    );
}
