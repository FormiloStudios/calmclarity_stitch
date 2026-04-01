import Image from "next/image";
import Link from "next/link";
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
                            Physiology
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            Why Your Hands and Feet Are Always Cold
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                Your hands are cold. Again. Not just &quot;a little chilly.&quot; Actually cold. The kind of cold where you can&#39;t warm them up no matter how many layers you&#39;re wearing or how warm the room is.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccmar262.2.jpg"
                                alt="Cold hands being held together for warmth"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>Your feet are the same way. Cold to the touch, even under blankets. Sometimes they&#39;re so cold it&#39;s hard to fall asleep.</p>
                        <p>People tell you to wear socks or turn up the heat. But that&#39;s not the problem. Because even when you&#39;re warm everywhere else, your hands and feet stay cold.</p>
                        <p className="font-bold text-xl text-slate-900 dark:text-white">This isn&#39;t just a circulation issue. It&#39;s a nervous system issue.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why Your Extremities Get Cold</h2>
                        <p>Your body prioritizes keeping your core warm - your heart, lungs, vital organs. When your nervous system perceives a threat (real or not), it redirects blood flow away from your extremities and toward your core.</p>
                        <p>This is a survival mechanism. If your body thinks you&#39;re in danger, it doesn&#39;t care about keeping your fingers warm. It cares about keeping your vital organs functioning.</p>
                        <p>The problem is that your nervous system can get stuck in this mode even when you&#39;re not actually in danger.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">It&#39;s Your Sympathetic Nervous System</h2>
                        <p>When you&#39;re in fight-or-flight mode, your sympathetic nervous system takes over. Blood vessels in your hands and feet constrict. Blood flow gets redirected to your core and major muscle groups (in case you need to fight or run).</p>
                        <p>Your heart rate increases. Your breathing gets shallower. And your extremities get cold.</p>
                        <p>This is supposed to be temporary - a short-term response to immediate danger. But when you&#39;re dealing with chronic stress or anxiety, your nervous system can stay in this state for hours, days, or even longer.</p>
                        <p>That&#39;s when cold hands and feet become a constant problem, not just an occasional thing.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">It&#39;s Not Always About Temperature</h2>
                        <p>You might notice your hands and feet get colder when you&#39;re anxious, stressed, or overwhelmed - even if the room temperature hasn&#39;t changed.</p>
                        <p>That&#39;s because the cold isn&#39;t caused by the environment. It&#39;s caused by your nervous system&#39;s response to perceived stress. Your body is literally prioritizing survival over comfort, even when there&#39;s no actual threat.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What Else Causes Cold Extremities</h2>
                        <p>Cold hands and feet can have other causes too, so it&#39;s worth ruling those out:</p>
                        <ul>
                            <li><strong>Poor circulation:</strong> Conditions like Raynaud&#39;s disease, peripheral artery disease, or diabetes can cause chronically cold extremities.</li>
                            <li><strong>Thyroid issues:</strong> Hypothyroidism can slow your metabolism and make you feel cold all over.</li>
                            <li><strong>Anemia:</strong> Low iron can reduce oxygen delivery to your extremities, making them feel cold.</li>
                            <li><strong>Vitamin deficiencies:</strong> B12 and magnesium can affect circulation and nerve function.</li>
                        </ul>
                        <p>If your hands and feet are always cold and it&#39;s not related to stress or anxiety, see a doctor to rule out these issues. But if your cold extremities get worse when you&#39;re stressed, anxious, or overwhelmed - it&#39;s likely a nervous system issue.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar262.2a.jpg"
                                alt="Body scanning for stress signals"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What It Feels Like</h2>
                        <p>Cold hands and feet aren&#39;t just uncomfortable. They&#39;re a signal that your nervous system is stuck. You might also notice:</p>
                        <ul>
                            <li><strong>Restlessness:</strong> You can&#39;t fully relax, even when you&#39;re sitting still.</li>
                            <li><strong>Trouble sleeping:</strong> Your feet are so cold you can&#39;t get comfortable.</li>
                            <li><strong>Digestive issues:</strong> Blood flow is also redirected away from your digestive system, causing bloating or irregular digestion.</li>
                            <li><strong>Brain fog:</strong> When your body is in survival mode, cognitive function takes a backseat.</li>
                        </ul>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white">How to Warm Up Your Hands and Feet</h2>
                        <p>You can&#39;t force your hands and feet to warm up. But you can help your nervous system shift out of fight-or-flight mode, which allows blood flow to return naturally.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Support Your Nerve Health</h3>
                        <p>Your nervous system relies on healthy nerve function to communicate properly. When nerve signaling is off - whether from chronic stress or deficiencies - your body&#39;s ability to regulate temperature gets disrupted.</p>
                        <p><a href="https://nervovive.com/video.php?affiliate=clickcham-" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Nervovive</a> is designed to support nerve health and communication between your brain and body. When your nerves are functioning well, your body is better able to regulate blood flow to your extremities. Supporting your nerve health directly with <Link className="text-primary hover:underline font-bold" href="#">Nerve Armor</Link> can also help restore those circulation signals.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Lower Your Baseline Stress</h3>
                        <p>If you&#39;re chronically stressed, your sympathetic nervous system is chronically activated. <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium</a> helps regulate your stress response and supports the shift to parasympathetic (rest-and-digest) mode. When your baseline stress is lower, your body doesn&#39;t default to survival mode as easily.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Use Compression to Improve Circulation</h3>
                        <p><Link className="text-primary hover:underline font-bold" href="https://amzn.to/4tGRQ1M">Compression socks</Link> can help improve circulation in your feet and lower legs. They apply gentle pressure that encourages blood flow back toward your heart, reducing the pooling that contributes to cold feet.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar262.2b.jpg"
                                alt="Relaxing with cozy layers and warming tools"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Give Your Body Physical Signals of Safety</h3>
                        <p>To interrupt fight-or-flight, give your body physical cues that you&#39;re safe. A <a href="/articles/best-weighted-blankets-for-anxiety-tested-and-compared" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted blanket</a> provides deep pressure that activates your parasympathetic nervous system. As you shift out of fight-or-flight, blood flow returns and your extremities warm up naturally. Using an <a href="https://amzn.to/4kqM8MU" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">acupressure mat</a> works similarly by forcing your nervous system to focus on physical input.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Move Your Body</h3>
                        <p>Physical movement increases circulation and helps burn off stress hormones. Even a 10-minute walk or gentle stretching signals that you&#39;re not frozen in fear or stuck in survival mode.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Warm Your Core, Not Just Your Extremities</h3>
                        <p>Your body will only send blood to your hands and feet when it feels like your core temperature is safe. A <Link className="text-primary hover:underline font-bold" href="#">heating pad</Link> on your lower back or abdomen can warm your core, signaling that it&#39;s safe to redistribute blood flow.</p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6">Address the Chronic Stress</h2>
                        <p>The real issue is that your nervous system is stuck in a chronic state of activation. address the underlying stress by:</p>
                        <ul>
                            <li>Setting boundaries to prevent overwhelm</li>
                            <li>Taking actual breaks during the day</li>
                            <li>Working on nervous system regulation (breathwork, grounding)</li>
                            <li>Supporting your body with Magnesium and B vitamins</li>
                        </ul>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 font-bold">When to See a Doctor</h2>
                        <p>If your hands and feet turn white, blue, or purple, see a doctor. That could indicate Raynaud&#39;s disease or another medical issue. but if it&#39;s tied to stress, the solution is nervous system regulation.</p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 text-primary uppercase tracking-widest text-sm">Your Body Is Telling You Something</h2>
                        <p>Cold hands and feet aren&#39;t just annoying. They&#39;re a signal. Your nervous system is stuck in fight-or-flight mode. Your body is prioritizing survival over comfort.</p>
                        <p>When you give your body what it needs to feel safe again, blood flow returns. They warm up naturally. And you feel better overall.</p>
                    </div>

                    <ShareSection title="Why Your Hands and Feet Are Always Cold (And What Your Body Is Actually Trying to Tell You)" />
                    <CommentsSection articleId="cold-hands-and-feet" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
