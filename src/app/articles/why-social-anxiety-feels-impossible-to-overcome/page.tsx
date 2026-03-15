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
                            Why Social Anxiety Feels Impossible to Overcome
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
                                You&#39;ve tried to &quot;just be more confident.&quot; You&#39;ve read articles about making eye contact, smiling more, and &quot;putting yourself out there.&quot;
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccmar264.3.jpg"
                                alt="A person sitting alone on a park bench looking contemplative"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>You&#39;ve told yourself that everyone feels nervous sometimes, and you&#39;re not special, so you should just get over it. But social anxiety doesn&#39;t work like that.</p>
                        <p>It&#39;s not shyness. It&#39;s not introversion. It&#39;s not something you can logic your way out of or force yourself through with enough willpower.</p>
                        <p className="font-bold text-slate-900 dark:text-white">Social anxiety is your nervous system treating social situations like physical threats. And until you address that underlying nervous system response, no amount of positive thinking or forced exposure is going to fix it.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why Social Anxiety Isn&#39;t Just &quot;Being Shy&quot;</h2>
                        <p>Shy people might feel a little nervous before a party or hesitate before speaking up in a meeting. But they can push through it without their entire body going into panic mode.</p>
                        <p>Social anxiety is different. When you have social anxiety, your body responds to social situations the same way it would respond to actual danger. Your heart races. Your hands sweat. Your mind goes blank. You feel like you&#39;re being evaluated, judged, and found lacking — even when there&#39;s no evidence that anyone is actually thinking about you that way.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Your Brain Sees Social Rejection as a Survival Threat</h3>
                        <p>From an evolutionary standpoint, being rejected by your social group could mean losing access to resources, protection, and survival.</p>
                        <p>Your brain still treats social rejection like a life-or-death situation, even though logically you know it&#39;s not. So when you&#39;re in a social situation — especially one where you might be judged or evaluated — your amygdala (the fear center of your brain) lights up. Your body floods with stress hormones. You go into fight-or-flight mode. This isn&#39;t a character flaw. It&#39;s biology.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">It&#39;s a Feedback Loop</h3>
                        <p>The worst part about social anxiety is that it creates a self-reinforcing cycle. You feel anxious in social situations, which makes you awkward or withdrawn, which makes other people respond to you differently, which confirms your fear that people don&#39;t like you, which makes you more anxious next time.</p>
                        <p>And the more you avoid social situations to escape that anxiety, the stronger the fear becomes. Your brain learns: Social situations = danger. Avoidance = safety.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar264.3a.jpg"
                                alt="A structured journal or workbook open next to coffee"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why &quot;Just Be Yourself&quot; Doesn&#39;t Work</h2>
                        <p>People who don&#39;t have social anxiety love to give advice like &quot;just be yourself&quot; or &quot;nobody&#39;s thinking about you as much as you think they are.&quot; That might be true. But it doesn&#39;t help.</p>
                        <p>Because when you&#39;re in the middle of a social situation and your nervous system is in full panic mode, you can&#39;t just think your way out of it. Your body is screaming DANGER. Your heart is pounding. Your mind is blank. You can&#39;t access the rational part of your brain that knows this isn&#39;t actually life-or-death.</p>
                        <p>You need tools that work with your nervous system, not against it.</p>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white text-center">What Actually Works</h2>
                        <p>Overcoming social anxiety isn&#39;t about becoming fearless or suddenly loving being the center of attention. It&#39;s about giving your nervous system what it needs to stop treating every social interaction like a threat.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Learn the System That Retrains Your Nervous System</h3>
                        <p>If you&#39;re serious about overcoming social anxiety, you need a structured approach — not just random tips from the internet.</p>
                        <p>The Complete Social Confidence System is designed specifically for people with social anxiety. It&#39;s not generic self-help. It&#39;s a step-by-step program that addresses the root cause: your nervous system&#39;s overreaction to social situations. <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try the Complete Social Confidence System →</a></p>
                        <p>If you&#39;re looking for something more affordable, the Udemy course &quot;How I Overcame Social Anxiety, Grew Confidence &amp; Self-Esteem&quot; is an excellent starting point. It&#39;s taught by someone who&#39;s actually been through severe social anxiety (not just someone who read about it in a textbook). <a href="https://click.linksynergy.com/fs-bin/click?id=SomeAffiliateID&offerid=SomeOfferID&type=3&subid=0" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try the Udemy Course →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Address the Mechanical Stress Pattern (For Logical Thinkers)</h3>
                        <p>Some people don&#39;t respond well to traditional &quot;mindset work.&quot; If you&#39;re the type of person who finds affirmations and visualization exercises frustrating because they don&#39;t address why your brain is doing this, you might need a different approach.</p>
                        <p>Survival Mode Decoder takes a logic-based approach to anxiety. Instead of framing social anxiety as a mindset problem, it explains it as a pattern recognition error in your brain. <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try Survival Mode Decoder →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Use a Workbook to Work Through It Yourself</h3>
                        <p>Not everyone wants to take a course. Some people prefer working through things on their own at their own pace. The Shyness and Social Anxiety Workbook is the gold standard self-help resource for social anxiety. It&#39;s written by psychologists and based on CBT (Cognitive Behavioral Therapy). <a href="https://amzn.to/3P4Xh8e" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Get the Workbook on Amazon →</a></p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar264.3b.jpg"
                                alt="Close-up of hands calming playing with a fidget ring"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Use Supplements to Take the Edge Off</h3>
                        <p>Social anxiety is a nervous system issue, which means supporting your nervous system biochemically can help. L-Theanine is an amino acid found in tea that promotes calm focus without making you drowsy. It increases GABA, serotonin, and dopamine. <a href="https://amzn.to/3v7UvXJ" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Get Nutricost L-Theanine →</a></p>
                        <p>Magnesium helps regulate your overall stress response. When you take it consistently, your baseline anxiety tends to be lower, which means social situations don&#39;t trigger you as intensely. <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try Magnesium Breakthrough →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Give Your Hands Something to Do in the Moment</h3>
                        <p>When you&#39;re in a social situation and your anxiety is spiking, your hands often feel restless or shaky. A fidget ring gives your hands a small, discreet task that can actually help calm your nervous system. <a href="/articles/best-fidget-rings-for-anxiety-tested-and-compared" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check out the Best Fidget Rings →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Practice Exposure Gradually</h3>
                        <p>Exposure therapy works for social anxiety. But &quot;just force yourself to do the thing you&#39;re afraid of&quot; is bad exposure therapy. Effective exposure is gradual, controlled, and paired with tools that help you manage the anxiety.</p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 text-primary tracking-widest text-sm uppercase text-center">It&#39;s Not About Becoming an Extrovert</h2>
                        <p>You don&#39;t have to become the life of the party. You don&#39;t have to love networking events or enjoy small talk. The goal is to stop feeling like social situations are dangerous. You can still be introverted. You can still prefer small groups over large crowds. You can still need alone time to recharge.</p>
                        <p>But you shouldn&#39;t feel trapped by fear. You shouldn&#39;t avoid opportunities, relationships, or experiences because your nervous system is treating them like threats.</p>
                        <p>Social anxiety is treatable. It takes time, and it takes consistent effort, but it&#39;s possible. You&#39;re not broken. Your nervous system is just stuck in a pattern. And with the right tools, you can teach it a new one.</p>
                    </div>

                    <ShareSection title="Why Social Anxiety Feels Impossible to Overcome" />
                    <CommentsSection articleId="social-anxiety" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
