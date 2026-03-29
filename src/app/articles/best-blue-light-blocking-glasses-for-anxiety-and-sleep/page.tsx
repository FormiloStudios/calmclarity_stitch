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
                <article className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                            Sleep Science
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                            Best Blue Light Blocking Glasses for Anxiety & Sleep (Compared)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>18 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    {/* Image 1: Hero */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed font-display italic">
                                You&#39;ve probably heard that screens before bed are bad for sleep. You&#39;ve possibly heard that blue light is the reason. And you may have considered blue light blocking glasses as the solution - then immediately run into a wall of conflicting information about whether they actually work.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl rotate-1">
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

                        <h2 className="font-display text-4xl font-bold mt-16 mb-8">The Science - What We Know and What We Don&#39;t</h2>
                        <p>Before buying any blue light glasses, you should understand both the case for them and its limitations. Most articles selling these glasses won&#39;t tell you both sides. This one will.</p>

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 my-12">
                            <h3 className="font-display text-2xl font-bold mb-4">The case for blue light glasses:</h3>
                            <p>Blue light sits at the high-energy end of the visible light spectrum (roughly 400-500nm). It occurs naturally in sunlight - which is why it&#39;s biologically useful in the morning, signalling to your body that it&#39;s daytime and time to be alert. The problem is that LED screens, smartphones, and artificial lighting emit significant blue light at night, when your body expects darkness. This tricks your circadian rhythm into suppressing melatonin - the hormone that signals your body to prepare for sleep - and keeps your brain in a state of alertness that conflicts with winding down.</p>
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">The honest limitations:</h3>
                        <p>A 2021 Cochrane review found that blue light filtering glasses showed little to no benefit for eye strain compared to standard lenses. A 2023 study from the University of Melbourne found no significant sleep improvement in participants wearing blue light glasses. Other studies have shown modest benefits, particularly for melatonin preservation when wearing high-blocking amber lenses.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">The practical middle ground:</h3>
                        <p>The strongest evidence supports high-blocking amber and orange lenses (85-99% blue light blocked) worn consistently two hours before bed - not clear lenses worn occasionally during the day. The evidence for daytime clear-lens glasses reducing eye strain is weak. The evidence for evening amber glasses helping sleep is more plausible, particularly for people who spend significant time on screens in the two hours before bed.</p>

                        <hr className="my-16 opacity-10" />

                        <h2 className="font-display text-4xl font-bold mt-16 mb-8 text-center uppercase tracking-tighter">Comparison Table</h2>
                        <div className="overflow-x-auto my-12 -mx-4 px-4 text-sm md:text-base">
                            <table className="min-w-full">
                                <thead className="bg-slate-50 dark:bg-slate-900/80">
                                    <tr className="border-b border-slate-200 dark:border-slate-800">
                                        <th className="px-6 py-5 text-left font-bold uppercase tracking-widest text-xs">Glasses</th>
                                        <th className="px-6 py-5 text-left font-bold uppercase tracking-widest text-xs">Lens</th>
                                        <th className="px-6 py-5 text-left font-bold uppercase tracking-widest text-xs">Price</th>
                                        <th className="px-6 py-5 text-left font-bold uppercase tracking-widest text-xs">Best For</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr><td className="px-6 py-4 font-bold">TIJN</td><td className="px-6 py-4">Clear</td><td className="px-6 py-4">$7</td><td className="px-6 py-4">Best Overall</td></tr>
                                    <tr><td className="px-6 py-4 font-bold">MIGSIR 6-pk</td><td className="px-6 py-4">Clear</td><td className="px-6 py-4">$12</td><td className="px-6 py-4">Best Value</td></tr>
                                    <tr><td className="px-6 py-4 font-bold">Cyxus Adult</td><td className="px-6 py-4">Clear</td><td className="px-6 py-4">$15</td><td className="px-6 py-4">Office Use</td></tr>
                                    <tr className="bg-amber-50/30 dark:bg-amber-900/5"><td className="px-6 py-4 font-bold">Uvex Skyper</td><td className="px-6 py-4">Amber</td><td className="px-6 py-4">$20</td><td className="px-6 py-4">Budget Sleep</td></tr>
                                    <tr><td className="px-6 py-4 font-bold">J+S Vision</td><td className="px-6 py-4">Dual</td><td className="px-6 py-4">$29</td><td className="px-6 py-4">Gaming</td></tr>
                                    <tr><td className="px-6 py-4 font-bold">Spectra479</td><td className="px-6 py-4">Amber Wrap</td><td className="px-6 py-4">$36</td><td className="px-6 py-4">Serious Sleep</td></tr>
                                    <tr><td className="px-6 py-4 font-bold">Cyxus Kids</td><td className="px-6 py-4">Clear</td><td className="px-6 py-4">$25</td><td className="px-6 py-4">Kids</td></tr>
                                    <tr className="bg-primary/5 font-bold"><td className="px-6 py-4">Swanwick</td><td className="px-6 py-4">Amber</td><td className="px-6 py-4">$130</td><td className="px-6 py-4">Premium</td></tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Product 1 - Winner (IMAGE 2) */}
                        <section className="my-32">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/2">
                                    <div className="inline-flex py-1 px-4 bg-primary/10 text-primary rounded-full text-[0.65rem] font-bold uppercase tracking-[0.3em] mb-6">🏆 Best Overall / Budget</div>
                                    <h3 className="font-display text-4xl font-bold mb-6">1. TIJN Blue Light Blocking Glasses</h3>
                                    <p className="text-lg opacity-80 leading-relaxed mb-6">The gold standard for daytime eye protection that looks like high-end fashion eyewear. With 58,000+ reviews, it is the most socially validated option online.</p>
                                    <p className="font-bold text-xl mb-6">$7 (on sale)</p>
                                    <a href="https://amzn.to/40JpzKF" target="_blank" rel="noopener noreferrer" className="inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest shadow-xl">Check on Amazon →</a>
                                </div>
                                <div className="md:w-1/2 relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl">
                                    <Image src="/article3.jpg" alt="TIJN Glasses" fill className="object-cover" />
                                </div>
                            </div>
                        </section>

                        {/* Products 2-7 (Text-based, keeping the structure but no images) */}
                        <div className="space-y-24 my-32">
                            <section className="border-l-4 border-slate-100 dark:border-slate-800 pl-8">
                                <h3 className="font-display text-3xl font-bold mb-4">2. MIGSIR 6-Pack Blue Light Blocking Glasses</h3>
                                <p className="opacity-80 mb-6">Best for families or anyone who loses their glasses. At $12 for 6 pairs, it works out to just $2 per pair without sacrificing frame quality.</p>
                                <a href="https://amzn.to/3NHBcP5" target="_blank" className="text-primary font-bold uppercase tracking-widest text-xs">View on Amazon</a>
                            </section>

                            <section className="border-l-4 border-slate-100 dark:border-slate-800 pl-8">
                                <h3 className="font-display text-3xl font-bold mb-4">3. Cyxus Blue Light Blocking Glasses</h3>
                                <p className="opacity-80 mb-6">The choice for office reliability. Features more impact-resistant lenses and a Lifetime Warranty for just $15.</p>
                                <a href="https://amzn.to/4bP4KCK" target="_blank" className="text-primary font-bold uppercase tracking-widest text-xs">Check Lifetime Warranty</a>
                            </section>

                            <section className="border-l-4 border-amber-500/30 pl-8 bg-amber-50/10 py-6 rounded-r-2xl">
                                <h3 className="font-display text-3xl font-bold mb-4 text-amber-600 dark:text-amber-400 font-display">4. Uvex Skyper (The Sleep Secret)</h3>
                                <p className="opacity-80 mb-6">Industrial safety glasses that absorb 98% of blue light. Not meant to be stylish, but the most cost-effective tool for evening melatonin protection ($20).</p>
                                <a href="https://amzn.to/3PCDDTH" target="_blank" className="bg-amber-500/20 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-lg font-bold uppercase tracking-tighter text-xs">The Sleep Hacker Choice</a>
                            </section>

                            <section className="border-l-4 border-slate-100 dark:border-slate-800 pl-8">
                                <h3 className="font-display text-3xl font-bold mb-4">5. J+S Vision (Gaming & Long Workdays)</h3>
                                <p className="opacity-80 mb-6">Features a 7-layer anti-reflective coating to eliminate screen glare during marathon sessions ($29).</p>
                                <a href="https://amzn.to/47KTu92" target="_blank" className="text-primary font-bold uppercase tracking-widest text-xs">Check Specs</a>
                            </section>

                            <section className="border-l-4 border-slate-100 dark:border-slate-800 pl-8">
                                <h3 className="font-display text-3xl font-bold mb-4">6. Spectra479 (Serious Sleep)</h3>
                                <p className="opacity-80 mb-6">Maximum protection ($36). Its wraparound frame blocks peripheral light that leaks in around standard glasses.</p>
                                <a href="https://amzn.to/4smWGjv" target="_blank" className="text-primary font-bold uppercase tracking-widest text-xs">Check Availability</a>
                            </section>

                            <section className="border-l-4 border-slate-100 dark:border-slate-800 pl-8">
                                <h3 className="font-display text-3xl font-bold mb-4">7. Cyxus Kids</h3>
                                <p className="opacity-80 mb-6">Flexible silicone frames that bend rather than snap - essential for children aged 6-15 ($25).</p>
                                <a href="https://amzn.to/4sZ4h7F" target="_blank" className="text-primary font-bold uppercase tracking-widest text-xs">Shop Kids Colors</a>
                            </section>
                        </div>

                        {/* Product 8 - Premium (IMAGE 3) */}
                        <section className="my-40 text-center bg-slate-900 text-white p-12 md:p-20 rounded-[3rem] overflow-hidden relative group">
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="inline-flex py-1 px-4 bg-primary text-white rounded-full text-[0.65rem] font-bold uppercase tracking-[0.4em] mb-8">👑 Best Premium</div>
                                <h3 className="font-display text-4xl md:text-5xl font-bold mb-8">8. Swanwick Crystal Night Swannies</h3>
                                <p className="max-w-xl mx-auto opacity-70 mb-12">The world leader in sleep optimization. 99%+ blocking across the critical range, set in premium acetate frames ($130).</p>
                                <div className="relative aspect-video w-full max-w-2xl rounded-2xl overflow-hidden mb-12 shadow-2xl">
                                    <Image src="/ccmar266.3b.jpg" alt="Swanwick Detail" fill className="object-cover" />
                                </div>
                                <a href="https://amzn.to/4uNlLFO" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-12 py-5 rounded-full font-bold uppercase text-xs tracking-widest">Invest in Your Sleep →</a>
                            </div>
                        </section>

                        <hr className="my-16 opacity-10" />

                        <h2 className="font-display text-4xl font-bold mt-16 mb-8 text-center leading-tight">Safety & Considerations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                            <div className="p-8 border border-slate-100 dark:border-slate-800 rounded-3xl">
                                <h4 className="font-bold uppercase tracking-widest text-[0.6rem] text-red-600 mb-3">No Driving</h4>
                                <p className="text-sm opacity-60 italic">Don&#39;t wear amber or orange glasses while driving. The color distortion affects your ability to see signals and hazards accurately.</p>
                            </div>
                            <div className="p-8 border border-slate-100 dark:border-slate-800 rounded-3xl">
                                <h4 className="font-bold uppercase tracking-widest text-[0.6rem] text-primary mb-3">Keep Mornings Blue</h4>
                                <p className="text-sm opacity-60 italic">Natural blue light helps anchor your clock. Don&#39;t wear any blue light glasses before noon.</p>
                            </div>
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
