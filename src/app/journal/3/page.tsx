import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
import Link from "next/link";

const articles = [
    {
        image: "/clean_ccmar264.1.png",
        category: "Tools",
        readTime: "12 Min Read",
        title: "Best Ice Rollers on Amazon (Tested & Compared)",
        description: "After researching every major ice roller category, comparing specs, and going through hundreds of reviews, here's exactly what's worth buying.",
        href: "/articles/best-ice-rollers-on-amazon"
    },
    {
        image: "/clean_ccmar264.2.png",
        category: "Physiology",
        readTime: "8 Min Read",
        title: "How Nerve Health Affects Anxiety (And What Actually Helps)",
        description: "Your anxiety and physical symptoms aren't separate problems. They're coming from the same place: your nervous system.",
        href: "/articles/how-nerve-health-affects-anxiety"
    },
    {
        image: "/clean_ccmar264.3.png",
        category: "Psychology",
        readTime: "10 Min Read",
        title: "Why Social Anxiety Feels Impossible to Overcome",
        description: "It isn't shyness or introversion. It's your nervous system treating social situations like a physical threat. Here is how to retrain it.",
        href: "/articles/why-social-anxiety-feels-impossible-to-overcome"
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
