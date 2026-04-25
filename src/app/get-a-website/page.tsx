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

            <main className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-24 relative overflow-hidden">
                {/* Subtle Background Glows to keep it from being plain */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    {/* Header */}
                    <header className="text-center mb-24">
                        <h1 className="font-display text-6xl md:text-8xl font-bold mb-10 leading-[1.1] text-slate-900 dark:text-white tracking-tighter italic">
                            Get A <span className="text-primary underline decoration-primary/20 underline-offset-8">Website</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
                            I built this site from scratch - a live affiliate blog in the wellness niche. I can build you the same thing in your niche.
                        </p>
                    </header>

                    {/* Content Section */}
                    <div className="max-w-2xl mx-auto mb-24">
                        <div className="bg-slate-50 dark:bg-slate-900/40 backdrop-blur-sm p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl">
                            <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white uppercase tracking-tight italic">What you get:</h2>
                            <ul className="space-y-6 text-slate-600 dark:text-slate-400 list-none pl-0 mb-12">
                                <li className="flex items-start gap-4 text-lg">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>a clean, mobile-friendly site on your own domain with no monthly hosting fees.</span>
                                </li>
                                <li className="flex items-start gap-4 text-lg">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>You own everything with no platform lock-in.</span>
                                </li>
                                <li className="flex items-start gap-4 text-lg">
                                    <span className="text-primary font-bold">✓</span>
                                    <span>Live within 48 hours of us agreeing on the details.</span>
                                </li>
                            </ul>

                            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                                <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Price</span>
                                <span className="text-5xl font-display font-bold text-slate-900 dark:text-white">$80</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                Fill in the form below and I'll get back to you within 24 hours.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-2 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                            <div className="bg-slate-50/50 dark:bg-slate-950 rounded-[2.3rem] overflow-hidden min-h-[600px]">
                                <iframe 
                                    data-tally-src="https://tally.so/embed/ZjzQy0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                                    loading="lazy" 
                                    width="100%" 
                                    height="650" 
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
                </div>
            </main>

            <Footer />
        </>
    );
}
