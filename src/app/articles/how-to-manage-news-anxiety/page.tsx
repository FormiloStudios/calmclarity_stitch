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
                            Neurology
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            How to Manage News Anxiety (When the World Feels Like It&#39;s Falling Apart)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>8 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                You open your phone to check one thing. Thirty minutes later, you&#39;re still scrolling. War updates. Economic collapse warnings. Political chaos. Climate disasters. Each headline worse than the last.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccmar263.1.jpg"
                                alt="Person looking stressed while looking at their phone"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>You tell yourself you need to stay informed. You need to know what&#39;s happening. You can&#39;t just ignore the world.</p>
                        <p>But by the time you finally put your phone down, your chest is tight. Your stomach is in knots. Your brain is running through worst-case scenarios you can&#39;t do anything about.</p>
                        <p>The world feels like it&#39;s unraveling. And your nervous system is absorbing every piece of that chaos.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">This Isn&#39;t Normal Anxiety</h2>
                        <p>There&#39;s always been bad news. But the last few years have been relentless.</p>
                        <p>A global pandemic. Economic instability. Political polarization hitting extremes. Wars escalating in ways we haven&#39;t seen in decades. Climate events getting more frequent and more severe.</p>
                        <p>And all of it delivered directly to your phone, 24/7, in real-time, from every possible angle.</p>
                        <p>Your brain wasn&#39;t designed for this. Humans evolved to worry about immediate, local threats - a predator nearby, a conflict with a neighbor, a storm approaching your village.</p>
                        <p>We didn&#39;t evolve to carry the weight of every crisis happening everywhere in the world, all at once, all the time.</p>
                        <p>But that&#39;s what we&#39;re doing now. And it&#39;s breaking people.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why It Feels Different Right Now</h2>
                        <p>If your anxiety has been worse lately, you&#39;re not imagining it. The threat level feels higher. Not just &quot;bad news is happening,&quot; but &quot;genuinely catastrophic things are unfolding, and I don&#39;t know if we can come back from this.&quot;</p>
                        <p>Wars that could escalate into global conflict. Economic systems that feel like they&#39;re on the edge. Political instability in countries that used to feel stable. The sense that the structures we&#39;ve relied on might not hold.</p>
                        <p>And unlike a personal crisis - a job loss, a breakup, a health scare - you can&#39;t fix this. You can&#39;t control it. You can&#39;t even avoid it, because it&#39;s everywhere. That feeling of helplessness is what makes this type of anxiety so consuming.</p>
                        <p>Your brain is wired to solve problems. When it encounters a threat, it wants to take action. But with global-scale crises, there&#39;s no clear action to take. So your brain just... spins. It replays the information. It searches for patterns. It imagines outcomes. It tries to prepare you for every possible scenario. And that spinning never stops, because the news never stops.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What News Anxiety Actually Does to Your Body</h2>
                        <p>Constant exposure to distressing news doesn&#39;t just make you feel anxious. It physically changes how your nervous system operates.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Your Nervous System Gets Stuck in Threat Mode</h3>
                        <p>Every time you read a disturbing headline or watch a video of something terrible happening, your brain interprets it as a threat.</p>
                        <p>Your amygdala (the fear center of your brain) activates. Stress hormones flood your system. Your body prepares to respond to danger. This is normal and appropriate when there&#39;s an actual, immediate threat you need to respond to. But when you&#39;re consuming crisis news multiple times a day, every day, your nervous system never gets a chance to stand down.</p>
                        <p>You&#39;re in a chronic state of low-level panic. Your baseline stress is elevated. Your body thinks it&#39;s under siege, even when you&#39;re just sitting on your couch. Over time, this wears you down. You feel on edge constantly. Small things set you off. You can&#39;t relax, even when you want to.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">It Disrupts Your Sleep</h3>
                        <p>You lie in bed replaying the news. Imagining scenarios. Worrying about what comes next. Even if you&#39;re not consciously thinking about it, your nervous system is still activated.</p>
                        <p>Your cortisol is elevated. Your body is too wired to fully relax into deep sleep. So you either can&#39;t fall asleep, or you sleep poorly, or you wake up in the middle of the night with your mind racing about things you can&#39;t control. And when you&#39;re sleep-deprived, your anxiety gets worse. Which makes you more reactive to the news. Which disrupts your sleep more. It&#39;s a loop.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">It Fractures Your Focus</h3>
                        <p>When your brain is running background anxiety about global crises, it has less capacity for everything else. You sit down to work and can&#39;t concentrate. You&#39;re having a conversation and realize you haven&#39;t heard half of what the other person said.</p>
                        <p>Your brain is split between what you&#39;re supposed to be doing and the constant hum of &quot;the world is falling apart.&quot; Decision fatigue sets in faster. You feel mentally exhausted even when you haven&#39;t done much. Everything feels harder than it should.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">It Erodes Your Sense of Safety</h3>
                        <p>Even if your immediate life is stable - you have a home, food, people you care about - constant exposure to global chaos makes it hard to feel secure. Your brain keeps reminding you: This could all fall apart. Look at what&#39;s happening. Look at how fast things can change.</p>
                        <p>You stop feeling grounded. The future feels uncertain in a way that&#39;s hard to live with. And that chronic uncertainty keeps your nervous system on high alert.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar263.1a.jpg"
                                alt="Overwhelming news headlines on screen"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white">How to Manage It Without Checking Out Completely</h2>
                        <p>You can&#39;t just ignore what&#39;s happening in the world. And honestly, you probably wouldn&#39;t want to even if you could. But you can change how you engage with the news so it doesn&#39;t destroy your mental health.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Set Strict News Boundaries</h3>
                        <p>This is the hardest one, but it&#39;s also the most important. You don&#39;t need to check the news every hour. The world isn&#39;t going to end in the 60 minutes between now and when you check again.</p>
                        <ul>
                            <li><strong>Set designated news times.</strong> Check once in the morning and once in the evening. That&#39;s it. No scrolling in between.</li>
                            <li><strong>No news before bed.</strong> Cut off news consumption at least two hours before bed. If you need to look at your phone, wear <Link className="text-primary hover:underline font-bold" href="#">blue light blocking glasses</Link>.</li>
                            <li><strong>No news first thing in the morning.</strong> Give yourself at least 30-60 minutes after waking up before you check anything. Let your nervous system wake up gently.</li>
                        </ul>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Curate Your Information Sources</h3>
                        <p>Not all news sources are equal. Some are designed to inform. Others are designed to enrage, terrify, or keep you clicking. Unfollow accounts that sensationalize. Choose one or two trusted sources. Turn off push notifications. Every breaking news alert is a little jolt of adrenaline you don&#39;t need.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Redirect the Restless Energy</h3>
                        <p>When you feel the urge to scroll, give your hands something else to do. A <a href="/articles/best-fidget-rings-for-anxiety-tested-and-compared" className="text-primary hover:underline font-bold">fidget ring</a> or <Link className="text-primary hover:underline font-bold" href="#">therapy putty</Link> gives your restless energy a physical outlet that doesn&#39;t involve checking your phone.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar263.1b.jpg"
                                alt="Peaceful morning routine without news"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Ground Your Nervous System in the Present</h3>
                        <p>News anxiety pulls you into future scenarios. Grounding brings you back to right now. A <a href="/articles/best-weighted-blankets-for-anxiety-tested-and-compared" className="text-primary hover:underline font-bold">weighted blanket</a> provides deep pressure that signals: Right now, in this moment, you are safe. An <Link className="text-primary hover:underline font-bold" href="#">acupressure mat</Link> works similarly by forcing your nervous system to focus on something physical.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Take Action Where You Actually Can</h3>
                        <p>Part of what makes news anxiety so unbearable is the helplessness. Find one thing you can do. Donate to a cause you care about. Volunteer locally. Support a mutual aid network. Vote. Taking action shifts you out of passive doom-scrolling and into agency.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Support Your Nervous System</h3>
                        <p><a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium Breakthrough</a> helps regulate your stress response and prevents your body from staying stuck in fight-or-flight mode. If you&#39;re struggling with sleep, something like <Link className="text-primary hover:underline font-bold" href="#">Yu Sleep</Link> can help your mind shut off at night.</p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 font-bold">Accept That You Can&#39;t Carry It All</h2>
                        <p>You are one person. You cannot absorb the suffering of the entire world and still function. That doesn&#39;t make you selfish. It makes you human. You can care deeply about what&#39;s happening in the world without letting it consume every waking moment. You can hold space for both the reality of what&#39;s happening and your own need to protect your mental health.</p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 font-bold">This Isn&#39;t &quot;Just Anxiety&quot;</h2>
                        <p>I want to be clear: the things you&#39;re anxious about are real. Wars are happening. Systems are unstable. The future is uncertain. This isn&#39;t irrational anxiety. This is a rational response to genuinely distressing circumstances. But rational doesn&#39;t mean you have to let it destroy you.</p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 text-primary uppercase tracking-widest text-sm">You&#39;re Not Alone in This</h2>
                        <p>Therapists are reporting record numbers of people struggling with news-related anxiety. This is widespread. It&#39;s not a personal failure. You can put your phone down. You can focus on the small corners of the world you actually have influence over.</p>
                        <p>The world will keep turning. The news will keep happening. But you get to decide how much of it you let into your head. And how much space you protect for your own peace.</p>
                    </div>

                    <ShareSection title="How to Manage News Anxiety (When the World Feels Like It's Falling Apart)" />
                    <CommentsSection articleId="news-anxiety" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
