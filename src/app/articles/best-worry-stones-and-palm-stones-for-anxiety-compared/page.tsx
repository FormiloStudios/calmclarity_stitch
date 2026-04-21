'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export default function ArticlePage() {
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

                    {/* Hero Image */}
                    <div className="relative w-full mb-16 rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                        <img src="/worrystone_a.jpg" alt="Best Worry Stones" className="w-full h-auto block" />
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed max-w-none">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-12 leading-relaxed italic">
                                You've probably already noticed that when you're anxious, your hands want to do something. Tap, rub, click, fidget. That's not a nervous habit to break - it's your nervous system reaching for grounding through touch. Worry stones give that instinct somewhere intentional to go.
                            </p>

                            <p>A worry stone is a small, smooth, polished gemstone - typically oval-shaped with a shallow thumb-sized indentation - designed to be held and rubbed. You place your thumb in the groove and move it back and forth or in circles across the smooth surface. The motion is simple, discreet, and portable. You can use it at your desk, in your pocket during a difficult conversation, on a plane, or as a grounding anchor during meditation.</p>

                            <div className="my-16 flex justify-center">
                                <img src="/worrystone_b.jpg" alt="Grounding with stones" className="w-full max-w-4xl h-auto rounded-2xl shadow-xl" />
                            </div>

                            <p>They've been used for thousands of years across cultures - ancient Greece, Tibet, Ireland, Native American traditions - long before anyone had clinical language for what they were doing. People had simply discovered that holding and rubbing a smooth stone during moments of stress and worry produced a tangible calming effect. Modern research on tactile grounding and self-soothing behavior explains why.</p>

                            <p>The challenge with buying worry stones on Amazon is that there are hundreds of near-identical looking products. This guide covers what actually differentiates them - stone type, size, set vs single, shape - and recommends nine specific products across every budget and use case.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 text-slate-900 dark:text-white uppercase italic">How Worry Stones Work for Anxiety</h2>
                            
                            <p>The benefit of a worry stone comes primarily from a well-understood mechanism: repetitive tactile stimulation activating the parasympathetic nervous system.</p>

                            <p>When you rub a smooth stone with your thumb, the mechanoreceptors in your fingertips send continuous tactile signals to your brain. These signals provide a focal point that competes with anxious thought patterns - your attention partially shifts from the internal spiral of worry to the external sensation of the stone's temperature, texture, and weight. This is the same principle behind all tactile grounding techniques used in therapy: engaging your senses redirects your attention from the abstract and threatening (anxious thoughts about the future) to the concrete and neutral (what you can feel right now).</p>

                            <p>The repetitive motion also activates the parasympathetic nervous system - the rest-and-digest state that anxiety disrupts. Gentle, predictable, rhythmic movement signals safety to your nervous system. The same mechanism explains why rocking, stroking a pet, or fidgeting with a smooth object produces a calming effect across different contexts and cultures.</p>

                            <p>In psychotherapy, worry stones are recognized as tactile grounding cues - portable tools that support emotional regulation and provide a constructive behavioral substitute for less helpful anxiety-driven habits like nail biting, skin picking, or hair twisting. A 2025 review in psychotherapy literature notes that tactile interventions show measurable reductions in state anxiety and physiological arousal, and that self-soothing touch can buffer stress responses including cortisol-related effects.</p>

                            <p>The honest picture: the tactile mechanism is real and evidence-supported. The crystal healing properties - specific energetic effects attributed to different stones - are a belief system held by many people in spiritual and wellness communities and are not backed by clinical evidence. This article presents both honestly. The physical benefit of holding and rubbing a smooth stone is real regardless of stone type. Whether specific stones carry specific energies is a matter of personal belief. Many people find that choosing a stone with properties that resonate with their intentions makes the practice more meaningful - and meaning enhances any therapeutic tool.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 text-slate-900 dark:text-white uppercase italic">The Most Popular Stones for Anxiety - What Each One Is Known For</h2>

                            <p>Before choosing a product, understand what each stone type is traditionally associated with. Choose based on what resonates with you personally - there's no wrong answer here.</p>

                            <ul>
                                <li><strong>Amethyst:</strong> The most popular anxiety stone. Associated with calm, stress relief, and "quieting the mind."</li>
                                <li><strong>Rose Quartz:</strong> Associated with emotional healing, self-love, and calming difficult interpersonal emotions.</li>
                                <li><strong>Black Obsidian:</strong> Associated with grounding and "protection" - specifically releasing negative energy and feeling anchored.</li>
                                <li><strong>Tiger's Eye:</strong> Associated with courage and clarity - good if your anxiety makes you feel indecisive or stuck.</li>
                                <li><strong>Lapis Lazuli:</strong> Associated with clarity and inner peace - clearing mental fog.</li>
                                <li><strong>Green Aventurine:</strong> Associated with emotional calm and "luck" - a lighter, more optimistic calming stone.</li>
                            </ul>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-slate-900 dark:text-white uppercase italic text-center underline decoration-primary/20 underline-offset-8">9 Best Worry Stones and Palm Stones</h2>

                            <div className="space-y-32">
                                {/* Product 1 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">1</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">Natural Amethyst Single Worry Stone by Stoneage</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🏆 Best Overall / Best Amethyst</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/worrystone_1.jpg" alt="Natural Amethyst Worry Stone" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$9</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stone</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Natural Amethyst</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Size</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">1.8" x 1.4" x 0.3"</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/3T7fPyR" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Amethyst is the single most popular choice for anxiety relief. This specific Stoneage product is our top recommendation because it combines high natural stone quality with a standard, comfortable worry stone shape. It's a proper oval with a deep enough groove for meaningful thumb rubbing. The current listing at $9 includes a velvet carry pouch and a small gift box, making it a complete package at a very accessible price.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The 1.8-inch size is considered the standard for worry stones - large enough to feel substantial in your hand, small enough to be completely discreet in a pocket. Customers consistently praise the smoothness and the depth of the purple color in this specific natural amethyst batch.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Natural, high-quality amethyst - most popular anxiety stone</li>
                                                        <li>Proper oval shape with comfortable thumb indentation</li>
                                                        <li>Standard 1.8" size for portability and discretion</li>
                                                        <li>Velvet pouch and gift box included in the $9 price</li>
                                                        <li>Highly rated for surface smoothness</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Natural variation means the intensity of purple color varies by piece</li>
                                                        <li>Single stone only - no variety</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/3T7fPyR" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Amethyst Worry Stone on Amazon →</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Product 2 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">2</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">SHARKOOO 7 Chakra Worry Stone</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🧿 Best for Chakra Balancing</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-6 md:order-1 order-2">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$9</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stone</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">7-Stone Chakra Composite</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Size</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">1.6" x 1.2" x 0.3"</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/4gYV6m8" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">For those who incorporate the chakra system into their anxiety management, this composite stone provides all seven chakra stones (Amethyst, Lapis Lazuli, Sodalite, Green Aventurine, Tiger's Eye, Yellow Jade, Red Jasper) in one piece. It's a symbolic and visual representation of holistic balance.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The tactile experience is excellent - despite being a composite of seven stones, the surface is polished to a completely smooth, seamless finish. It's slightly smaller (1.6 inches) than standard amethyst stones, which some users find even more discreet for small pockets or constant carry.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Incorporates all 7 chakra stones in one tool</li>
                                                        <li>Perfectly seamless, smooth finish</li>
                                                        <li>Visually striking and unique appearance</li>
                                                        <li>Slightly more compact size (1.6") for extra discretion</li>
                                                        <li>Best value for chakra-specific work</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Chakra stone is a blend/composite rather than a single natural crystal</li>
                                                        <li>Less "natural crystal" feel than pure gemstone options</li>
                                                        <li>Limited to one design - no stone type variations</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4gYV6m8" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Chakra Worry Stone on Amazon →</a>
                                        </div>
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-2 order-1">
                                            <img src="/worrystone_2.jpg" alt="7 Chakra Worry Stone" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                    </div>
                                </div>

                                {/* Product 3 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">3</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">YATOJUZI Amethyst + Rose Quartz Heart Stones (2-Pack)</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🎁 Best for Gifting / Best Heart Shape</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/worrystone_3.jpg" alt="Heart Shaped Worry Stones" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$10</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stones</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Amethyst + Rose Quartz</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Shape</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Heart (No thumb groove)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/41LdftX" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Important note upfront: these are heart-shaped holding stones, not traditional oval worry stones with a thumb groove. You hold them in your palm rather than rubbing with a thumb indentation. The experience is different - more about the warmth and weight of the stone in your hand than the repetitive rubbing motion.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Amethyst and rose quartz are the two most commonly paired anxiety crystals - calm and emotional healing together in one set. Getting both in one purchase at $10 lets you try each stone and discover which resonates more. The heart shape makes this the most visually gifting-appropriate option on this list.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Two of the most popular anxiety crystals in one purchase</li>
                                                        <li>Heart shape is the most gift-appropriate format on this list</li>
                                                        <li>$10 for two stones - good value</li>
                                                        <li>Available in oval and teardrop if you prefer traditional worry stone shape</li>
                                                        <li>Amethyst + rose quartz is the most complementary anxiety pairing available</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Heart shape has no thumb groove - different experience from traditional worry stones</li>
                                                        <li>Smaller and thinner than standard oval worry stones (8mm thick)</li>
                                                        <li>No velvet pouch or gift box in basic packaging</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/41LdftX" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Heart Worry Stones on Amazon →</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Product 4 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">4</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">QINJIEJIE Amethyst + Black Obsidian 2-Pack</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🖤 Best Grounding Pair / Best for Emotional Protection</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-6 md:order-1 order-2">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$12</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stones</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Amethyst + Black Obsidian</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Size</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">1.8" x 1.4" x 0.24"</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/41oCdPB" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Amethyst and black obsidian are the most complementary anxiety pairing available in thumb stone format. Amethyst addresses the mental and emotional side of anxiety - calming the mind, reducing irritability, easing stress. Black obsidian addresses the energetic and physical grounding side - releasing negative energy, protecting against emotional overwhelm, anchoring you in the present.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">For people whose anxiety feels both mentally chaotic AND energetically ungrounded - the kind of anxiety where your thoughts race AND you feel unmoored - having both stones available lets you choose based on what you need in the moment. Obsidian's deep black, glassy surface also offers a visual contrast to amethyst's purple that makes each stone feel distinct and intentional to reach for.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Amethyst + obsidian - the most therapeutically complementary anxiety stone pairing</li>
                                                        <li>Standard oval thumb groove - proper worry stone format</li>
                                                        <li>Multiple combination options - customize your pairing</li>
                                                        <li>Both standard oval and water drop shape variants available</li>
                                                        <li>Full size (1.8 inch) for comfortable thumb rubbing</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Colors may appear more muted than photos according to some buyers</li>
                                                        <li>No velvet pouch mentioned in listing</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/41oCdPB" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Amethyst + Obsidian on Amazon →</a>
                                        </div>
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-2 order-1">
                                            <img src="/worrystone_4.jpg" alt="Amethyst and Obsidian Set" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                    </div>
                                </div>

                                {/* Product 5 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">5</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">CrystalTears 4-Pack Thumb Worry Stone Set</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🌟 Best Starter Set</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/worrystone_5.jpg" alt="CrystalTears 4-Pack Worry Stones" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$16 (regularly $20)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stones</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Amethyst, Rose Quartz, Tiger's Eye, Lapis</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stars</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">4.6 (4,426 reviews)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/3Q5P3Qc" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">CrystalTears is the most reviewed worry stone brand on Amazon - 4,426 reviews at 4.6 stars is the strongest social validation on this list by a wide margin. The 4-pack brings together four of the most popular anxiety crystals (amethyst for calm, rose quartz for emotional healing, tiger's eye for courage and grounding, lapis lazuli for clarity and inner peace) in a single elegant gift box, making it both the best value for trying multiple stones and the best-presented gifting option at this price point.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Having four stones lets you choose based on what you need in the moment - reach for amethyst when your mind is racing, rose quartz when you're processing difficult emotions, tiger's eye when anxiety is making you avoid something, lapis lazuli when you need to clear mental fog. This is exactly how experienced worry stone users approach their practice: building a small collection and selecting intentionally.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>4,426 reviews at 4.6 stars - the most validated product on this list</li>
                                                        <li>Four different stones - try each and discover your preference</li>
                                                        <li>Elegant gift box included - the best-presented set on this list</li>
                                                        <li>Multiple variant options - customize which four stones you receive</li>
                                                        <li>Currently discounted from regular price</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Lapis lazuli in this set is dyed rather than natural - worth knowing before purchase</li>
                                                        <li>Four stones of slightly smaller size than single stones</li>
                                                        <li>No velvet carry pouches for individual stones</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/3Q5P3Qc" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check CrystalTears 4-Pack on Amazon →</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Product 6 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">6</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">Rainbow Fluorite Heart Crystal Stone</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🌈 Most Visually Unique</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-6 md:order-1 order-2">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$17</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stone</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Natural rainbow fluorite</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Shape</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Heart (no thumb groove)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/4elQLa2" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Rainbow fluorite is one of the most visually distinctive worry stones available - the natural banding of purple and green creates a unique appearance that makes each stone completely different from every other. No two rainbow fluorite stones look the same. For people who find that beauty in their tools increases their motivation to use them, fluorite is one of the most compelling choices on the market.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">Beyond aesthetics, fluorite is associated with stabilizing emotions, reducing mental tension, enhancing concentration, and providing a gentle calming energy without the intensity that some find in stronger stones like obsidian. It's described as a "soft quartz" - its energy is considered stable and gentle, which makes it particularly well-suited for daily use when you want calm without intensity.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Rainbow fluorite - the most visually striking stone on this list</li>
                                                        <li>Each stone is completely unique due to natural banding variation</li>
                                                        <li>Multiple stone type variants available (citrine, dragon bloodstone, jasper)</li>
                                                        <li>Chemical-free and un-dyed - natural color variation</li>
                                                        <li>Works as both a holding stone and a beautiful desk or shelf object</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Heart shape has no thumb groove - holding experience only, not traditional rubbing</li>
                                                        <li>$17 for a single stone - more expensive per piece than most set options</li>
                                                        <li>Softer than quartz - handle with some care</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4elQLa2" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Rainbow Fluorite Heart on Amazon →</a>
                                        </div>
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-2 order-1">
                                            <img src="/worrystone_6.jpg" alt="Rainbow Fluorite Heart" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                    </div>
                                </div>

                                {/* Product 7 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">7</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">GolbalJew 6-Pack Thumb Worry Stone Set</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🔮 Best Variety Set</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/worrystone_7.jpg" alt="GolbalJew 6-Pack Worry Stones" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$17</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stones</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">6 different stones</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Size</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">1.4" x 1.8"</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/4sXxikC" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The GolbalJew 6-pack gives you the widest variety of any set on this list - six different stones, each a different type with different aesthetic and energetic associations, all in standard oval thumb stone format with proper grooves. At $17 for six stones that's under $3 per stone, making it the best value per stone on the entire list.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">The multiple variant options let you build a genuinely intentional collection - you can select six stones that cover the full range of anxiety-related properties: one calming (amethyst), one protective (obsidian), one grounding (tiger's eye), one emotional (rose quartz), one clarity-focused (clear quartz), and one transformative (labradorite).</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Six stones for $17 - the best per-stone value on this list</li>
                                                        <li>Widest variety of any set - six different stone types</li>
                                                        <li>Multiple variant combinations available - build your intended set</li>
                                                        <li>Standard oval thumb groove on all six stones</li>
                                                        <li>Obsidian included as default - covers the protective-grounding slot</li>
                                                        <li>Great for sharing - families or couples can each have preferred stones</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Smaller size (1.4" x 1.8") than some single stones - slightly less substantial in hand</li>
                                                        <li>Less premium packaging than CrystalTears set</li>
                                                        <li>Selecting the right variant combination requires knowing which stones you want</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4sXxikC" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check GolbalJew 6-Pack on Amazon →</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Product 8 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">8</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">LAIDANLA Large Green Aventurine Palm Stone</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🖐️ Best Large / Full Palm Stone</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-6 md:order-1 order-2">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$15</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stone</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Green aventurine (19 types avail.)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Size</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">2.4 inches</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/4mtItiM" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The LAIDANLA Large Palm Stone is the only product on this list that's genuinely sized for the full palm rather than the thumb. At 2.4 inches it fills your hand rather than sitting between finger and thumb, creating a completely different tactile experience - more weight, more warmth transfer, more full-hand contact. For people who find standard worry stones too small, or who use their stones during meditation rather than while going about their day, a palm stone is often preferred.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">The 19 stone variants available is the most choice on this list - labradorite, amethyst, rose quartz, tiger's eye, obsidian, green aventurine, opal, lapis lazuli, red jasper, clear quartz, rhodonite, malachite, sodalite, and more. Customers consistently report the stones are well-polished and smooth to hold.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>2.4 inches - the largest stone on this list, designed for full palm holding</li>
                                                        <li>19 stone variants - the most choice of any single listing on this list</li>
                                                        <li>Well-polished surface - customers confirm smooth and comfortable hold</li>
                                                        <li>Works for meditation, desk use, sleeping with, or full-hand anxiety grounding</li>
                                                        <li>Good weight for calming sensory input</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>No thumb groove - different technique from traditional worry stones</li>
                                                        <li>Too large for most pockets - less portable than standard worry stones</li>
                                                        <li>Full-palm format less suited to active fidgeting during daily life</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4mtItiM" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Large Palm Stone on Amazon →</a>
                                        </div>
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-2 order-1">
                                            <img src="/worrystone_8.jpg" alt="Large Palm Stone" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                    </div>
                                </div>

                                {/* Product 9 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">9</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">LAIDANLA 10-Pack Mini Palm Stone Set</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">📦 Best Bulk Value</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/worrystone_9.jpg" alt="LAIDANLA 10-Pack Mini Stones" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$10</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stones</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">10 different stones</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Includes</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Gift box + velvet bag</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/4vnHmVN" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Ten different stones for $10 is the best bulk value on this list - and the selection across variant 1 covers virtually every major anxiety stone type in one purchase. The mini size (1 inch) is smaller than standard worry stones, which affects the tactile experience slightly but makes them perfect for keeping in multiple locations - one in your car, one at your desk, one in your travel bag - or for giving individual stones as small gifts.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">The gift box and velvet bag packaging makes this a surprisingly complete presentation for the price. The 10 different stone types let you try every major crystal before committing to a larger, higher-quality version of your favorites. Many people use a pack like this as a tasting menu for crystals - find which stone you reach for most, then invest in a higher quality single stone of that type.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>10 stones for $10 - the best bulk value on this list</li>
                                                        <li>Covers all major anxiety crystal types in one purchase</li>
                                                        <li>Gift box + velvet bag included - complete presentation</li>
                                                        <li>Multiple variant combinations available</li>
                                                        <li>Perfect for trying different stones before investing in premium versions</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Mini size (1 inch) - smaller than standard worry stones, less substantial in hand</li>
                                                        <li>No thumb groove on mini size - more tumbled stone than traditional worry stone</li>
                                                        <li>Lower individual stone quality than dedicated single-stone options</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4vnHmVN" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check 10-Pack Mini Stones on Amazon →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-24 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 text-slate-900 dark:text-white uppercase italic">How to Use a Worry Stone for Anxiety</h2>
                            
                            <h3 className="text-2xl font-bold mb-4">Basic Technique</h3>
                            <p>Hold the stone between your thumb and index finger with the indentation facing up. Rest your thumb in the groove. Move your thumb back and forth, side to side, or in slow circles across the smooth surface. Focus on the sensation - the temperature of the stone, the smoothness of the surface, the gentle pressure against your thumb. This is the full technique. It's simple by design.</p>

                            <h3 className="text-2xl font-bold mb-4">Paired with Breathing</h3>
                            <p>The most effective way to use a worry stone for acute anxiety is to sync the rubbing motion with your breath. Rub forward as you inhale for four counts. Pause as you hold for two counts. Rub back as you exhale for six counts. This combines the tactile grounding of the stone with the physiological calming of extended exhale breathing - two of the most evidence-supported anxiety interventions simultaneously.</p>

                            <h3 className="text-2xl font-bold mb-4">As a Mindfulness Anchor</h3>
                            <p>During meditation, hold the stone in your palm (or between your fingers) and use it as an anchor for your attention. When your mind wanders, the sensation of the stone in your hand gives you something concrete to return your focus to. This is particularly useful for people who struggle with traditional meditation because the stone gives the restless mind a physical anchor point.</p>

                            <h3 className="text-2xl font-bold mb-4">Pocket Carry</h3>
                            <p>The most common use is the simplest - keep it in your pocket and reach for it whenever anxiety rises. The act of reaching for it becomes a cue: I notice anxiety, I reach for my stone, I begin the rubbing motion. Over time this creates a conditioned calming response. The stone itself becomes associated with the calming state, and eventually just holding it begins to produce the effect before the rubbing even starts.</p>

                            <h3 className="text-2xl font-bold mb-4">Desk Use</h3>
                            <p>Keep a larger palm stone (LAIDANLA Large) on your desk as a visual and tactile reminder to ground yourself. Pick it up during difficult meetings, phone calls, or moments of work-related stress. The visual presence of it also serves as a consistent reminder of your intention to manage anxiety consciously.</p>

                            <hr className="my-24 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 text-slate-900 dark:text-white uppercase italic">Does the Stone Type Actually Matter?</h2>

                            <p>Honestly - it depends on what you mean by "matter."</p>

                            <p>For the tactile grounding benefit (the mechanism that's actually evidence-based), the stone type is irrelevant. A smooth piece of polished glass would activate the same parasympathetic nervous system response as an amethyst. The benefit comes from the repetitive touch, not from the mineral composition.</p>

                            <p>What the stone type does affect is your relationship with the practice. Research on intention and meaning in therapeutic tools consistently shows that when you believe something will help you, it tends to help you more - not through magic, but through the psychological mechanism of expectation and attention. If you feel drawn to amethyst, believe it promotes calm, and choose it intentionally, you're more likely to use it consistently and invest attention in the practice. Consistent use and invested attention are what produce results.</p>

                            <p>The crystal healing community's descriptions of stone properties are belief-based rather than scientifically verified. They're not clinically meaningless though - they provide a framework of intention and meaning that enhances the practice for many people. Treat them as meaningful associations rather than medical claims, and choose stones that resonate with you personally. Your resonance with the stone is what matters most.</p>

                            <hr className="my-24 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 text-slate-900 dark:text-white uppercase italic">FAQ</h2>

                            <div className="space-y-12">
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-4">How long should I rub a worry stone during an anxiety episode?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">As long as it helps. For acute moments, 2-5 minutes of focused rubbing paired with breathing is usually sufficient to notice a shift. For background daily anxiety, shorter but more frequent use - 30 seconds to a minute several times throughout the day - builds a more consistent calming baseline than one long session.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-4">Can I use more than one worry stone?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">Yes, and many people do. Different stones for different contexts - one for work stress, one for nighttime anxiety, one to keep in the car. Rotating them also prevents the practice from becoming automatic and mindless, which reduces its effectiveness.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-4">How do I choose between so many stone types?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">Start with whichever stone's visual appearance and described properties resonate with you. There's genuine value in choosing something that feels personally meaningful rather than following a recommendation. If you're unsure, the CrystalTears 4-pack or GolbalJew 6-pack lets you try several and discover your natural preference.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-4">Do I need to cleanse my worry stone?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">This is a matter of personal practice rather than scientific necessity. In crystal healing traditions, stones are regularly cleansed (with moonlight, sunflower, running water, or selenite) to clear accumulated energy. From a purely practical standpoint, washing your stone with mild soap and water occasionally is sensible hygiene - particularly stones you carry in your pocket and touch repeatedly during stressful moments.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-4">Are worry stones safe for children?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">Standard worry stones are too small for young children and present a choking hazard. For children old enough to use them safely (generally 8 and above), worry stones can be genuinely effective anxiety tools - the tactile grounding mechanism works the same way for children as adults. The Put Your Worries Here teen journal in this series specifically references physical self-soothing techniques alongside writing exercises.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-4">What's the difference between a worry stone and a fidget ring?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">Both work through tactile grounding and repetitive motion - the mechanism is essentially identical. The practical difference is portability and discretion. A fidget ring (covered elsewhere in this series) is worn on your finger and is always available without reaching into a pocket. A worry stone requires carrying and reaching for it, but offers more surface area for tactile input and is often more satisfying for people who want something substantial to hold. Many people use both.</p>
                                </div>
                            </div>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-[3.5rem] px-12 border border-slate-100 dark:border-slate-800 shadow-xl max-w-4xl mx-auto my-32">
                                <div className="mb-12 flex justify-center">
                                    <img src="/worrystone_c.jpg" alt="Final Verdict" className="w-full max-w-2xl h-auto rounded-3xl" />
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter italic leading-none text-slate-900 dark:text-white">Final Verdict</h2>
                                <p>For most people starting out, the <strong>CrystalTears 4-Pack at $16</strong> is the best starting point. Four different stones lets you discover which type you naturally reach for, the 4,426 reviews confirm quality and consistency, and the gift box presentation means it works equally well as a personal purchase or a gift.</p>
                                <p>If you specifically want amethyst - the most popular anxiety crystal - the <strong>Natural Amethyst Single at $9</strong> with its complete velvet pouch and gift box packaging is the best value single-stone option.</p>
                                <p>For the best combination of calm and grounding, <strong>QINJIEJIE Amethyst + Obsidian at $12</strong> gives you the two most complementary anxiety stones in one purchase.</p>
                                <p>If you want the most variety for the lowest price, <strong>LAIDANLA 10-Pack at $10</strong> is unbeatable - ten stone types to try before committing to favorites.</p>
                                <p>And if you prefer full-palm holding over thumb rubbing - for meditation, desk use, or simply because you prefer more stone in your hand - the <strong>LAIDANLA Large Palm Stone at $15</strong> is the right choice, with 19 stone varieties to choose from.</p>
                                <p className="mt-12 text-xl font-bold text-slate-900 dark:text-white italic leading-tight uppercase tracking-tighter">Keep whichever stone you choose somewhere visible - in your pocket, on your desk, by your bed. The best worry stone is the one you actually reach for. Proximity makes consistency possible, and consistency is what makes it work.</p>
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
