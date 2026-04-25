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

            <main className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-24 overflow-hidden relative">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    {/* Header */}
                    <header className="text-center mb-24">
                        <div className="flex justify-center mb-8">
                            <span className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[0.65rem] font-bold uppercase tracking-[0.4em] px-6 py-2 rounded-full shadow-xl">
                                Private Offer
                            </span>
                        </div>
                        <h1 className="font-display text-6xl md:text-8xl font-bold mb-10 leading-[0.9] text-slate-900 dark:text-white tracking-tighter italic">
                            Get A <span className="text-primary underline decoration-primary/20 underline-offset-8">Website</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-3xl mx-auto italic">
                            I built this site from scratch - a live affiliate blog in the wellness niche. I can build you the same thing in your niche.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left: Value Proposition */}
                        <div className="space-y-12">
                            <div className="bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-xl p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 shadow-2xl relative group overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform duration-700 group-hover:scale-110">
                                    <svg viewBox="0 0 24 24" className="w-32 h-32 fill-current text-primary" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.44c-.31.17-.66.26-1 .26s-.69-.09-1-.26l-7.97-4.44c-.31-.17-.53-.5-.53-.88v-9c0-.38.21-.71.53-.88l7.97-4.44c.31-.17.66-.26 1-.26s.69.09 1 .26l7.97 4.44c.31.17.53.5.53.88v9z" />
                                    </svg>
                                </div>
                                
                                <h2 className="text-3xl font-display font-bold mb-10 text-slate-900 dark:text-white uppercase italic tracking-tight">The Package</h2>
                                
                                <div className="grid grid-cols-1 gap-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-slate-700">
                                            <span className="text-primary font-bold text-xl">01</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-2">Modern Build</h3>
                                            <p className="text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed">A clean, mobile-friendly site on your own domain with cutting-edge performance.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-slate-700">
                                            <span className="text-primary font-bold text-xl">02</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-2">Zero Overhead</h3>
                                            <p className="text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed">No monthly hosting fees ever. You own everything with absolutely no platform lock-in.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-slate-700">
                                            <span className="text-primary font-bold text-xl">03</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-xs mb-2">Rapid Launch</h3>
                                            <p className="text-slate-600 dark:text-slate-400 font-light text-sm leading-relaxed">Live within 48 hours of us agreeing on the details. Move fast and break into your niche.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center">
                                    <span className="text-slate-400 uppercase tracking-[0.5em] text-[0.6rem] font-bold mb-4">Investment</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tighter">$80</span>
                                        <span className="text-slate-400 text-sm font-light italic">All-in</span>
                                    </div>
                                </div>
                            </div>

                            <div className="px-12">
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed italic text-center">
                                    "I focus on clean, high-performance affiliate sites that rank well and convert visitors into customers."
                                </p>
                            </div>
                        </div>

                        {/* Right: Form Section */}
                        <div className="relative">
                            <div className="bg-slate-900 dark:bg-slate-900 p-1 rounded-[3rem] shadow-3xl">
                                <div className="bg-white dark:bg-slate-950 p-8 md:p-12 rounded-[2.8rem] relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
                                    
                                    <div className="mb-10">
                                        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 italic">Start Your Project</h2>
                                        <p className="text-slate-600 dark:text-slate-400 font-light text-sm">
                                            Fill in the form below and I'll get back to you within 24 hours to discuss your niche.
                                        </p>
                                    </div>

                                    {/* Tally Form Embed Wrapper */}
                                    <div className="w-full bg-slate-50/50 dark:bg-slate-900/50 rounded-3xl overflow-hidden min-h-[500px] border border-slate-100 dark:border-slate-800">
                                        <iframe 
                                            data-tally-src="https://tally.so/embed/ZjzQy0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                                            loading="lazy" 
                                            width="100%" 
                                            height="550" 
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

                            {/* Floating decorative card */}
                            <div className="absolute -bottom-6 -right-6 hidden lg:block bg-primary text-white px-8 py-4 rounded-2xl shadow-2xl rotate-3">
                                <p className="text-[0.6rem] uppercase tracking-widest font-bold">Limited Availability</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
