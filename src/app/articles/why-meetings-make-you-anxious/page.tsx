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
                            Neurology
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            Why Meetings Make You Anxious (Even When You&#39;re Prepared)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>5 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>February 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                Being prepared doesn&#39;t stop the nerves, because meeting anxiety isn&#39;t about knowledge, it&#39;s about your nervous system treating performance like a threat.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccfeb263c.jpg"
                                alt="Person looking anxious in a meeting setting"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>
                            You have your notes. You know your data. You have even practiced what you are going to say. But the second the Zoom call starts or the conference room door closes, your heart starts pounding. Your mind goes blank. Your voice feels shaky.
                        </p>

                        <p>
                            It is frustrating because you *are* prepared. So why does your body feel like you are about to walk into a lion&#39;s den?
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The "Social Threat" Response</h2>
                        <p>
                            To your primitive brain, being looked at by a group (performance) is a high-risk situation. In the wild, being the center of attention often meant you were being hunted.
                        </p>
                        <p>
                            Modern "professional" threats, like being judged, making a mistake, or looking incompetent, trigger the exact same survival circuit as a physical threat. Your nervous system doesn&#39;t distinguish between a critical boss and a predator.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Preparation vs. Regulation</h2>
                        <p>
                            Preparation happens in the prefrontal cortex (the logical brain). Anxiety happens in the amygdala (the survival brain).
                        </p>
                        <p>
                            You can't "logic" your way out of a survival response. This is why "just knowing your stuff" doesn't stop the physical symptoms. To stop the anxiety, you have to regulate the nervous system *before* the meeting begins.
                        </p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccfeb263c_1.jpg"
                                alt="Professional yet moody workspace"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">How to Calm the Performance Circuit</h2>

                        <p>
                            <strong>1. Ground Your Energy:</strong> Before the meeting starts, spend 30 seconds with a piece of <a href="https://amzn.to/4chc7Ey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">therapy putty</a>. The manual squeezing discharges the "fight or flight" energy building in your hands.
                        </p>

                        <p>
                            <strong>2. Retrain the Response:</strong> If your social anxiety feels like it&#39;s running your life, you might need a deeper reset. <a href="http://www.betterdailyguide.site/ds24/the-10-minute-social-confidence-trick#aff=Select_partner" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">The Complete Social Confidence System</a> is designed specifically to retrain how your nervous system responds to group dynamics and "performance" situations.
                        </p>

                        <p>
                            <strong>3. Cold Reset:</strong> If you feel a panic spike right before you walk in, splash ice-cold water on your face. This activates the mammalian dive reflex, which immediately slows your heart rate through the vagus nerve.
                        </p>

                        <p>
                            Your brain isn&#39;t failing because you are prepared. It is just trying to protect you. Once you show it that you are safe, your logic will return.
                        </p>
                    </div>

                    <ShareSection title="Why Meetings Make You Anxious (Even When You're Prepared)" />
                    <CommentsSection articleId="why-meetings-make-you-anxious" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
