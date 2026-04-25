'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollObserver } from "@/components/ScrollObserver";

export default function GetAWebsitePage() {
    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('dev_access') === 'true') {
                setAuthorized(true);
            } else {
                router.push('/');
            }
        }
    }, [router]);

    if (!authorized) return null;

    return (
        <>
            <ScrollObserver />
            <Nav />

            <main className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <header className="text-center mb-16">
                        <div className="flex justify-center mb-8">
                            <span className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-[0.65rem] font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
                                Services
                            </span>
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-slate-900 dark:text-white tracking-tight italic">
                            Get A Website
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                            I built this site from scratch—a live affiliate blog in the wellness niche. I can build you the same thing in your niche.
                        </p>
                    </header>

                    {/* Content Section */}
                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed max-w-2xl">
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 mb-16">
                            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">What you get:</h2>
                            <ul className="space-y-4 text-slate-600 dark:text-slate-400 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>A clean, mobile-friendly site on your own domain</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>No monthly hosting fees</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>You own everything with no platform lock-in</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>Live within 48 hours of us agreeing on the details</span>
                                </li>
                            </ul>

                            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                                <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Price</span>
                                <span className="text-3xl font-display font-bold text-slate-900 dark:text-white">$80 flat</span>
                            </div>
                        </div>

                        <div className="text-center mb-12">
                            <p className="text-slate-600 dark:text-slate-400">
                                Fill in the form below and I'll get back to you within 24 hours.
                            </p>
                        </div>

                        {/* Tally Form Embed */}
                        <div className="w-full bg-transparent rounded-2xl overflow-hidden min-h-[600px]">
                            <iframe 
                                data-tally-src="https://tally.so/embed/ZjzQy0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                                loading="lazy" 
                                width="100%" 
                                height="600" 
                                frameBorder="0" 
                                marginHeight={0} 
                                marginWidth={0} 
                                title="Get A Website"
                                className="w-full"
                            ></iframe>
                            <script async src="https://tally.so/widgets/embed.js"></script>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
