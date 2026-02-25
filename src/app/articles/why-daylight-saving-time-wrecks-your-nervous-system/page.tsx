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
                            Seasonal Health
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            Why Daylight Saving Time Wrecks Your Nervous System
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>7 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>February 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                Twice a year, we mess with the clocks. And twice a year, your body pays the price. Daylight Saving Time feels like it should be no big deal. It&#39;s just one hour, right?
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/seasonal_1.jpg"
                                alt="Abstract representation of time and biological rhythm"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>But that one hour throws off your entire system. Your sleep gets disrupted. Your mood tanks. You feel foggy and irritable for days, sometimes weeks.</p>
                        <p>It&#39;s not just you being sensitive. Your nervous system is genuinely struggling to adjust.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why One Hour Feels Like Jet Lag</h2>
                        <p>Your body runs on an internal clock called your circadian rhythm. It regulates when you feel awake, when you feel tired, when you&#39;re hungry, when your body temperature rises and falls.</p>
                        <p>This rhythm is incredibly precise. It&#39;s synced to light, darkness, and your daily patterns.</p>
                        <p>When you suddenly shift everything by an hour, your circadian rhythm doesn&#39;t just snap into place. It takes days to recalibrate.</p>
                        <p>Your brain is still expecting to wake up at the &quot;old&quot; time. Your body is still producing melatonin at the &quot;old&quot; time. Your cortisol rhythm is off.</p>
                        <p>So even though the clock says 7 AM, your body thinks it&#39;s 6 AM. And that disconnect creates the same kind of disorientation you&#39;d feel from traveling across time zones.</p>
                        <p>Except you didn&#39;t go anywhere. You&#39;re just... tired and confused in your own house.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">It&#39;s Worse in Spring</h2>
                        <p>Losing an hour in spring (springing forward) is harder on your system than gaining an hour in fall.</p>
                        <p>When you lose sleep, your body doesn&#39;t just &quot;make it up&quot; the next night. Sleep debt accumulates. You&#39;re starting the week already behind.</p>
                        <p>And it&#39;s not just about being tired. The time shift affects:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li><strong className="text-slate-900 dark:text-white">Your mood.</strong> Studies show an increase in depression and anxiety in the week after DST. Your serotonin production is tied to light exposure, and when your schedule shifts, so does your brain chemistry.</li>
                            <li><strong className="text-slate-900 dark:text-white">Your focus.</strong> Cognitive performance drops. You&#39;re slower to react, harder to concentrate, more prone to mistakes. This is why car accidents and workplace injuries spike in the days after DST.</li>
                            <li><strong className="text-slate-900 dark:text-white">Your digestion.</strong> Your gut runs on a schedule too. When you eat at different times relative to your internal clock, your digestion gets thrown off. Bloating, discomfort, irregular bathroom habits - all common after DST.</li>
                            <li><strong className="text-slate-900 dark:text-white">Your stress response.</strong> When your circadian rhythm is disrupted, your cortisol regulation suffers. You might feel more on edge, more reactive, harder to calm down.</li>
                        </ul>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/seasonal_1a.jpg"
                                alt="Visual representation of sleep debt and circadian disruption"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">How Long Does It Take to Adjust?</h2>
                        <p>Most people take about a week to fully adjust. Some people take longer - up to two weeks.</p>
                        <p>If you&#39;re already dealing with poor sleep, anxiety, or a dysregulated nervous system, it hits harder. Your system doesn&#39;t have the resilience to adapt quickly.</p>
                        <p>And if you&#39;re trying to just push through it - drinking extra coffee, staying up late anyway, ignoring your body&#39;s signals - you&#39;re making it worse.</p>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white">How to Actually Recover</h2>
                        <p>You can&#39;t avoid DST. But you can support your body through the transition.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Start Adjusting Before It Happens</h3>
                        <p>If you can, shift your schedule gradually in the days leading up to DST. Go to bed 15 minutes earlier each night for three nights before the time change. Wake up 15 minutes earlier too.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Get Bright Light in the Morning</h3>
                        <p>Your circadian rhythm is most responsive to light in the morning. After DST, when you wake up (even if it feels too early), get outside or sit by a bright window within 30 minutes.</p>
                        <p>Natural sunlight is best, but if it&#39;s still dark out, use a bright light or a <a href="https://amzn.to/3CH375m" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">SAD lamp</a>. The light exposure tells your brain: &quot;This is morning. Time to wake up.&quot;</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Avoid Blue Light at Night</h3>
                        <p>Blue light from screens suppresses melatonin and tricks your brain into thinking it&#39;s still daytime. Wear <a href="https://amzn.to/3CH375m" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">blue light blocking glasses</a> in the evening, especially in the first week after DST.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/seasonal_1b.jpg"
                                alt="Practical tips to recover from DST"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Support Your Sleep Chemistry</h3>
                        <p><a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium Breakthrough</a> helps regulate your circadian rhythm and supports melatonin production. Taking it consistently in the evening can help your body adjust to the new schedule faster.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Create a Consistent Bedtime Routine</h3>
                        <p>Even if you don&#39;t feel tired at the &quot;new&quot; bedtime, go through the routine anyway. A <a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted blanket</a> can help signal your nervous system that it&#39;s time to wind down.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Use a Sunrise Alarm Clock</h3>
                        <p>A <a href="https://amzn.to/3CH375m" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">sunrise alarm clock</a> gradually increases light in your room before your alarm goes off, mimicking a natural sunrise and waking you up more gently.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Be Gentle With Yourself</h2>
                        <p>The first few days after DST, you&#39;re going to feel off. That&#39;s normal. Don&#39;t schedule important meetings or high-stakes tasks if you can avoid it. Give yourself extra time in the morning. Don&#39;t expect peak performance. Your body is working hard to recalibrate. The best thing you can do is support it, not fight it.</p>
                    </div>

                    <ShareSection title="Why Daylight Saving Time Wrecks Your Nervous System (And How to Recover)" />
                    <CommentsSection articleId="dst-nervous-system" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
