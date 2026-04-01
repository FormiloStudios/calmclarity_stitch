'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ShareSection } from "@/components/ShareSection";
import { CommentsSection } from "@/components/CommentsSection";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export default function ArticlePage() {
    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('dev_access') === 'true') {
                setAuthorized(true);
            } else {
                router.push('/');
            }
        }
    }, [router]);

    if (!authorized) return <div className="min-h-screen bg-white dark:bg-slate-950" />;

    return (
        <>
            <Nav />
            <main className="pt-32 pb-24 text-slate-900 dark:text-slate-100">
                <article className="max-w-4xl mx-auto px-6 font-sans">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                            Mind & Family
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tighter">
                            Mother&#39;s Day Anxiety: Why This Holiday Feels So Stressful (And How to Handle It)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    {/* Image: ccmar212.1.jpg (Header) */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-20 text-slate-700 dark:text-slate-300">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed font-display italic">
                                Mother&#39;s Day is supposed to be simple. You show up. You give a gift. You say the right things. Everyone smiles. It&#39;s nice. Except it&#39;s not that simple. And it&#39;s rarely nice.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative w-full rounded-2xl overflow-hidden shadow-2xl rotate-1">
                            <Image
                                src="/ccmar266.3.jpg"
                                alt="Quiet reflection"
                                width={800}
                                height={1000}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed max-w-none">
                        <p>For a lot of people, Mother&#39;s Day is one of the most stressful days of the year.</p>
                        <p>Maybe your relationship with your mother is complicated. Maybe it&#39;s actively painful. Maybe she&#39;s difficult, critical, or emotionally unavailable, and you&#39;re supposed to pretend everything is fine for one day. Or maybe you love your mother, but the pressure to make the day perfect - the right gift, the right restaurant, the right amount of gratitude - makes you anxious and exhausted before it even begins.</p>
                        <p>Either way, you&#39;re not celebrating. You&#39;re performing. And the performance is draining.</p>
                        <p>If Mother&#39;s Day makes you anxious instead of happy, you&#39;re not ungrateful. You&#39;re just dealing with something most people don&#39;t talk about.</p>

                        <h2 className="font-display text-4xl font-bold mt-16 mb-8 uppercase tracking-tighter">Why Mother&#39;s Day Feels Different</h2>
                        <p>Mother&#39;s Day carries a weight that other holidays don&#39;t. With Christmas or Thanksgiving, the focus is dispersed. It&#39;s about family, food, tradition. No single person is the center of attention. But Mother&#39;s Day puts one person in the spotlight. And if your relationship with that person is anything other than straightforward and loving, the day becomes a performance you have to execute flawlessly.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">The Pressure to Perform Happiness</h3>
                        <p>Even if your relationship with your mother is good, there&#39;s still pressure. You&#39;re expected to be grateful. Appreciative. Present. Thoughtful. You&#39;re supposed to find the perfect gift that shows you care without trying too hard or not trying enough. You&#39;re supposed to plan something meaningful but not overwhelming. You&#39;re supposed to express exactly the right amount of love and appreciation. And if you don&#39;t hit that invisible mark, you feel guilty.</p>
                        <p>The guilt is exhausting. Because even when you do everything right, it doesn&#39;t always feel like enough. And when it doesn&#39;t go perfectly, you replay it for days.</p>

                        {/* Image: ccmar212.1a.jpg (The Minefield) */}
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl my-16 group">
                            <Image
                                src="/ccmar266.3a.jpg"
                                alt="The pressure of expectations"
                                width={1200}
                                height={675}
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                unoptimized
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">When Your Mother Is Difficult</h3>
                        <p>If your mother is critical, controlling, or emotionally draining, Mother&#39;s Day isn&#39;t a celebration. It&#39;s a minefield. You know that no matter what you do, it probably won&#39;t be right. The gift will be wrong. The restaurant will be too loud or too quiet. You&#39;ll say something she takes the wrong way, and the rest of the day will be tense.</p>
                        <p>But you still have to show up. Because not showing up comes with its own set of consequences - guilt, judgment from family, or the fallout of her hurt feelings. So you go. You smile. You try to manage her emotions while suppressing your own. And by the time you leave, you&#39;re completely depleted.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">When You&#39;ve Lost Your Mother</h3>
                        <p>If your mother has passed away, Mother&#39;s Day is a different kind of painful. Everyone around you is celebrating, posting photos, buying flowers. And you&#39;re just... trying to get through the day without falling apart. The grief isn&#39;t new. But Mother&#39;s Day makes it fresh again. It highlights the absence in a way that regular days don&#39;t. And people don&#39;t always know how to hold space for that. So you end up managing other people&#39;s discomfort on top of your own grief.</p>

                        <h2 className="font-display text-4xl font-bold mt-16 mb-8 uppercase tracking-tighter">What It Actually Feels Like</h2>
                        <p>Mother&#39;s Day anxiety shows up in specific ways:</p>
                        <ul className="space-y-6 list-none pl-0">
                            <li className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <strong>Dread in the days leading up to it.</strong> You start feeling anxious a week before. You&#39;re already running through scenarios, planning what to say, bracing for whatever might go wrong.
                            </li>
                            <li className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <strong>Physical tension.</strong> Your shoulders are tight. Your jaw is clenched. Your stomach is uneasy. Your body is preparing for a stressful event, not a celebration.
                            </li>
                            <li className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <strong>Guilt no matter what you choose.</strong> If you don&#39;t go, you feel guilty. If you do go, you feel resentful. There&#39;s no option that feels right.
                            </li>
                        </ul>
                        <p>Exhaustion afterward. Even if the day went fine, you&#39;re wiped out. You gave everything you had to make it work, and now you have nothing left. If this is your pattern, you&#39;re not doing Mother&#39;s Day wrong. The day itself is hard. And pretending it&#39;s not doesn't make it easier.</p>

                        <hr className="my-16 opacity-10" />

                        <h2 className="font-display text-4xl font-bold mt-16 mb-8 uppercase tracking-tighter">How to Get Through It Without Falling Apart</h2>
                        <p>You can&#39;t fix your mother. You can&#39;t rewrite your history. But you can protect yourself.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Set Boundaries Before the Day</h3>
                        <p>The biggest mistake people make is showing up without a plan and hoping it goes well. If your mother is difficult, hope isn&#39;t a strategy. You need boundaries. Decide ahead of time:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8">
                            <li>How long you&#39;re staying (two hours, not &quot;as long as it takes&quot;)</li>
                            <li>What topics are off-limits (your job, your relationship, your life choices)</li>
                            <li>What you&#39;ll do if she crosses a line (leave, change the subject, end the call)</li>
                        </ul>
                        <p>If you struggle with setting boundaries - if you say yes when you mean no, if you let people guilt you into things you don&#39;t want to do, if you&#39;re always managing other people&#39;s feelings at your own expense - that&#39;s a skill you can build. The <a href="https://www.fleximind.ca/healthyboundsale58ywqk#aff=Select_partner" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Healthy Boundaries Toolkit</a> is a step-by-step guide created by a registered psychotherapist specifically for people who have trouble holding limits with family. It includes over 130 boundary-setting strategies and scripts for hard conversations - the exact words to use when someone pushes back or tries to make you feel guilty.</p>
                        <p>It&#39;s not about becoming cold or cutting people off. It&#39;s about protecting your peace so you can show up without destroying yourself.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Give Yourself Permission to Feel Complicated Emotions</h3>
                        <p>You don&#39;t have to feel only gratitude on Mother&#39;s Day. You can feel grateful and angry. Loving and resentful. Happy to see your mother and exhausted by her at the same time. Those contradictions are normal. Relationships - especially with mothers - are complicated.</p>
                        <p>If you&#39;re spending the day trying to suppress the &quot;wrong&quot; emotions and only express the &quot;right&quot; ones, you&#39;re going to be miserable. Let yourself feel what you actually feel. You don&#39;t have to perform happiness if you&#39;re not happy. You might also benefit from the <a href="https://shop.mindful.org/products/radical-self-care-course?sca_ref=10870558.SjISUzYe2p" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Radical Self-Care Course</a>.</p>

                        {/* Image: ccmar266.3b.jpg (Recovery) */}
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl my-16 group border border-slate-100 dark:border-slate-800">
                            <Image
                                src="/ccmar266.3b.jpg"
                                alt="Self-care and recovery"
                                width={1200}
                                height={675}
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                unoptimized
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">If You&#39;re Buying a Gift, Make It About Her Actual Needs</h3>
                        <p>Gift-giving for difficult mothers is hard because nothing feels right. If you&#39;re stressed about what to buy, focus on something practical that supports her well-being rather than trying to find something symbolic that expresses the perfect amount of love.</p>
                        <p>A <a href="https://amzn.to/4c1xoSd" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">spa gift basket</a> isn&#39;t just bath products. It&#39;s permission to rest - something a lot of mothers won&#39;t give themselves. It signals that self-care is allowed, even necessary. If your mother is the type who journals or processes emotions through writing, a guided journal designed specifically for mothers can be meaningful. <a href="https://amzn.to/4rRlQFO" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Mom&#39;s Life Story Journal</a> includes over 250 prompts that help her reflect on her own life, not just her role as a mother. It&#39;s a way to acknowledge her as a whole person. You might also consider an <a href="https://amzn.to/4sy1dj2" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">aromatherapy diffuser</a> or an <a href="https://amzn.to/4svLeCf" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Anxiety Relief Bracelet</a>. The goal isn&#39;t to find the gift that fixes everything. It&#39;s to find something thoughtful that doesn&#39;t drain you to give.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Create Space for Recovery After</h3>
                        <p>Mother&#39;s Day doesn&#39;t end when you leave the restaurant or hang up the phone. You&#39;re going to need recovery time. When you get home, don&#39;t just collapse and scroll your phone. Give your nervous system what it actually needs to decompress.</p>
                        <p>Get under a weighted blanket. The deep pressure helps your body shift out of the hyper-vigilant state you&#39;ve been holding all day. You&#39;re not trying to force yourself to relax. You&#39;re giving your body a physical signal that the performance is over and it&#39;s safe to let go. Don&#39;t expect to feel better immediately. You might need a few hours. You might need the whole next day. That&#39;s not weakness. That&#39;s your nervous system processing a high-stress event.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Support Your Nervous System Through the Whole Week</h3>
                        <p>If you&#39;re anxious about Mother&#39;s Day a week before it happens, your baseline stress is already elevated. Magnesium helps regulate your stress response so small triggers don&#39;t feel overwhelming. When you take it consistently in the days leading up to Mother&#39;s Day, you&#39;re giving your body the resources it needs to handle the day without completely falling apart. It won&#39;t eliminate the stress. But it keeps your nervous system from amplifying everything into a crisis.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">It&#39;s Okay to Skip It Sometimes</h3>
                        <p>Not every Mother&#39;s Day requires your physical presence. If you&#39;re already drained, if you&#39;re dealing with your own mental health struggles, if the thought of showing up feels unbearable - it&#39;s okay to say no. Send a card. Make a phone call. Keep it brief and kind. You&#39;re allowed to protect yourself, even on Mother&#39;s Day. Especially on Mother&#39;s Day. Family might judge you. Your mother might be hurt. But those consequences are still better than destroying your mental health to maintain a performance.</p>

                        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-[3.5rem] px-12 border border-slate-100 dark:border-slate-800 shadow-xl max-w-4xl mx-auto my-32">
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">You&#39;re Not a Bad Person for Finding This Hard</h2>
                            <p className="opacity-70 leading-relaxed font-light italic mb-8">The cultural narrative around Mother&#39;s Day is that it&#39;s supposed to be easy and joyful. But for a lot of people, it&#39;s neither. If your relationship with your mother is complicated, the day is hard. If she&#39;s difficult or toxic, the day is painful. If she&#39;s gone, the day is grief. And pretending otherwise doesn't make it better.</p>
                            <p className="text-xl font-bold uppercase tracking-tighter italic">You don&#39;t owe anyone a perfect Mother&#39;s Day. You don&#39;t owe your mother a flawless performance. You don&#39;t owe the world a smile when you&#39;re struggling. What you owe yourself is honesty. And protection. And the space to feel whatever you actually feel without shame. Mother&#39;s Day will come and go. But you have to live with yourself after. Take care of yourself first. Set the boundaries you need. Feel the emotions that are real. And let that be enough.</p>
                        </div>
                    </div>

                    <ShareSection title="Mother's Day Anxiety: Why This Holiday Feels So Stressful" />
                    <CommentsSection articleId="mothers-day-anxiety" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
