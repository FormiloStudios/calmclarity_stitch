'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollObserver } from "@/components/ScrollObserver";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export default function DiffuserArticle() {
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

    if (!authorized) return <div className="min-h-screen bg-white dark:bg-slate-950" />;

    return (
        <>
            <ScrollObserver />
            <Nav />
            
            <main className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-20">
                <article className="max-w-[1200px] mx-auto px-6">
                    {/* Hero Section */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="flex justify-center mb-8">
                            <span className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-[0.65rem] font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
                                Sensory Wellness
                            </span>
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-slate-900 dark:text-white tracking-tight italic">
                            Best Aromatherapy Diffusers for Anxiety & Sleep (Compared)
                        </h1>
                    </div>

                    {/* Intro Image */}
                    <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl bg-slate-100 dark:bg-slate-900">
                        <img 
                            src="/arma_a.jpg" 
                            alt="Best Aromatherapy Diffusers" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Sidebar / Meta info */}
                        <div className="lg:col-span-4 space-y-12">
                            <div className="sticky top-32 space-y-12">
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-xs">Olfactory Science</p>
                                    <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-light">
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            Limbic System Access
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            Ultrasonic Technology
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            Conditioned Relaxation
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                                    <p className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-[0.7rem]">Top Pick</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                        ASAKUKI 300ml remains the benchmark for near-silent operation and long-term reliability.
                                    </p>
                                </div>
                                <AffiliateDisclosure />
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="lg:col-span-8 prose prose-lg dark:prose-invert prose-slate font-light leading-relaxed max-w-none">
                            <p>There's something almost immediate about walking into a room that smells of lavender or eucalyptus. Before you've consciously registered the scent, your breathing slows slightly, your shoulders drop a fraction, and your nervous system begins to shift. This isn't placebo - it's olfactory neuroscience. Scent is the only sense with a direct pathway to the limbic system, the brain's emotional processing and memory center. Every other sense routes through the thalamus first. Smell doesn't. That directness is why aromatherapy produces faster, more immediate effects on mood and anxiety than almost any other environmental intervention.</p>

                            <p>An essential oil diffuser is the most effective way to fill a room with therapeutic-quality aromatherapy consistently. A few drops in the right diffuser running for an hour before bed creates a consistent environmental cue that your nervous system learns to associate with safety and sleep - a conditioned relaxation response that builds over weeks of use.</p>

                            <img 
                                src="/arma_b.jpg" 
                                alt="Aromatherapy benefits" 
                                className="w-full rounded-3xl my-12 bg-slate-100 dark:bg-slate-900"
                            />

                            <p>The challenge is that Amazon has hundreds of diffusers that look nearly identical in product photos. The specs that actually determine whether a diffuser works for your room and situation - tank size, noise level, coverage area, timer options - are rarely explained clearly. This guide covers what those specs mean, the fundamental choice between ultrasonic and nebulizing diffusers, and six specific products from $13 to $85 for every room size and budget.</p>

                            <hr />

                            <h2>The Most Important Decision: Ultrasonic vs Nebulizing</h2>
                            <p>Before looking at any specific product, you need to understand the fundamental difference between the two types of diffusers. Getting this wrong is the most common reason people buy a diffuser and feel underwhelmed by the results.</p>
                            <p><strong>Ultrasonic diffusers</strong> use a small vibrating plate to create high-frequency sound waves in a water tank. These waves break the water (with a few drops of essential oil added) into a fine cool mist that carries the oil into the air. The result is a gentle, continuous scent that lasts as long as the water does. Ultrasonic diffusers are quiet, affordable, consume very little oil (since it's diluted with water), and add mild humidity to the air. They're the right choice for most bedrooms and everyday anxiety and sleep use. Every product on this list except the Vitruvi is ultrasonic.</p>
                            <p><strong>Nebulizing diffusers</strong> (also called waterless diffusers) use pressurized air to atomize pure essential oil directly - no water, no heat, no dilution. The result is a more concentrated, more potent scent experience with stronger therapeutic intensity. Nebulizing diffusers are better for larger spaces and for people who want maximum aromatherapy potency. The trade-offs: they use oil much faster, they're louder (due to the air pump), they cost more, and they require more frequent cleaning to prevent clogging.</p>
                            <p><strong>The practical decision for anxiety and sleep use:</strong> Start with an ultrasonic diffuser. They're quieter (critical for bedroom use), gentler (better for a calming rather than intensely stimulating scent experience), and more economical with oil. If you've used ultrasonic diffusers and found the scent too subtle, or if you have a large open living space, then consider a nebulizing option.</p>

                            <hr />

                            <h2>The 4 Specs That Actually Matter</h2>
                            <p><strong>Tank size (ml)</strong> determines how long the diffuser runs before it needs refilling. 100ml gives you roughly 3-4 hours on continuous mode. 300ml gives you 6-10 hours - enough for a full night. 500ml gives you all night on continuous mode with water to spare. 1500ml is for large rooms and extended use without refilling. For a bedroom diffuser used as a pre-sleep ritual, 300ml is the practical sweet spot.</p>
                            <p><strong>Noise level (dB)</strong> is the most overlooked spec and the most important for anxiety use. A diffuser that sounds like a small fan undermines the calming environment you're trying to create. Under 30dB is the standard to look for in a bedroom diffuser - quieter than a whisper. Under 20dB (like the ASAKUKI 300ml on this list) is essentially silent. Any diffuser you plan to run while sleeping or during meditation should be under 30dB.</p>
                            <p><strong>Coverage area (sq ft)</strong> tells you which room the diffuser can effectively fill. Most 100-300ml diffusers cover 150-300 square feet - a standard bedroom. 500ml models extend to living rooms. 1500ml models fill open-plan spaces and large rooms. Using a 100ml diffuser in a 500 sq ft living room produces a scent too faint to be therapeutic.</p>
                            <p><strong>Timer options</strong> allow the diffuser to shut off automatically, which matters both for safety (never leave a diffuser running unattended indefinitely) and for sleep use (you don't necessarily need it running all night). Look for at least 1h/3h/6h timer options plus continuous mode. A diffuser with only a continuous mode requires you to remember to turn it off.</p>

                            <hr />

                            <h2>How Many Drops and Which Oils to Use</h2>
                            <p>The oils article elsewhere in this series covers the best essential oils for anxiety in detail. For diffuser use specifically:</p>
                            <p><strong>How many drops:</strong> The standard starting point is 3-5 drops per 100ml of water. A 300ml tank takes 9-15 drops. More drops create a stronger scent but can become overwhelming - start at the lower end and adjust.</p>
                            <p><strong>Best oils for anxiety and sleep:</strong> Lavender is the most studied and most effective for anxiety and sleep. Bergamot reduces cortisol. Chamomile calms the nervous system. Frankincense grounds and slows the breath. Ylang ylang reduces heart rate and blood pressure. A combination of lavender and frankincense (or lavender and bergamot) in a diffuser is one of the most effective pre-sleep aromatherapy combinations available.</p>
                            <p><strong>When to run it:</strong> Start the diffuser 30-60 minutes before your intended bedtime. This fills the room with scent before you enter rather than requiring you to lie down in a cold-scented room. Running it throughout the night is fine but not necessary - most people fall asleep within 30-60 minutes once the room is properly scented.</p>

                            <hr />

                            <h2>Cleaning - The Step Most People Skip</h2>
                            <p>An uncleaned diffuser is a mold and bacteria risk. Water sitting in the tank between uses grows microorganisms, and misting those microorganisms into the air is counterproductive to everything you're trying to achieve.</p>
                            <p>Clean your diffuser every 7 days with a soft cloth and mild dish soap. Rinse thoroughly. For deeper cleaning once a month, add white vinegar to the water tank, run for 5 minutes, drain, and wipe clean. The ASAKUKI 300ml on this list has a wide-opening tank specifically designed to make cleaning easier - a practical detail most diffuser listings don't address.</p>

                            {/* Comparison Table */}
                            <div className="overflow-x-auto my-16 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm bg-slate-50 dark:bg-slate-900/30 p-4 md:p-8 text-center">
                                <h3 className="font-display text-2xl font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-tight italic">Quick Comparison Table</h3>
                                <table className="min-w-full text-sm font-light leading-relaxed">
                                    <thead>
                                        <tr className="border-b border-slate-200 dark:border-slate-800">
                                            <th className="py-4 text-left font-bold uppercase tracking-widest text-[0.6rem]">Diffuser</th>
                                            <th className="py-4 text-left font-bold uppercase tracking-widest text-[0.6rem]">Type</th>
                                            <th className="py-4 text-left font-bold uppercase tracking-widest text-[0.6rem]">Tank</th>
                                            <th className="py-4 text-left font-bold uppercase tracking-widest text-[0.6rem]">Runtime</th>
                                            <th className="py-4 text-left font-bold uppercase tracking-widest text-[0.6rem]">Coverage</th>
                                            <th className="py-4 text-left font-bold uppercase tracking-widest text-[0.6rem]">Noise</th>
                                            <th className="py-4 text-left font-bold uppercase tracking-widest text-[0.6rem]">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        <tr><td className="py-4">Homeweeks 300ml</td><td className="py-4">Ultrasonic</td><td className="py-4">300ml</td><td className="py-4">Up to 6h</td><td className="py-4">Small-medium</td><td className="py-4">Quiet</td><td className="py-4">$13</td></tr>
                                        <tr><td className="py-4">ASAKUKI 300ml</td><td className="py-4">Ultrasonic</td><td className="py-4">300ml</td><td className="py-4">10h</td><td className="py-4">Bedroom</td><td className="py-4">&lt; 20dB</td><td className="py-4">$18</td></tr>
                                        <tr><td className="py-4">InnoGear 100ml</td><td className="py-4">Ultrasonic</td><td className="py-4">100ml</td><td className="py-4">3–8h</td><td className="py-4">Desk/Small</td><td className="py-4">Quiet</td><td className="py-4">$26</td></tr>
                                        <tr><td className="py-4">ASAKUKI 500ml</td><td className="py-4">Ultrasonic</td><td className="py-4">500ml</td><td className="py-4">All night</td><td className="py-4">Living room</td><td className="py-4">&lt; 23dB</td><td className="py-4">$20.50</td></tr>
                                        <tr><td className="py-4">Exqline 1500ml</td><td className="py-4">Ultrasonic</td><td className="py-4">1500ml</td><td className="py-4">10–20h</td><td className="py-4">Large Room</td><td className="py-4">&lt; 35dB</td><td className="py-4">$40</td></tr>
                                        <tr><td className="py-4">Vitruvi Stone</td><td className="py-4">Ultrasonic</td><td className="py-4">90ml</td><td className="py-4">4–8h</td><td className="py-4">Up to 500sqft</td><td className="py-4">Quiet</td><td className="py-4">$85.70</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2>6 Best Aromatherapy Diffusers for Anxiety & Sleep</h2>

                            {/* Product 1 */}
                            <div className="space-y-12 my-24">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl shadow-xl">1</span>
                                    <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight italic mt-0">Homeweeks 300ml Essential Oil Diffuser</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.6rem] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full border border-primary/20 inline-block">💰 Best Budget</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6 text-[0.7rem] uppercase tracking-widest font-bold mb-8">
                                            <div>
                                                <p className="text-slate-400 mb-1">Price</p>
                                                <p className="text-slate-900 dark:text-white">$13.30</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 mb-1">Tank</p>
                                                <p className="text-slate-900 dark:text-white">300ml</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 mb-1">Link</p>
                                                <a href="https://amzn.to/48hTJJ9" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-black">Amazon</a>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">At $13.30 for a 300ml ultrasonic diffuser with remote control, timer, and wood grain aesthetic, the Homeweeks is the most accessible entry point on this list - and genuinely competitive with diffusers costing twice as much. The 300ml tank provides up to 6 hours of continuous mist, covering a full night's pre-sleep routine without needing a refill.</p>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The remote control at this price point is unusual - most budget diffusers require you to get up and press buttons on the unit. Being able to adjust settings from bed is a genuine quality-of-life feature for a bedroom sleep ritual.</p>
                                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-6">
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.6rem]">Pros</p>
                                                <ul className="text-xs space-y-2 text-slate-500 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                    <li>$13.30 - the most affordable diffuser on this list</li>
                                                    <li>Remote control - adjust settings from bed</li>
                                                    <li>300ml tank - 6 hours of continuous mist</li>
                                                    <li>Auto-shutoff when water runs out</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="https://amzn.to/48hTJJ9" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-[0.2em] text-[0.65rem] rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl">Check Homeweeks on Amazon →</a>
                                    </div>
                                    <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl group bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                        <img src="/arma_1.jpg" alt="Homeweeks 300ml Diffuser" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="space-y-12 my-24">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl shadow-xl">2</span>
                                    <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight italic mt-0">ASAKUKI 300ml Essential Oil Diffuser</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.6rem] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full border border-primary/20 inline-block">🏆 Best Overall / Quietest</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
                                    <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl group bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-1 order-2">
                                        <img src="/arma_2.jpg" alt="ASAKUKI 300ml Diffuser" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="space-y-6 md:order-2 order-1">
                                        <div className="grid grid-cols-2 gap-6 text-[0.7rem] uppercase tracking-widest font-bold mb-8">
                                            <div>
                                                <p className="text-slate-400 mb-1">Price</p>
                                                <p className="text-slate-900 dark:text-white">$18</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 mb-1">Noise</p>
                                                <p className="text-slate-900 dark:text-white">&lt; 20dB</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 mb-1">Link</p>
                                                <a href="https://amzn.to/41PZw4V" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-black">Amazon</a>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Under 20dB is the key spec that sets the ASAKUKI 300ml apart from almost every other diffuser at this price. For context, 20dB is quieter than a whisper. Most diffusers claim to be "quiet" - the ASAKUKI 300ml is genuinely, verifiably silent by any reasonable standard. For bedroom use, this is the single most important feature a diffuser can have.</p>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The 10-hour continuous runtime from a 300ml tank is also exceptional - most 300ml diffusers run for 6-8 hours. This means a full tank started at your bedtime runs through the entire night without needing a refill or an alarm to restart it.</p>
                                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-6">
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.6rem]">Pros</p>
                                                <ul className="text-xs space-y-2 text-slate-500 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                    <li>Under 20dB - the quietest diffuser on this list</li>
                                                    <li>10-hour runtime from 300ml - longest at this size</li>
                                                    <li>Wide-opening tank - easy filling and cleaning</li>
                                                    <li>Currently 49% off regular price</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="https://amzn.to/41PZw4V" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-[0.2em] text-[0.65rem] rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl">Check ASAKUKI on Amazon →</a>
                                    </div>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="space-y-12 my-24">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl shadow-xl">3</span>
                                    <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight italic mt-0">InnoGear 100ml Essential Oil Diffuser + 6 Oil Set</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.6rem] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full border border-primary/20 inline-block">🎁 Best Starter Kit</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6 text-[0.7rem] uppercase tracking-widest font-bold mb-8">
                                            <div>
                                                <p className="text-slate-400 mb-1">Price</p>
                                                <p className="text-slate-900 dark:text-white">$26</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 mb-1">Includes</p>
                                                <p className="text-slate-900 dark:text-white">6 Oils</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 mb-1">Link</p>
                                                <a href="https://amzn.to/4ttG4ac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-black">Amazon</a>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The InnoGear 100ml is the only diffuser on this list that comes bundled with essential oils - six of them, covering every major aromatherapy use case for anxiety and wellness. For anyone who doesn't yet own essential oils, this is the most complete and practical entry point.</p>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The six included oils cover: lavender, eucalyptus, tea tree, lemongrass, peppermint, and sweet orange. All are bottled in the USA from native plant sources with no additives, fillers, or carriers - a quality standard that matters since cheap essential oils are often diluted.</p>
                                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-6">
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.6rem]">Pros</p>
                                                <ul className="text-xs space-y-2 text-slate-500 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                    <li>Includes 6 essential oils - no separate purchase needed</li>
                                                    <li>Oils are 100% pure, bottled in USA</li>
                                                    <li>6-8 hour intermittent mode - extends tank through the night</li>
                                                    <li>Compact size - ideal for desks and small rooms</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="https://amzn.to/4ttG4ac" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-[0.2em] text-[0.65rem] rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl">Check InnoGear on Amazon →</a>
                                    </div>
                                    <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl group bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                        <img src="/arma_3.jpg" alt="InnoGear 100ml Diffuser" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                </div>
                            </div>

                            {/* Product 4 */}
                            <div className="space-y-12 my-24">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl shadow-xl">4</span>
                                    <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight italic mt-0">ASAKUKI 500ml Essential Oil Diffuser with Remote</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.6rem] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full border border-primary/20 inline-block">🛋️ Best for Living Room / Best Remote Control</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
                                    <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl group bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-1 order-2">
                                        <img src="/arma_4.jpg" alt="ASAKUKI 500ml Diffuser" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="space-y-6 md:order-2 order-1">
                                        <div className="grid grid-cols-2 gap-6 text-[0.7rem] uppercase tracking-widest font-bold mb-8">
                                            <div>
                                                <p className="text-slate-400 mb-1">Price</p>
                                                <p className="text-slate-900 dark:text-white">$20.50</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 mb-1">Tank</p>
                                                <p className="text-slate-900 dark:text-white">500ml</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 mb-1">Link</p>
                                                <a href="https://amzn.to/4sKfxUV" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-black">Amazon</a>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The ASAKUKI 500ml is the step up from the 300ml - same ultra-quiet motor (under 23dB), same auto-shutoff safety, but with a 500ml tank for significantly longer runtime and the addition of a remote control that works from up to 16.5 feet away.</p>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The remote control is genuinely useful. From bed, from the sofa, from across the room - you can change the mist setting, adjust the LED light, or set the timer without getting up. For a pre-sleep anxiety routine where you're already settled and relaxed, this is a meaningful quality-of-life feature.</p>
                                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-6">
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.6rem]">Pros</p>
                                                <ul className="text-xs space-y-2 text-slate-500 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                    <li>500ml tank - largest ultrasonic tank in mid-price range</li>
                                                    <li>Remote control works up to 16.5 feet</li>
                                                    <li>Under 23dB - near-silent operation</li>
                                                    <li>60/120/180 minute timers plus continuous mode</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="https://amzn.to/4sKfxUV" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-[0.2em] text-[0.65rem] rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl">Check ASAKUKI 500ml on Amazon →</a>
                                    </div>
                                </div>
                            </div>

                            {/* Product 5 */}
                            <div className="space-y-12 my-24">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl shadow-xl">5</span>
                                    <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight italic mt-0">Exqline 1500ml Large Room Essential Oil Diffuser</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.6rem] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full border border-primary/20 inline-block">🏠 Best for Large Rooms</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6 text-[0.7rem] uppercase tracking-widest font-bold mb-8">
                                            <div>
                                                <p className="text-slate-400 mb-1">Price</p>
                                                <p className="text-slate-900 dark:text-white">$40</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 mb-1">Tank</p>
                                                <p className="text-slate-900 dark:text-white">1500ml</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 mb-1">Link</p>
                                                <a href="https://amzn.to/3OowPcm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-black">Amazon</a>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Everything about the Exqline 1500ml is scaled up for large spaces. At nearly half a gallon of capacity, a full tank runs for 10-20 hours - you could fill it Sunday night and not refill it until Tuesday. The coverage of 450 sq ft makes it appropriate for open-plan living areas, large bedrooms, and yoga spaces.</p>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The 270-degree rotation knob for humidity level adjustment is a feature no other diffuser on this list has - it allows precise control of mist density. Vapor exits from the side of the lid rather than the top, creating a more directional scent distribution.</p>
                                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-6">
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.6rem]">Pros</p>
                                                <ul className="text-xs space-y-2 text-slate-500 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                    <li>1500ml tank - by far the largest on this list</li>
                                                    <li>10-20 hour runtime - days between refills</li>
                                                    <li>450 sq ft aromatherapy coverage - largest on this list</li>
                                                    <li>270° rotation humidity control - precise adjustment</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="https://amzn.to/3OowPcm" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-[0.2em] text-[0.65rem] rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl">Check Exqline on Amazon →</a>
                                    </div>
                                    <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl group bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                        <img src="/arma_5.jpg" alt="Exqline 1500ml Diffuser" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                </div>
                            </div>

                            {/* Product 6 */}
                            <div className="space-y-12 my-24">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl shadow-xl">6</span>
                                    <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight italic mt-0">Vitruvi Stone Diffuser — Ceramic Ultrasonic</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.6rem] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full border border-primary/20 inline-block">🎨 Best Design / Best Premium</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
                                    <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl group bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-1 order-2">
                                        <img src="/arma_6.jpg" alt="Vitruvi Stone Diffuser" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="space-y-6 md:order-2 order-1">
                                        <div className="grid grid-cols-2 gap-6 text-[0.7rem] uppercase tracking-widest font-bold mb-8">
                                            <div>
                                                <p className="text-slate-400 mb-1">Price</p>
                                                <p className="text-slate-900 dark:text-white">$85.70</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 mb-1">Material</p>
                                                <p className="text-slate-900 dark:text-white">Ceramic</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-400 mb-1">Link</p>
                                                <a href="https://amzn.to/41R0fTw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-black">Amazon</a>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The Vitruvi Stone is the only diffuser on this list made from ceramic rather than plastic - and that distinction matters beyond aesthetics. The hand-molded matte ceramic cover looks like a piece of studio pottery. It belongs on a design-conscious bedside table alongside carefully chosen objects.</p>
                                        <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The 90ml tank is the smallest on this list: in continuous mode, it runs for 4 hours. In intermittent mode, it runs for 8 hours. This is sufficient for a pre-sleep ritual but requires a nightly refill. The coverage area of up to 500 sq ft is impressive for the tank size.</p>
                                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-6">
                                            <div>
                                                <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.6rem]">Pros</p>
                                                <ul className="text-xs space-y-2 text-slate-500 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                    <li>Hand-molded matte ceramic - the most beautiful diffuser by far</li>
                                                    <li>Consistently rated best-designed diffuser by major publications</li>
                                                    <li>500 sq ft coverage despite small tank</li>
                                                    <li>Currently 34% off regular price</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a href="https://amzn.to/41R0fTw" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-[0.2em] text-[0.65rem] rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl">Check Vitruvi Stone on Amazon →</a>
                                    </div>
                                </div>
                            </div>

                            <h2>How to Choose the Right Diffuser</h2>
                            <p><strong>If you want the most affordable option with remote control:</strong> Homeweeks 300ml at $13.30 - budget price, useful features, wood grain aesthetic.</p>
                            <p><strong>If you want the quietest diffuser for a bedroom:</strong> ASAKUKI 300ml at $18 - under 20dB, 10-hour runtime, the best performing bedroom diffuser at this price.</p>
                            <p><strong>If you don't own essential oils yet:</strong> InnoGear 100ml + 6 Oils at $26 - everything you need to start in one box.</p>
                            <p><strong>If you want to diffuse in a living room with remote control:</strong> ASAKUKI 500ml at $20.50 - 500ml tank, 16.5-foot remote, near-silent operation.</p>
                            <p><strong>If you have a large open-plan space:</strong> Exqline 1500ml at $40 - the only diffuser on this list that fills a large room effectively.</p>
                            <p><strong>If design matters as much as function:</strong> Vitruvi Stone at $85.70 - hand-molded ceramic, looks like pottery, the best-designed diffuser available.</p>

                            <hr />

                            <h2>The Science of Aromatherapy for Anxiety</h2>
                            <p>Aromatherapy works through the olfactory system - the most direct sensory pathway to the brain's emotional centers. When you inhale a scent, volatile molecules travel through the nasal cavity to the olfactory epithelium, where they bind to specialized receptors. These receptors send signals directly to the amygdala and hippocampus - the brain's anxiety-processing and memory centers - without passing through the thalamic relay station that filters other sensory input.</p>
                            <p>The clinical research on lavender aromatherapy specifically is the strongest in the field. A 2015 meta-analysis in Evidence-Based Complementary and Alternative Medicine examined 15 randomized controlled trials and found that lavender aromatherapy significantly reduced anxiety measures across multiple populations. The mechanism involves linalool and linalyl acetate which have demonstrated GABAergic activity in animal studies, producing sedative and anxiolytic effects through the same neural pathway targeted by benzodiazepines, but far more gently.</p>

                            <hr />

                            <h2>Safety Notes</h2>
                            <p><strong>Essential oils and pets:</strong> Cats lack the liver enzymes to metabolize certain essential oils and are particularly sensitive to tea tree, eucalyptus, citrus oils, and peppermint. Ensure pets can leave a diffused room freely.</p>
                            <p><strong>Children:</strong> Diffused essential oils in rooms with infants under 3 months should be used cautiously. Avoid eucalyptus and peppermint around young children.</p>
                            <p><strong>Pregnancy:</strong> Consult a healthcare provider before using essential oils during pregnancy. Several oils (including rosemary, clary sage, and some citrus oils) are advised against during pregnancy.</p>

                            <div className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 my-16">
                                <h3 className="font-display text-2xl font-bold mb-6 text-slate-900 dark:text-white uppercase tracking-tight italic">FAQ</h3>
                                <div className="space-y-6 text-sm font-light leading-relaxed">
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-1">How many drops of essential oil should I use?</p>
                                        <p className="text-slate-600 dark:text-slate-400">Start with 3-5 drops per 100ml of water. A 300ml tank takes 9-15 drops. Begin at the lower end - you can always add more.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-1">How long should I run the diffuser before bed?</p>
                                        <p className="text-slate-600 dark:text-slate-400">Start 30-60 minutes before your intended sleep time. This fills the room with scent before you settle down.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-1">How often should I clean my diffuser?</p>
                                        <p className="text-slate-600 dark:text-slate-400">Every 7 days with mild soap and water. Monthly deep clean with white vinegar. Skipping cleaning leads to mold growth.</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white mb-1">Are diffusers safe for pets?</p>
                                        <p className="text-slate-600 dark:text-slate-400">With caution. Cats are particularly sensitive to certain oils. Ensure pets can leave the room and use pet-safe oils like lavender in well-ventilated spaces.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-12 rounded-[3rem] my-24 shadow-2xl relative overflow-hidden text-center">
                                <h2 className="text-3xl font-display font-bold mb-8 text-white dark:text-slate-900 uppercase tracking-tight italic mt-0">Final Verdict</h2>
                                <img 
                                    src="/arma_c.jpg" 
                                    alt="Aromatherapy verdict" 
                                    className="w-full rounded-2xl mb-8 object-cover h-48 bg-slate-800 dark:bg-slate-200"
                                />
                                <div className="space-y-4 text-white/80 dark:text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
                                    <p>For most people starting out, the <strong>ASAKUKI 300ml at $18</strong> is the right choice. Under 20dB makes it genuinely silent in a bedroom, and the 10-hour runtime covers a full night from a single fill.</p>
                                    <p>If you're starting from scratch and don't own essential oils yet, the <strong>InnoGear 100ml + 6 Oils set at $26</strong> gives you everything needed to begin.</p>
                                    <p>For living room use or anyone who wants remote control from bed, the <strong>ASAKUKI 500ml at $20.50</strong> adds the larger tank and 16.5-foot remote.</p>
                                    <p>And if you want a diffuser that belongs in a thoughtfully designed room, the <strong>Vitruvi Stone at $85.70</strong> is the premium choice.</p>
                                    <p className="font-bold text-white dark:text-slate-900 mt-8">Run whichever you choose for 30 minutes before bed with lavender oil for one week. The environment it creates will tell you everything you need to know about whether aromatherapy belongs in your toolkit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            
            <Footer />
        </>
    );
}
