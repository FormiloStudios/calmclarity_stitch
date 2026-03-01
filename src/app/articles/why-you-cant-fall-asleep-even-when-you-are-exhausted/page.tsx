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
                            Sleep Science
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            Why You Can&#39;t Fall Asleep Even When You&#39;re Exhausted
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>7 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                Your body is tired. Genuinely tired. You can feel the exhaustion in your muscles, your heavy eyelids, the way you&#39;ve been yawning for the last two hours. You get into bed, close your eyes, and... nothing.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/evergreen_1.jpg"
                                alt="Exhausted but awake in bed"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>Your body is ready to sleep. But your brain didn&#39;t get the memo.</p>
                        <p>You lie there, exhausted but completely awake, and the longer you lie there, the more frustrated you get. Which makes it even harder to fall asleep.</p>
                        <p>If this is your pattern, it&#39;s not insomnia in the traditional sense. It&#39;s your nervous system stuck in the wrong gear.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Your Body Is Tired, But Your Nervous System Is Wired</h2>
                        <p>There&#39;s a difference between physical tiredness and nervous system readiness for sleep.</p>
                        <p>Your muscles can be exhausted. Your body can be depleted. But if your nervous system is still activated, sleep isn&#39;t going to happen.</p>
                        <p>Think of your nervous system like it has two modes:</p>
                        <ul>
                            <li><strong>Sympathetic mode (fight-or-flight):</strong> Alert, active, ready to respond to threats or demands. Your heart rate is slightly elevated, your cortisol is up, your brain is scanning for problems.</li>
                            <li><strong>Parasympathetic mode (rest-and-digest):</strong> Calm, relaxed, ready to restore and repair. Your heart rate slows, cortisol drops, your body can actually sleep.</li>
                        </ul>
                        <p>When you&#39;re exhausted but can&#39;t sleep, your body is tired, but your nervous system is still running in sympathetic mode. It hasn&#39;t downshifted.</p>
                        <p>And no amount of lying there willing yourself to sleep is going to force that shift.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why This Happens</h2>
                        <p>A few things keep your nervous system from downshifting even when your body is ready to sleep:</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">You Never Gave It a Transition</h3>
                        <p>You go from work mode — emails, decisions, mental strain — straight to trying to sleep.</p>
                        <p>Your nervous system doesn&#39;t switch that fast. It needs time to recognize: &quot;Okay, the demands have stopped. I can stand down now.&quot;</p>
                        <p>If you&#39;re on screens right up until you get into bed, or you&#39;re mentally reviewing your day, or you&#39;re already thinking about tomorrow&#39;s to-do list, your brain is still in active mode.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Your Cortisol Rhythm Is Off</h3>
                        <p>Cortisol is supposed to drop at night and rise in the morning. But chronic stress throws that rhythm off.</p>
                        <p>Even if you&#39;re not actively stressed in the moment, if your baseline stress has been high for weeks or months, your cortisol stays elevated longer than it should.</p>
                        <p>Your body is tired from running on stress hormones all day. But those same hormones are still in your system, keeping you wired.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/evergreen_1a.jpg"
                                alt="Frustrated person unable to sleep"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Your Mind Is Still Problem-Solving</h3>
                        <p>Your brain might be replaying the day. Running through conversations. Planning tomorrow. Trying to solve problems.</p>
                        <p>Even if you&#39;re not consciously stressed, if your brain is still in &quot;figure things out&quot; mode, your nervous system interprets that as: We&#39;re not done yet. Stay alert.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">You&#39;re Overstimulated</h3>
                        <p>You&#39;ve been taking in information all day. Screens, conversations, decisions, notifications, noise.</p>
                        <p>Your nervous system has been processing constant input. By the time you try to sleep, it&#39;s overloaded.</p>
                        <p>That overstimulation doesn&#39;t just disappear the second you close your eyes. It takes time for your system to settle.</p>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white">What Actually Helps</h2>
                        <p>You can&#39;t force your nervous system to relax. But you can give it what it needs to downshift on its own.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Create an Actual Wind-Down Period</h3>
                        <p>You need a buffer between &quot;daytime mode&quot; and &quot;sleep mode.&quot;</p>
                        <p>At least an hour before bed, start signaling to your body that the day is ending.</p>
                        <p>Dim the lights. Your brain responds to light levels. Bright overhead lights keep you alert. Lamps and soft lighting help your body start producing melatonin.</p>
                        <p>Turn off screens, or at least put on <a href="https://amzn.to/4048DOk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">blue light blocking glasses</a>. Blue light suppresses melatonin and keeps your brain thinking it&#39;s still daytime.</p>
                        <p>Do something genuinely calming. Not just &quot;less stimulating,&quot; but actually calming. Read a book that&#39;s not stressful. Take a bath. Sit quietly.</p>
                        <p>Your body learns patterns. When you do the same wind-down routine every night, your nervous system starts preparing for sleep automatically.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Give Your Body Physical Signals of Safety</h3>
                        <p>Your nervous system responds to physical input.</p>
                        <p>A <a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted blanket</a> provides deep pressure that activates your parasympathetic nervous system. Use it while you&#39;re winding down — while you&#39;re reading or just sitting quietly before bed.</p>
                        <p>The gentle, even pressure tells your body: We&#39;re safe. We can relax now.</p>
                        <p>Some people also use a <a href="https://amzn.to/4aoFGli" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted sleep mask</a>. The pressure across your eyes adds another layer of calming input and blocks out any light that might be keeping you alert.</p>
                        <p>These aren&#39;t magic. But they give your nervous system physical cues that it&#39;s time to shift out of alert mode.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Support Your Body&#39;s Sleep Chemistry</h3>
                        <p>If your nervous system is chronically activated, it&#39;s burning through the nutrients it needs for good sleep regulation.</p>
                        <p><a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium Breakthrough</a> helps your body shift into parasympathetic mode. It supports the neurotransmitters involved in sleep and helps regulate your stress response.</p>
                        <p>A lot of people who struggle with the &quot;tired but wired&quot; pattern notice that taking magnesium consistently helps their body downshift more easily at night.</p>
                        <p>Take it about an hour before bed. It&#39;s not going to knock you out, but it helps your body do what it&#39;s supposed to do — relax when you&#39;re ready to sleep.</p>
                        <p>If magnesium alone isn&#39;t enough — especially if you&#39;re dealing with racing thoughts or middle-of-the-night wake-ups on top of trouble falling asleep — there are formulas designed specifically for the &quot;tired but wired&quot; problem. <a href="https://4vitahealth.com/sp/4greatsleep-dg/#aff=Select_partner" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">4GreatSleep</a> specifically targets nighttime overthinking, which is often what keeps your body exhausted but your mind wired.</p>
                        <p>Not everyone needs these, but if basic sleep hygiene and magnesium aren&#39;t cutting it, targeted support can make the difference.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Make Your Sleep Environment Actually Conducive to Sleep</h3>
                        <p>Even small amounts of light can keep your nervous system from fully relaxing.</p>
                        <p>Your bedroom should be dark. Not just dim — actually dark.</p>
                        <p><a href="https://amzn.to/4tGRQ1M" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Blackout curtains</a> block light from streetlights, passing cars, early sunrise. When your room is completely dark, your brain gets a clear signal: It&#39;s nighttime. Sleep is supposed to happen now.</p>
                        <p>Consistent sound also helps. If your environment is too quiet, every little noise — a car door, your partner shifting, the house settling — can jolt your brain back into alert mode.</p>
                        <p>A <a href="https://amzn.to/4kEabIw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">white noise machine</a> creates a steady background sound that masks those random noises. It gives your brain permission to stop listening for threats.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/evergreen_1b.jpg"
                                alt="Peaceful sleep environment"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Don&#39;t Lie There Fighting It</h3>
                        <p>If you&#39;ve been lying in bed for 20-30 minutes and you&#39;re not falling asleep, get up.</p>
                        <p>Lying there getting frustrated just trains your brain to associate your bed with wakefulness and stress.</p>
                        <p>Get out of bed. Go to another room. Do something boring in low light. Read something dull. Sit quietly.</p>
                        <p>When you feel actually tired — not just physically exhausted, but sleepy — go back to bed.</p>
                        <p>This helps break the pattern of lying there wired and frustrated for hours.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Address the Underlying Nervous System Dysregulation</h2>
                        <p>If &quot;tired but wired&quot; is your regular pattern, not just an occasional thing, your nervous system needs consistent support.</p>
                        <p>You&#39;re running in sympathetic mode too much of the time. Your body isn&#39;t getting enough time in parasympathetic mode to restore and recover.</p>
                        <p>This isn&#39;t just about bedtime. It&#39;s about your entire day.</p>
                        <p>Take breaks during the day. Move your body. Spend time outside. Do things that genuinely relax you, not just things that are &quot;less stressful.&quot;</p>
                        <p>The better your nervous system regulation is during the day, the easier it is for your body to downshift at night.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">How You Wake Up Matters Too</h2>
                        <p>One more thing that helps: how you wake up matters.</p>
                        <p>If you&#39;re waking up to a jarring alarm after finally falling asleep, it starts your day in stress mode. That feeds into the cycle of being wired all day and unable to wind down at night.</p>
                        <p>A <a href="https://amzn.to/4aNIZ5x" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">sunrise alarm clock</a> wakes you up gradually with increasing light instead of a loud alarm. Your body starts waking naturally in response to the light, and you&#39;re less likely to wake up already in fight-or-flight mode.</p>
                        <p>It won&#39;t fix the falling-asleep problem directly, but it helps break the overall cycle of staying stuck in sympathetic mode from the moment you wake up.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6 text-primary uppercase tracking-widest text-sm">It Gets Easier</h2>
                        <p>The first few nights of trying to fix this pattern are frustrating. Your body is so used to being wired at bedtime that it doesn&#39;t know what to do with the new routine.</p>
                        <p>But if you&#39;re consistent — wind-down routine, physical cues, supporting your system — your nervous system learns.</p>
                        <p>It starts recognizing: This is the pattern. This is when we relax.</p>
                        <p>And over time, falling asleep gets easier. You&#39;re not lying there for hours anymore. Your body is tired, and your nervous system actually lets you sleep.</p>
                        <p>You&#39;re teaching your body that it&#39;s safe to rest. And once it believes you, sleep comes naturally again.</p>
                    </div>

                    <ShareSection title="Why You Can't Fall Asleep Even When You're Exhausted" />
                    <CommentsSection articleId="fall-asleep-exhausted" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
