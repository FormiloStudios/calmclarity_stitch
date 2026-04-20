'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
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
            <ScrollObserver />
            <Nav />

            <main className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-24">
                <article className="max-w-screen-xl mx-auto px-6">
                    {/* Header */}
                    <header className="max-w-4xl mx-auto text-center mb-16">
                        <div className="flex justify-center mb-8">
                            <span className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-[0.65rem] font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
                                Wellness Tools
                            </span>
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-slate-900 dark:text-white tracking-tight">
                            Best Worry Stones and Palm Stones for Anxiety (Compared)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>April 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    {/* Image: Hero (Placeholder: worrystone_a.jpg) */}
                    <div className="relative w-full mb-16 rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                        <img src="/worrystone_a.jpg" alt="Best Worry Stones and Palm Stones" className="w-full h-auto block" />
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed max-w-none">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-12 leading-relaxed italic">
                                You&#39;ve probably already noticed that when you&#39;re anxious, your hands want to do something. Tap, rub, click, fidget. That&#39;s not a nervous habit to break - it&#39;s your nervous system reaching for grounding through touch. Worry stones give that instinct somewhere intentional to go.
                            </p>

                            <p>A worry stone is a small, smooth, polished gemstone - typically oval-shaped with a shallow thumb-sized indentation - designed to be held and rubbed. You place your thumb in the groove and move it back and forth or in circles across the smooth surface. The motion is simple, discreet, and portable. You can use it at your desk, in your pocket during a difficult conversation, on a plane, or as a grounding anchor during meditation.</p>
                            
                            <div className="my-16 flex justify-center">
                                <img src="/worrystone_b.jpg" alt="How worry stones work" className="w-full max-w-4xl h-auto rounded-2xl shadow-xl" />
                            </div>

                            <p>They&#39;ve been used for thousands of years across cultures - ancient Greece, Tibet, Ireland, Native American traditions - long before anyone had clinical language for what they were doing. People had simply discovered that holding and rubbing a smooth stone during moments of stress and worry produced a tangible calming effect. Modern research on tactile grounding and self-soothing behavior explains why.</p>
                            
                            <p>The challenge with buying worry stones on Amazon is that there are hundreds of near-identical looking products. This guide covers what actually differentiates them - stone type, size, set vs single, shape - and recommends nine specific products across every budget and use case.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">How Worry Stones Work for Anxiety</h2>
                            
                            <p>The benefit of a worry stone comes primarily from a well-understood mechanism: repetitive tactile stimulation activating the parasympathetic nervous system.</p>
                            
                            <p>When you rub a smooth stone with your thumb, the mechanoreceptors in your fingertips send continuous tactile signals to your brain. These signals provide a focal point that competes with anxious thought patterns - your attention partially shifts from the internal spiral of worry to the external sensation of the stone's temperature, texture, and weight. This is the same principle behind all tactile grounding techniques used in therapy: engaging your senses redirects your attention from the abstract and threatening (anxious thoughts about the future) to the concrete and neutral (what you can feel right now).</p>
                            
                            <p>The repetitive motion also activates the parasympathetic nervous system - the rest-and-digest state that anxiety disrupts. Gentle, predictable, rhythmic movement signals safety to your nervous system. The same mechanism explains why rocking, stroking a pet, or fidgeting with a smooth object produces a calming effect across different contexts and cultures.</p>

                            <p>In psychotherapy, worry stones are recognized as tactile grounding cues - portable tools that support emotional regulation and provide a constructive behavioral substitute for less helpful anxiety-driven habits like nail biting, skin picking, or hair twisting. A 2025 review in psychotherapy literature notes that tactile interventions show measurable reductions in state anxiety and physiological arousal, and that self-soothing touch can buffer stress responses including cortisol-related effects.</p>

                            {/* Image: Mechanism (Placeholder: worrystone_b.jpg) */}
                            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl my-12 group bg-slate-100 dark:bg-slate-900 min-h-[300px]">
                                <img src="/worrystone_b.jpg" alt="How worry stones work" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                            </div>

                            <p>The honest picture: the tactile mechanism is real and evidence-supported. The crystal healing properties - specific energetic effects attributed to different stones - are a belief system held by many people in spiritual and wellness communities and are not backed by clinical evidence. This article presents both honestly. The physical benefit of holding and rubbing a smooth stone is real regardless of stone type. Whether specific stones carry specific energies is a matter of personal belief. Many people find that choosing a stone with properties that resonate with their intentions makes the practice more meaningful - and meaning enhances any therapeutic tool.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">The Most Popular Stones for Anxiety - What Each One Is Known For</h2>
                            
                            <p>Before choosing a product, understand what each stone type is traditionally associated with. Choose based on what resonates with you personally - there's no wrong answer here.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16 not-prose">
                                {/* Product 1 */}
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold">1</span>
                                        <h3 className="font-display text-xl font-bold uppercase tracking-tight italic">AMIRCE Natural Amethyst Thumb Stone</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20 self-start mb-6">🏆 Best Single Stone / Most Popular</p>
                                    
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-8 group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[300px]">
                                        <img src="/worrystone_1.jpg" alt="AMIRCE Amethyst" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-8 mb-8 text-[0.95rem]">
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">Price & Stone</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light">$9 | Natural Amethyst</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">Size</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light">1.77" x 1.37" x 0.28"</p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4 text-[0.95rem] text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8">
                                        <p>Amethyst is the single most recommended stone for anxiety and sleep. AMIRCE provides a standard-sized natural amethyst oval with a deep, comfortable thumb groove. At $9, it&#39;s the ideal entry point if you want a single high-quality stone rather than a variety set.</p>
                                        <p><strong>Stone associations:</strong> Tranquilizing, stress-relieving, repelling negative energy, and promoting courage and inner peace. Many users specifically keep an amethyst stone by their bedside to help quiet racing thoughts before sleep.</p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 mb-10 text-[0.9rem]">
                                        <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
                                            <p className="font-bold text-slate-900 dark:text-white mb-3">Pros</p>
                                            <ul className="space-y-2 list-none p-0 m-0">
                                                <li className="flex gap-2"><span>-</span> High-quality natural amethyst with deep coloring</li>
                                                <li className="flex gap-2"><span>-</span> Precise, comfortable thumb groove</li>
                                                <li className="flex gap-2"><span>-</span> Includes velvet carry pouch and gift box</li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
                                            <p className="font-bold text-slate-900 dark:text-white mb-3">Cons</p>
                                            <ul className="space-y-2 list-none p-0 m-0">
                                                <li className="flex gap-2"><span>-</span> Natural variations mean your stone may differ from photos</li>
                                                <li className="flex gap-2"><span>-</span> Only one stone type available in this listing</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="https://amzn.to/3WvCHmD" className="block text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check AMIRCE Amethyst on Amazon →</a>
                                </div>

                                {/* Product 2 */}
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold">2</span>
                                        <h3 className="font-display text-xl font-bold uppercase tracking-tight italic">SHARKOOO 7 Chakra Worry Stone</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20 self-start mb-6">👁️ Best for Mindfulness / Chakra Focus</p>
                                    
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-8 group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[300px]">
                                        <img src="/worrystone_2.jpg" alt="SHARKOOO Chakra Stone" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-8 mb-8 text-[0.95rem]">
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">Price & Stone</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light">$9 (regularly $12) | Composite 7 Chakra Stone</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">Size</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light">1.7" x 1.3" x 0.23"</p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4 text-[0.95rem] text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8">
                                        <p>The SHARKOOO Chakra stone features seven distinct bands of color, each representing one of the major energy centers. For people who use chakra systems in their mindfulness practice, this stone serves as both a tactile grounding tool and a visual anchor for meditation.</p>
                                        <p><strong>Stone associations:</strong> A combined association with all seven chakras - from grounding (Root) to spiritual connection (Crown). Using this stone can involve moving your thumb across the different color bands to intentionally focus on different areas of emotional or physical balance.</p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 mb-10 text-[0.9rem]">
                                        <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
                                            <p className="font-bold text-slate-900 dark:text-white mb-3">Pros</p>
                                            <ul className="space-y-2 list-none p-0 m-0">
                                                <li className="flex gap-2"><span>-</span> Beautiful seven-color banding</li>
                                                <li className="flex gap-2"><span>-</span> Great visual focal point for meditation</li>
                                                <li className="flex gap-2"><span>-</span> Standard size with good thumb groove</li>
                                            </ul>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
                                            <p className="font-bold text-slate-900 dark:text-white mb-3">Cons</p>
                                            <ul className="space-y-2 list-none p-0 m-0">
                                                <li className="flex gap-2"><span>-</span> Chakra stone is a blend/composite rather than a single natural crystal</li>
                                                <li className="flex gap-2"><span>-</span> Less &quot;natural crystal&quot; feel than pure gemstone options</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="https://amzn.to/3Q7Y9mH" className="block text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check SHARKOOO 7 Chakra Stone on Amazon →</a>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="max-w-4xl mx-auto my-16 not-prose border border-slate-100 dark:border-slate-800 rounded-3xl p-10 bg-slate-50/50 dark:bg-white/5">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold">3</span>
                                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight italic">YATOJUZI Amethyst + Rose Quartz Heart Stones (2-Pack)</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20 self-start mb-8 inline-block">🎁 Best for Gifting / Best Heart Shape</p>
                                
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-10 group bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                    <img src="/worrystone_3.jpg" alt="YATOJUZI Heart Stones" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[0.95rem]">
                                    <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                        <p>Important note upfront: these are heart-shaped holding stones, not traditional oval worry stones with a thumb groove. You hold them in your palm rather than rubbing with a thumb indentation. The experience is different - more about the warmth and weight of the stone in your hand than the repetitive rubbing motion.</p>
                                        <p>Amethyst and rose quartz are the two most commonly paired anxiety crystals - calm and emotional healing together in one set. Getting both in one purchase at $10 lets you try each stone and discover which resonates more.</p>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">Price & Stone</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light">$10 | Natural Amethyst + Rose Quartz</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <p className="font-bold text-slate-900 dark:text-white mb-4">Pros & Cons</p>
                                            <ul className="space-y-3 text-[0.9rem] text-slate-600 dark:text-slate-300 list-none p-0 m-0">
                                                <li className="flex gap-2"><span>✓</span> Heart shape is the most gift-appropriate format on this list</li>
                                                <li className="flex gap-2"><span>✓</span> $10 for two stones - good value</li>
                                                <li className="flex gap-2"><span>✗</span> Heart shape has no thumb groove - different experience</li>
                                                <li className="flex gap-2"><span>✗</span> Smaller and thinner than standard oval worry stones</li>
                                            </ul>
                                        </div>
                                        <a href="https://amzn.to/41LdftX" className="block text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Heart Worry Stones on Amazon →</a>
                                    </div>
                                </div>
                            </div>

                            {/* Product 4 */}
                            <div className="max-w-4xl mx-auto my-16 not-prose border border-slate-100 dark:border-slate-800 rounded-3xl p-10 bg-slate-50/50 dark:bg-white/5">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold">4</span>
                                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight italic">QINJIEJIE Amethyst + Black Obsidian 2-Pack</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20 self-start mb-8 inline-block">🖤 Best Grounding Pair / Best for Emotional Protection</p>
                                
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-10 group bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                    <img src="/worrystone_4.jpg" alt="QINJIEJIE Amethyst and Obsidian" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[0.95rem]">
                                    <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                        <p>Amethyst and black obsidian are the most complementary anxiety pairing available in thumb stone format. Amethyst addresses the mental and emotional side - calming the mind. Black obsidian addresses the energetic and physical grounding side - releasing negative energy.</p>
                                        <p>For people whose anxiety feels both mentally chaotic AND energetically ungrounded, having both stones available lets you choose based on what you need in the moment.</p>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">Price & Stone</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light">$12 | Natural Amethyst + Black Obsidian</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <p className="font-bold text-slate-900 dark:text-white mb-4">Pros & Cons</p>
                                            <ul className="space-y-3 text-[0.9rem] text-slate-600 dark:text-slate-300 list-none p-0 m-0">
                                                <li className="flex gap-2"><span>✓</span> Most therapeutically complementary anxiety stone pairing</li>
                                                <li className="flex gap-2"><span>✓</span> Standard oval thumb groove - proper worry stone format</li>
                                                <li className="flex gap-2"><span>✗</span> Lower review count than other options</li>
                                                <li className="flex gap-2"><span>✗</span> Colors may appear more muted than photos</li>
                                            </ul>
                                        </div>
                                        <a href="https://amzn.to/41oCdPB" className="block text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Amethyst + Obsidian on Amazon →</a>
                                    </div>
                                </div>
                            </div>

                            {/* Product 5 */}
                            <div className="max-w-4xl mx-auto my-16 not-prose border border-slate-100 dark:border-slate-800 rounded-3xl p-10 bg-slate-50/50 dark:bg-white/5">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold">5</span>
                                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight italic">CrystalTears 4-Pack Thumb Worry Stone Set</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20 self-start mb-8 inline-block">🌟 Best Starter Set</p>
                                
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-10 group bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                    <img src="/worrystone_5.jpg" alt="CrystalTears 4-Pack" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[0.95rem]">
                                    <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                        <p>CrystalTears is the most reviewed worry stone brand on Amazon - 4,426 reviews at 4.6 stars is a strong social validation. The 4-pack brings together four of the most popular anxiety crystals (amethyst, rose quartz, tiger's eye, lapis lazuli) in an elegant gift box.</p>
                                        <p>Having four stones lets you choose based on what you need in the moment - reach for amethyst when your mind is racing, or rose quartz when you're processing difficult emotions.</p>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">Price & Stone</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light">$16 | Amethyst, Rose Quartz, Tiger's Eye, Lapis Lazuli</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <p className="font-bold text-slate-900 dark:text-white mb-4">Pros & Cons</p>
                                            <ul className="space-y-3 text-[0.9rem] text-slate-600 dark:text-slate-300 list-none p-0 m-0">
                                                <li className="flex gap-2"><span>✓</span> 4,426 reviews at 4.6 stars - most validated on this list</li>
                                                <li className="flex gap-2"><span>✓</span> Elegant gift box included</li>
                                                <li className="flex gap-2"><span>✗</span> Lapis lazuli in this set is dyed rather than natural</li>
                                                <li className="flex gap-2"><span>✗</span> No individual velvet carry pouches</li>
                                            </ul>
                                        </div>
                                        <a href="https://amzn.to/3Q5P3Qc" className="block text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check CrystalTears 4-Pack on Amazon →</a>
                                    </div>
                                </div>
                            </div>

                            {/* Product 6 */}
                            <div className="max-w-4xl mx-auto my-16 not-prose border border-slate-100 dark:border-slate-800 rounded-3xl p-10 bg-slate-50/50 dark:bg-white/5">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold">6</span>
                                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight italic">Rainbow Fluorite Heart Crystal Stone</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20 self-start mb-8 inline-block">🌈 Most Visually Unique</p>
                                
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-10 group bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                    <img src="/worrystone_6.jpg" alt="Rainbow Fluorite Stone" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[0.95rem]">
                                    <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                        <p>Rainbow fluorite is one of the most visually distinctive worry stones available - the natural banding of purple and green creates a unique appearance. For people who find that beauty in their tools increases motivation, fluorite is a compelling choice.</p>
                                        <p>Beyond aesthetics, fluorite is associated with stabilizing emotions, reducing mental tension, and enhancing concentration. Like the Heart stones, this is a holding stone without a traditional thumb groove.</p>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">Price & Stone</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light">$17 | Natural Rainbow Fluorite</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <p className="font-bold text-slate-900 dark:text-white mb-4">Pros & Cons</p>
                                            <ul className="space-y-3 text-[0.9rem] text-slate-600 dark:text-slate-300 list-none p-0 m-0">
                                                <li className="flex gap-2"><span>✓</span> Each stone is completely unique due to natural banding</li>
                                                <li className="flex gap-2"><span>✓</span> Chemical-free and un-dyed</li>
                                                <li className="flex gap-2"><span>✗</span> Heart shape has no thumb groove</li>
                                                <li className="flex gap-2"><span>✗</span> $17 for a single stone - more expensive</li>
                                            </ul>
                                        </div>
                                        <a href="https://amzn.to/4elQLa2" className="block text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Rainbow Fluorite on Amazon →</a>
                                    </div>
                                </div>
                            </div>

                            {/* Product 7 */}
                            <div className="max-w-4xl mx-auto my-16 not-prose border border-slate-100 dark:border-slate-800 rounded-3xl p-10 bg-slate-50/50 dark:bg-white/5">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold">7</span>
                                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight italic">GolbalJew 6-Pack Thumb Worry Stone Set</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20 self-start mb-8 inline-block">🔮 Best Variety Set</p>
                                
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-10 group bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                    <img src="/worrystone_7.jpg" alt="GolbalJew 6-Pack" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[0.95rem]">
                                    <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                        <p>The GolbalJew 6-pack gives you the widest variety - six different stones all in standard oval thumb stone format. At $17 for six stones, it's under $3 per stone, making it the best value per stone on the list.</p>
                                        <p>The variety lets you build an intentional collection - one for calm (amethyst), one for protection (obsidian), one for grounding (tiger's eye), and so on. Rotation keeps the practice fresh.</p>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">Price & Stone</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light">$17 | 6 Different Stones</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <p className="font-bold text-slate-900 dark:text-white mb-4">Pros & Cons</p>
                                            <ul className="space-y-3 text-[0.9rem] text-slate-600 dark:text-slate-300 list-none p-0 m-0">
                                                <li className="flex gap-2"><span>✓</span> Best per-stone value on this list</li>
                                                <li className="flex gap-2"><span>✓</span> Standard oval thumb groove on all six stones</li>
                                                <li className="flex gap-2"><span>✗</span> Smaller size than some single stones</li>
                                                <li className="flex gap-2"><span>✗</span> Less premium packaging than competitive sets</li>
                                            </ul>
                                        </div>
                                        <a href="https://amzn.to/4sXxikC" className="block text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check GolbalJew 6-Pack on Amazon →</a>
                                    </div>
                                </div>
                            </div>

                            {/* Product 8 */}
                            <div className="max-w-4xl mx-auto my-16 not-prose border border-slate-100 dark:border-slate-800 rounded-3xl p-10 bg-slate-50/50 dark:bg-white/5">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold">8</span>
                                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight italic">LAIDANLA Large Green Aventurine Palm Stone</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20 self-start mb-8 inline-block">🖐️ Best Large / Full Palm Stone</p>
                                
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-10 group bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                    <img src="/worrystone_8.jpg" alt="LAIDANLA Large Palm Stone" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[0.95rem]">
                                    <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                        <p>This is the only product on this list that's genuinely sized for the full palm. At 2.4 inches it fills your hand rather than sitting between fingers, creating a completely different tactile experience - more weight and more full-hand contact.</p>
                                        <p>For people who find standard worry stones too small or use them specifically for meditation, this palm stone is preferred. Customers consistently report it is well-polished and smooth.</p>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">Price & Stone</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light">$15 | Green Aventurine (19 variants)</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <p className="font-bold text-slate-900 dark:text-white mb-4">Pros & Cons</p>
                                            <ul className="space-y-3 text-[0.9rem] text-slate-600 dark:text-slate-300 list-none p-0 m-0">
                                                <li className="flex gap-2"><span>✓</span> Largest stone on this list, designed for full palm</li>
                                                <li className="flex gap-2"><span>✓</span> 19 stone variants available</li>
                                                <li className="flex gap-2"><span>✗</span> No thumb groove - different technique</li>
                                                <li className="flex gap-2"><span>✗</span> Too large for most pockets</li>
                                            </ul>
                                        </div>
                                        <a href="https://amzn.to/4mtItiM" className="block text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Large Palm Stone on Amazon →</a>
                                    </div>
                                </div>
                            </div>

                            {/* Product 9 */}
                            <div className="max-w-4xl mx-auto my-16 not-prose border border-slate-100 dark:border-slate-800 rounded-3xl p-10 bg-slate-50/50 dark:bg-white/5">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold">9</span>
                                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight italic">LAIDANLA 10-Pack Mini Palm Stone Set</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20 self-start mb-8 inline-block">📦 Best Bulk Value</p>
                                
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-10 group bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                    <img src="/worrystone_9.jpg" alt="LAIDANLA 10-Pack Mini Stones" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[0.95rem]">
                                    <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                        <p>Ten different stones for $10 is the best bulk value on this list. It covers virtually every major anxiety stone type in one purchase. The mini size (1 inch) is perfect for keeping in multiple locations - car, desk, travel bag.</p>
                                        <p>The gift box and velvet bag packaging make this a complete presentation. Use this set as a tasting menu to find which stone you reach for most, then invest in a higher quality single stone later.</p>
                                        <div>
                                            <p className="font-bold text-slate-900 dark:text-white mb-2">Price & Stone</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light">$10 | 10 Different Stones</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                            <p className="font-bold text-slate-900 dark:text-white mb-4">Pros & Cons</p>
                                            <ul className="space-y-3 text-[0.9rem] text-slate-600 dark:text-slate-300 list-none p-0 m-0">
                                                <li className="flex gap-2"><span>✓</span> Best bulk value @ $1 per stone</li>
                                                <li className="flex gap-2"><span>✓</span> Gift box + velvet bag included</li>
                                                <li className="flex gap-2"><span>✗</span> Mini size - less substantial in hand</li>
                                                <li className="flex gap-2"><span>✗</span> No thumb groove on this size</li>
                                            </ul>
                                        </div>
                                        <a href="https://amzn.to/4vnHmVN" className="block text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check 10-Pack Mini Stones on Amazon →</a>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">How to Use a Worry Stone for Anxiety</h2>
                            
                            <h3 className="text-xl font-bold mb-4">Basic Technique</h3>
                            <p>Hold the stone between your thumb and index finger with the indentation facing up. Rest your thumb in the groove. Move your thumb back and forth, side to side, or in slow circles across the smooth surface. Focus on the sensation - the temperature of the stone, the smoothness of the surface, the gentle pressure against your thumb.</p>

                            <h3 className="text-xl font-bold mb-4">Paired with Breathing</h3>
                            <p>Sync the rubbing motion with your breath. Rub forward as you inhale for four counts. Pause as you hold for two counts. Rub back as you exhale for six counts. This combines the tactile grounding of the stone with the physiological calming of extended exhale breathing.</p>

                            <h3 className="text-xl font-bold mb-4">As a Mindfulness Anchor</h3>
                            <p>During meditation, hold the stone in your palm and use it as an anchor for your attention. When your mind wanders, the sensation of the stone in your hand gives you something concrete to return your focus to.</p>

                            <h3 className="text-xl font-bold mb-4">Pocket Carry</h3>
                            <p>Keep it in your pocket and reach for it whenever anxiety rises. Over time this creates a conditioned calming response. Eventually, just holding the stone begins to produce the effect before the rubbing even starts.</p>

                            <h2 className="font-display text-3xl md:text-4xl font-bold my-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">Does the Stone Type Actually Matter?</h2>
                            
                            <p>Honestly - it depends on what you mean by &quot;matter.&quot;</p>
                            
                            <p>For the tactile grounding benefit, the stone type is irrelevant. A smooth piece of polished glass would activate the same parasympathetic nervous system response as an amethyst. The benefit comes from the repetitive touch, not from the mineral composition.</p>
                            
                            <p>What the stone type does affect is your relationship with the practice. If you feel drawn to amethyst and believe it promotes calm, you&#39;re more likely to use it consistently. Treat properties as meaningful associations rather than medical claims, and choose stones that resonate with you personally.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">FAQ</h2>
                            <div className="space-y-8">
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white mb-2">How long should I rub a worry stone during an anxiety episode?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light">As long as it helps. For acute moments, 2-5 minutes of focused rubbing paired with breathing is usually sufficient. For background daily anxiety, shorter but more frequent use builds a better calming baseline.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white mb-2">Can I use more than one worry stone?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light">Yes. Different stones for different contexts - one for work stress, one for nighttime anxiety. Rotating them also prevents the practice from becoming automatic and mindless.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white mb-2">Do I need to cleanse my worry stone?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light">This is a matter of personal practice. From a purely practical standpoint, washing your stone with mild soap and water occasionally is sensible hygiene.</p>
                                </div>
                            </div>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-[3.5rem] px-12 border border-slate-100 dark:border-slate-800 shadow-xl max-w-4xl mx-auto my-32">
                                <div className="mb-12 flex justify-center">
                                    <img src="/worrystone_c.jpg" alt="Final Verdict" className="w-full max-w-2xl h-auto rounded-3xl" />
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter italic leading-none text-slate-900 dark:text-white">Final Verdict</h2>
                                <p>For most people starting out, the <strong>CrystalTears 4-Pack at $16</strong> is the best starting point. Four different stones lets you discover which type you naturally reach for, and the gift box presentation means it works equally well as a personal purchase or a gift.</p>
                                <p>If you specifically want amethyst, the <strong>AMIRCE Natural Amethyst at $9</strong> is the best value single-stone option.</p>
                                <p>And if you prefer full-palm holding over thumb rubbing, the <strong>LAIDANLA Large Palm Stone at $15</strong> is the right choice, with 19 stone varieties to choose from.</p>
                                <p className="mt-8 text-xl font-bold text-slate-900 dark:text-white italic leading-tight">Keep whichever stone you choose somewhere visible. The best worry stone is the one you actually reach for.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <NewsletterSection />
            <Footer />
        </>
    );
}
