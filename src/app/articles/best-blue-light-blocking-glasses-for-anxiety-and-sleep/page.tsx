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
        if (localStorage.getItem('dev_access') === 'true') {
            setAuthorized(true);
        } else {
            router.push('/');
        }
    }, [router]);

    if (!authorized) return <div className="min-h-screen bg-white dark:bg-slate-950" />;

    return (
        <>
            <Nav />
            <main className="pt-32 pb-24">
                <article className="max-w-3xl mx-auto px-6">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                            Sleep Science
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            Best Blue Light Blocking Glasses for Anxiety & Sleep (Compared)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>12 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                You&#39;ve probably heard that screens before bed are bad for sleep. You&#39;ve possibly heard that blue light is the reason.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccmar266.1.jpg"
                                alt="Modern blue light blocking glasses on a wooden surface"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>The confusion is legitimate. The research on blue light glasses is more nuanced than most product listings will tell you. Some studies show meaningful sleep benefits. Others show minimal effect. The honest answer sits somewhere in between.</p>
                        <p>What is well-established: blue light from screens suppresses melatonin production, delays your body&#39;s sleep signals, and keeps your nervous system in an alert state when it should be winding down. For people managing anxiety, this alert state compounds existing stress.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Science - What We Know and What We Don&#39;t</h2>
                        <p>When you wear blue light glasses, you aren&#39;t just "protecting your eyes" from strain - you are signaling to your brain that the sun has set. The mechanism is real, and for many users the practical difference in sleep quality is immediate.</p>
                        
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar266.1a.jpg"
                                alt="A person working late on a laptop wearing amber-tinted glasses"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What to Look For When Buying</h2>
                        <p>Not all glasses are created equal. Many "clear" lenses sold as blue light blockers only filter out a tiny percentage of the most aggressive light. If you are serious about sleep and anxiety management, you need lenses that target the 450-500nm range.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Top Recommendations for 2026</h3>
                        <ol className="mb-8">
                            <li><strong>Felix Gray (Best for Daytime Use):</strong> These have a proprietary filter embedded in the lens rather than a coating that can scratch off. <a href="https://amzn.to/3PivWki" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check Felix Gray on Amazon →</a></li>
                            <li><strong>Swanwick (Best for Nighttime/Sleep):</strong> Their "Orange" lenses are the gold standard for blocking nearly 100% of blue light before bed. <a href="https://amzn.to/3PrT96t" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check Swanwick on Amazon →</a></li>
                            <li><strong>Gamma Ray (Best Budget Option):</strong> If you want to test the benefits without a large investment. <a href="https://amzn.to/3Pa6q2z" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check Gamma Ray on Amazon →</a></li>
                        </ol>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar266.1b.jpg"
                                alt="A pair of stylish glasses next to an open book and a cup of tea"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6 text-primary tracking-widest text-sm uppercase text-center">The Bottom Line</h2>
                        <p>Blue light glasses aren&#39;t a magic cure for anxiety, but they are a vital tool in your "sleep hygiene" toolkit. By reducing the physiological alert signals sent to your brain, you give your nervous system a much better chance at full recovery overnight.</p>
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
