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
                            Why You Clench Your Jaw (And What It Means for Your Nervous System)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>6 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>February 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                That tight, sore jaw isn&#39;t just a bad habit, it&#39;s your nervous system holding tension it can&#39;t release.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccfeb263a.jpg"
                                alt="Person with jaw tension"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>
                            You catch yourself doing it at your desk. Or you wake up with a dull ache in your temples. Maybe you only notice it when you try to take a deep breath and realize your whole face is locked tight.
                        </p>

                        <p>
                            Jaw clenching, also known as bruxism, is often dismissed as "just stress." But if we look at the neurology, it is something much more specific.
                        </p>

                        <p className="font-bold text-xl text-slate-900 dark:text-white">
                            Your jaw is the "emergency brake" of your nervous system.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Primal Connection</h2>
                        <p>
                            When a mammal is threatened, it has two primary ways to defend itself: its limbs (to run or fight) and its jaw (to bite). Even though you aren&#39;t planning to bite anyone in your 2 PM meeting, your brain doesn&#39;t know that.
                        </p>
                        <p>
                            When your nervous system shifts into high alert, it prepares the muscles for action. The masseter muscle, the one responsible for closing your jaw, is the strongest muscle in your body by weight. It is the first place your body stores defensive energy.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why It Won&#39;t Let Go</h2>
                        <p>
                            Normally, this tension should discharge. You should fight, run, or at least shake it off. But in modern life, we just sit there. We clench our teeth and keep typing.
                        </p>
                        <p>
                            Because the energy has nowhere to go, it gets "stuck" in the fascia and muscles of the face and neck. This sends a constant feedback loop to your brain: "We are still in danger because the jaw is still tight."
                        </p>

                        <h3 className="font-display text-3xl font-bold mt-16 mb-6">The Gut and the Jaw</h3>
                        <p>
                            There is also a fascinating link between your jaw and your gut. The vagus nerve, which regulates your digestion and calm response, passes very close to the joint of your jaw.
                        </p>
                        <p>
                            When your jaw is chronically tight, it can actually interfere with the signals your vagus nerve is trying to send. This is why people with TMJ often have digestive issues like bloating or a "nervous stomach."
                        </p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccfeb263a_1.jpg"
                                alt="Close up of jaw tension"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">How to Release the Tension</h2>
                        <p>
                            Simply telling yourself to "relax your jaw" usually only works for about ten seconds. To actually fix this, you have to talk to the nervous system.
                        </p>

                        <p>
                            One of the most effective ways to signal safety to your brain is through deep pressure. Using a <a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted blanket</a> across your shoulders can actually help your jaw relax by lowering your overall systemic arousal.
                        </p>

                        <p>
                            You can also support the muscles from the inside. <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium</a> is a natural muscle relaxant that specifically helps with nighttime clenching. It helps the nervous system "downshift" so you don&#39;t spend eight hours grinding your teeth while you sleep.
                        </p>

                        <p>
                            For immediate relief, try the "Vagus Nerve Ear Pull." Gently grasp your earlobes and pull them slightly down and away from your head. This stimulates the auricular branch of the vagus nerve and can trigger an immediate reflexive release in the jaw.
                        </p>

                        <p>
                            Your jaw isn&#39;t trying to hurt you. It is just trying to protect you from a threat it doesn&#39;t realize has already passed.
                        </p>
                    </div>

                    <ShareSection title="Why You Clench Your Jaw (And What It Means for Your Nervous System)" />
                    <CommentsSection articleId="why-you-clench-your-jaw" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
