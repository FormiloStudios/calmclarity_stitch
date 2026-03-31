'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ShareSection } from "@/components/ShareSection";
import { CommentsSection } from "@/components/CommentsSection";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export default function ArticlePage() {
    const [authorized, setAuthorized] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('dev_access') === 'true') {
                setAuthorized(true);
            } else {
                router.push('/');
            }
        }
    }, [router]);

    if (!authorized) return <div className="min-h-screen bg-white dark:bg-slate-950" />;

    return (
        <>
            <Nav />
            <main className="pt-32 pb-24 text-slate-900 dark:text-slate-100">
                <article className="max-w-4xl mx-auto px-6 font-sans">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                            Body & Mind
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tighter">
                            Why Your Stomach Gets Upset Before Important Events
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>15 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>Today</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    {/* Image: ccmar214.1.jpg (Header) */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-20 text-slate-700 dark:text-slate-300">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed font-display italic">
                                You have a presentation tomorrow. A job interview. A difficult conversation. An event that matters. And your stomach is already upset.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative w-full rounded-2xl overflow-hidden shadow-2xl rotate-1">
                            <Image
                                src="/ccmar266.2.jpg"
                                alt="Nervous stomach"
                                width={800}
                                height={1000}
                                className="w-full h-auto"
                                unoptimized
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed max-w-none">
                        <p>It might be nausea. Cramping. That tight, knotted feeling. Or the urgent need to run to the bathroom right before you&#39;re supposed to leave. You&#39;re not sick. You didn&#39;t eat anything bad. But your stomach is reacting like you did.</p>
                        <p>This isn&#39;t just nervousness. It&#39;s your gut and your brain communicating in a way that most people don&#39;t understand - and that communication is making you physically ill.</p>

                        <h2 className="font-display text-4xl font-bold mt-16 mb-8 uppercase tracking-tighter">The Gut-Brain Highway Works Both Ways</h2>
                        <p>Your gut and your brain are in constant conversation. They communicate through the vagus nerve - a massive nerve that runs from your brainstem down through your chest and into your abdomen. It&#39;s like a two-way highway: your brain sends signals to your gut, and your gut sends signals back to your brain.</p>
                        <p>When you&#39;re calm, this system works smoothly. Your brain tells your gut to digest food. Your gut tells your brain everything is fine. But when you&#39;re anxious about something important, your brain floods your gut with stress signals. And your gut responds by shutting down normal digestion and triggering physical symptoms.</p>

                        <h2 className="font-display text-4xl font-bold mt-16 mb-8 uppercase tracking-tighter">Your Brain Treats Social Threats Like Physical Danger</h2>
                        <p>Here&#39;s what&#39;s happening: your brain perceives the upcoming event - the presentation, the interview, the conversation - as a threat. Not a rational threat. Not a &quot;this might go badly&quot; threat. A survival-level, &quot;I&#39;m in danger&quot; threat.</p>
                        <p>Your amygdala (the fear center) activates. Stress hormones flood your system. And your body prepares to fight or run. Part of that preparation involves shutting down your digestive system. Because if you&#39;re about to fight a predator, your body doesn&#39;t want to waste energy digesting breakfast. It redirects blood flow away from your gut and toward your muscles and brain.</p>
                        <p>The problem is, there&#39;s no predator. There&#39;s just a meeting. But your body doesn&#39;t know the difference. So your digestion slows or stops. Food sits in your stomach. Acid builds up. Your intestines cramp. And you feel sick.</p>

                        {/* Image: ccmar266.2a.jpg (The Highway) */}
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl my-16 group">
                            <Image
                                src="/ccmar266.2a.jpg"
                                alt="Gut-brain connection"
                                width={1200}
                                height={675}
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                unoptimized
                            />
                        </div>

                        <h2 className="font-display text-4xl font-bold mt-12 mb-4 uppercase tracking-tighter">Your Gut Bacteria Are Listening Too</h2>
                        <p>Your gut contains trillions of bacteria - your microbiome. And these bacteria produce neurotransmitters that affect your mood and anxiety levels. When you&#39;re chronically anxious, your gut bacteria composition shifts. The balance tips toward bacteria that produce more inflammatory compounds and fewer calming neurotransmitters like serotonin.</p>
                        <p>That means anxiety doesn&#39;t just affect your gut in the moment. Over time, it changes the bacterial ecosystem in your gut, which then feeds back and makes you more anxious. It&#39;s a loop. Your brain stresses your gut. Your gut microbiome shifts. The shifted microbiome sends signals back to your brain that increase anxiety. Which stresses your gut more. And events - presentations, interviews, social situations - trigger this loop intensely and suddenly.</p>

                        <h2 className="font-display text-2xl font-bold mt-16 mb-8 uppercase tracking-tighter italic">What It Actually Feels Like</h2>
                        <p>Gut-brain anxiety doesn&#39;t show up the same way for everyone. But common patterns include:</p>
                        <ul className="space-y-6 list-none pl-0">
                            <li className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <strong>Nausea that won&#39;t go away.</strong> You feel sick to your stomach, but you&#39;re not going to vomit. It&#39;s just constant, low-level nausea that makes it hard to eat or focus.
                            </li>
                            <li className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <strong>Urgent bathroom trips.</strong> Your bowels react to stress by speeding up or cramping. You need to go to the bathroom multiple times before the event, or you&#39;re worried you&#39;ll need to go during it.
                            </li>
                            <li className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <strong>Loss of appetite.</strong> You know you should eat, but the thought of food makes you feel worse. Your stomach feels too tight to hold anything.
                            </li>
                            <li className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <strong>Acid reflux or heartburn.</strong> Stress increases stomach acid production, and when digestion slows, that acid has nowhere to go. It backs up into your esophagus, causing burning.
                            </li>
                            <li className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                <strong>Bloating and cramping.</strong> Your intestines tighten and spasm. You feel swollen, uncomfortable, and trapped in your own body.
                            </li>
                        </ul>
                        <p>If this happens every time you have something important coming up, your gut-brain connection is hypersensitive. And it needs support.</p>

                        <hr className="my-16 opacity-10" />

                        <h2 className="font-display text-4xl font-bold mt-16 mb-8 uppercase tracking-tighter">What Actually Helps</h2>
                        <p>You can&#39;t eliminate the stress of important events. But you can support your gut-brain connection so it doesn&#39;t spiral into physical illness.</p>
                        
                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Use Belly Breathing to Calm the Vagus Nerve</h3>
                        <p>The vagus nerve is the communication line between your brain and your gut. When you&#39;re anxious, that nerve is sending panic signals downward. You can interrupt that signal with diaphragmatic breathing.</p>
                        <p>Sit or lie down. Place one hand on your chest and one on your belly. Breathe in slowly through your nose for a count of four, letting your belly rise (not your chest). Hold for a count of four. Breathe out slowly through your mouth for a count of six.</p>
                        <p>The exhale is key. A longer exhale activates the parasympathetic nervous system, which tells your vagus nerve to send &quot;calm down&quot; signals to your gut instead of &quot;panic&quot; signals. Do this for five minutes before the event. Your stomach won&#39;t magically feel perfect, but the cramping and nausea will ease because you&#39;ve manually shifted your nervous system out of fight-or-flight mode.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Support Your Gut-Brain Microbiome Balance</h3>
                        <p>If you&#39;re dealing with pre-event stomach upset regularly, your gut microbiome is probably out of balance. A probiotic designed specifically for the gut-brain-mood connection can help. Garden of Life&#39;s Mood+ Probiotics includes 50 billion CFU of beneficial bacteria, plus ashwagandha - an adaptogen that helps your body manage stress. The probiotic strains in this formula have been clinically studied for their ability to support mood and relaxation while also improving digestive health.</p>
                        <p>This isn&#39;t a quick fix for today&#39;s event. But taken consistently, it helps rebalance your gut microbiome so your gut-brain axis isn&#39;t so reactive. Over time, your stomach stops treating every important event like an emergency.</p>

                        {/* Image: ccmar266.2b.jpg (Relief) */}
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl my-16 group">
                            <Image
                                src="/ccmar266.2b.jpg"
                                alt="Gut health relief"
                                width={1200}
                                height={675}
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                unoptimized
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Calm Immediate Nausea With Peppermint</h3>
                        <p>If you&#39;re dealing with active nausea or cramping right now, peppermint oil can help. Peppermint relaxes the smooth muscles in your digestive tract. It eases cramping, reduces nausea, and helps food move through your system instead of sitting heavily in your stomach.</p>
                        <p>Mason Natural Peppermint Oil capsules are enteric-coated, which means they don&#39;t dissolve in your stomach - they dissolve in your intestines, where they&#39;re most effective. Take one capsule 30-60 minutes before the event. If capsules feel like too much when you&#39;re already nauseous, brew a cup of peppermint or chamomile tea instead. Chamomile has a similar calming effect on the gut and also helps reduce overall anxiety. Sip it slowly while you&#39;re getting ready.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Address the Underlying Gut Dysfunction</h3>
                        <p>If your stomach reacts this intensely to stress, there&#39;s usually an underlying issue beyond just anxiety. Your gut might be inflamed. Your digestive enzymes might be depleted. Your gut lining might be compromised from months or years of chronic stress.</p>
                        <p>Gut Vita is a comprehensive gut support formula designed to address all three issues. It works in three steps: clearing waste buildup that&#39;s causing sluggishness, nourishing the muscles of your digestive tract to restore normal rhythm, and reinforcing your microbiome with live probiotic strains. It&#39;s not a same-day solution. But if you&#39;re tired of your stomach sabotaging you before every important event, this is the kind of foundational support that helps your gut-brain connection stop being so reactive.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Lower Your Baseline Nervous System Activation</h3>
                        <p>Here&#39;s the thing: if your nervous system is already running hot, even small stressors feel huge. An event that should register as &quot;mildly stressful&quot; gets amplified into &quot;full-body panic,&quot; and your gut responds accordingly.</p>
                        <p>Magnesium helps regulate your stress response at the baseline level. When you take it consistently, your nervous system doesn&#39;t spike as easily. Events still feel important, but your body doesn&#39;t interpret them as life-threatening. That means your gut-brain signals stay proportional to the actual stress level instead of overreacting.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Rebuild Your Gut Over Time</h3>
                        <p>If this has been going on for months or years, your gut needs more than just probiotics. DigestSync is designed to support long-term gut healing. It works on the gut lining, digestion, and microbiome balance simultaneously - addressing the root dysfunction that makes your gut so reactive to stress. Think of it as rebuilding the infrastructure. Probiotics repopulate the bacteria. But if the environment is still damaged, the bacteria can&#39;t thrive. DigestSync repairs the environment so the beneficial bacteria can actually do their job.</p>

                        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-[3.5rem] px-12 border border-slate-100 dark:border-slate-800 shadow-xl max-w-4xl mx-auto my-32">
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter italic leading-none">It&#39;s Not Just &quot;Nerves&quot;</h2>
                            <p className="opacity-70 leading-relaxed font-light mb-8 italic">People will tell you it&#39;s just nerves. That you need to relax. That everyone gets a little nervous before important things. But what you&#39;re experiencing isn&#39;t normal nervousness. It&#39;s a gut-brain connection that&#39;s stuck in overdrive, treating every stressful event like a survival threat.</p>
                            <p className="text-2xl font-bold uppercase tracking-tighter leading-tight italic">You&#39;re not broken. Your gut and brain are just communicating too intensely, and that communication is making you physically sick. With the right support - breathing techniques, microbiome rebalancing, gut healing - you can calm that connection.</p>
                            <p className="mt-8 text-3xl font-display font-bold uppercase tracking-tighter italic">Events will still feel important. But your stomach won&#39;t sabotage you every time something matters. You&#39;ll just... show up. And do the thing. Without your gut betraying you first.</p>
                        </div>
                    </div>

                    <ShareSection title="Why Your Stomach Gets Upset Before Important Events" />
                    <CommentsSection articleId="stomach-upset-anxiety" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
