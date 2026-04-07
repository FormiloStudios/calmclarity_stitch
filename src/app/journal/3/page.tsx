'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
import Link from "next/link";

const articles: { image: string; category: string; readTime?: string; title: string; description: string; href: string; }[] = [
    {
        image: "/hero.png",
        category: "Sleep Science",
        title: "Best Sunrise Alarm Clocks for Anxiety & Sleep (Compared)",
        description: "Ripping yourself out of sleep with a blaring alarm spikes your cortisol. Learn how sunrise simulation anchors your circadian rhythm and reduces morning anxiety.",
        href: "/articles/best-sunrise-alarm-clocks-for-anxiety-and-sleep"
    },
    {
        image: "/welllnesstools.jpg",
        category: "Aromatherapy",
        title: "Best Essential Oils for Anxiety (Compared): Single Oils, Blends & Roll-Ons",
        description: "Discover the real science behind essential oils and which specific oils match your type of anxiety across single oils, blends, and convenient roll-ons.",
        href: "/articles/best-essential-oils-for-anxiety-compared"
    }
];

export default function JournalPage3() {
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
            <ScrollObserver />
            <Nav />

            <main className="max-w-6xl mx-auto px-6 py-32" id="feed">
                <div className="text-center mb-24">
                    <h2 className="text-xs uppercase tracking-[0.5em] mb-4 opacity-50">Journal — Page 3</h2>
                    <div className="h-px w-12 bg-slate-400 dark:bg-slate-600 mx-auto"></div>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
                    {articles.map((article, index) => {
                        const isLastOdd = index === articles.length - 1 && articles.length % 2 !== 0;
                        return (
                            <div
                                key={index}
                                className={isLastOdd ? "md:col-span-2 flex justify-center" : ""}
                            >
                                <div className={isLastOdd ? "w-full md:max-w-[calc(50%-1.5rem)]" : "w-full"}>
                                    <ArticleCard {...article} />
                                </div>
                            </div>
                        );
                    })}
                </section>

                <div className="mt-32 text-center flex flex-col sm:flex-row items-center justify-center gap-8">
                    <Link
                        href="/journal/2"
                        className="text-sm uppercase tracking-widest hover:text-primary transition-colors border-b border-black/10 pb-1"
                    >
                        ← Previous Page
                    </Link>
                </div>
            </main>

            <NewsletterSection />
            <Footer />
        </>
    );
}
