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
                <article className="max-w-4xl mx-auto px-6">
                    {/* Unique Seasonal Header Layout */}
                    <header className="mb-20">
                        <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-12">
                            <div className="md:w-3/5">
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 block">
                                    Seasonal Health
                                </span>
                                <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                                    Spring Anxiety: Why Seasonal Changes Trigger Your Nervous System
                                </h1>
                                <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                                    The transition to spring isn&#39;t easy for everyone. Here&#39;s why the season of &quot;renewal&quot; can feel like sensory overload.
                                </p>
                            </div>
                            <div className="md:w-2/5 md:pt-12">
                                <div className="flex items-center space-x-4 text-sm text-slate-400 dark:text-slate-500">
                                    <span>6 Min Read</span>
                                    <span className="w-1 h-1 bg-current rounded-full"></span>
                                    <span>February 2026</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/seasonal_2.jpg"
                                alt="Abstract representation of spring energy and light"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="max-w-3xl mx-auto">
                        <div className="prose prose-lg dark:prose-invert prose-slate font-light leading-relaxed">
                            <p className="text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic mb-12 border-l-4 border-primary/20 pl-8 ml-[-2rem]">
                                Everyone is buzzing about the warmer weather and longer days. But you? You feel on edge.
                            </p>

                            <p>We&#39;re told that spring is a time of renewal and joy. But for a significant number of people, the transition from winter to spring triggers a spike in anxiety, restlessness, and even panic.</p>
                            <p>It&#39;s not just &quot;spring fever&quot; - it&#39;s a physiological response to a rapidly changing environment. Your nervous system is trying to keep up with shifts in light, temperature, and social pressure, and sometimes it hits a breaking point.</p>

                            <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Biology of Spring Transition</h2>
                            <p>Your brain is highly sensitive to light. As the days get longer, your production of melatonin (the sleep hormone) decreases, and your production of serotonin (the mood hormone) increases.</p>
                            <p>Usually, this is a good thing. But for a reactive nervous system, this chemical shift can feel like someone turned the volume up too high. The sudden increase in energy and light can feel like overstimulation rather than inspiration.</p>

                            <div className="my-16 relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/seasonal_2a.jpg"
                                    alt="Visual representation of morning light and biological intensity"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <p>Additionally, the transition period is often chaotic. One day is 60 degrees, the next is 30. Your body is constantly recalibrating its internal thermostat and energy output. This consumes a massive amount of &quot;nervous system bandwidth,&quot; leaving you with less resilience to handle everyday stressors.</p>

                            <h2 className="font-display text-3xl font-bold mt-16 mb-6">Pressure to &quot;Bloom&quot;</h2>
                            <p>There is also a social component to spring anxiety. There is an unspoken pressure to be active, social, and productive as soon as the sun comes out.</p>
                            <p>If you don&#39;t feel that way - if you&#39;re still feeling the slow, heavy energy of winter - it creates a disconnect. You feel like you&#39;re &quot;doing spring wrong,&quot; which only adds to your baseline anxiety.</p>

                            <h2 className="font-display text-4xl font-bold mt-24 mb-10 text-slate-900 dark:text-white">How to Anchor Your System</h2>
                            <p>You don&#39;t have to wait for the season to end to feel better. You can give your body the &quot;anchors&quot; it needs to stay grounded during the shift.</p>

                            <h3 className="font-display text-2xl font-bold mt-12 mb-4">Support Your Baseline</h3>
                            <p>When the environment is changing rapidly, you need your internal chemistry to stay as stable as possible. <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium Breakthrough</a> is essential during seasonal shifts. It helps regulate the stress response and ensures your nervous system isn&#39;t redlining while it tries to adjust to the new light patterns.</p>

                            <h3 className="font-display text-2xl font-bold mt-12 mb-4">Grounding in the Morning</h3>
                            <p>Instead of jumping straight into a high-energy &quot;spring&quot; morning, take five minutes for yourself. Stand outside on the bare ground if you can, or simply sit by a window with your feet flat on the floor. Use a <a href="https://amzn.to/3CH375m" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">SAD lamp</a> if the morning is gray but your body expects consistency.</p>

                            <div className="my-16 relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/seasonal_2b.jpg"
                                    alt="Person practicing grounding in a spring setting"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="font-display text-2xl font-bold mt-12 mb-4 italic">Weighted Support</h3>
                            <p>If the increased light in the evenings is making you feel restless or &quot;tired but wired,&quot; use a <a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted blanket</a>. The deep pressure tells your nervous system that it&#39;s safe to shut down, even if the world outside is still full of light and energy.</p>

                            <h2 className="font-display text-3xl font-bold mt-16 mb-6">Respect Your Own Pace</h2>
                            <p>Just because the calendar says it&#39;s spring doesn&#39;t mean your body has to bloom immediately. It&#39;s okay to take the transition slowly. You don&#39;t have to match the world&#39;s level of activity. Listen to your body, not the seasonal expectations.</p>
                        </div>

                        <div className="mt-20 py-12 border-y border-slate-100 dark:border-white/5">
                            <ShareSection title="Spring Anxiety: Why Seasonal Changes Trigger Your Nervous System" />
                        </div>

                        <div className="mt-12">
                            <CommentsSection articleId="spring-anxiety" />
                        </div>
                    </div>
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
