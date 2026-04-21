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
                            Best Epsom Salts for Anxiety and Muscle Relaxation (Compared)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>April 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    {/* Hero Image */}
                    <div className="relative w-full mb-16 rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                        <img src="/epsom_a.jpg" alt="Best Epsom Salts" className="w-full h-auto block" />
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed max-w-none">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-12 leading-relaxed italic">
                                There's a reason a warm bath has been a go-to stress relief ritual across cultures for thousands of years. The warm water alone relaxes muscles, lowers blood pressure, and signals to your nervous system that it's safe to unwind. Add Epsom salt - and depending on who you ask, you're either enhancing that experience with magnesium absorption or simply making a very good bath even better through the ritual itself. Either way, the result is the same: less tension, less anxiety, and a noticeably better night's sleep.
                            </p>

                            <p>Epsom salt is one of the most accessible anxiety-support tools available. A 3lb bag costs under $6 and provides weeks of regular baths. It requires no equipment, no technique, no learning curve. You dissolve it in warm water and soak for 20 minutes. That's it.</p>

                            <div className="my-16 flex justify-center">
                                <img src="/epsom_b.jpg" alt="Epsom salt bath therapeutic benefit" className="w-full max-w-4xl h-auto rounded-2xl shadow-xl" />
                            </div>

                            <p>The challenge with Amazon is that the category has hundreds of options that look nearly identical. Understanding what actually differs between them - scent, grain size, added ingredients, format, and size - makes this a much simpler purchase than the product listing jungle suggests.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 text-slate-900 dark:text-white uppercase italic">What Epsom Salt Actually Is</h2>
                            
                            <p>Epsom salt is magnesium sulfate - a naturally occurring mineral compound of magnesium, sulfur, and oxygen. Despite the name, it contains no sodium chloride (regular salt). It dissolves readily in warm water, producing a slightly silky texture that softens skin, and has been used in therapeutic bathing since at least the 17th century, when it was first discovered in the mineral springs of Epsom, England.</p>

                            <p>The question most people eventually encounter is whether the magnesium in an Epsom salt bath actually absorbs through the skin - and the answer is: probably, but the evidence is less clear-cut than most product listings suggest.</p>

                            <p>A 2017 study in the journal Nutrients found measurable increases in blood and urine magnesium levels following Epsom salt baths in human participants. However, the study had a small sample size and has faced methodological critiques. Other research has questioned whether the skin's barrier function prevents meaningful transdermal magnesium uptake. The scientific consensus hasn't fully settled.</p>

                            <p>What is not debated is the relaxation effect of an Epsom salt bath. The combination of warm water (which directly relaxes muscles, lowers blood pressure, and activates the parasympathetic nervous system), the 20-30 minute ritual of enforced stillness, and the aromatherapy from scented varieties all produce measurable anxiety and tension relief regardless of how much magnesium your skin absorbs. The bath experience itself is therapeutic, and Epsom salt enhances it.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 text-slate-900 dark:text-white uppercase italic">What Actually Differentiates Epsom Salt Products</h2>

                            <p>Since the core ingredient - magnesium sulfate - is chemically identical across brands, understanding what genuinely varies helps you choose rather than guess.</p>

                            <p><strong>USP Grade</strong> means the product meets US Pharmacopeia purity standards - the same standard used for pharmaceutical-grade substances. All quality Epsom salts should be USP grade. Every product on this list is USP grade.</p>

                            <p><strong>Scent</strong> is the most impactful variable for anxiety and relaxation use. Unscented pure Epsom salt gives you the magnesium benefit and nothing else - ideal for sensitive skin or those who want to add their own essential oils. Lavender adds genuine anxiolytic aromatherapy proven to reduce cortisol. Eucalyptus opens airways and promotes the physical release of muscle tension. Melatonin-blended varieties add a targeted sleep signal. Choose based on your primary goal.</p>

                            <p><strong>Grain size</strong> affects dissolution speed. Fine grain dissolves almost instantly in warm water. Medium grain (most common) dissolves within a few minutes of stirring. Coarse grain takes longer but some people prefer it for foot soaks. None affects the therapeutic outcome once dissolved.</p>

                            <p><strong>Added ingredients</strong> separate basic Epsom salts from more complex formulations. Some add vitamins (Vitamin E, C), minerals (Dead Sea salt), MSM (methylsulfonylmethane for joint support), melatonin, or chamomile extract. These additions can meaningfully change the therapeutic profile beyond basic magnesium sulfate.</p>

                            <p><strong>Size</strong> is the most overlooked variable. A 3lb bag provides roughly 6-12 baths (using 2 cups per bath). For someone bathing weekly, that's 6-12 weeks of supply. For someone bathing daily for anxiety management, that's under two weeks. If you're committed to a regular Epsom salt practice, buying bulk (19-38lb) dramatically reduces cost per bath.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-slate-900 dark:text-white uppercase italic text-center underline decoration-primary/20 underline-offset-8">7 Best Epsom Salts for Anxiety and Muscle Relaxation</h2>

                            <div className="space-y-32">
                                {/* Product 1 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">1</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">Amazon Basics Epsom Salt Soak</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🏆 Best Overall / Best Budget</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/epsom_1.jpg" alt="Amazon Basics Epsom Salt" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$3.23</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Size</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">3 lbs</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stars</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">4.8 (15,033 reviews)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/4vTvxaa" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">At $3.23 for 3 lbs, this is the lowest price per bath of any product on this list and the #1 bestseller in Bath Salts on Amazon. For someone trying Epsom salt baths for the first time, or anyone who wants pure USP grade magnesium sulfate without added fragrance at the absolute lowest cost, nothing beats this.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The unscented formula is also the most versatile on this list. Add a few drops of your own essential oil - lavender for sleep, eucalyptus for muscle tension, bergamot for mood - and you effectively have a custom bath soak at a fraction of the cost of pre-scented options.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>#1 in Bath Salts on Amazon with 15,033 reviews at 4.8 stars</li>
                                                        <li>$3.23 - the lowest price on this list by a wide margin</li>
                                                        <li>Pure USP grade magnesium sulfate - no additives or fragrances</li>
                                                        <li>Ideal for sensitive skin or anyone who reacts to added fragrances</li>
                                                        <li>Versatile - add your own essential oils to customize</li>
                                                        <li>Resealable bag for easy storage</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>No scent or added therapeutic ingredients - just pure magnesium sulfate</li>
                                                        <li>3 lbs provides only 6 baths at the standard 2-cup dose - runs out quickly</li>
                                                        <li>No premium packaging or added-value ingredients</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4vTvxaa" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Amazon Basics Epsom Salt on Amazon →</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Product 2 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">2</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">Dr Teal's Pure Epsom Salt - Soothe and Sleep with Lavender</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">😴 Best for Sleep and Evening Anxiety</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-6 md:order-1 order-2">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$5.87</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Scent</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Lavender</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stars</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">4.8 (18,146 reviews)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/4t9OQtU" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Dr Teal's is the most recognized Epsom salt brand in the world, and their lavender soak is the product that built that reputation. Eighteen thousand reviews at 4.8 stars makes this the most socially validated scented Epsom salt on Amazon. The lavender essential oil does genuine therapeutic work beyond its pleasant scent - lavender is the most researched essential oil for anxiety and sleep.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">The combination of warm water (which directly relaxes muscles and activates the parasympathetic nervous system), magnesium sulfate, and lavender aromatherapy creates a three-pronged relaxation signal that is reliably effective as a pre-sleep ritual.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>18,146 reviews at 4.8 stars - the most reviewed scented Epsom salt on this list</li>
                                                        <li>Dr Teal's - the most recognizable Epsom salt brand, widely trusted</li>
                                                        <li>Lavender essential oil - the most researched oil for anxiety and sleep</li>
                                                        <li>Paraben-free, phthalate-free, cruelty-free, vegan</li>
                                                        <li>Multiple scent variants available (Lavender & Eucalyptus, Lavender & Rosemary)</li>
                                                        <li>Under $6 - exceptional value for a branded, scented therapeutic soak</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Fragrance may not suit everyone - those with sensitivities should choose unscented</li>
                                                        <li>3 lbs provides ~6 baths - relatively short supply for daily users</li>
                                                        <li>No melatonin or chamomile like the Sleep Blend variant below</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4t9OQtU" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Dr Teal's Lavender on Amazon →</a>
                                        </div>
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-2 order-1">
                                            <img src="/epsom_2.jpg" alt="Dr Teal's Lavender Epsom Salt" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                    </div>
                                </div>

                                {/* Product 3 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">3</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">Dr Teal's Epsom Salt - Relax and Relief with Eucalyptus and Spearmint</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">💪 Best for Muscle Tension</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/epsom_3.jpg" alt="Dr Teal's Eucalyptus and Spearmint" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$5.87</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Scent</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Eucalyptus + Spearmint</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stars</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">4.8 (10,056 reviews)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/4cTM2v6" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Where the lavender soak targets the mind and sleep, the eucalyptus and spearmint soak targets the body - specifically the physical tension that anxiety creates and sustains in your muscles. Eucalyptus oil contains 1,8-cineole, a compound that directly relaxes bronchial smooth muscle and reduces physical tension. Spearmint provides a cooling, clarifying quality that counters the foggy, heavy feeling that prolonged anxiety produces.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">The combination is distinctly different from the lavender experience. Lavender is sedating and calming. Eucalyptus and spearmint are releasing and revitalizing - they're better for the middle of a tense day, post-workout recovery, after a stressful event, or when your body feels physically locked up.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>10,056 reviews at 4.8 stars - very strong validation</li>
                                                        <li>Eucalyptus and spearmint specifically target physical muscle tension</li>
                                                        <li>More invigorating than lavender - better for daytime or post-tension use</li>
                                                        <li>Same Dr Teal's quality and price as lavender variant</li>
                                                        <li>Paraben-free, phthalate-free, cruelty-free, vegan</li>
                                                        <li>#6 in Bath Salts on Amazon</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>More activating than calming - not the best choice for pre-sleep use</li>
                                                        <li>Eucalyptus scent is strong - may be intense for sensitivity</li>
                                                        <li>3 lbs is a limited supply for frequent use</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4cTM2v6" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Eucalyptus and Spearmint on Amazon →</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Product 4 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">4</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">Dr Teal's Pure Epsom Salt Soak - Sleep Blend with Melatonin, Lavender and Chamomile</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🌙 Best for Serious Sleep Disruption</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-6 md:order-1 order-2">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$5.87</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Key Add</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Melatonin</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stars</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">4.8 (5,737 reviews)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/4t9OQtU" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">This is the most sleep-targeted product on this list. Where the standard lavender soak provides aromatherapy through lavender essential oil, the Sleep Blend adds melatonin - the hormone that regulates your sleep-wake cycle - directly to the formula. The melatonin is inhaled as part of the steam from your bath, complementing the lavender and chamomile aromatherapy for a three-pronged pre-sleep signal.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">Chamomile adds sedative properties distinct from lavender's - the apigenin compound in chamomile binds to the same brain receptors as benzodiazepines, producing mild natural sedation. The combination creates the most complete pre-sleep bath formula available at this price point.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Melatonin added - directly targets the sleep hormone disruption</li>
                                                        <li>Triple-action sleep formula: melatonin + lavender + chamomile</li>
                                                        <li>5,737 reviews at 4.8 stars - well validated for specialization</li>
                                                        <li>Currently discounted from $7 to $5.87</li>
                                                        <li>Same Dr Teal's quality and clean formula standard</li>
                                                        <li>Paraben-free, phthalate-free, cruelty-free, vegan</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Not ideal for daytime use - melatonin is specifically a sleep signal</li>
                                                        <li>More specialized than other options - less versatile</li>
                                                        <li>Lower review count than lavender or eucalyptus variants</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4t9OQtU" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Melatonin Sleep Blend on Amazon →</a>
                                        </div>
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-2 order-1">
                                            <img src="/epsom_4.jpg" alt="Melatonin Sleep Blend Epsom Salt" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                    </div>
                                </div>

                                {/* Product 5 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">5</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">Village Naturals Therapy Muscle Concentrated Mineral Bath Soak</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🌿 Best Concentrated Formula / Best for Serious Muscle Tension</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/epsom_5.jpg" alt="Village Naturals Therapy Soak" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$25.60 (4-pack)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Scent</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Eucalyptus + Menthol</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stars</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">4.7 (1,309 reviews)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/4vBaPLQ" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Village Naturals Therapy is a different category of product. Where Dr Teal's is Epsom salt plus essential oil fragrance, Village Naturals is a concentrated therapeutic mineral soak - it combines Epsom salt with sea salt, menthol, wintergreen, eucalyptus, and spearmint in a concentrated formula where only 2 capfuls are needed per bath.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The concentrated format changes the economics: 4 x 20oz = 80oz total, and at 2oz per bath that's approximately 40 baths from this pack. The therapeutic profile is also more intense than standard Epsom salt - menthol and wintergreen provide a genuine warming-then-cooling sensation in the bath that most users describe as significantly more physically releasing.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Concentrated formula - only 2 capfuls per bath rather than 2 full cups</li>
                                                        <li>~40 baths from a $25.60 4-pack - excellent per-bath value</li>
                                                        <li>Sea salt + Epsom salt + menthol + wintergreen - more complex profile</li>
                                                        <li>Menthol and wintergreen produce more intense physical muscle release</li>
                                                        <li>Made in USA</li>
                                                        <li>4.7 stars across 1,309 reviews</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Menthol creates a strong sensation - may be intense for sensitive skin</li>
                                                        <li>Not appropriate for people who dislike strong mentholated scents</li>
                                                        <li>4-pack format means larger upfront purchase</li>
                                                        <li>No sleep-promoting properties - purely a muscle tension product</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4vBaPLQ" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Village Naturals Therapy on Amazon →</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Product 6 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">6</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">Purely Northwest Tea Tree Foot Soak</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🦶 Best Dedicated Foot Soak</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-6 md:order-1 order-2">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$31.65</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Key Add</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">MSM</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stars</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">4.7 (21,109 reviews)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/4cmhoug" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">Important framing upfront: this is primarily a foot health product rather than a full-body anxiety soak. It's included here because foot soaks are a genuinely accessible alternative to full baths for daily Epsom salt use - particularly for people without bathtubs, limited mobility, or those who simply want a 15-minute foot soak at their desk.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">The formula is purpose-built for feet. Australian tea tree oil (100% pure) addresses foot skin health, odor, and infection prevention. Peppermint provides a cooling, circulation-boosting sensation. MSM (methylsulfonylmethane) supports joint comfort in the feet and ankles.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>21,109 reviews at 4.7 stars - highest count after Amazon Basics</li>
                                                        <li>#2 in Foot and Hand Salts and Soaks</li>
                                                        <li>100% pure essential oils - no synthetic fragrances</li>
                                                        <li>MSM for joint comfort - additional therapeutic benefit</li>
                                                        <li>Accessible alternative to full baths - usable in a small basin</li>
                                                        <li>No bathtub required - practical for any living situation</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>$31.65 for 3 lbs - the most expensive per-pound option on this list</li>
                                                        <li>Primarily foot-focused - not designed for full-body bathing</li>
                                                        <li>Strong tea tree scent - not universally enjoyed</li>
                                                        <li>Foot health focus may not resonate with all anxiety-focused readers</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4cmhoug" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Tea Tree Foot Soak on Amazon →</a>
                                        </div>
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-2 order-1">
                                            <img src="/epsom_6.jpg" alt="Purely Northwest Foot Soak" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                    </div>
                                </div>

                                {/* Product 7 */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">7</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight italic">Epsoak Bulk Epsom Salt - 38 lbs (2 x 19 lb Bags)</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">📦 Best Bulk Value / Best for Daily Bathers</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/epsom_7.jpg" alt="Epsoak Bulk Epsom Salt" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$63</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Size</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">38 lbs</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Stars</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">4.8 (17,832 reviews)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.7rem]">Link</p>
                                                    <a href="https://amzn.to/41KfzkN" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">The economics of regular Epsom salt baths change dramatically at bulk scale. At 2 cups (roughly 1 lb) per bath, 38 lbs provides approximately 38 baths. At $63, that's $1.66 per bath - less than the per-bath cost of any 3 lb bag on this list, including Amazon Basics. For someone committed to daily or near-daily baths, the Epsoak bulk is the most sensible purchase.</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">Epsoak is made by the San Francisco Salt Company - one of the most established dedicated salt brands in the US - and is USP grade, made in the USA, and cruelty-free certified. The medium grain dissolves quickly without the clumping that sometimes occurs with fine grain in humid storage conditions.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>38 lbs - approximately 38 full baths from one purchase</li>
                                                        <li>$1.66 per bath - the lowest cost per bath on this list</li>
                                                        <li>17,832 reviews at 4.8 stars - extensively validated</li>
                                                        <li>Made in USA by San Francisco Salt Company</li>
                                                        <li>Cruelty-free certified</li>
                                                        <li>Medium grain - quick dissolving, no clumping</li>
                                                        <li>Two separate 19lb resealable bags - practical for storage</li>
                                                        <li>Unscented - add your own oils for full customization</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.7rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>$63 upfront cost - the highest absolute price on this list</li>
                                                        <li>38 lbs is a commitment - not suitable for occasional bathers</li>
                                                        <li>Requires storage space for large bags</li>
                                                        <li>No added therapeutic ingredients - purely magnesium sulfate</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/41KfzkN" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Epsoak Bulk on Amazon →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-24 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 text-slate-900 dark:text-white uppercase italic">How to Get the Most From Your Epsom Salt Bath</h2>
                            
                            <h3 className="text-2xl font-bold mb-4">Temperature and Duration</h3>
                            <p>Water temperature of 100-104°F (38-40°C) is the optimal range - warm enough to open pores and relax muscles without being uncomfortably hot. Hotter water can raise heart rate and feel activating rather than calming.</p>
                            <p>Duration matters more than most people realize. The widely cited recommendation of 20 minutes is based on the time needed for meaningful transdermal mineral contact and for the parasympathetic nervous system to shift into a relaxed state. Less than 15 minutes produces a noticeably reduced effect. 25-30 minutes is the sweet spot for anxiety and tension relief.</p>

                            <h3 className="text-2xl font-bold mb-4">How Much Salt to Use</h3>
                            <p>Two cups (approximately 1 lb) for a full bath is the standard dose. This creates the mineral concentration needed for therapeutic benefit. More is not significantly better - 3 cups is not 50% more effective than 2 cups. For foot soaks, 1/4 to 1/2 cup in a small basin is appropriate.</p>
                            <p>Stir or swish the bath water before getting in to ensure the salt fully dissolves. Undissolved salt on the tub floor provides no benefit.</p>

                            <h3 className="text-2xl font-bold mb-4">Enhancing the Experience</h3>
                            <p>An Epsom salt bath is one of the most effective anchors for a complete pre-sleep anxiety relief routine. Consider combining with:</p>
                            <p><strong>Dim or red lighting</strong> - bright overhead lights keep your nervous system in alert mode. A lamp or candles signal that the day is ending.</p>
                            <p><strong>Essential oils in a diffuser</strong> - if using unscented Epsom salt, diffuse lavender or chamomile alongside the bath. The essential oils article elsewhere in this series covers the best options in detail.</p>
                            <p><strong>Phone in another room</strong> - the bath environment's therapeutic value is significantly reduced by scrolling. Give the 20-30 minutes entirely to the soak.</p>
                            <p><strong>A warm drink</strong> - chamomile or valerian tea during or after the bath extends the parasympathetic activation.</p>

                            <h3 className="text-2xl font-bold mb-4">After the Bath</h3>
                            <p>Rinse briefly with lukewarm water, pat dry gently, and apply a light moisturizer while your skin is still slightly damp. Avoid vigorous activity - the relaxation effect persists for 20-40 minutes and is best preserved by moving into a calm post-bath routine.</p>

                            <hr className="my-24 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 text-slate-900 dark:text-white uppercase italic">The Science of Epsom Salt Baths for Anxiety</h2>

                            <p>Three mechanisms contribute to the anxiety and relaxation benefit of an Epsom salt bath - and being honest about which are well-established and which are more speculative matters for managing expectations.</p>

                            <p><strong>Warm water therapy</strong> is the most evidence-supported component. Immersion in warm water triggers the diving reflex response - heart rate decreases, blood pressure lowers, and the body shifts toward parasympathetic dominance. A 2018 study published in the journal Evidence-Based Complementary and Alternative Medicine found that regular warm baths in the evening significantly improved mood and reduced anxiety compared to shower-only controls.</p>

                            <p><strong>Aromatherapy</strong> from scented Epsom salts provides the same mechanism discussed in the essential oils article in this series. Lavender inhalation has been shown in multiple studies to reduce salivary cortisol, lower heart rate, and promote melatonin production.</p>

                            <p><strong>Transdermal magnesium absorption</strong> is the most contested mechanism. A 2017 study found evidence for increased blood magnesium following Epsom salt baths, but the evidence is limited. What is less contested is that magnesium deficiency - which is common - contributes to anxiety, poor sleep, and muscle tension.</p>

                            <p><strong>The ritual effect</strong> is underappreciated but real. Setting aside 20-30 minutes of intentional stillness - no phone, no tasks, no stimulation - is itself a therapeutic intervention for anxiety. A bath provides a structured context for that stillness that feels rewarding.</p>

                            <hr className="my-24 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 text-slate-900 dark:text-white uppercase italic">FAQ</h2>

                            <div className="space-y-12">
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-4">How often should I take an Epsom salt bath for anxiety?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">Daily use is both safe and beneficial for most people. If time is a constraint, three to four times per week is sufficient to maintain meaningful anxiety and tension relief effects.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-4">Can I use Epsom salt in a foot soak instead of a full bath?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">Yes - a 15-minute foot soak in warm Epsom salt water delivers meaningfully similar relaxation effects to a full bath. Foot soaks are a practical alternative for people without bathtubs.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-4">Is it safe to use Epsom salt every day?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">Yes for most healthy adults. Epsom salt baths are external use only and pose no documented risk from daily use. People with very sensitive skin may find daily use drying.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-4">Should I use scented or unscented Epsom salt?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">Scented if aromatherapy is part of your goal (lavender for sleep and anxiety, eucalyptus for muscle tension). Unscented if you have fragrance sensitivities or want to add your own essential oils.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-4">What temperature should the water be?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">100-104°F is the optimal range. Hotter water can raise heart rate and feel activating rather than calming.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-xl mb-4">How long does the relaxation effect last?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed italic">The immediate relaxation effect Typically lasts 1-3 hours after a bath. The sleep-promoting effect can persist through the night if the bath is taken 60-90 minutes before bed.</p>
                                </div>
                            </div>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-[3.5rem] px-12 border border-slate-100 dark:border-slate-800 shadow-xl max-w-4xl mx-auto my-32">
                                <div className="mb-12 flex justify-center">
                                    <img src="/epsom_c.jpg" alt="Final Verdict" className="w-full max-w-2xl h-auto rounded-3xl" />
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter italic leading-none text-slate-900 dark:text-white">Final Verdict</h2>
                                <p>For most people, <strong>Dr Teal's Lavender at $5.87</strong> is the right starting point. Eighteen thousand reviews at 4.8 stars is as close to a proven product as the category offers, the lavender adds genuine therapeutic aromatherapy, and under $6 for 6 baths is a meaningful trial at minimal cost.</p>
                                <p>If sleep disruption is your primary concern, upgrade to <strong>Dr Teal's Melatonin Sleep Blend</strong> at the same price - the added melatonin and chamomile make it the most specifically sleep-targeted formula.</p>
                                <p>If your anxiety manifests more as physical muscle tension, the <strong>Dr Teal's Eucalyptus and Spearmint</strong> or the <strong>Village Naturals Concentrated Mineral Soak</strong> will both provide more physically releasing experiences.</p>
                                <p>For the cleanest, most versatile formula at the lowest possible price, <strong>Amazon Basics Unscented at $3.23</strong> is the honest best value - add your own essential oils and customize it exactly to your needs.</p>
                                <p>And if you've already found that Epsom salt baths work for you and want to commit to a daily practice, <strong>Epsoak 38lb at $63</strong> brings the per-bath cost below $2.</p>
                                <p className="mt-12 text-xl font-bold text-slate-900 dark:text-white italic leading-tight uppercase tracking-tighter">The best Epsom salt bath is the one you actually take. Pick one, try it tonight for 20 minutes, and see what it does to your shoulders.</p>
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
