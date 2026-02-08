"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname();

    const isPrivacy = pathname === "/privacy";
    const isTerms = pathname === "/terms";

    return (
        <footer className="bg-background-dark border-t border-white/10 py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                <div>
                    <p className="text-xl font-medium tracking-tight mb-2 text-white">
                        CALM CLARITY
                    </p>
                    <p className="text-[10px] text-muted tracking-[0.3em] uppercase">
                        Science-backed calm for everyday life
                    </p>
                </div>
                <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] tracking-[0.2em] uppercase font-light">
                    {!isPrivacy && (
                        <Link
                            href="/privacy"
                            className="hover:text-white transition-colors text-muted"
                        >
                            Privacy Policy
                        </Link>
                    )}
                    {!isTerms && (
                        <Link
                            href="/terms"
                            className="hover:text-white transition-colors text-muted"
                        >
                            Terms of Service
                        </Link>
                    )}
                    <Link
                        href="#"
                        className="hover:text-white transition-colors text-muted"
                    >
                        Contact
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-white transition-colors text-muted"
                    >
                        Instagram
                    </Link>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-[9px] text-muted/50 tracking-[0.3em] uppercase flex justify-between">
                <p>© 2026 CALM CLARITY. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}
