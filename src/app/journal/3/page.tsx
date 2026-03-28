import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
import Link from "next/link";

const articles = [
  {
    image: "/ccmar266.1.jpg",
    category: "Sleep Science",
    readTime: "12 Min Read",
    title: "Best Blue Light Blocking Glasses for Anxiety & Sleep (Compared)",
    description: "Blue light from screens suppresses melatonin. For people managing anxiety, that alert state compounds stress. Here's exactly what's worth buying.",
    href: "/articles/best-blue-light-blocking-glasses-for-anxiety-and-sleep"
  },
  {
    image: "/ccmar266.2.jpg",
    category: "Neurology",
    readTime: "9 Min Read",
    title: "Why Your Stomach Gets Upset Before Important Events (The Gut-Brain Anxiety Connection)",
    description: "That tight, knotted feeling in your stomach before a big event isn't just nervousness. It's your gut and brain communicating in a way that makes you physically ill.",
    href: "/articles/why-your-stomach-gets-upset-before-important-events"
  },
  {
    image: "/ccmar266.3.jpg",
    category: "Psychology",
    readTime: "10 Min Read",
    title: "Mother's Day Anxiety: Why This Holiday Feels So Stressful (And How to Handle It)",
    description: "If Mother's Day makes you anxious instead of happy, you're not ungrateful. You're dealing with pressure to perform happiness and complicated family dynamics.",
    href: "/articles/mothers-day-anxiety-why-this-holiday-feels-so-stressful"
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
