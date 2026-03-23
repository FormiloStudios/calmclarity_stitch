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
                            Physiology
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            How to Recover From a Panic Attack (What Actually Works in the Moment)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>9 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                Your heart is pounding so hard you think it might break through your chest. You can&#39;t breathe. Or you&#39;re breathing too fast and can&#39;t slow down.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccmar265.3.jpg"
                                alt="Abstract representation of heart palpitations and high anxiety"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>Your hands are shaking. Your vision is narrowing. Everything feels unreal, like you&#39;re watching yourself from outside your body. You&#39;re convinced something is terribly wrong. That you&#39;re dying. That you&#39;re losing control. That this feeling will never stop.</p>
                        <p className="font-bold">This is a panic attack.</p>
                        <p>And if you&#39;re in the middle of one right now, or if you&#39;ve had them before and live in fear of the next one, you need to know: panic attacks are not dangerous. They are terrifying. But they will not kill you.</p>
                        <p>And there are things you can do - right now, in the moment - that actually help.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What&#39;s Happening During a Panic Attack</h2>
                        <p>A panic attack is your nervous system&#39;s alarm system going off when there&#39;s no actual threat.</p>
                        <p>Your amygdala - the fear center of your brain - detects danger (real or imagined) and triggers a massive flood of adrenaline and stress hormones. Your heart races to pump blood to your muscles. Your breathing speeds up to get more oxygen. Your pupils dilate. Your body is preparing to fight or run.</p>
                        <p>This is the same response your ancestors had when facing a predator. It&#39;s a survival mechanism. And it&#39;s incredibly effective - when there&#39;s an actual threat. The problem is that during a panic attack, there&#39;s no predator. There&#39;s no emergency. But your body doesn&#39;t know that.</p>
                        <p>It&#39;s reacting as if your life is in danger, and nothing you say to yourself - <em>I&#39;m fine, this isn&#39;t real, calm down</em> - can override the physiological response once it&#39;s started.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Why It Feels Like You&#39;re Dying</h3>
                        <p>The physical sensations of a panic attack mimic serious medical emergencies. Chest tightness feels like a heart attack. Shortness of breath feels like you&#39;re suffocating. Dizziness and tingling feel like you&#39;re having a stroke.</p>
                        <p>Your brain interprets these sensations as evidence that something is seriously wrong. Which makes you more afraid. Which triggers more adrenaline. Which creates more physical symptoms. It&#39;s a feedback loop. And once it starts, it&#39;s hard to stop.</p>
                        <p><strong>But here&#39;s what you need to know: panic attacks peak within 10 minutes.</strong> The worst of it - the intense terror, the overwhelming physical symptoms - doesn&#39;t last longer than that.</p>
                        <p>It feels like it&#39;s going to go on forever. But it won&#39;t. Your body cannot sustain that level of adrenaline indefinitely. The panic will crest, and then it will start to come down on its own.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar265.3a.jpg"
                                alt="A person splashing extremely cold water onto their face"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Why &quot;Just Breathe&quot; Doesn&#39;t Always Work</h3>
                        <p>People always say &quot;just breathe&quot; during a panic attack.</p>
                        <p>And yes, breathing techniques can help. But if you&#39;re in the middle of a full-blown panic attack, your nervous system is too activated for slow breathing to work immediately. You&#39;re hyperventilating. Your CO2 levels are off. Your nervous system is screaming DANGER.</p>
                        <p>Telling someone to &quot;just breathe slowly&quot; in that state is like telling someone who&#39;s drowning to swim calmly. They can&#39;t. Their body won&#39;t let them.</p>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white text-center">What Actually Helps in the Moment</h2>
                        <p className="text-center italic text-slate-600 dark:text-slate-400 mb-12">These are not long-term strategies. These are emergency interventions for when you&#39;re in the middle of a panic attack and you need it to stop.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">1. Use Cold to Interrupt the Panic Response</h3>
                        <p>Cold is one of the fastest ways to interrupt a panic attack. When you apply cold to your face - especially around your eyes, forehead, and cheeks - you activate the dive reflex.</p>
                        <p>This is a mammalian survival mechanism. When your face hits cold water, your body thinks you&#39;re diving underwater. Your heart rate slows. Blood flow redirects. Your nervous system shifts out of panic mode to preserve oxygen. It&#39;s an automatic response. You don&#39;t have to think about it or try to make it work. Your body does it on its own.</p>
                        <p>An ice roller is one of the most effective tools for this. Roll it across your forehead, temples, cheeks, and the back of your neck. The intense cold forces your nervous system to focus on the sensation instead of the panic. <Link href="/articles/best-ice-rollers-on-amazon" target="_blank" className="text-primary hover:underline font-bold">Check out the Best Ice Rollers →</Link></p>
                        <p>The cold won&#39;t make the panic disappear instantly. But it will interrupt the escalation. And that gives you enough space to start regulating your breathing.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">2. Regulate Your Breathing With a Physical Tool</h3>
                        <p>Once the cold has interrupted the panic spiral, you need to slow your breathing down. But if you&#39;re hyperventilating, it&#39;s hard to know if you&#39;re breathing correctly.</p>
                        <p>A breathing exercise device gives you visual feedback. The Incentive Spirometer is designed to help you take slow, deep breaths. You breathe in through the mouthpiece, and a flow rate indicator shows you whether you&#39;re breathing too fast, too slow, or just right. It forces you to focus on the mechanics of breathing instead of the panic. <a href="https://amzn.to/3NxJEAz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Get an Incentive Spirometer on Amazon →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">3. Ground Yourself Physically</h3>
                        <p>Panic attacks create dissociation. You feel disconnected from your body, from reality, from the present moment. Grounding brings you back.</p>
                        <p>A grounding mat connects you - literally - to the Earth&#39;s electrical field. You stand or sit on it barefoot, and electrons from the Earth flow into your body. Grounding has been shown to reduce cortisol, lower stress, and calm the nervous system. <a href="https://amzn.to/47cJXYe" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check out Hooga Grounding Mats →</a></p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar265.3b.jpg"
                                alt="A person lying calmly under a weighted blanket"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">4. Use Intense Sensation to Pull Your Focus Out of Your Head</h3>
                        <p>When you&#39;re panicking, your mind is spiraling. You&#39;re thinking: <em>I&#39;m dying. I&#39;m going crazy. This will never stop.</em> You can&#39;t think your way out of that spiral. But you can redirect your attention to something physical.</p>
                        <p>An acupressure mat provides intense physical sensation that&#39;s impossible to ignore. Lie down on it or stand on it barefoot. The thousands of small spikes press into your skin. It&#39;s uncomfortable - not painful, but intense enough that your brain has to focus on it. That breaks the mental loop. <Link href="/articles/best-acupressure-mats-for-anxiety-and-stress-relief" target="_blank" className="text-primary hover:underline font-bold">Read our Acupressure Mat guide →</Link></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">5. Wrap Yourself in Deep Pressure</h3>
                        <p>After the worst of the panic passes, you&#39;re left with residual adrenaline and a shaky, exhausted nervous system. Deep pressure helps your body come down from that.</p>
                        <p>A weighted blanket provides consistent, calming pressure across your entire body. It activates your parasympathetic nervous system - the part responsible for rest and recovery. Get under the blanket. Lie still. Let the weight settle over you. <Link href="/articles/best-weighted-blankets-for-anxiety-tested-and-compared" target="_blank" className="text-primary hover:underline font-bold">Browse Weighted Blankets →</Link></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">6. Keep Your Hands Busy</h3>
                        <p>During and after a panic attack, you might feel restless, jittery, or like you need to do something with your hands.</p>
                        <p>A fidget ring gives that restless energy somewhere to go. Spin it. Twist it. Focus on the repetitive motion. It&#39;s a small, contained task that keeps your hands occupied and your mind anchored to something simple and predictable. <Link href="/articles/best-fidget-rings-for-anxiety-tested-and-compared" target="_blank" className="text-primary hover:underline font-bold">Check out the Best Fidget Rings →</Link></p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6">What to Do After the Panic Attack</h2>
                        <p>Once the immediate panic subsides, you&#39;re not done. Your body just went through a massive physiological event. Your nervous system is depleted. You&#39;re exhausted. You need to support your recovery.</p>



                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Use a Workbook to Understand Your Panic Triggers</h3>
                        <p>Panic attacks don&#39;t happen randomly. There are usually patterns - situations, thoughts, physical sensations - that trigger them.</p>
                        <p>The Panic Attacks Workbook walks you through identifying your specific triggers and building a personalized plan for managing them. It&#39;s based on Cognitive Behavioral Therapy (CBT) and Acceptance and Commitment Therapy (ACT) - evidence-based approaches that actually work for panic disorder. <a href="https://amzn.to/4uEdd3Z" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Get the Panic Attacks Workbook →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Support Your Nervous System Baseline</h3>
                        <p>If you&#39;re having frequent panic attacks, your nervous system is running too hot. Magnesium helps regulate your stress response and supports your nervous system&#39;s ability to handle stress without tipping into panic. <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try Magnesium Breakthrough →</a></p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 text-primary tracking-widest text-sm uppercase text-center">You&#39;re Not Broken</h2>
                        <p className="text-center font-bold">Panic attacks are terrifying. They feel like your body is betraying you. Like you&#39;re losing control. But you&#39;re not broken.</p>
                        <p>Your nervous system is doing exactly what it&#39;s designed to do - protect you from danger. It&#39;s just overreacting. Firing the alarm when there&#39;s no fire.</p>
                        <p>And with the right tools, you can interrupt that response. You can help your body recognize: This is panic. This is not danger. I am safe. The panic will pass. It always does. And over time, with the right support, you can reduce how often it happens.</p>
                    </div>

                    <ShareSection title="How to Recover From a Panic Attack (What Actually Works in the Moment)" />
                    <CommentsSection articleId="recover-from-panic-attack" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
