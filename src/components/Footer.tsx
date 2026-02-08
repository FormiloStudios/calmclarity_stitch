"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname();

    const isPrivacy = pathname === "/privacy";
    const isTerms = pathname === "/terms";
    const isContact = pathname === "/contact";

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
                    {!isContact && (
                        <Link
                            href="/contact"
                            className="hover:text-white transition-colors text-muted"
                        >
                            Contact
                        </Link>
                    )}
                </div>
                <div className="flex items-center gap-4 text-muted hover:text-white transition-colors cursor-pointer group">
                    <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.718-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.033-1.002 2.324-1.492 3.121C9.643 23.86 10.813 24 12.017 24c6.622 0 11.988-5.367 11.988-11.987S18.639 0 12.017 0z" />
                    </svg>
                    <span className="text-[10px] tracking-[0.2em] uppercase font-light">Follow us on Pinterest</span>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-[9px] text-muted/50 tracking-[0.3em] uppercase flex justify-between">
                <p>© 2026 CALM CLARITY. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}
