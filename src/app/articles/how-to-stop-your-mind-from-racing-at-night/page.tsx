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
                            Sleep Science
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            How to Stop Your Mind From Racing at Night (The Nervous System Fix)
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
                                It&#39;s 11 PM. You&#39;re exhausted. You finally get into bed, and the second your head hits the pillow, your brain decides it&#39;s showtime.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/article2.jpg"
                                alt="Exhausted person in bed"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>That conversation from last week? Let&#39;s replay it five more times and analyze every word.</p>
                        <p>That thing you need to do tomorrow? Let&#39;s run through seventeen different scenarios of how it could go wrong.</p>
                        <p>That random embarrassing moment from 2014? Perfect time to revisit that.</p>
                        <p>You lie there, frustrated, because your body is tired. You can feel the exhaustion. But your mind just won&#39;t shut off.</p>
                        <p>Here is what is actually going on and more importantly, how to fix it.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why Your Brain Won&#39;t Shut Off at Night</h2>
                        <p>Your racing thoughts at night aren&#39;t random. They&#39;re a sign that your nervous system hasn&#39;t downshifted.</p>
                        <p>During the day, your body runs in "alert mode" to handle work, decisions, social interactions, everything that requires you to be "on." That&#39;s normal.</p>
                        <p>But at night, your nervous system is supposed to switch gears. It should move from that alert, active state into a calm, restorative state that allows you to sleep.</p>
                        <p>When that switch doesn&#39;t flip, your body might be ready to sleep, but your brain is still running at full speed.</p>

                        <p>A few things cause this:</p>
                        <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                            <li><strong>Your stress hormones are still elevated.</strong> Specifically cortisol. It is supposed to drop at night, but chronic stress keeps it high. So even though you are lying down, your body thinks it is still go-time.</li>
                            <li><strong>You never gave your nervous system a proper wind-down.</strong> You go straight from working, scrolling, answering emails, watching TV, all stimulating activities, to bed. Your brain does not get the signal that it is time to power down.</li>
                            <li><strong>Your gut is sending stress signals.</strong> If your digestion is off, your vagus nerve (the connection between your gut and brain) keeps sending "something is wrong" messages to your brain. Even if you are not consciously aware of it, your brain stays on alert.</li>
                            <li><strong>You are overstimulated from screens.</strong> Blue light from your phone and laptop tells your brain it is still daytime. Your circadian rhythm gets confused, melatonin production drops, and your brain stays wired.</li>
                        </ul>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What It Feels Like</h2>
                        <p>You know you&#39;re dealing with this if:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
                            <li>Your body feels tired, but your mind is wide awake</li>
                            <li>You keep replaying conversations or worrying about tomorrow</li>
                            <li>You finally start to drift off, then a random thought jolts you awake</li>
                            <li>You feel anxious lying in bed even though nothing is actively stressing you out</li>
                            <li>You wake up at 3 or 4 AM with your mind already racing</li>
                        </ul>

                        <blockquote className="border-l-4 border-primary pl-8 my-12 italic text-2xl font-display text-slate-800 dark:text-slate-200">
                            "Your nervous system is stuck in the wrong gear. And no amount of &#39;trying to relax&#39; is going to fix it if you don&#39;t address what&#39;s keeping it there."
                        </blockquote>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white">How to Actually Get Your Brain to Shut Off</h2>
                        <p>Here&#39;s the thing: telling yourself to "stop thinking" doesn&#39;t work. Your brain doesn&#39;t respond to commands like that.</p>
                        <p>You have to give your nervous system physical cues that it&#39;s safe to power down.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Cut Off the Blue Light (Actually Do It)</h3>
                        <p>Everyone says this, but most people don&#39;t actually do it.</p>
                        <p>Blue light from screens suppresses melatonin production. Melatonin is what tells your brain it&#39;s time to sleep. When you&#39;re scrolling your phone in bed, you&#39;re actively working against your own biology.</p>
                        <p>If you can&#39;t give up screens completely, at least get <a href="https://amzn.to/4048DOk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">blue light blocking glasses</a> and wear them starting around 7 or 8 PM. They filter out the wavelengths that mess with your melatonin.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/brewing_article2a.jpg"
                                alt="Blue light blocking glasses"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Support Your Body&#39;s Natural Sleep Chemistry</h3>
                        <p>Your body has its own systems for winding down at night. But chronic stress and poor sleep habits throw them off.</p>
                        <p><a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium</a> plays a huge role in this. It helps regulate your stress response and supports the shift from "alert mode" to "rest mode." A lot of people are deficient without realizing it, especially if they&#39;re under constant stress.</p>
                        <p>Taking magnesium about an hour before bed can help your nervous system actually downshift. Not in a sedative way, it is not going to knock you out. But it helps your body do what it is supposed to do naturally.</p>
                        <p>If racing thoughts are specifically your issue, like, your body is calm but your mind just will not stop, you might want to try something designed for nighttime overthinking. There are formulas like <a href="https://4vitahealth.com/sp/4greatsleep-dg/#aff=Select_partner" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">4GreatSleep</a> that target that specific problem. They are built to quiet the mental chatter without making you groggy the next day.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Give Your Body a Physical Cue That It&#39;s Bedtime</h3>
                        <p>Your nervous system responds to physical signals, not just thoughts.</p>
                        <p>One of the most effective is deep pressure. A <a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted blanket</a> activates your parasympathetic nervous system, the part responsible for "rest and digest." The gentle pressure tells your body: We are safe. We can relax now.</p>
                        <p>Use it while you are winding down, reading, watching something calm, just lying there trying to settle. The weight itself becomes a cue that it is time to power down.</p>
                        <p>Some people also like a <a href="https://amzn.to/4aoFGli" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted sleep mask</a>. It adds that same gentle pressure but specifically to your face and eyes, which can help signal your brain that it is sleep time. Plus, it blocks out any light.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Create Actual Silence (Or At Least Consistent Sound)</h3>
                        <p>If your environment is too quiet, every little noise, a car outside, your partner shifting in bed, the house settling, can jolt your brain back into alert mode.</p>
                        <p>A <a href="https://amzn.to/4kEabIw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">white noise machine</a> solves this. It creates a consistent sound that masks those random noises so your brain does not have to stay on guard.</p>
                        <p>It is not about drowning out sound. It is about giving your brain permission to stop listening for threats.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Address the Gut-Brain Loop</h3>
                        <p>If you&#39;ve noticed that your racing thoughts come with digestive weirdness - bloating, discomfort, that unsettled feeling in your stomach - your gut might be contributing to the problem.</p>
                        <p>Your gut and brain are in constant communication through the vagus nerve. When your gut is off, it sends stress signals to your brain, which keeps your nervous system on alert.</p>
                        <p>Supporting your gut health can actually help calm your mind at night. Something like <a href="https://9d8ab1xas7e8ob80v4ml1q9dle.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">DigestSync</a> is designed specifically to support the vagus nerve and gut-brain connection. When that pathway is working smoothly, your brain gets fewer "something&#39;s wrong" signals.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Make Your Sleep Environment Actually Dark</h3>
                        <p>You&#39;d be surprised how much light sneaks into your room - streetlights, electronics, even the glow from your alarm clock.</p>
                        <p>Your brain registers light, even through your eyelids, and it interferes with melatonin production. <a href="https://amzn.to/4tGRQ1M" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Blackout curtains</a> block all of it. Your room becomes actually dark, which gives your brain a clear signal: it&#39;s nighttime. Sleep is supposed to happen now.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/brewing_article2b.jpg"
                                alt="Blackout curtains"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Build a Wind-Down Routine (And Actually Stick to It)</h2>
                        <p>Your nervous system responds to patterns. When you do the same calming things in the same order every night, your brain starts to recognize: Oh, this is the sleep routine. Time to power down.</p>
                        <p>It doesn&#39;t have to be complicated. Maybe it&#39;s:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li>Put on blue light glasses at 8 PM</li>
                            <li>Turn off overhead lights, use lamps instead</li>
                            <li>Take magnesium with a glass of water</li>
                            <li>Spend 10 minutes under your weighted blanket reading or listening to something calm</li>
                            <li>Get into bed with your weighted sleep mask and white noise machine on</li>
                        </ul>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What If You Wake Up at 3 AM With Your Mind Racing?</h2>
                        <p>This is a specific type of racing thoughts, the middle of the night wake up where your brain immediately goes into overdrive.</p>
                        <p>This is often a cortisol spike. Your stress hormone is supposed to stay low through the night and rise in the morning. But chronic stress throws off that rhythm, so you get a cortisol surge at 3 or 4 AM instead.</p>
                        <p>If this is you, magnesium taken before bed can help.</p>
                        <p>When you do wake up, resist the urge to grab your phone. The blue light will make it worse. Instead, try:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-slate-400">
                            <li>Slow, deep breathing (in for 4 and out for 6)</li>
                            <li>Progressive muscle relaxation (tense and release each muscle group)</li>
                            <li>A body scan meditation (mentally checking in with each part of your body)</li>
                        </ul>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Point Isn&#39;t Perfect Sleep</h2>
                        <p>Look, some nights your mind is just going to race. That&#39;s normal. The goal isn&#39;t to never have racing thoughts again. The goal is to stop them from happening every single night.</p>
                        <p>Because you deserve to lie down at night and actually rest. Not spend two hours mentally rehashing your entire life. Your brain isn&#39;t broken. It&#39;s just doing what it thinks it needs to do to keep you safe.</p>
                        <p>You just have to show it that right now, at 11 PM, lying in bed, you&#39;re not in danger. You&#39;re allowed to power down.</p>
                    </div>

                    <ShareSection title="How to Stop Your Mind From Racing at Night (The Nervous System Fix)" />
                    <CommentsSection articleId="racing-mind-at-night" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
