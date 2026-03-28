import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ShareSection } from "@/components/ShareSection";
import { CommentsSection } from "@/components/CommentsSection";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export default function ArticlePage() {
    return (
        <>
            <Nav />
            <main className="pt-32 pb-24">
                <article className="max-w-3xl mx-auto px-6">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                            Psychology
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            Mother&#39;s Day Anxiety: Why This Holiday Feels So Stressful (And How to Handle It)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>10 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                Mother&#39;s Day is supposed to be simple. You show up. You give a gift. You say the right things. Everyone smiles. It&#39;s nice. Except it&#39;s not that simple. And it&#39;s rarely nice.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccmar266.3.jpg"
                                alt="A bouquet of flowers on a table with a blurred figure in the background"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>For a lot of people, Mother&#39;s Day is one of the most stressful days of the year. Maybe your relationship with your mother is complicated or painful. Maybe she&#39;s difficult, critical, or emotionally unavailable, and you&#39;re supposed to pretend everything is fine for one day.</p>
                        <p>Or maybe you love your mother, but the pressure to make the day perfect - the right gift, the right restaurant, the right amount of gratitude - makes you anxious and exhausted before it even begins.</p>
                        <p className="font-bold text-slate-900 dark:text-white">If Mother&#39;s Day makes you anxious instead of happy, you&#39;re not ungrateful. You&#39;re just dealing with something most people don&#39;t talk about.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why Mother&#39;s Day Feels Different</h2>
                        <p>Mother&#39;s Day carries a weight that other holidays don&#39;t. Christmas or Thanksgiving disperse focus across family and tradition. Mother&#39;s Day puts one person in the spotlight. If your relationship with that person is anything other than straightforward and loving, the day becomes a performance you have to execute flawlessly.</p>
                        
                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">The Pressure to Perform Happiness</h3>
                        <p>Even if your relationship with your mother is good, there&#39;s still pressure to be grateful, appreciative, and thoughtful. You&#39;re supposed to find the perfect gift and express exactly the right amount of love. If you don&#39;t hit that invisible mark, you feel guilty. The guilt is exhausting because even when you do everything right, it doesn&#39;t always feel like enough.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">When Your Mother Is Difficult</h3>
                        <p>If your mother is critical, controlling, or emotionally draining, Mother&#39;s Day is a minefield. You know no matter what you do, it probably won&#39;t be right. But you still have to show up because not showing up comes with consequences - guilt, judgment, or fallout from hurt feelings. So you smile and manage her emotions while suppressing your own. By the time you leave, you&#39;re completely depleted.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar266.3a.jpg"
                                alt="A person looking out a window thoughtfully"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What It Actually Feels Like</h2>
                        <ul className="mb-8">
                            <li><strong>Dread in the days leading up to it.</strong> You start feeling anxious a week before, running through scenarios and bracing for what might go wrong.</li>
                            <li><strong>Physical tension.</strong> Tight shoulders, clenched jaw, uneasy stomach. Your body is preparing for a stressful event, not a celebration.</li>
                            <li><strong>Guilt no matter what you choose.</strong> If you don&#39;t go, you feel guilty. If you do go, you feel resentful.</li>
                            <li><strong>Exhaustion afterward.</strong> Even if the day went fine, you&#39;re wiped out from the effort of making it work.</li>
                        </ul>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white text-center">How to Get Through It Without Falling Apart</h2>
                        <p>You can&#39;t fix your mother or rewrite history, but you can protect yourself.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Set Boundaries Before the Day</h3>
                        <p>Don&#39;t just hope it goes well - have a plan. Decide how long you&#39;re staying, what topics are off-limits, and what you&#39;ll do if she crosses a line. If you struggle with setting boundaries, the Healthy Boundaries Toolkit is a step-by-step guide with scripts for hard conversations. <a href="https://shop.mindful.org/products/boundaries-toolkit?sca_ref=10870558.SjISUzYe2p" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try the Boundaries Toolkit →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Give Yourself Permission to Feel Complicated Emotions</h3>
                        <p>You don&#39;t have to feel only gratitude. You can feel grateful and angry, loving and resentful. If navigating difficult emotions feels impossible, the Befriend Difficult Emotions course teaches you how to work with hard feelings instead of against them. <a href="https://shop.mindful.org/products/befriending-difficult-emotions?sca_ref=10870558.SjISUzYe2p" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Learn to work with hard feelings →</a></p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar266.3b.jpg"
                                alt="A peaceful setting with a journal and a cup of tea"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Gift Thoughtfully (But Keep It Simple)</h3>
                        <p>Don&#39;t symbolic perfection - focus on practical wellbeing. A spa gift basket is permission to rest, and a guided journal like Mom&#39;s Life Story Journal acknowledges her as a whole person beyond her role as a mother. <a href="https://amzn.to/3OInX7s" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check Mom&#39;s Life Story Journal on Amazon →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Create Space for Recovery</h3>
                        <p>Choose recovery over scrolling. Get under a weighted blanket to help your nervous system shift out of hyper-vigilance. Give yourself a few hours - or a whole day - to process the performance and let go. <a href="/articles/best-weighted-blankets-for-anxiety-tested-and-compared" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check out the Best Weighted Blankets →</a></p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 text-primary tracking-widest text-sm uppercase text-center">Take Care of Yourself First</h2>
                        <p>You don&#39;t owe anyone a perfect Mother&#39;s Day or a flawless performance. What you owe yourself is honesty and protection. Mother&#39;s Day will come and go, but you have to live with yourself after. Set the boundaries you need, feel the real emotions, and let that be enough.</p>
                    </div>

                    <ShareSection title="Mother's Day Anxiety: Why This Holiday Feels So Stressful (And How to Handle It)" />
                    <CommentsSection articleId="mothers-day-anxiety" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
