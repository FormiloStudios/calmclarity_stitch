import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
import Link from "next/link";

const articles = [
    {
        image: "/ccmar264.1.jpg",
        category: "Tools",
        readTime: "12 Min Read",
        title: "Best Ice Rollers on Amazon (Tested & Compared)",
        description: "After researching every major ice roller category, comparing specs, and going through hundreds of reviews, here's exactly what's worth buying.",
        href: "/articles/best-ice-rollers-on-amazon"
    },
    {
        image: "/ccmar264.2.jpg",
        category: "Physiology",
        readTime: "8 Min Read",
        title: "How Nerve Health Affects Anxiety (And What Actually Helps)",
        description: "Your anxiety and physical symptoms aren't separate problems. They're coming from the same place: your nervous system.",
        href: "/articles/how-nerve-health-affects-anxiety"
    },
    {
        image: "/ccmar264.3.jpg",
        category: "Psychology",
        readTime: "10 Min Read",
        title: "Why Social Anxiety Feels Impossible to Overcome",
        description: "It isn't shyness or introversion. It's your nervous system treating social situations like a physical threat. Here is how to retrain it.",
        href: "/articles/why-social-anxiety-feels-impossible-to-overcome"
    },
    {
        image: "/ccmar262.1.jpg",
        category: "Neurology",
        readTime: "7 Min Read",
        title: "Why You Replay Conversations on Loop (And How to Stop)",
        description: "Your brain isn't just overthinking—it's running a threat-detection program. Here is how to interrupt the loop and find closure.",
        href: "/articles/why-you-replay-conversations-on-loop"
    },
    {
        image: "/ccmar262.2.jpg",
        category: "Physiology",
        readTime: "7 Min Read",
        title: "Why Your Hands and Feet Are Always Cold",
        description: "It isn't just poor circulation—it's your nervous system prioritizing survival. Learn why your body shifts blood flow and how to signal safety.",
        href: "/articles/why-your-hands-and-feet-are-always-cold"
    },
    {
        image: "/ccmar262.3.jpg",
        category: "Tools",
        readTime: "8 Min Read",
        title: "Best Fidget Rings for Anxiety (Tested & Compared)",
        description: "Repetitive motion isn't just a habit—it's a grounding tool. Discover the best spinner, bead, and magnetic rings for silent, discreet anxiety relief.",
        href: "/articles/best-fidget-rings-for-anxiety-tested-and-compared"
    },
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

export default function JournalPage2() {
    return (
        <>
            <ScrollObserver />
            <Nav />

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
