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
                            Lifestyle
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            Why You&#39;re Exhausted After Hanging Out With Friends (Even If You Had Fun)
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
                                Feeling drained after socializing isn&#39;t antisocial, it&#39;s your nervous system recovering from overstimulation.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccfeb264a.jpg"
                                alt="Person relaxing after socializing"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>
                            You love your friends. You spent the whole evening laughing. It was, by all accounts, a great time. But the second you get home and close the door, you feel like you&#39;ve just run a marathon.
                        </p>

                        <p>
                            You don&#39;t want to talk. You don&#39;t want to do anything. You just want to sit in a dark room and stare at the wall.
                        </p>

                        <p>
                            This isn't a sign that you are a secret introvert or that you don't actually like your friends. It is a biological phenomenon known as "Social Overstimulation."
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Cost of Connection</h2>
                        <p>
                            Socializing is metabolically expensive for your nervous system. Even when you are having fun, your brain is processing a massive amount of data: facial expressions, tone of voice, social cues, background noise, and the "filtering" of your own responses.
                        </p>
                        <p>
                            For some people, particularly those with a more sensitive nervous system, this processing can eventually cross the line into sensory overload. Your body shifts into a "low power mode" to protect itself from further stimulation.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Social Anxiety vs. Overstimulation</h2>
                        <p>
                            Overstimulation is different from social anxiety. Social anxiety is about fear of judgment. Overstimulation is about the *volume* of information. You can be perfectly confident and still get overstimulated.
                        </p>
                        <p>
                            However, if you find that you are *always* exhausted because you spend the entire time "performing" or worrying about how you are being perceived, that builds a massive amount of tension in your system. This is a common pattern for people who benefit from retraining their social responses with tools like <a href="http://www.betterdailyguide.site/ds24/the-10-minute-social-confidence-trick#aff=Select_partner" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">The Complete Social Confidence System</a>.
                        </p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccfeb264a_1.jpg"
                                alt="Calm, minimalist home environment"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">How to Recover Faster</h2>
                        <p>
                            The goal after socializing isn&#39;t just to "sit still," it&#39;s to actively discharge the stimulation.
                        </p>

                        <p>
                            <strong>1. Deep Pressure:</strong> This is where a <a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted blanket</a> is a game-changer. The even pressure signals to your nervous system that the "active" phase of the day is over and it can finally power down.
                        </p>

                        <p>
                            <strong>2. Visual Rest:</strong> Darkness is essential. Using a <a href="https://amzn.to/4aoFGli" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted sleep mask</a> for even 10 minutes when you get home can help "reset" your visual processing centers.
                        </p>

                        <p>
                            <strong>3. Grounding:</strong> Get on the floor. Or lie on an <a href="https://amzn.to/4kqM8MU" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">acupressure mat</a>. The intense, consistent sensation of the mat helps draw your attention out of your racing, overstimulated thoughts and back into your physical body.
                        </p>

                        <p>
                            Don&#39;t feel guilty for needing silence. Your nervous system isn&#39;t antisocial; it&#39;s just highly tuned. Give it the recovery time it needs.
                        </p>
                    </div>

                    <ShareSection title="Why You're Exhausted After Hanging Out With Friends (Even If You Had Fun)" />
                    <CommentsSection articleId="exhausted-after-friends" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
