'use client';

import { useEffect, useState } from 'react';
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
        readTime: "15 Min Read",
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
    },
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
    },
    {
        image: "/ccmar266.1.jpg",
        category: "Sleep Science",
        title: "Best Blue Light Blocking Glasses for Anxiety & Sleep (Compared)",
        description: "Blue light from screens suppresses melatonin. For people managing anxiety, that alert state compounds stress. Here's exactly what's worth buying.",
        href: "/articles/best-blue-light-blocking-glasses-for-anxiety-and-sleep"
    },
    {
        image: "/ccmar266.2.jpg",
        category: "Neurology",
        title: "Why Your Stomach Gets Upset Before Important Events (The Gut-Brain Anxiety Connection)",
        description: "That tight, knotted feeling in your stomach before a big event isn't just nervousness. It's your gut and brain communicating in a way that makes you physically ill.",
        href: "/articles/why-your-stomach-gets-upset-before-important-events"
    },
    {
        image: "/ccmar266.3.jpg",
        category: "Psychology",
        title: "Mother's Day Anxiety: Why This Holiday Feels So Stressful (And How to Handle It)",
        description: "If Mother's Day makes you anxious instead of happy, you're not ungrateful. You're dealing with pressure to perform happiness and complicated family dynamics.",
        href: "/articles/mothers-day-anxiety-why-this-holiday-feels-so-stressful"
    },
    {
        image: "/welllnesstools.jpg",
        category: "Aromatherapy",
        title: "Best Essential Oils for Anxiety (Compared): Single Oils, Blends & Roll-Ons",
        description: "Discover the real science behind essential oils and which specific oils match your type of anxiety across single oils, blends, and convenient roll-ons.",
        href: "/articles/best-essential-oils-for-anxiety-compared"
    },
    {
        image: "/hero.png",
        category: "Sleep Science",
        title: "Best Sunrise Alarm Clocks for Anxiety & Sleep (Compared)",
        description: "Ripping yourself out of sleep with a blaring alarm spikes your cortisol. Learn how sunrise simulation anchors your circadian rhythm and reduces morning anxiety.",
        href: "/articles/best-sunrise-alarm-clocks-for-anxiety-and-sleep"
    }
];

export default function JournalPage2() {
    const [canSeeDrafts, setCanSeeDrafts] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('dev_access') === 'true') {
            setCanSeeDrafts(true);
        }
    }, []);

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

                <div className="mt-32 text-center flex flex-col sm:flex-row items-center justify-center gap-8">
                    <Link
                        href="/"
                        className="text-sm uppercase tracking-widest hover:text-primary transition-colors border-b border-black/10 pb-1"
                    >
                        ← Previous Page
                    </Link>
                    {canSeeDrafts && (
                        <Link
                            href="/journal/3"
                            className="text-sm uppercase tracking-widest hover:text-primary transition-colors border-b border-black/10 pb-1"
                        >
                            Next Page →
                        </Link>
                    )}
                </div>
            </main>

            <NewsletterSection />
            <Footer />
        </>
    );
}
