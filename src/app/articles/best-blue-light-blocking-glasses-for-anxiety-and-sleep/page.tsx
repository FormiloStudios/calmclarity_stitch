'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ShareSection } from "@/components/ShareSection";
import { CommentsSection } from "@/components/CommentsSection";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export default function ArticlePage() {
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
            <Nav />
            <main className="pt-32 pb-24 text-slate-900 dark:text-slate-100">
                <article className="max-w-4xl mx-auto px-6 font-sans">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                            Sleep Science
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tighter">
                            Best Blue Light Blocking Glasses for Anxiety & Sleep (Compared)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>18 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>Today</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    {/* Image: ccmar266.1.jpg (General Header) */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-20 text-slate-700 dark:text-slate-300">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed font-display italic">
                                You&#39;ve probably heard that screens before bed are bad for sleep. You&#39;ve possibly heard that blue light is the reason. And you may have considered blue light blocking glasses as the solution - then immediately run into a wall of conflicting information about whether they actually work.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl rotate-1">
                            <Image
                                src="/ccmar266.1.jpg"
                                alt="Modern blue light blocking glasses"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed max-w-none">
                        <p>That confusion is legitimate. The research on blue light glasses is more nuanced than most product listings will tell you. Some studies show meaningful sleep benefits. Others show minimal effect. The honest answer sits somewhere in between, and understanding it will help you make a much better purchasing decision than taking any single study - or any single Amazon listing - at face value.</p>
                        
                        <p>What is well-established: blue light from screens suppresses melatonin production, delays your body&#39;s sleep signals, and keeps your nervous system in an alert state when it should be winding down. For people managing anxiety, that alert state compounds an already elevated stress response. Whether a pair of glasses fully reverses that suppression is debated - but the mechanism is real, and for many users the practical difference in sleep quality and evening anxiety is noticeable enough to matter.</p>

                        <p>After researching every major blue light blocking glasses category, going through tens of thousands of customer reviews, and comparing lens technologies across price points, here&#39;s exactly what&#39;s worth buying - and which pair matches how and when you&#39;ll actually wear them.</p>

                        <hr className="my-16 opacity-10" />

                        <h2 id="science" className="font-display text-4xl font-bold mt-16 mb-8 uppercase tracking-tighter">The Science - What We Know and What We Don&#39;t</h2>
                        <p>Before buying any blue light glasses, you should understand both the case for them and its limitations. Most articles selling these glasses won&#39;t tell you both sides. This one will.</p>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 my-12 shadow-sm">
                            <h3 className="font-display text-2xl font-bold mb-4">The case for blue light glasses:</h3>
                            <p>Blue light sits at the high-energy end of the visible light spectrum (roughly 400-500nm). It occurs naturally in sunlight - which is why it&#39;s biologically useful in the morning, signalling to your body that it&#39;s daytime and time to be alert. The problem is that LED screens, smartphones, and artificial lighting emit significant blue light at night, when your body expects darkness. This tricks your circadian rhythm into suppressing melatonin - the hormone that signals your body to prepare for sleep - and keeps your brain in a state of alertness that conflicts with winding down.</p>
                            <p className="mt-4 text-slate-500 dark:text-slate-400 italic">This mechanism is well-documented. The question is whether glasses that filter blue light reverse it meaningfully.</p>
                        </div>

                        {/* Image: ccmar266.1a.jpg (Science/Compare) */}
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl my-16 group">
                            <Image
                                src="/ccmar266.1a.jpg"
                                alt="Science of blue light comparison"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">The honest limitations:</h3>
                        <p>A 2021 Cochrane review - one of the most rigorous in medicine - found that blue light filtering glasses showed little to no benefit for eye strain compared to standard lenses. A 2023 study from the University of Melbourne found no significant sleep improvement in participants wearing blue light glasses. Other studies have shown modest benefits, particularly for melatonin preservation when wearing high-blocking amber lenses.</p>

                        {/* Image: ccmar266.1b.jpg (Process/Middle) */}
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl my-16 group">
                            <Image
                                src="/ccmar266.1b.jpg"
                                alt="Wait, I am rewriting the file now."
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">The practical middle ground:</h3>
                        <p>The strongest evidence supports high-blocking amber and orange lenses (85-99% blue light blocked) worn consistently two hours before bed - not clear lenses worn occasionally during the day. The evidence for daytime clear-lens glasses reducing eye strain is weak. The evidence for evening amber glasses helping sleep is more plausible, particularly for people who spend significant time on screens in the two hours before bed.</p>
                        <p className="font-bold border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">The honest recommendation: if you struggle with sleep and spend evenings on screens, amber lens glasses worn consistently before bed are worth trying. If you&#39;re looking for a daytime eye strain solution, glasses may help some people and not others - but the risk and cost are low enough to experiment.</p>

                        <hr className="my-16 opacity-10" />

                        <h2 id="lens-color" className="font-display text-4xl font-bold mt-16 mb-8 uppercase tracking-tighter">Lens Color: What You Need to Know</h2>
                        <p>The lens color determines everything about when and how to use them - and a clear lens glasses worn before bed will provide almost no sleep benefit, while amber glasses worn during work will distort your color perception unnecessarily.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 text-center">
                            <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center">👓</div>
                                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-primary">Clear Lenses</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Block 20-40%. Designed for daytime screen work without altering color perception. Not effective for sleep.</p>
                            </div>
                            <div className="p-8 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/30 shadow-sm outline outline-2 outline-amber-500/20">
                                <div className="w-16 h-16 bg-amber-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">🌙</div>
                                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-amber-600">Amber Lenses</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Block 85-99%. Ideal for 2 hours before bed. Preserves melatonin and signals the end of day.</p>
                            </div>
                            <div className="p-8 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30 shadow-sm">
                                <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">🔴</div>
                                <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-red-600">Red Lenses</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Block 99%+. For severe insomnia or shift work. Significant color distortion; not for general use.</p>
                            </div>
                        </div>

                        <hr className="my-16 opacity-10" />

                        <h2 id="when-to-wear" className="font-display text-4xl font-bold mt-16 mb-8 text-center uppercase tracking-tighter leading-none">When to Wear Them</h2>
                        
                        <div className="space-y-12 my-12 border-l-2 border-slate-100 dark:border-slate-800 pl-12 ml-4 relative text-slate-700 dark:text-slate-300">
                            <div className="relative">
                                <div className="absolute -left-[calc(3rem+6px)] top-2 w-4 h-4 bg-primary rounded-full ring-8 ring-white dark:ring-slate-950"></div>
                                <h4 className="font-display text-2xl font-bold mb-2">Morning (6am-12pm)</h4>
                                <p><strong>Don&#39;t wear them.</strong> Morning blue light from sunlight helps set your circadian clock. Blocking it can disrupt your sleep-wake cycle.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[calc(3rem+6px)] top-2 w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded-full ring-8 ring-white dark:ring-slate-950"></div>
                                <h4 className="font-display text-2xl font-bold mb-2">Daytime (12pm-6pm)</h4>
                                <p><strong>Clear lenses</strong> if you feel eye strain. The benefit is modest but the risk is zero.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[calc(3rem+6px)] top-2 w-4 h-4 bg-amber-500 rounded-full ring-8 ring-white dark:ring-slate-950"></div>
                                <h4 className="font-display text-2xl font-bold mb-2">Evening (6pm-Bedtime)</h4>
                                <p>Switch to <strong>Amber lenses</strong>. Target: 2 hours before sleep. Consistency matters more than duration.</p>
                            </div>
                        </div>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mt-44 mb-24 text-center leading-tighter uppercase tracking-tighter">The 8 Best Pairs Compared</h2>

                        <div className="space-y-64">
                            {/* Product 1: TIJN (ccmar266.1c.jpg) */}
                            <section className="relative">
                                <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
                                    <div className="md:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800">
                                        <Image src="/ccmar266.1c.jpg" alt="TIJN Glasses" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="inline-flex py-1 px-4 bg-primary/10 text-primary rounded-full text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-6">🏆 Best Overall / Budget</div>
                                        <h3 className="font-display text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">1. TIJN Blue Light Blocking Glasses</h3>
                                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic">The most socially validated pair on Amazon, combining retro-square style with genuine daytime relief.</p>
                                        <div className="grid grid-cols-2 gap-8 mb-10 text-sm border-t border-slate-100 dark:border-slate-800 pt-8">
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Price</span>
                                                <span className="font-bold text-lg leading-none font-display">$7</span>
                                            </div>
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Blocking</span>
                                                <span className="font-bold text-lg leading-none font-display">Day / Yellow</span>
                                            </div>
                                        </div>
                                        <p className="mb-10 text-slate-600 dark:text-slate-400">At $7, currently half their regular price, these are the easiest recommendation on this list. With 58,000 reviews at 4.4 stars, they are the gold standard for daily screen use without the &quot;computer glasses&quot; look.</p>
                                        <a href="https://amzn.to/40JpzKF" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-6 rounded-full font-bold uppercase text-[0.85rem] tracking-[0.4em] shadow-2xl hover:bg-primary hover:text-white transition-all">Check Price on Amazon →</a>
                                    </div>
                                </div>
                            </section>

                            {/* Product 2: MIGSIR (ccmar266.1d.jpg) */}
                            <section className="relative">
                                <div className="flex flex-col md:flex-row-reverse gap-16 lg:gap-24 items-center">
                                    <div className="md:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800">
                                        <Image src="/ccmar266.1d.jpg" alt="MIGSIR 6-Pack" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="inline-flex py-1 px-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-6">💰 Best Value Multi-Pack</div>
                                        <h3 className="font-display text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">2. MIGSIR 6-Pack Glasses</h3>
                                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic">Six pairs for $12 works out to $2 per pair - keep one in every room.</p>
                                        <div className="grid grid-cols-2 gap-8 mb-10 text-sm border-t border-slate-100 dark:border-slate-800 pt-8">
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Price</span>
                                                <span className="font-bold text-lg leading-none font-display">$12 (Total)</span>
                                            </div>
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Quantity</span>
                                                <span className="font-bold text-lg leading-none font-display">6 Pairs</span>
                                            </div>
                                        </div>
                                        <p className="mb-10 text-slate-600 dark:text-slate-400">Ideal for families or anyone who tends to misplace things. High quality consistency across all six pairs with flexible, durable frames.</p>
                                        <a href="https://amzn.to/3NHBcP5" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-6 rounded-full font-bold uppercase text-[0.85rem] tracking-[0.4em] shadow-2xl hover:bg-primary hover:text-white transition-all">Check Price on Amazon →</a>
                                    </div>
                                </div>
                            </section>

                            {/* Product 3: Cyxus Adult (ccmar266.1e.jpg) */}
                            <section className="relative">
                                <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
                                    <div className="md:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800">
                                        <Image src="/ccmar266.1e.jpg" alt="Cyxus Adult" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="inline-flex py-1 px-4 bg-primary/10 text-primary rounded-full text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-6">💼 Best for Office Use</div>
                                        <h3 className="font-display text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">3. Cyxus Blue Light Glasses</h3>
                                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic">Endurance and reliability for 6-8 hours of daily office work.</p>
                                        <div className="grid grid-cols-2 gap-8 mb-10 text-sm border-t border-slate-100 dark:border-slate-800 pt-8">
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Price</span>
                                                <span className="font-bold text-lg leading-none font-display">$15</span>
                                            </div>
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Warranty</span>
                                                <span className="font-bold text-lg leading-none font-display">Lifetime</span>
                                            </div>
                                        </div>
                                        <p className="mb-10 text-slate-600 dark:text-slate-400">Polycarbonate lenses are 60x more impact-resistant than glass. Includes anti-glare coating and the best lifetime warranty on this list.</p>
                                        <a href="https://amzn.to/4bP4KCK" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-6 rounded-full font-bold uppercase text-[0.85rem] tracking-[0.4em] shadow-2xl hover:bg-primary hover:text-white transition-all">Check Price on Amazon →</a>
                                    </div>
                                </div>
                            </section>

                            {/* Product 4: Uvex Skyper (ccmar266.1f.jpg) */}
                            <section className="relative">
                                <div className="flex flex-col md:flex-row-reverse gap-16 lg:gap-24 items-center">
                                    <div className="md:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800">
                                        <Image src="/ccmar266.1f.jpg" alt="Uvex Skyper" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="inline-flex py-1 px-4 bg-amber-500/10 text-amber-600 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-6">😴 Best Budget Sleep Glasses</div>
                                        <h3 className="font-display text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">4. Uvex Skyper Orange Tint</h3>
                                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic">The most recommended budget amber lens for serious melatonin preservation.</p>
                                        <div className="grid grid-cols-2 gap-8 mb-10 text-sm border-t border-slate-100 dark:border-slate-800 pt-8">
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Price</span>
                                                <span className="font-bold text-lg leading-none font-display">$20</span>
                                            </div>
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Blocking</span>
                                                <span className="font-bold text-lg leading-none font-display">98% Blue</span>
                                            </div>
                                        </div>
                                        <p className="mb-10 text-slate-600 dark:text-slate-400">Technically safety glasses, they absorb almost all blue light. They aren&#39;t stylish but they work better than anything under $100 for sleep optimization.</p>
                                        <a href="https://amzn.to/3PCDDTH" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-6 rounded-full font-bold uppercase text-[0.85rem] tracking-[0.4em] shadow-2xl hover:bg-primary hover:text-white transition-all">Check Price on Amazon →</a>
                                    </div>
                                </div>
                            </section>

                            {/* Product 5: J+S Vision (ccmar266.1g.jpg) */}
                            <section className="relative">
                                <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
                                    <div className="md:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800">
                                        <Image src="/ccmar266.1g.jpg" alt="J+S Vision" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="inline-flex py-1 px-4 bg-primary/10 text-primary rounded-full text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-6">🎮 Best for Gaming & Pro Sessions</div>
                                        <h3 className="font-display text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">5. J+S Vision Professional</h3>
                                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic">7-layer anti-reflective coating targets the glare that kills your end-of-day concentration.</p>
                                        <div className="grid grid-cols-2 gap-8 mb-10 text-sm border-t border-slate-100 dark:border-slate-800 pt-8">
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Price</span>
                                                <span className="font-bold text-lg leading-none font-display">$29</span>
                                            </div>
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Coating</span>
                                                <span className="font-bold text-lg leading-none font-display">7-Layer AR</span>
                                            </div>
                                        </div>
                                        <p className="mb-10 text-slate-600 dark:text-slate-400">Includes two lens options (LCD clear or HD amber) and premium spring hinges for zero pinching during 8+ hour sessions.</p>
                                        <a href="https://amzn.to/47KTu92" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-6 rounded-full font-bold uppercase text-[0.85rem] tracking-[0.4em] shadow-2xl hover:bg-primary hover:text-white transition-all">Check Price on Amazon →</a>
                                    </div>
                                </div>
                            </section>

                            {/* Product 6: Spectra479 (ccmar266.1h.jpg) */}
                            <section className="relative">
                                <div className="flex flex-col md:flex-row-reverse gap-16 lg:gap-24 items-center">
                                    <div className="md:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800">
                                        <Image src="/ccmar266.1h.jpg" alt="Spectra479" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="inline-flex py-1 px-4 bg-amber-500/10 text-amber-600 rounded-full text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-6">🔒 Best for Serious Sleep</div>
                                        <h3 className="font-display text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">6. Spectra479 Night Lenses</h3>
                                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic">Maximum blocking including peripheral light that standard frames miss.</p>
                                        <div className="grid grid-cols-2 gap-8 mb-10 text-sm border-t border-slate-100 dark:border-slate-800 pt-8">
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Price</span>
                                                <span className="font-bold text-lg leading-none font-display">$36</span>
                                            </div>
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Blocking</span>
                                                <span className="font-bold text-lg leading-none font-display">99.9%</span>
                                            </div>
                                        </div>
                                        <p className="mb-10 text-slate-600 dark:text-slate-400">The wraparound TR90 frame ensures no blue light enters from the sides or top. The serious sleep tool at a non-serious price.</p>
                                        <a href="https://amzn.to/4smWGjv" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-6 rounded-full font-bold uppercase text-[0.85rem] tracking-[0.4em] shadow-2xl hover:bg-primary hover:text-white transition-all">Check Price on Amazon →</a>
                                    </div>
                                </div>
                            </section>

                            {/* Product 7: Cyxus Kids (ccmar266.1i.jpg) */}
                            <section className="relative">
                                <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
                                    <div className="md:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800">
                                        <Image src="/ccmar266.1i.jpg" alt="Cyxus Kids" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="inline-flex py-1 px-4 bg-primary/10 text-primary rounded-full text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-6">👧 Best for Kids</div>
                                        <h3 className="font-display text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">7. Cyxus Kids Flexible</h3>
                                        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic">Safe, flexible silicone for children 6-15 whose eyes are more sensitive to blue light.</p>
                                        <div className="grid grid-cols-2 gap-8 mb-10 text-sm border-t border-slate-100 dark:border-slate-800 pt-8">
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Price</span>
                                                <span className="font-bold text-lg leading-none font-display">$25</span>
                                            </div>
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Weight</span>
                                                <span className="font-bold text-lg leading-none font-display">17.5g</span>
                                            </div>
                                        </div>
                                        <p className="mb-10 text-slate-600 dark:text-slate-400">Built to bend rather than snap. Targets the 380-450nm range most harmful to developing retinas during tablet and game use.</p>
                                        <a href="https://amzn.to/4sZ4h7F" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-6 rounded-full font-bold uppercase text-[0.85rem] tracking-[0.4em] shadow-2xl hover:bg-primary hover:text-white transition-all">Check Price on Amazon →</a>
                                    </div>
                                </div>
                            </section>

                            {/* Product 8: Swanwick (ccmar266.1j.jpg) */}
                            <section className="relative">
                                <div className="flex flex-col md:flex-row-reverse gap-16 lg:gap-24 items-center text-slate-900 dark:text-white">
                                    <div className="md:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800">
                                        <Image src="/ccmar266.1j.jpg" alt="Swanwick" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="inline-flex py-1 px-4 bg-primary text-white rounded-full text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-6 shadow-lg">👑 Best Premium</div>
                                        <h3 className="font-display text-4xl font-bold mb-6 leading-tight">8. Swanwick Crystal Night</h3>
                                        <p className="text-lg mb-8 leading-relaxed italic">The most recognized luxury choice in the sleep optimization community.</p>
                                        <div className="grid grid-cols-2 gap-8 mb-10 text-sm border-t border-slate-100 dark:border-slate-800 pt-8">
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Price</span>
                                                <span className="font-bold text-lg leading-none font-display">$130</span>
                                            </div>
                                            <div>
                                                <span className="block opacity-40 uppercase text-[0.6rem] font-bold tracking-widest mb-2 font-sans font-bold">Blocking</span>
                                                <span className="font-bold text-lg leading-none font-display">99%+</span>
                                            </div>
                                        </div>
                                        <p className="mb-10 opacity-70">Block 99%+ from 400-500nm in a frame you&#39;ll be proud to keep on your nightstand. Includes the 47-Day Habit Hacker program.</p>
                                        <a href="https://amzn.to/4uNlLFO" target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-6 rounded-full font-bold uppercase text-[0.85rem] tracking-[0.4em] shadow-2xl hover:bg-primary hover:text-white transition-all">Check Price on Amazon →</a>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <hr className="my-32 opacity-10" />

                        <h2 className="font-display text-4xl font-bold mb-12 uppercase tracking-tighter">How to Choose</h2>
                        <div className="space-y-4 mb-20 text-slate-700 dark:text-slate-300">
                            <p><strong>Cheapest starting point for daytime:</strong> TIJN ($7)</p>
                            <p><strong>Office worker reliability:</strong> Cyxus Adult ($15)</p>
                            <p><strong>Serious sleep goal on a budget:</strong> Uvex Skyper ($20)</p>
                            <p><strong>Gamer or Marathon coder:</strong> J+S Vision ($29)</p>
                            <p><strong>For children aged 6-15:</strong> Cyxus Kids ($25)</p>
                            <p><strong>The ultimate premium evening choice:</strong> Swanwick ($130)</p>
                        </div>

                        <div className="bg-slate-900 dark:bg-slate-800 text-white p-12 md:p-16 rounded-[3rem] my-32 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                            <h3 className="font-display text-3xl font-bold mb-6 text-primary uppercase tracking-tighter">The Two-Pair Solution</h3>
                            <p className="mb-0 opacity-80 leading-relaxed max-w-2xl">Many serious users end up with two: TIJN ($7) for daytime eye strain and Uvex Skyper ($20) for the 2 hours before bed. For $27 total, you have scientifically optimized coverage for the entire day.</p>
                        </div>

                        <h2 className="font-display text-4xl font-bold mt-32 mb-8 uppercase tracking-tighter">Safety & Important Considerations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                            <div className="p-8 border border-slate-100 dark:border-slate-800 rounded-3xl">
                                <h4 className="font-bold uppercase tracking-widest text-[0.6rem] text-red-600 mb-4">No Driving</h4>
                                <p className="text-sm opacity-60 italic">Don&#39;t wear amber or orange glasses while driving. The color distortion affects your ability to see signals and road hazards accurately.</p>
                            </div>
                            <div className="p-8 border border-slate-100 dark:border-slate-800 rounded-3xl">
                                <h4 className="font-bold uppercase tracking-widest text-[0.6rem] text-primary mb-4">Keep Mornings Blue</h4>
                                <p className="text-sm opacity-60 italic">Natural blue light helps anchor your circadian rhythm. Don&#39;t wear any blue light glasses before noon.</p>
                            </div>
                        </div>

                        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-[3.5rem] px-12 border border-slate-100 dark:border-slate-800 shadow-xl max-w-4xl mx-auto mb-20 italic">
                            <div className="uppercase tracking-[0.6em] text-[0.65rem] font-bold mb-8 opacity-40 font-sans not-italic font-bold">Final Evaluation</div>
                            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-none uppercase tracking-tighter">The Verdict</h2>
                            <p className="text-xl max-w-2xl mx-auto opacity-70 leading-relaxed font-light">One evening tells you how they feel. Two consistent weeks tells you what they actually do to your sleep.</p>
                        </div>
                    </div>

                    <ShareSection title="Best Blue Light Blocking Glasses for Anxiety & Sleep (Compared)" />
                    <CommentsSection articleId="blue-light-blocking-glasses" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
