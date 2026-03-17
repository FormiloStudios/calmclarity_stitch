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
                            How Nerve Health Affects Anxiety (And What Actually Helps)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>8 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                You feel anxious, but it&#39;s not just in your head. Your hands tingle. Your feet go numb. You get shooting pains in your legs or arms that seem to come out of nowhere.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/clean_ccmar264.2.png"
                                alt="Abstract representation of glowing nerve endings"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>You&#39;ve been to the doctor. They run tests. Everything comes back &quot;normal.&quot; But you don&#39;t feel normal. What if I told you that your anxiety and your physical symptoms aren&#39;t separate problems?</p>
                        <p>What if they&#39;re both coming from the same place: your nervous system. Specifically, your nerve health.</p>
                        <p className="font-bold text-slate-900 dark:text-white">When your nerves aren&#39;t functioning properly - whether from stress, nutrient deficiencies, inflammation, or other factors - it doesn&#39;t just cause physical symptoms. It affects your mood, your anxiety levels, and your ability to regulate stress.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What Nerve Health Actually Means</h2>
                        <p>Your nervous system has two main parts: The central nervous system (your brain and spinal cord) processes information and sends commands. The peripheral nervous system (the nerves throughout your body) carries those signals to and from your muscles, organs, and skin.</p>
                        <p>When we talk about &quot;nerve health,&quot; we&#39;re usually referring to the peripheral nervous system - the network of nerves that runs through your entire body.</p>
                        <ul className="mb-8">
                            <li>Send sensory information to your brain (touch, temperature, pain)</li>
                            <li>Control your muscles (movement, coordination)</li>
                            <li>Regulate automatic functions (heart rate, digestion, breathing)</li>
                        </ul>
                        <p>When these nerves are healthy, communication flows smoothly. Your body responds appropriately to stress. Your muscles work properly. You feel sensations accurately. But when nerve function is compromised, the signals get distorted. And that&#39;s when things start to go wrong.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">How Damaged Nerves Create Anxiety</h2>
                        <p>Nerve damage or dysfunction doesn&#39;t just cause physical symptoms like tingling or numbness. It directly affects your anxiety levels.</p>
                        
                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Nerves Send False Alarm Signals</h3>
                        <p>When nerves aren&#39;t functioning properly, they can send incorrect signals to your brain. Your brain might receive messages that something is wrong - pain, danger, discomfort - even when there&#39;s no actual threat.</p>
                        <p>This keeps your nervous system in a heightened state of alert. You feel anxious, on edge, or panicked, and you don&#39;t know why. It&#39;s not &quot;all in your head.&quot; Your brain is literally receiving faulty danger signals from damaged or dysfunctional nerves.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar264.2a.jpg"
                                alt="Person looking peaceful, representing a calm nervous system"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">The Vagus Nerve Connection</h3>
                        <p>Your vagus nerve is the longest nerve in your body. It runs from your brainstem down through your neck, chest, and into your abdomen.</p>
                        <p>This nerve is responsible for activating your parasympathetic nervous system - the part that calms you down after stress. When your vagus nerve isn&#39;t functioning well, your body has a harder time shifting out of fight-or-flight mode. You stay anxious longer. You can&#39;t calm down as easily.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Chronic Pain Creates Chronic Stress</h3>
                        <p>Nerve pain or dysfunction often leads to chronic discomfort. And chronic pain puts your nervous system under constant stress. When you&#39;re in pain - even low-level, nagging pain - your body produces stress hormones. Your nervous system stays activated. Over time, this chronic activation wears you down.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What Causes Nerve Dysfunction</h2>
                        <ul className="mb-8">
                            <li><strong>Chronic stress.</strong> Long-term stress depletes the nutrients your nerves need and increases inflammation, which damages nerve tissue.</li>
                            <li><strong>Nutrient deficiencies.</strong> Your nerves need specific vitamins and minerals to function. Without them, nerve health deteriorates.</li>
                            <li><strong>Inflammation.</strong> Inflammatory conditions damage the protective coating around nerves (called myelin).</li>
                            <li><strong>Blood sugar issues.</strong> High blood sugar damages small blood vessels that feed your nerves.</li>
                        </ul>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white text-center">How to Actually Support Your Nerve Health</h2>
                        <p>You can&#39;t reverse severe nerve damage overnight. But you can support your nerves so they function better and stop sending false alarm signals to your brain.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Support Nerve Health From the Inside</h3>
                        <p>Your nerves need specific nutrients to repair and function properly. When you&#39;re deficient in these nutrients, nerve function suffers.</p>
                        <p>Nervovive is designed specifically to support nerve health. It contains nutrients that help repair nerve tissue, reduce inflammation, and improve nerve signaling. When your nerves are functioning better, your body sends clearer signals. <a href="https://hop.clickbank.net/?affiliate=clickcham&vendor=nervovive&cbpage=tsl&affop=1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try Nervovive to repair tissues →</a></p>
                        <p>Nerve Armor works similarly. It supports the peripheral nervous system and helps protect nerves from oxidative stress and inflammation. When your nerves are less inflamed, they communicate more accurately with your brain. <a href="https://52e676x9iel9o97fpgy0jmog6x.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try Nerve Armor for protection →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Give Your Nerves the Building Blocks They Need</h3>
                        <p>Your nerves rely on specific vitamins and antioxidants to stay healthy and repair damage.</p>
                        <p>Alpha Lipoic Acid is a powerful antioxidant that protects nerves from oxidative stress and helps regenerate damaged nerve tissue. Studies show that Alpha Lipoic Acid can improve nerve function, reduce nerve pain, and support overall nervous system health. <a href="https://amzn.to/4sINfuC" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Get Nutricost Alpha Lipoic Acid →</a></p>
                        <p>B vitamins - especially B12, B6, and folate - are essential for nerve health. They help build and repair the myelin sheath. A high-quality B-complex like Pure Encapsulations provides methylated B vitamins, which are better absorbed and more effective. <a href="https://amzn.to/4b4Ywzm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try Pure Encapsulations B-Complex →</a></p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/clean_ccmar264.2b.png"
                                alt="Supplements and a TENS unit for nerve recovery"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Stimulate Nerve Function Directly</h3>
                        <p>Sometimes your nerves need physical stimulation to function better.</p>
                        <p>A TENS unit (Transcutaneous Electrical Nerve Stimulation) sends gentle electrical pulses through your skin to stimulate nerves. This can help reduce pain, improve nerve signaling, and calm an overactive nervous system. The TENS 7000 is one of the most trusted units available. <a href="https://amzn.to/4lrXJfq" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try the TENS 7000 Unit →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Lower Inflammation That Damages Nerves</h3>
                        <p>Chronic inflammation is one of the biggest contributors to nerve damage and dysfunction. Magnesium helps regulate inflammation and supports nerve function. Taking magnesium consistently can help reduce the inflammation that damages nerves. <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try Magnesium Breakthrough →</a></p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 text-primary tracking-widest text-sm uppercase text-center">Your Nerves and Your Anxiety Are Connected</h2>
                        <p>Anxiety isn&#39;t always just a mental health issue. Sometimes it&#39;s a nervous system issue. And when your nerves aren&#39;t functioning properly, your brain receives distorted signals that keep you in a constant state of alarm.</p>
                        <p>Supporting your nerve health doesn&#39;t just reduce physical symptoms. It helps your nervous system communicate more clearly, which means less false anxiety and better stress regulation. Your nerves have been sending your brain faulty danger signals. It&#39;s time to give them what they need to function properly again.</p>
                    </div>

                    <ShareSection title="How Nerve Health Affects Anxiety (And What Actually Helps)" />
                    <CommentsSection articleId="nerve-health" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
