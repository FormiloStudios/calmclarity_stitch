import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ShareSection } from "@/components/ShareSection";
import { CommentsSection } from "@/components/CommentsSection";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

function ImageSuggestion({ description }: { description: string }) {
    return (
        <div className="my-16 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-3xl p-12 text-center bg-slate-50/50 dark:bg-white/2 transition-colors hover:bg-slate-50 dark:hover:bg-white/5">
            <span className="material-symbols-outlined text-4xl text-slate-300 dark:text-slate-700 mb-4">image_search</span>
            <p className="text-slate-500 dark:text-slate-400 font-display italic text-lg max-w-md mx-auto">
                <span className="block font-bold non-italic uppercase tracking-widest text-[10px] mb-2 text-slate-400 dark:text-slate-500">Image Suggestion</span>
                {description}
            </p>
        </div>
    );
}

export default function ArticlePage() {
    return (
        <>
            <Nav />
            <main className="pt-32 pb-24">
                <article className="max-w-3xl mx-auto px-6">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                            Vagus Nerve
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            The 5 Minute Vagus Nerve Reset (When You Need to Calm Down Fast)
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
                                You&#39;re sitting at your desk and you feel it starting. Your chest gets tight. Your breathing gets shallow. That familiar wave of anxiety creeps in and you know if you don&#39;t do something right now, it&#39;s going to snowball.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/article3.jpg"
                                alt="Vagus nerve reset visual"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>Or maybe you&#39;re lying in bed and your heart is racing for no clear reason. You need to calm down, but telling yourself to "just relax" isn&#39;t doing anything.</p>
                        <p>Here is what actually works: a vagus nerve reset.</p>
                        <p>It sounds technical, but it is not. It is a simple physical trick that tells your body to shift out of panic mode and into calm. And it works in about five minutes.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What the Vagus Nerve Actually Does</h2>
                        <p>Your vagus nerve is the main communication highway between your brain and your body.</p>
                        <p>It runs from your brainstem down through your neck, past your heart, and into your gut. It is constantly sending signals back and forth, letting your brain know what is happening in your body and vice versa.</p>
                        <p>When your vagus nerve is working well, it helps you shift out of "fight or flight" mode and into "rest and digest" mode. It slows your heart rate, calms your breathing, and tells your nervous system: We are safe. We can relax now.</p>
                        <p>But when you are chronically stressed, anxious, or overwhelmed, your vagus nerve function can get sluggish. It is not sending those "calm down" signals as effectively as it should.</p>
                        <p>That is where stimulating it manually comes in.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why This Works When "Just Breathing" Does Not</h2>
                        <p>You have probably been told to "take deep breaths" when you are anxious.</p>
                        <p>And sometimes that helps. But sometimes it does not.</p>
                        <p>Here is why: when your nervous system is really stuck in fight or flight, your brain is not going to listen to a mental command to relax. It is in survival mode. It thinks you are in danger.</p>
                        <p>But your vagus nerve responds to physical input. When you stimulate it directly, it sends a signal to your brain that overrides the panic response.</p>
                        <p>You are essentially hacking your nervous system. Giving it physical proof that you are safe, even if your memories or thoughts are still racing.</p>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white">The 5 Minute Vagus Nerve Reset</h2>
                        <p>Here is the simple version. You can do this anywhere, at your desk, in your car, lying in bed, or sitting on your couch.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Step 1: Cold Exposure on Your Neck or Face (60 to 90 seconds)</h3>
                        <p>Cold activates your vagus nerve almost immediately.</p>
                        <p>The easiest way to do this is splash cold water on your face. Hold it there for a few seconds. Pat it dry. Repeat a couple times.</p>
                        <p>Or, if you want something more targeted, use an <a href="https://amzn.to/4qunLzs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">ice roller</a> on the sides of your neck. Run it from just below your ear down to your collarbone, slowly, for about 60 seconds on each side.</p>
                        <p>The cold creates a physical jolt that interrupts the stress response and activates your parasympathetic nervous system (the "calm down" system).</p>
                        <p>You will probably feel your breathing slow down almost immediately.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/brewing_article3a.jpg"
                                alt="Cold exposure technique"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Step 2: Slow, Controlled Breathing (2 to 3 minutes)</h3>
                        <p>Once you have done the cold exposure, your nervous system is already starting to shift. Now you reinforce it with breathing.</p>
                        <p>But not just any breathing. Specific breathing that activates the vagus nerve.</p>
                        <ul className="list-none pl-0 space-y-2">
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                <span>Breathe in through your nose for a count of 4.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                <span>Hold for a count of 4.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                <span>Breathe out through your mouth for a count of 6.</span>
                            </li>
                        </ul>
                        <p>The longer exhale is key. It stimulates your vagus nerve and signals to your body that you are not in danger.</p>
                        <p>Do this for 2 to 3 minutes. You do not need to overthink it. Just slow, steady breaths.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Step 3: Physical Grounding (1 to 2 minutes)</h3>
                        <p>Your nervous system needs a physical cue that you are safe and grounded.</p>
                        <p>Press your feet firmly into the floor. Feel the weight of your body in the chair. Notice the surface beneath you.</p>
                        <p>Or, if you have an <a href="https://amzn.to/4ahYk3x" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">acupressure mat</a>, lie on it for a minute or two. The intense sensation forces your brain to focus on the present moment instead of the anxiety spiral.</p>
                        <p>Some people also find that squeezing <a href="https://amzn.to/4chc7Ey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">therapy putty</a> or a stress ball helps. It gives your hands something to do and discharges some of that anxious energy.</p>
                        <p>The point is to bring your attention into your body, into the present moment, into something physical.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/brewing_article3b.jpg"
                                alt="Grounding technique"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What If You Do Not Have Time for All That?</h2>
                        <p>If you are in a meeting, or you are somewhere you cannot splash water on your face or lie on a mat, here is the abbreviated version:</p>
                        <p><strong>30 second reset:</strong></p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li>Press your thumb into the palm of your opposite hand, hard, for 10 seconds. (This activates pressure points that calm the nervous system.)</li>
                            <li>Take three slow breaths, in for 4 and out for 6.</li>
                            <li>Press your feet into the floor and notice the sensation.</li>
                        </ul>
                        <p>It is not as thorough as the full reset, but it is enough to interrupt the spiral.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Supporting Your Vagus Nerve Long Term</h2>
                        <p>These quick resets work in the moment. But if you are dealing with chronic anxiety, you also want to support your vagus nerve long term.</p>

                        <p>A few things help with this:</p>
                        <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                            <li><strong>Your gut health.</strong> The vagus nerve connects your gut to your brain. When your gut is off, it sends stress signals up to your brain through the vagus nerve. Supporting your gut can actually improve vagus nerve function. That is what <a href="https://9d8ab1xas7e8ob80v4ml1q9dle.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">DigestSync</a> is designed to do.</li>
                            <li><strong>Your overall nerve health.</strong> When the communication pathways between your brain and body are working smoothly, your vagus nerve can do its job better. Supplements like <a href="https://nervovive.com/video.php?affiliate=clickcham-" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">NervoVive</a> are formulated to support nerve health and communication.</li>
                            <li><strong>Magnesium.</strong> This keeps coming up because it matters. <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium</a> supports the parasympathetic nervous system, the part of your nervous system that the vagus nerve activates.</li>
                            <li><strong>Deep pressure.</strong> This is why <a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted blankets</a> work. The gentle, even pressure activates your parasympathetic nervous system through your vagus nerve.</li>
                        </ul>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">When to Use This Reset</h2>
                        <p>You do not have to wait until you are in full panic mode. Use it anytime you feel:</p>
                        <ul className="list-disc pl-6 space-y-1 marker:text-slate-400">
                            <li>Your chest getting tight</li>
                            <li>Your breathing getting shallow</li>
                            <li>Your thoughts starting to spiral</li>
                            <li>That "on edge" feeling creeping in</li>
                            <li>Physical tension building (jaw clenching, shoulder tightness)</li>
                            <li>Your heart rate picking up for no reason</li>
                        </ul>
                        <p>The earlier you catch it, the easier it is to reset. Think of it like this: it is a lot easier to stop a car that is going 10 mph than one that is going 60. Catch the anxiety early, reset your vagus nerve, and you prevent the full spiral.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Point Is Not to Never Feel Anxious</h2>
                        <p>You are going to feel anxious sometimes. That is normal. The goal is to have a tool you can use when it happens. Something that actually works. Something that gives you a sense of control instead of just waiting for the anxiety to pass on its own.</p>
                        <p>Your vagus nerve is always there. You can always activate it. You always have access to this reset. And the more you use it, the better your nervous system gets at shifting out of panic mode on its own.</p>
                        <p>You are teaching your body: We have a way to handle this. We do not have to spiral. That is what nervous system regulation actually is. Not eliminating stress or anxiety completely. Just giving your body the tools it needs to come back down.</p>
                    </div>

                    <ShareSection title="The 5-Minute Vagus Nerve Reset (When You Need to Calm Down Fast)" />
                    <CommentsSection articleId="vagus-nerve-reset" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
