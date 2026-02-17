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
                            Why You Wake Up at 3 AM Every Night (And How to Stop It)
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
                                That wide-awake-at-3 AM feeling isn&#39;t random insomnia, it&#39;s a cortisol spike your body doesn&#39;t know how to stop.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccfeb263b.jpg"
                                alt="Person awake at 3AM"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>
                            It happens like clockwork. You fall asleep just fine, but then your eyes snap open at 3:15 AM. You don&#39;t feel sleepy. You feel alert. You feel... wired.
                        </p>

                        <p>
                            This is one of the most common complaints of the modern nervous system. It has a specific biological name: the 3 AM Cortisol Spike.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Cortisol Rhythm</h2>
                        <p>
                            Normally, your cortisol levels follow a predictable curve. They are high in the morning to wake you up and low at night to let you sleep.
                        </p>
                        <p>
                            But when you are under chronic stress, your body starts to mismanage its blood sugar and stress hormones. Around 3 AM, your liver begins to process glucose to keep your system running. If your system is already stressed, this process can trigger a premature surge of cortisol.
                        </p>
                        <p>
                            Suddenly, your brain thinks it is 7 AM and time to start the day. It switches from "sleep mode" to "survival mode" in a matter of seconds.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Gut Link</h2>
                        <p>
                            There is also a strong connection to your gut health. Your gut bacteria have their own circadian rhythm. If your microbiome is out of balance, it can send stress signals up the vagus nerve in the middle of the night. This is why people with gut issues often find themselves staring at the ceiling at 3 AM.
                        </p>
                        <p>
                            Supporting your gut with something like <a href="https://dcfc75ycggm8d6170qkcct6m60.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Gut Go</a> can actually improve your sleep quality by smoothing out these nighttime signals.
                        </p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccfeb263b_1.jpg"
                                alt="Moody bedroom aesthetic"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">How to Stay Asleep</h2>
                        <p>
                            To stop these spikes, you have to stabilize your nervous system before you ever hit the pillow.
                        </p>

                        <p>
                            <strong>1. Address the Lighting:</strong> Blue light doesn&#39;t just make it hard to fall asleep, it makes your sleep more fragile. Wearing <a href="https://amzn.to/4048DOk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">blue light blocking glasses</a> in the evening helps preserve your natural melatonin, which counteracts cortisol.
                        </p>

                        <p>
                            <strong>2. Mineral Support:</strong> <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium</a> is crucial for regulating the HPA axis (your stress response system). Taking it before bed helps prevent that 3 AM surge.
                        </p>

                        <p>
                            <strong>3. Physical Signals:</strong> A <a href="https://amzn.to/4aoFGli" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted sleep mask</a> provides deep pressure to the face, which can help quiet the mind and keep you in a deeper state of sleep for longer.
                        </p>

                        <p>
                            If you do wake up, don&#39;t check your phone. The light will confirm to your brain that it is morning. Instead, focus on the weight of your body and your breathing. Tell your system what it needs to hear: "We are safe, and it is still time to rest."
                        </p>
                    </div>

                    <ShareSection title="Why You Wake Up at 3 AM Every Night (And How to Stop It)" />
                    <CommentsSection articleId="why-you-wake-up-at-3am-every-night" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
