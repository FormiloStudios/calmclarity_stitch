'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
import { ArticleCard } from "@/components/ArticleCard";
import Link from 'next/link';

const articles = [
    {
        image: "/ashwa_a.jpg",
        category: "Wellness Tools",
        title: "Best Ashwagandha Supplements for Stress & Anxiety (Compared)",
        description: "Ashwagandha is one of the few supplements with serious clinical research behind its ability to address stress directly. Discover how this adaptogen regulates your cortisol response.",
        href: "/articles/best-ashwagandha-supplements-for-stress-and-anxiety-compared"
    }
];

export default function JournalPage4() {
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

            <main className="max-w-6xl mx-auto px-6 py-32" id="feed">
                <div className="text-center mb-24">
                    <h2 className="text-xs uppercase tracking-[0.5em] mb-4 opacity-50 text-slate-900 dark:text-white font-bold">Journal - Page 4 (Drafts)</h2>
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
                        href="/journal/3"
                        className="text-sm uppercase tracking-widest hover:text-primary transition-colors border-b border-black/10 dark:border-white/10 pb-1 text-slate-900 dark:text-white font-bold"
                    >
                        ← Back to Public Journal
                    </Link>
                </div>
            </main>

            <NewsletterSection />
            <Footer />
        </>
    );
}
