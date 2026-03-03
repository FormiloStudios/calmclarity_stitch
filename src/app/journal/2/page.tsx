import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
import Link from "next/link";

const articles = [
    {
        image: "/ccmar262.1.jpg",
        category: "Neurology",
        readTime: "Ready to Brew",
        title: "Why You Replay Conversations on Loop (And How to Stop)",
        description: "Article Brewing...",
        href: "/articles/why-you-replay-conversations-on-loop"
    },
    {
        image: "/ccmar262.2.jpg",
        category: "Physiology",
        readTime: "Ready to Brew",
        title: "Why Your Hands and Feet Are Always Cold",
        description: "Article Brewing...",
        href: "/articles/why-your-hands-and-feet-are-always-cold"
    },
    {
        image: "/ccmar262.3.jpg",
        category: "Tools",
        readTime: "Ready to Brew",
        title: "Best Fidget Rings for Anxiety (Tested & Compared)",
        description: "Article Brewing...",
        href: "/articles/best-fidget-rings-for-anxiety-tested-and-compared"
    }
];

export default function JournalPage2() {
    return (
        <>
            <ScrollObserver />
            <Nav />
            {/* We skip the Hero for page 2 to keep it cleaner, or keep it if desired. The user said "new page" for the articles. */}

            <main className="max-w-6xl mx-auto px-6 py-32" id="feed">
                <div className="text-center mb-24">
                    <h2 className="text-xs uppercase tracking-[0.5em] mb-4 opacity-50">Journal — Page 2</h2>
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
                        href="/"
                        className="text-sm uppercase tracking-widest hover:text-primary transition-colors border-b border-black/10 pb-1"
                    >
                        ← Back to Featured
                    </Link>
                </div>
            </main>

            <NewsletterSection />
            <Footer />
        </>
    );
}
