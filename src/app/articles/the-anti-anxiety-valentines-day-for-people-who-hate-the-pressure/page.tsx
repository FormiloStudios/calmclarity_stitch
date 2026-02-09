import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ShareSection } from "@/components/ShareSection";
import { CommentsSection } from "@/components/CommentsSection";

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
                            The Anti-Anxiety Valentine&#39;s Day (For People Who Hate the Pressure)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>7 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>February 2026</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] w-full mb-16 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/val_article3.jpg"
                            alt="Low-pressure Valentine's Day connection"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic mb-12">
                            Let&#39;s just say it: Valentine&#39;s Day kind of sucks sometimes. Not the idea of it — spending time with someone you love, celebrating your relationship. That part&#39;s fine. It&#39;s everything <em>around</em> it that&#39;s exhausting.
                        </p>

                        <p>
                            The crowded restaurants where you can barely hear each other talk. The expensive prix fixe menus. The flowers that cost three times what they normally do. The pressure to post the perfect couple photo. The feeling that if you don&#39;t do something big and romantic, you&#39;re somehow failing at your relationship.
                        </p>

                        <p>
                            And if you&#39;re someone who already deals with anxiety? Valentine&#39;s Day can feel less like a celebration and more like a test you didn&#39;t study for.
                        </p>

                        <p>
                            Here&#39;s what I want you to know: <strong>You&#39;re allowed to hate the Valentine&#39;s Day circus. And you&#39;re allowed to do it differently.</strong>
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why Valentine&#39;s Day Triggers Anxiety</h2>
                        <p>
                            Even if you love your partner and genuinely want to celebrate, Valentine&#39;s Day comes with a specific kind of stress that can send your nervous system into overdrive.
                        </p>

                        <h3 className="font-display text-xl font-bold mt-8 mb-4 text-white">The expectations are everywhere</h3>
                        <p>Every commercial, every social media post, and every conversation is reminding you that this day is supposed to be special. If you&#39;re not naturally good at grand gestures, that pressure can feel crushing.</p>

                        <h3 className="font-display text-xl font-bold mt-8 mb-4 text-white">It&#39;s performative</h3>
                        <p>Valentine&#39;s Day isn&#39;t just about enjoying time with your partner — it&#39;s about <em>showing</em> that you&#39;re enjoying it. It turns intimacy into a performance.</p>

                        <h3 className="font-display text-xl font-bold mt-8 mb-4 text-white">Everything is crowded and loud</h3>
                        <p>If you&#39;re introverted or sensitive to overstimulation, a packed restaurant is basically sensory hell. You&#39;re elbow-to-elbow with strangers and can barely hear yourself think.</p>

                        <div className="relative aspect-[4/3] w-full my-12 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/val_article3a.jpg"
                                alt="Sensory overload metaphor"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p>
                            For people who already struggle with anxiety, all of this activates your nervous system&#39;s threat response. Your body starts treating Valentine&#39;s Day like a high-stakes situation you need to survive.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Permission to Opt Out (Or Do It Your Way)</h2>
                        <p>
                            Your relationship isn&#39;t measured by how well you perform on February 14th. So what does an anti-anxiety Valentine&#39;s Day look like?
                        </p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">1. Choose Low-Stimulation Over High-Performance</h3>
                        <p>
                            Cook at home together. Order takeout and watch a movie. Go for a walk somewhere quiet. The point is connection — and you can&#39;t actually connect when you&#39;re overstimulated and stressed.
                        </p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">2. Set Boundaries Around Social Media</h3>
                        <p>
                            Stay off Instagram on Valentine&#39;s Day. Just be there. With your person. Without an audience.
                        </p>
                        <p>
                            If the urge to scroll hits, use a fidget ring to redirect that nervous energy. <span className="text-primary italic">[LINK TO FIDGET RING]</span>
                        </p>

                        <div className="relative aspect-[4/3] w-full my-12 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/val_article3b.jpg"
                                alt="A peaceful, distraction-free evening"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">3. Build in Recovery Time</h3>
                        <p>
                            If you do the traditional thing, plan for recovery afterward. A weighted blanket can help your nervous system shift out of "performance mode" and into "rest mode." <span className="text-primary italic">[LINK TO WEIGHTED BLANKET]</span>
                        </p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">4. Support Your System Through the Stress</h3>
                        <p>
                            Magnesium helps regulate your stress response and keeps your nervous system from getting stuck in overdrive. <span className="text-primary italic">[LINK TO MAGNESIUM BREAKTHROUGH]</span>
                        </p>
                        <p>
                            And if you&#39;re dealing with digestive issues from stress, supporting your gut with something like <span className="text-primary italic">[LINK TO DIGESTSYNC]</span> can actually help calm your nervous system.
                        </p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">5. Have an Escape Plan</h3>
                        <p>
                            Knowing how you&#39;re going to handle it if things get overwhelming makes it less scary. Keep an ice roller in your bag to activate your vagus nerve and interrupt the anxiety response. <span className="text-primary italic">[LINK TO ICE ROLLER]</span>
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Real Point of Valentine&#39;s Day</h2>
                        <p>
                            Valentine&#39;s Day is supposed to be about connection. None of that requires a packed restaurant or a perfectly curated Instagram post.
                        </p>
                        <p>
                            Connection happens when your nervous system feels safe. When you&#39;re not performing. When you&#39;re not comparing. So if the traditional Valentine&#39;s Day doesn&#39;t feel safe to you — skip it. Do something that actually lets you be present with your person.
                        </p>
                    </div>

                    <ShareSection title="The Anti-Anxiety Valentine's Day (For People Who Hate the Pressure)" />
                    <CommentsSection articleId="anti-anxiety-vday" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
