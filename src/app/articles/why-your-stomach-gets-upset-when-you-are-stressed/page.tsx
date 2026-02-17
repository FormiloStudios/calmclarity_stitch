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
                            Why Your Stomach Gets Upset When You&#39;re Stressed (The Gut-Brain Connection)
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
                                That nervous stomach isn&#39;t just in your head, your gut and brain are in constant conversation, and stress sends the whole system into chaos.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccfeb264c.jpg"
                                alt="Abstract concept image for gut-brain connection"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>
                            You have a big presentation in an hour, and suddenly you need to find a bathroom. Or you receive a stressful email, and your stomach immediately starts to cramp and bloat.
                        </p>

                        <p>
                            We often call this "nerves" or "butterfly in the stomach," but the biological truth is much more complex. Your gut is literally your "second brain," and it is directly wired into your stress response system.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Enteric Nervous System</h2>
                        <p>
                            Your gut has its own semi-autonomous nervous system called the Enteric Nervous System (ENS). It contains over 100 million nerve cells - more than your spinal cord or peripheral nervous system.
                        </p>
                        <p>
                            While the ENS manages the mechanical work of digestion, it is in constant, lightning-fast communication with your brain via the vagus nerve. When your brain registers a threat (stress), it immediately sends a signal to the gut to "halt all non-essential operations."
                        </p>
                        <p>
                            Digestion is not essential for survival in the short term. So, your body redirects blood and energy away from your gut and toward your muscles. This sudden shift is what causes that feeling of nausea, cramping, or "butterflies."
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Toxic Cycle of Chronic Stress</h2>
                        <p>
                            In short-term stress, this is fine. But when stress becomes chronic, your gut stays in this "survival mode." This leads to long-term issues like leaky gut, inflammation, and an imbalanced microbiome.
                        </p>
                        <p>
                            Because the gut and brain communicate in both directions, an unhappy gut then sends stress signals *back* to the brain. This creates a loop: stress causes gut issues, and gut issues cause more stress and anxiety.
                        </p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccfeb264c_1.jpg"
                                alt="Cinematic food or digestive health aesthetic"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Breaking the Loop</h2>
                        <p>
                            To fix a "nervous stomach," you have to address both ends of the connection.
                        </p>

                        <p>
                            <strong>1. Support the Gut Architecture:</strong> You need to give your gut the environment it needs to stay calm even when the brain is loud. <a href="https://dcfc75ycggm8d6170qkcct6m60.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Gut Go</a> and <a href="https://af7d86x8jch3icc49m-a3x0ubk.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Gut Vita</a> are designed to restore the lining of the gut and support healthy communication through the vagus nerve.
                        </p>

                        <p>
                            <strong>2. Signal Safety via Breath:</strong> When your stomach is cramping, take three very slow breaths with an exhale twice as long as the inhale. This "hacks" the vagus nerve and sends a signal to the ENS that it is safe to resume normal digestion.
                        </p>

                        <p>
                            <strong>3. Magnesium Support:</strong> Stress depletes magnesium, and magnesium is required for the smooth muscles of the gut to relax. <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium</a> can help prevent the "locked up" feeling in your stomach during high-stress periods.
                        </p>

                        <p>
                            Your stomach isn&#39;t being difficult. It is just listening very closely to your brain. By supporting both, you can finally find real, lasting relief.
                        </p>
                    </div>

                    <ShareSection title="Why Your Stomach Gets Upset When You're Stressed (The Gut-Brain Connection)" />
                    <CommentsSection articleId="nervous-stomach" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
