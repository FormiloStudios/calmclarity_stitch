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
                            Relationships
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            How to Stop Relationship Anxiety From Ruining Valentine&#39;s Day
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>5 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>February 2026</span>
                        </div>
                    </header>

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                You love this person. You&#39;re pretty sure they love you too. So why are you lying awake at 2 AM wondering if they&#39;re going to break up with you?
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/val_article2.jpg"
                                alt="Stress-free connection on Valentine's Day"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>
                            Or replaying that slightly off conversation from three days ago, searching for hidden meaning in every word they said? Or spiraling over the fact that they haven&#39;t texted back in two hours, even though you know they&#39;re just at work?
                        </p>

                        <p>
                            Or replaying that slightly off conversation from three days ago, searching for hidden meaning in every word they said? Or spiraling over the fact that they haven&#39;t texted back in two hours, even though you know they&#39;re just at work?
                        </p>

                        <p>
                            Valentine&#39;s Day is supposed to be this romantic, happy thing. But if you deal with relationship anxiety, it can feel more like a pressure cooker. The expectations, the "perfect couple" performances on social media, the fear that your Valentine&#39;s plans won&#39;t measure up - or worse, that your partner secretly doesn&#39;t want to be with you at all.
                        </p>

                        <blockquote className="border-l-4 border-primary pl-8 my-12 italic text-2xl font-display text-slate-800 dark:text-slate-200">
                            "This isn&#39;t about your relationship. It&#39;s about your nervous system."
                        </blockquote>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What Relationship Anxiety Actually Is</h2>
                        <p>
                            Relationship anxiety isn&#39;t the same as having normal doubts or concerns about your partner. It&#39;s when your brain goes into overdrive with worst-case scenarios even when everything is objectively fine.
                        </p>
                        <p>You might:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li>Constantly need reassurance that they still love you</li>
                            <li>Overanalyze every text, every tone of voice, every facial expression</li>
                            <li>Feel panicky when they&#39;re not immediately available</li>
                            <li>Assume they&#39;re upset with you when they&#39;re quiet or distracted</li>
                            <li>Fear that they&#39;re going to leave, even when there&#39;s no evidence of that</li>
                            <li>Feel like you&#39;re "too much" or that you&#39;re going to scare them away</li>
                        </ul>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg rotate-1">
                                <Image
                                    src="/val_article2a.jpg"
                                    alt="Mental loop of anxiety"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="font-display text-2xl font-bold mb-4">Threat Detection</h3>
                                <p className="text-sm leading-relaxed text-muted">
                                    Your nervous system is scanning for danger constantly. In a relationship, that "danger" often looks like rejection or abandonment, even when it's not there.
                                </p>
                            </div>
                        </div>

                        <p>
                            Sound familiar? Here&#39;s what&#39;s happening: Your nervous system is stuck in threat-detection mode. It&#39;s scanning for danger constantly - and in a relationship, that "danger" looks like rejection, abandonment, or loss.
                        </p>
                        <p>
                            Even when your partner does everything right, your body is still sending alarm signals. It&#39;s not because they&#39;re doing something wrong. It&#39;s because your system hasn&#39;t learned that this relationship is safe.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why Valentine&#39;s Day Makes It Worse</h2>
                        <p>Valentine&#39;s Day is basically designed to trigger relationship anxiety.</p>

                        <h3 className="font-display text-xl font-bold mt-8 mb-4 text-white">The expectations are huge</h3>
                        <p>There&#39;s this unspoken pressure that Valentine&#39;s Day needs to be perfect. If your partner forgets to make a reservation or gets you a gift that feels generic, your brain can spiral into "they don&#39;t care about me" territory fast.</p>

                        <h3 className="font-display text-xl font-bold mt-8 mb-4 text-white">Everyone else looks happy</h3>
                        <p>Social media is flooded with couple photos, surprise proposals, and elaborate gestures. Even if you know those posts don&#39;t show the full picture, it&#39;s hard not to compare. Your brain starts asking: "Why isn&#39;t our relationship like that?"</p>

                        <h3 className="font-display text-xl font-bold mt-8 mb-4 text-white">It forces you to evaluate</h3>
                        <p>Valentine&#39;s Day kind of demands that you think about where things stand. That evaluation process can send an anxious brain into overdrive.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What You&#39;re Actually Dealing With</h2>
                        <p>Here&#39;s the hard truth: Reassurance doesn&#39;t fix this.</p>
                        <p>
                            You can ask your partner a hundred times if they still love you, and it might calm you down for an hour. But then the anxiety creeps back in. That&#39;s because the problem isn&#39;t lack of information. It&#39;s that your nervous system doesn&#39;t <em>believe</em> the reassurance. It&#39;s wired to expect danger.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">How to Actually Regulate Your Nervous System</h2>
                        <p>You have to give your body physical proof that you&#39;re safe. That means regulating your nervous system - not just trying to logic yourself into feeling better.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">1. Ground Yourself When the Spiral Starts</h3>
                        <p>
                            When you feel yourself starting to spiral, you need to interrupt that loop with physical grounding. Press your feet firmly into the floor. Feel the weight of your body in the chair. Notice five things you can see, four things you can touch, three things you can hear.
                        </p>
                        <p>
                            If you&#39;re lying in bed spiraling, try using a <a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted blanket</a>. The deep pressure actually activates your parasympathetic nervous system - the part that tells your body "we&#39;re safe, we can relax now."
                        </p>

                        <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-3xl my-16">
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                                <div className="md:w-1/3 relative aspect-square w-full rounded-xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/val_article2b.jpg"
                                        alt="Grounding exercises"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="md:w-2/3">
                                    <h4 className="font-display text-xl font-bold mb-3 text-primary uppercase tracking-wider">The Physical Proof</h4>
                                    <p className="text-sm leading-relaxed mb-0">
                                        Grounding isn't a mental exercise; it's physical proof to your body that you are safe in the present moment. This interrupts the anxiety spiral before it takes over.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">2. Stop the Reassurance Loop</h3>
                        <p>
                            Constantly asking "do you still love me?" actually makes the anxiety worse over time. It reinforces the idea that you need external validation to feel safe.
                        </p>
                        <p>
                            Instead, give yourself 10-15 minutes before acting on the urge. A <a href="https://amzn.to/4kogorP" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">fidget ring</a> can be surprisingly helpful here. It gives your hands something to do and creates a small physical ritual that interrupts the anxiety loop.
                        </p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">3. Support Your Nervous System Biochemically</h3>
                        <p>
                            <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium</a> helps regulate the stress response and supports the shift from "fight or flight" to "rest and digest."
                        </p>
                        <p>
                            You can also support your overall nerve health with something like <a href="https://nervovive.com/video.php?affiliate=clickcham-" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">NervoVive</a>, which is designed to support communication pathways so your system doesn&#39;t go into overdrive so easily.
                        </p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">4. Create a Physical Ritual</h3>
                        <ul className="list-decimal pl-6 space-y-4 marker:text-primary">
                            <li><strong>Splash cold water or use an ice roller</strong> on your face/wrists to stimulate the vagus nerve.</li>
                            <li><strong>Lie on an <a href="https://amzn.to/4kqM8MU" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">acupressure mat</a></strong> for 10 minutes to force your brain into the present moment. </li>
                            <li><strong>Use a weighted blanket</strong> or weighted sleep mask to signal safety to your system.</li>
                        </ul>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What to Do on Valentine&#39;s Day Specifically</h2>
                        <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                            <li><strong>Lower the expectations.</strong> Agree that it doesn&#39;t have to be perfect.</li>
                            <li><strong>Stay off social media.</strong> You don&#39;t need the comparison.</li>
                            <li><strong>Have a plan for if anxiety hits.</strong> Bring your fidget ring or set aside time for a reset.</li>
                            <li><strong>Focus on connection, not performance.</strong> The point is just spending time with someone you care about.</li>
                        </ul>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Truth About Relationship Anxiety</h2>
                        <p>
                            Relationship anxiety doesn&#39;t mean your relationship is doomed. It just means your nervous system learned that relationships aren&#39;t safe, and it&#39;s trying to protect you.
                        </p>
                        <p>But you can teach it something different - by giving your body consistent, physical signals of safety. It takes time, but it&#39;s possible. You&#39;re not too much. You&#39;re just wired for caution. And that&#39;s okay.</p>
                    </div>

                    <ShareSection title="How to Stop Relationship Anxiety From Ruining Valentine's Day" />
                    <CommentsSection articleId="relationship-anxiety-vday" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
