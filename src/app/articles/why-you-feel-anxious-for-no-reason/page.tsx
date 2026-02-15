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
                            Why You Feel Anxious for No Reason (And What Your Body Is Actually Trying to Tell You)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>8 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>February 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-1/2">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic">
                                You know that feeling when your chest gets tight for absolutely no reason? You&#39;re sitting on your couch. Nothing bad is happening. But your body feels like something terrible is about to go down.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/article1.jpg"
                                alt="Person feeling anxious on a couch"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>
                            Maybe you&#39;re checking your phone every two minutes. Or replaying a conversation from three days ago, searching for hidden meaning in every word. Your shoulders have crept up somewhere near your ears without you noticing.
                        </p>

                        <p>
                            Here&#39;s the thing: this isn&#39;t you being dramatic. And you&#39;re not imagining it.
                        </p>

                        <p className="font-bold text-xl text-slate-900 dark:text-white">
                            Your nervous system is stuck in the wrong gear.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What&#39;s Actually Happening in Your Body</h2>
                        <p>
                            Think of your nervous system like it has two different modes it can run in.
                        </p>
                        <p>
                            There&#39;s the <strong>calm mode</strong> - where your breathing is easy, your digestion works, you can think clearly, and relaxing doesn&#39;t feel like a foreign concept.
                        </p>
                        <p>
                            Then there&#39;s <strong>survival mode</strong> - where your body thinks you&#39;re in danger. Stress hormones flood your system. Your muscles tense up. Your brain goes into high alert, scanning for threats.
                        </p>
                        <p>
                            Your body is supposed to move back and forth between these modes throughout the day. Survival mode when you actually need it, then back to calm once the moment passes.
                        </p>
                        <p>But a lot of us get stuck.</p>
                        <p>
                            Our nervous system shifts into survival mode and just... stays there. Even when we&#39;re watching Netflix. Even when we&#39;re trying to fall asleep. Even when there&#39;s literally nothing wrong.
                        </p>
                        <p>
                            So your body keeps acting like you&#39;re being chased, even though you&#39;re just sitting there trying to relax.
                        </p>
                        <p>
                            That&#39;s why it feels like you&#39;re anxious "for no reason." There is a reason - your nervous system just missed the memo that you&#39;re safe.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why This Happens</h2>
                        <p>A few things can throw your nervous system into overdrive and leave it there:</p>
                        <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                            <li>
                                <strong>Chronic low-level stress.</strong> It&#39;s not always the big stuff. Sometimes it&#39;s just the constant hum of work emails, traffic, an overflowing to-do list. Your body never gets a chance to fully downshift because there&#39;s always something.
                            </li>
                            <li>
                                <strong>Not sleeping well.</strong> When you don&#39;t get deep, quality sleep, your nervous system never fully resets. You wake up already halfway into fight-or-flight before your feet even hit the floor.
                            </li>
                            <li>
                                <strong>Gut problems.</strong> Your gut and brain talk to each other constantly through the vagus nerve. When your digestion is off - bloating, irregular bowel movements, that nervous-stomach feeling - it sends stress signals straight up to your brain. That&#39;s why anxiety and stomach issues so often show up together.
                            </li>
                            <li>
                                <strong>Sitting still all day.</strong> Your body is built to burn off stress through movement. When you&#39;re sedentary, those stress hormones just sit in your system with nowhere to go.
                            </li>
                        </ul>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">How to Tell If Your Nervous System Is Stuck</h2>
                        <p>You might not even realize this is happening because it&#39;s become your normal. But here are some signs:</p>
                        <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                            <li>You startle really easily. A door slams and your heart races.</li>
                            <li>You can&#39;t relax without feeling guilty about it, like you&#39;re wasting time.</li>
                            <li>Your mind goes into overdrive the second you try to wind down for the night.</li>
                            <li>You feel irritable for no clear reason.</li>
                            <li>You get tension headaches or wake up with a sore jaw from clenching.</li>
                            <li>Your hands and feet are always cold. (When you're in fight-or-flight, blood flow gets redirected away from your extremities.)</li>
                            <li>You feel exhausted and weirdly wired at the same time.</li>
                        </ul>
                        <p>
                            If more than a couple of these sound familiar, your body is basically telling you: "I don&#39;t feel safe yet."
                        </p>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white">So How Do You Actually Fix This?</h2>
                        <p>Here&#39;s where it gets frustrating.</p>
                        <p>
                            Everyone tells you to "just breathe" or "try meditation." And look, those things can help. But when your nervous system is this stuck, sometimes you need more than that.
                        </p>
                        <p>
                            You need to give your body actual, physical signals that it&#39;s safe. Not just mentally talk yourself down, but physically reset the system.
                        </p>

                        <h3 className="font-display text-3xl font-bold mt-16 mb-6">Start With What Goes Into Your Body</h3>
                        <p>
                            If you&#39;re dealing with constant anxiety, one of the most effective things you can do is support your nervous system from the inside.
                        </p>
                        <p>
                            <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium Breakthrough</a> keeps coming up in research on stress and anxiety for a reason. It helps regulate the fight-or-flight response and supports the shift into "rest and digest" mode. A lot of people are low on it without realizing - especially if they&#39;re under chronic stress.
                        </p>
                        <p>
                            I&#39;m not saying magnesium is some magic cure. But for a lot of people, taking it consistently helps take the edge off that constant buzzing feeling. If you&#39;re going to try it, look for something that includes multiple forms - your body absorbs different types in different ways.
                        </p>
                        <p>
                            Beyond that, some people find that supporting their nerve health directly makes a difference. The better the communication between your brain and body, the less likely your system is to get stuck in panic mode. Products like <a href="https://nervovive.com/video.php?affiliate=clickcham-" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">NervoVive</a> are designed specifically to support those pathways.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg -rotate-1">
                                <Image
                                    src="/val_article3.jpg"
                                    alt="Physical tools for calming"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="font-display text-2xl font-bold mb-4">Physical Proof</h3>
                                <p className="text-sm leading-relaxed text-muted font-light">
                                    You can&#39;t always logic your way out of anxiety. Sometimes you have to give your body physical proof that it's safe before your mind can follow suit.
                                </p>
                            </div>
                        </div>

                        <h3 className="font-display text-3xl font-bold mt-16 mb-6">Give Your Body the Pressure It&#39;s Looking For</h3>
                        <p>
                            Deep pressure tells your nervous system you&#39;re safe. It&#39;s why being hugged feels so calming. It&#39;s why babies stop crying when you swaddle them.
                        </p>
                        <p>
                            A <a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted blanket</a> does the same thing. The gentle, even pressure activates your parasympathetic nervous system - the part that tells your body to relax. This isn&#39;t just psychological. It&#39;s a physical response your body has to deep touch.
                        </p>
                        <p>
                            You can use it while you&#39;re reading, watching TV, or just sitting on the couch trying to decompress. Some people keep one at their desk and drape it over their lap when anxiety spikes during the workday.
                        </p>

                        <h3 className="font-display text-3xl font-bold mt-16 mb-6">Let Your Hands Do Something</h3>
                        <p>
                            When you&#39;re anxious, your hands want to move. You&#39;ve probably noticed - picking at your nails, scrolling your phone over and over, tapping your fingers.
                        </p>
                        <p>Instead of fighting that urge, give it somewhere productive to go.</p>
                        <p>
                            A <a href="https://amzn.to/4kogorP" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">fidget ring</a> is one of the simplest tools for this. You wear it all day, and when you feel that restless energy building, you can quietly spin it. Nobody notices, but it gives your nervous system a small outlet for all that tension.
                        </p>
                        <p>
                            Or keep a piece of <a href="https://amzn.to/4chc7Ey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">therapy putty</a> in your bag or pocket. When you feel yourself starting to spiral, squeezing it for even 30 seconds can help ground you.
                        </p>

                        <h3 className="font-display text-3xl font-bold mt-16 mb-6">Don&#39;t Ignore Your Gut</h3>
                        <p>Remember how I said your gut and brain are constantly talking to each other?</p>
                        <p>
                            If you&#39;re dealing with digestive issues alongside your anxiety - bloating, irregular bathroom habits, feeling nauseous when you&#39;re stressed - that&#39;s a sign your gut-brain connection is off.
                        </p>
                        <p>
                            Fixing your gut health can actually help calm your nervous system. When your gut is working properly, it sends "we&#39;re safe" signals up to your brain. When it&#39;s not, it contributes to that constant feeling of unease.
                        </p>
                        <p>
                            That&#39;s where something like Gut Go or Gut Vita comes in. They&#39;re designed to restore healthy gut function, which supports better communication between your gut and your brain. <span className="text-primary italic">[LINK TO GUT GO]</span> <span className="text-primary italic">[LINK TO GUT VITA]</span>
                        </p>

                        <h3 className="font-display text-3xl font-bold mt-16 mb-6">Try Cold (Yes, Really)</h3>
                        <p>This one sounds weird, but it works.</p>
                        <p>
                            Cold exposure - specifically on your neck or face - can activate your vagus nerve. That&#39;s the main line of communication between your brain and body. When you stimulate it, it sends a signal to your nervous system: "Okay, we can calm down now."
                        </p>
                        <p>
                            An <a href="https://amzn.to/4qunLzs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">ice roller</a> works really well for this. You run it along the sides of your neck for 30 to 60 seconds when you feel anxiety creeping in. The cold interrupts the stress response.
                        </p>
                        <p>
                            Don&#39;t want to buy anything? Splash cold water on your face. Hold an ice cube to your wrists. Same effect.
                        </p>

                        <h3 className="font-display text-3xl font-bold mt-16 mb-6">What If It&#39;s Mostly Social Situations?</h3>
                        <p>
                            If your anxiety spikes specifically around other people - meeting someone new, making small talk, feeling awkward in conversations - that&#39;s your nervous system treating social evaluation as a threat.
                        </p>
                        <p>
                            But your body hasn&#39;t updated its threat assessment for modern life. If this sounds like you, there are methods designed to retrain how your nervous system responds to social situations. <span className="text-primary italic">[LINK TO THE COMPLETE SOCIAL CONFIDENCE SYSTEM]</span>
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Point Isn&#39;t to Never Feel Anxious</h2>
                        <p>
                            Look, some anxiety is normal. It means you care. It means you&#39;re paying attention. The goal isn&#39;t to eliminate it completely. The goal is to stop it from running your entire life.
                        </p>
                        <p>
                            You should be able to sit on your couch without your chest tightening. Go through your day without feeling constantly on edge. Actually relax when you have downtime.
                        </p>
                        <p>
                            That starts with understanding what your body is doing - and then giving it what it needs to shift out of survival mode.
                        </p>
                        <p>
                            Your nervous system isn&#39;t malfunctioning. It&#39;s doing exactly what it was designed to do: protect you. It just needs a little help remembering that right now, you&#39;re okay.
                        </p>
                    </div>

                    <ShareSection title="Why You Feel Anxious for No Reason (And What Your Body Is Actually Trying to Tell You)" />
                    <CommentsSection articleId="anxious-for-no-reason" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
