import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-100 dark:bg-slate-950 py-32 border-t border-slate-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="md:col-span-1">
                        <h4 className="font-display text-2xl mb-8">CALM CLARITY</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            A dedicated platform for high-performance health editorial, exploring
                            the intersection of biology, technology, and intentionality.
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        <h5 className="text-xs uppercase tracking-widest mb-8 opacity-50">
                            Navigation
                        </h5>
                        <ul className="space-y-4 text-sm font-medium">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    The Brief
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    The Toolkit
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    The Story
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h5 className="text-xs uppercase tracking-widest mb-8 opacity-50">
                            Newsletter
                        </h5>
                        <p className="text-sm mb-8 text-slate-500">
                            Join 45,000+ readers receiving weekly biological insights.
                        </p>
                        <form className="flex border-b border-slate-400 dark:border-white/20 pb-2 max-w-md group focus-within:border-primary transition-colors">
                            <input
                                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500"
                                placeholder="Email address"
                                type="email"
                            />
                            <button className="material-icons text-sm" type="submit">
                                arrow_forward
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 dark:border-white/5">
                    <p className="text-[10px] uppercase tracking-widest opacity-40 mb-4 md:mb-0">
                        © 2024 Calm Clarity. All rights reserved.
                    </p>
                    <div className="flex space-x-8 opacity-60">
                        <Link
                            href="#"
                            className="text-[10px] uppercase tracking-widest hover:opacity-100 transition-opacity"
                        >
                            Instagram
                        </Link>
                        <Link
                            href="#"
                            className="text-[10px] uppercase tracking-widest hover:opacity-100 transition-opacity"
                        >
                            Twitter
                        </Link>
                        <Link
                            href="#"
                            className="text-[10px] uppercase tracking-widest hover:opacity-100 transition-opacity"
                        >
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
