import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
import Link from "next/link";

const articles = [
    {
        image: "/ccmar263.1.jpg",
        category: "Neurology",
        readTime: "8 Min Read",
        title: "How to Manage News Anxiety (When the World Feels Like It's Falling Apart)",
        description: "Your brain wasn't designed to carry every global crisis 24/7. Learn how to set boundaries and protect your nervous system without checking out.",
        href: "/articles/how-to-manage-news-anxiety"
    },
    {
        image: "/ccmar263.2.jpg",
        category: "Relationships",
        readTime: "8 Min Read",
        title: "Family Gathering Anxiety: Why Holidays and Events Feel So Draining",
        description: "It's not just extroversion or introversion—it's the emotional labor of familial systems. Here is why you feel depleted and how to recover.",
        href: "/articles/family-gathering-anxiety"
    },
    {
        image: "/ccmar263.3.jpg",
        category: "Physiology",
        readTime: "7 Min Read",
        title: "Why Your Brain Feels Foggy by 2 PM (And What Actually Helps)",
        description: "Mid-afternoon sluggishness isn't random. It's the result of resource depletion. Discover how to fuel your focus and lift the cotton-wrapped fog.",
        href: "/articles/why-your-brain-feels-foggy-by-2pm"
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

                <div className="mt-32 text-center">
                    <Link
                        href="/journal/2"
                        className="text-sm uppercase tracking-widest hover:text-primary transition-colors border-b border-black/10 pb-1"
                    >
                        ← Back to Previous
                    </Link>
                </div>
            </main>

            <NewsletterSection />
            <Footer />
        </>
    );
}
