import Image from "next/image";
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
                            Lifestyle
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            How to Stop Decision Fatigue From Wrecking Your Day
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>6 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                By 2 PM, you can&#39;t decide what to have for lunch. It&#39;s not that you&#39;re not hungry. It&#39;s not that there aren&#39;t options. You just... can&#39;t make the decision.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/evergreen_3.jpg"
                                alt="Person feeling overwhelmed by decisions"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>Every choice feels like it requires more mental energy than you have. So you end up eating nothing, or eating the same thing you always eat, or scrolling through delivery apps for 20 minutes and still not ordering anything.</p>
                        <p>That&#39;s decision fatigue.</p>
                        <p>And it&#39;s not just about lunch. It&#39;s about every small choice you&#39;ve been making since you woke up — what to wear, which task to start with, how to respond to an email, whether to go to the gym, what route to take to work.</p>
                        <p>By the time you hit the afternoon, your brain is done. You&#39;ve burned through your mental energy on a thousand tiny decisions, and now you have nothing left for the things that actually matter.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What Decision Fatigue Actually Is</h2>
                        <p>Decision fatigue is the deteriorating quality of decisions you make after a long session of decision-making.</p>
                        <p>Every choice you make — even small, seemingly insignificant ones — uses mental energy. And unlike physical energy, which you can feel draining, mental energy depletes quietly.</p>
                        <p>You don&#39;t notice it happening until you&#39;re sitting there, unable to decide between two equally fine options, feeling irrationally frustrated.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/evergreen_3a.jpg"
                                alt="The mental weight of too many choices"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">How to Protect Your Mental Energy</h2>
                        <p>You can&#39;t eliminate decisions from your life. But you can protect your capacity so you&#39;re not running on empty by noon.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Reduce the Number of Decisions You Have to Make</h3>
                        <p>This is the most effective strategy, and it&#39;s what successful people do instinctively.</p>
                        <ul>
                            <li><strong>Automate your morning routine:</strong> Decide once what you&#39;re going to wear, eat, and do in the morning, then repeat it.</li>
                            <li><strong>Batch similar decisions:</strong> Instead of deciding what to eat every single meal, plan your meals for the week on Sunday.</li>
                            <li><strong>Set default choices:</strong> For recurring decisions, create a default. Always order the same thing at your regular coffee shop.</li>
                        </ul>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white">What Actually Helps</h2>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Make Important Decisions Early</h3>
                        <p>Your decision-making capacity is highest in the morning. Use it wisely. Tackle the decisions that actually matter — big work projects, important conversations, strategic planning — in the first half of your day.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Give Your Brain Actual Fuel</h3>
                        <p>Decision-making burns through glucose and depletes certain neurotransmitters. If you&#39;re not supporting your brain with what it needs, you&#39;re going to hit the wall faster.</p>
                        <p>Support cognitive function. If you&#39;re dealing with brain fog and mental fatigue regularly, your brain might need extra support. Supplements like <a href="https://www.advancedbionutritionals.com/DS24/BrainAMP/Brain-Just-Switched-On/HD.htm#aff=Select_partner" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">BrainAMP</a> or <a href="https://www.digistore24.com/redir/442614/Select_partner/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">NeuroActiv6</a> are designed to support mental energy and cognitive function.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Use Physical Tools to Discharge Mental Tension</h3>
                        <p>Decision fatigue creates a lot of restless mental energy. You feel wound up, but your brain is also too tired to focus.</p>
                        <p>A <a href="https://amzn.to/4kogorP" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">fidget ring</a> can help. When you&#39;re sitting at your desk trying to make a decision and feeling stuck, having something for your hands to do helps discharge some of that restless energy.</p>
                        <p>Therapy putty works the same way. Squeezing it for 30 seconds while you&#39;re thinking can help you focus without feeling as mentally frazzled. <a href="https://amzn.to/4chc7Ey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">therapy putty</a></p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/evergreen_3b.jpg"
                                alt="Taking a mental reset walk"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Lower Your Baseline Stress</h3>
                        <p>When you&#39;re chronically stressed, your decision-making capacity is already compromised. Stress depletes the same mental resources that decision-making uses.</p>
                        <p><a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium Breakthrough</a> helps regulate your stress response and supports cognitive function. Taking it consistently can help you maintain better mental clarity and resilience.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Accept &quot;Good Enough&quot;</h2>
                        <p>Perfectionism makes decision fatigue worse. When you&#39;re trying to make the perfect choice for every decision, you&#39;re spending way more mental energy than necessary.</p>
                        <p>Sometimes good enough is good enough. You don&#39;t need to find the absolute best restaurant for dinner. You just need one that&#39;s fine.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6 text-primary uppercase tracking-widest text-sm">Conclusion</h2>
                        <p>Decision fatigue is real. You&#39;re not weak for feeling mentally drained by the end of the day. Protect your mental energy, simplify where you can, and give yourself permission to make &quot;good enough&quot; choices when you&#39;re running low.</p>
                    </div>

                    <ShareSection title="How to Stop Decision Fatigue From Wrecking Your Day" />
                    <CommentsSection articleId="decision-fatigue" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
