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
                            Neurology
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            Why Your Stomach Gets Upset Before Important Events (The Gut-Brain Anxiety Connection)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>9 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                You have a presentation tomorrow. A job interview. A difficult conversation. An event that matters. And your stomach is already upset.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccmar266.2.jpg"
                                alt="Abstract representation of the gut-brain connection"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>It might be nausea. Cramping. That tight, knotted feeling. Or the urgent need to run to the bathroom right before you&#39;re supposed to leave.</p>
                        <p>You&#39;re not sick. You didn&#39;t eat anything bad. But your stomach is reacting like you did.</p>
                        <p className="font-bold text-slate-900 dark:text-white">This isn&#39;t just nervousness. It&#39;s your gut and your brain communicating in a way that most people don&#39;t understand - and that communication is making you physically ill.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Gut-Brain Highway Works Both Ways</h2>
                        <p>Your gut and your brain are in constant conversation. They communicate through the <strong>vagus nerve</strong> - a massive nerve that runs from your brainstem down through your chest and into your abdomen. It&#39;s like a two-way highway: your brain sends signals to your gut, and your gut sends signals back to your brain.</p>
                        <p>When you&#39;re calm, this system works smoothly. Your brain tells your gut to digest food. Your gut tells your brain everything is fine.</p>
                        <p>But when you&#39;re anxious about something important, your brain floods your gut with stress signals. And your gut responds by shutting down normal digestion and triggering physical symptoms.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Your Brain Treats Social Threats Like Physical Danger</h2>
                        <p>Your brain perceives the upcoming event - the presentation, the interview, the conversation - as a threat. Not a rational threat or a &quot;this might go badly&quot; threat, but a survival-level, &quot;I&#39;m in danger&quot; threat.</p>
                        <p>Your amygdala (the fear center) activates. Stress hormones flood your system. And your body prepares to fight or run. Part of that preparation involves shutting down your digestive system. Because if you&#39;re about to fight a predator, your body doesn&#39;t want to waste energy digesting breakfast. It redirects blood flow away from your gut and toward your muscles and brain.</p>
                        <p>The problem is, there&#39;s no predator. There&#39;s just a meeting. But your body doesn&#39;t know the difference. So your digestion slows or stops. Your intestines cramp. And you feel sick.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar266.2a.jpg"
                                alt="Person looking peaceful, representing a calm gut-brain connection"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Your Gut Bacteria Are Listening Too</h2>
                        <p>Your gut contains trillions of bacteria - your microbiome. And these bacteria produce neurotransmitters that affect your mood and anxiety levels.</p>
                        <p>When you&#39;re chronically anxious, your gut bacteria composition shifts. The balance tips toward bacteria that produce more inflammatory compounds and fewer calming neurotransmitters like serotonin. That means anxiety doesn&#39;t just affect your gut in the moment. Over time, it changes the bacterial ecosystem, which then feeds back and makes you more anxious.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What It Actually Feels Like</h2>
                        <ul className="mb-8">
                            <li><strong>Nausea that won&#39;t go away.</strong> You feel sick to your stomach, but you&#39;re not going to vomit. Just constant, low-level nausea.</li>
                            <li><strong>Urgent bathroom trips.</strong> Your bowels react to stress by speeding up or cramping.</li>
                            <li><strong>Loss of appetite.</strong> Your stomach feels too tight to hold anything.</li>
                            <li><strong>Acid reflux or heartburn.</strong> Stress increases stomach acid production.</li>
                            <li><strong>Bloating and cramping.</strong> Your intestines tighten and spasm.</li>
                        </ul>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white text-center">What Actually Helps</h2>
                        <p>You can&#39;t eliminate the stress of important events, but you can support your gut-brain connection so it doesn&#39;t spiral into physical illness.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Use Belly Breathing to Calm the Vagus Nerve</h3>
                        <p>You can interrupt panic signals with diaphragmatic breathing. Inhale slowly for four counts, letting your belly rise. Hold for four. Breathe out for six. A longer exhale activates the parasympathetic nervous system, telling your vagus nerve to send &quot;calm down&quot; signals to your gut.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Support Your Gut-Brain Microbiome Balance</h3>
                        <p>A probiotic designed specifically for the gut-brain-mood connection can help. Garden of Life&#39;s Mood+ Probiotics includes 50 billion CFU of beneficial bacteria, plus ashwagandha. Over time, this helps rebalance your microbiome so your gut-brain axis isn&#39;t so reactive. <a href="https://amzn.to/3OInX7s" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try Mood+ Probiotics on Amazon →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Calm Immediate Nausea With Peppermint</h3>
                        <p>Peppermint relaxes the smooth muscles in your digestive tract. Mason Natural Peppermint Oil capsules dissolve in your intestines, where they&#39;re most effective. Take one 30-60 minutes before the event. <a href="https://amzn.to/3qjFclm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try Peppermint Oil Capsules →</a></p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar266.2b.jpg"
                                alt="Calming tea and natural supplements for gut health"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Address Underlying Gut Dysfunction</h3>
                        <p>If your stomach reacts this intensely to stress, there&#39;s usually an underlying issue like inflammation or depleted enzymes. Gut Vita is a comprehensive formula designed to clear sluggishness and reinforce your microbiome. <a href="https://a86847mdsct5id3-p8n07p9p5l.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try Gut Vita for foundational support →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Lower Your Baseline Nervous System Activation</h3>
                        <p>If your nervous system is already running hot, even small stressors feel huge. Magnesium helps regulate your stress response at the baseline level so events don&#39;t feel as life-threatening to your body. <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Try Magnesium Breakthrough →</a></p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 text-primary tracking-widest text-sm uppercase text-center">It&#39;s Not Just &quot;Nerves&quot;</h2>
                        <p>Your gut and brain are just communicating too intensely. With the right support - breathing techniques, microbiome rebalancing, gut healing - you can calm that connection. Your gut-brain axis can learn to respond proportionally again, so you can just show up and do the thing without your gut betraying you first.</p>
                    </div>

                    <ShareSection title="Why Your Stomach Gets Upset Before Important Events (The Gut-Brain Anxiety Connection)" />
                    <CommentsSection articleId="gut-brain-anxiety" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
