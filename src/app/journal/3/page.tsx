import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
import Link from "next/link";

const articles = [
    {
        image: "/ccmar265.1.jpg",
        category: "Tools",
        readTime: "10 Min Read",
        title: "Best Acupressure Mats for Anxiety & Stress Relief (Compared)",
        description: "There's a reason acupressure mats have gone from ancient healing practice to one of the most consistently reviewed wellness tools. The science behind them is real.",
        href: "/articles/best-acupressure-mats-for-anxiety-and-stress-relief"
    },
    {
        image: "/ccmar265.2.jpg",
        category: "Psychology",
        readTime: "8 Min Read",
        title: "Why You Can't Relax Even When You Have Free Time",
        description: "You finally have time to yourself. No work. No obligations. Just free time to rest. So why does your body refuse to relax?",
        href: "/articles/why-you-cant-relax-even-when-you-have-free-time"
    },
    {
        image: "/ccmar265.3.jpg",
        category: "Physiology",
        readTime: "9 Min Read",
        title: "How to Recover From a Panic Attack (What Actually Works in the Moment)",
        description: "Your heart is pounding. You can't breathe. Your hands are shaking. This is a panic attack. Here's what to do.",
        href: "/articles/how-to-recover-from-a-panic-attack"
    }
];

export default function JournalPage3() {
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
