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
                            Neurology
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            Why Your Stomach Gets Upset Before Important Events (The Gut-Brain Anxiety Connection)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>9 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                That tight, knotted feeling in your stomach before a big presentation or a first date isn&#39;t in your head. It is in your nervous system.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccmar266.2.jpg"
                                alt="Abstract representation of the gut brain connection"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>Most of us treat "nerves" as an emotional problem. But the physical symptoms - the churning, the nausea, the sudden lack (or surge) of appetite - are evidence of a biological process. Your gut and your brain are in a constant, high-speed conversation through the vagus nerve.</p>
                        <p>When you are anxious, your brain signals "danger," and your body prepares for survival. One of the first things it does to save energy is shut down non-essential systems. And there is nothing less essential during a life-or-death struggle than digesting lunch.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Enteric Nervous System</h2>
                        <p>Often called your "second brain," the enteric nervous system is a massive network of neurons lining your gastrointestinal tract. It doesn&#39;t just process food; it is a sensitive sensor that reacts immediately to your emotional state.</p>
                        
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar266.2a.jpg"
                                alt="A person holding their stomach looking distressed"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Redirecting Blood Flow</h2>
                        <p>When you feel that flight-or-fight response, your body diverts blood flow away from the gut and toward your heart, lungs, and larger muscle groups. This sudden shift in resources is what creates that hollow, sinking, or fluttering feeling we call "butterflies."</p>

                        <h3 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white text-center">How to Calm Your Stomach in the Moment</h3>
                        <p>You can&#39;t talk your stomach out of its reaction, but you can signal safety to your nervous system through physical techniques.</p>

                        <h4 className="font-display text-2xl font-bold mt-12 mb-4">The 4-7-8 Breath</h4>
                        <p>A simple breathing pattern that forces your vagus nerve to switch your nervous system back into the "rest and digest" state. <a href="/articles/the-5-minute-vagus-nerve-reset" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try the Vagus Nerve Reset →</a></p>

                        <h4 className="font-display text-2xl font-bold mt-12 mb-4">Somatic Warming</h4>
                        <p>Holding a warm cup of herbal tea or even applying a warm compress to your solar plexus can provide external signals of comfort that your enteric nervous system can "hear." A calming herbal blend like the Pukka Stress Relief Tea is ideal for these moments. <a href="https://amzn.to/3OInX7s" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check Stress Relief Tea on Amazon →</a></p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar266.2b.jpg"
                                alt="A warm cup of tea with steam rising"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6 text-primary tracking-widest text-sm uppercase text-center">Trust Your Gut</h2>
                        <p>Understanding the gut-brain connection shifts the focus from "fear" to "function." Your stomach isn&#39;t betraying you; it is reacting exactly how it was designed to. By learning to calm the feedback loop, you can move through important events with a nervous system that feels supported, not overwhelmed.</p>
                    </div>

                    <ShareSection title="Why Your Stomach Gets Upset Before Important Events (The Gut-Brain Anxiety Connection)" />
                    <CommentsSection articleId="gut-brain-anxiety" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
