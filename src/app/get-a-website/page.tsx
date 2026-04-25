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
        
        if (authorized) {
            const script = document.createElement('script');
            script.src = "https://tally.so/widgets/embed.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, [router, authorized]);

    if (!authorized) return null;

    return (
        <>
            <ScrollObserver />
            <Nav />

            <main className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-24 relative overflow-hidden">
                {/* Visual Depth Background */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
                    <div className="absolute top-[10%] right-[-5%] w-[50%] h-[50%] bg-slate-100 dark:bg-primary/5 rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-[10%] left-[-5%] w-[50%] h-[50%] bg-slate-50 dark:bg-primary/5 rounded-full blur-[150px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    {/* Header */}
                    <header className="text-center mb-24">
                        <h1 className="font-display text-6xl md:text-8xl font-bold mb-10 leading-[1.1] text-slate-900 dark:text-white tracking-tighter italic">
                            Get A <span className="text-primary underline decoration-primary/20 underline-offset-8">Website</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-900 dark:text-white font-medium leading-relaxed max-w-2xl mx-auto italic">
                            I built this site from scratch - a live affiliate blog in the wellness niche. I can build you the same thing in your niche.
                        </p>
                    </header>

                    {/* Content Section */}
                    <div className="max-w-3xl mx-auto mb-24">
                        <div className="bg-slate-950 dark:bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-slate-800 dark:border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
                            
                            <h2 className="text-2xl font-bold mb-10 text-white dark:text-white uppercase tracking-[0.2em] italic">What you get:</h2>
                            <ul className="space-y-8 text-white/90 dark:text-white/90 list-none pl-0 mb-12">
                                <li className="flex items-start gap-5 text-lg md:text-2xl leading-relaxed font-light">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-primary/20">
                                        <span className="text-white text-sm">✓</span>
                                    </div>
                                    <span>a clean, mobile-friendly site on your own domain with no monthly hosting fees.</span>
                                </li>
                                <li className="flex items-start gap-5 text-lg md:text-2xl leading-relaxed font-light">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 border border-white/20">
                                        <span className="text-primary text-sm font-bold">✓</span>
                                    </div>
                                    <span>You own everything with no platform lock-in.</span>
                                </li>
                                <li className="flex items-start gap-5 text-lg md:text-2xl leading-relaxed font-light">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1 border border-white/20">
                                        <span className="text-primary text-sm font-bold">✓</span>
                                    </div>
                                    <span>Live within 48 hours of us agreeing on the details.</span>
                                </li>
                            </ul>

                            <div className="pt-10 border-t border-white/10 flex justify-between items-center">
                                <span className="text-slate-400 uppercase tracking-[0.5em] text-[0.7rem] font-bold">Investment</span>
                                <span className="text-7xl font-display font-bold text-white tracking-tighter shadow-sm">$80</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">
                                Fill in the form below and I'll get back to you within 24 hours.
                            </p>
                        </div>

                        {/* Form Container with High-Contrast Filter */}
                        <div className="relative p-1 rounded-[4rem] bg-gradient-to-b from-slate-600 to-slate-900 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.6)]">
                            <div className="bg-white dark:bg-slate-950 rounded-[3.9rem] overflow-hidden">
                                <div className="w-full min-h-[700px]">
                                    <iframe 
                                        src="https://tally.so/embed/ZjzQy0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                                        width="100%" 
                                        height="700" 
                                        frameBorder="0" 
                                        marginHeight={0} 
                                        marginWidth={0} 
                                        title="Get A Website"
                                        className="w-full contrast-[1.1] brightness-[0.95]"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
