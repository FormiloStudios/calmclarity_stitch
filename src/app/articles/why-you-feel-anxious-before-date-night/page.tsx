import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";

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
                            Why You Feel Anxious Before Date Night (And How to Actually Enjoy It)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>6 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>February 2026</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] w-full mb-16 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/val_article1.jpg"
                            alt="Couple enjoying a calm date night"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic mb-12">
                            You&#39;ve been looking forward to tonight all week. You picked out what you&#39;re wearing. Made the reservation. You actually want to be there.
                        </p>

                        <p>
                            But now it&#39;s getting close, and suddenly your stomach&#39;s doing flips. Your brain won&#39;t stop throwing out worst-case scenarios. <em>What if we run out of things to talk about? What if I say something weird? What if they notice how nervous I am?</em>
                        </p>

                        <p>
                            You check the mirror one more time, mess with your hair, and realize: you&#39;re not excited anymore. You&#39;re just stressed.
                        </p>

                        <p>
                            If that sounds familiar, here&#39;s what I need you to know: This isn&#39;t you overthinking everything. It&#39;s your body trying to protect you from something that isn&#39;t actually dangerous.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why Date Nights Make You Anxious</h2>
                        <p>Here&#39;s what&#39;s going on under the surface:</p>
                        <p>
                            When you go on a date—especially around Valentine&#39;s Day—there&#39;s this unspoken pressure to be <em>on</em>. Funny. Interesting. Attractive. Present. Whether it&#39;s your first date with someone or your hundredth dinner with your partner, that pressure&#39;s still there.
                        </p>
                        <p>
                            And your nervous system? It picks up on that and goes: "Oh, we&#39;re being evaluated right now. Better make sure we don&#39;t mess this up."
                        </p>
                        <p>So it flips into fight-or-flight mode.</p>
                        <p>
                            Your heart starts racing. Your hands get clammy. Your thoughts won&#39;t stop spinning. Blood flow gets redirected away from your stomach (which is why you might suddenly lose your appetite or feel kind of nauseous).
                        </p>
                        <p>
                            It&#39;s the exact same response your body would have if you were facing an actual threat. Except you&#39;re not running from danger—you&#39;re just trying to enjoy dinner with someone you like.
                        </p>
                        <p>
                            The problem? Your nervous system can&#39;t tell the difference. Social pressure feels like danger to your body. So it reacts accordingly.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Things That Make It Worse</h2>
                        <p>A few habits can crank up the pre-date anxiety even more:</p>
                        <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                            <li>
                                <strong>Scrolling through Instagram beforehand.</strong> Seeing everyone else&#39;s picture-perfect Valentine&#39;s posts makes you feel like your night has to measure up. It adds this layer of comparison on top of nerves you&#39;re already dealing with.
                            </li>
                            <li>
                                <strong>Skipping meals to "save room" for dinner.</strong> When your blood sugar drops, your body starts sending out alarm signals. Low blood sugar feels a lot like anxiety—shaky, jittery, on edge. Your nervous system thinks something&#39;s wrong, even though you&#39;re just hungry.
                            </li>
                            <li>
                                <strong>That extra cup of coffee "for energy."</strong> Look, I get it. But caffeine on top of an already-activated nervous system just amps everything up more.
                            </li>
                            <li>
                                <strong>Sitting still all day.</strong> You&#39;ve got all this adrenaline building up with nowhere to go. When you don&#39;t move your body, that anxious energy just... sits there. Waiting.
                            </li>
                        </ul>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">How to Actually Calm Down Before You Leave</h2>
                        <p>Okay, so your body&#39;s freaking out a little. What do you do about it?</p>
                        <p>
                            The key is this: You have to give your body physical signals that you&#39;re safe. Telling yourself to "just relax" doesn&#39;t work. You need to show your nervous system that everything&#39;s okay.
                        </p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">1. Move Your Body (Even Just a Little)</h3>
                        <p>I know this sounds too simple, but it works.</p>
                        <p>
                            Your body produces adrenaline when it thinks you&#39;re in danger. That adrenaline is supposed to fuel movement—running, fighting, whatever. But you&#39;re just sitting there, so it has nowhere to go.
                        </p>
                        <p>Even 5-10 minutes of movement can help burn it off.</p>
                        <p>
                            Take a quick walk around your block. Do some jumping jacks in your living room. Shake out your arms and legs. Put on a song and dance for three minutes.
                        </p>
                        <p>
                            It doesn&#39;t have to be a whole workout. Just something to get that energy moving through your system instead of sitting in your chest.
                        </p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">2. Give Your Hands Something to Do</h3>
                        <p>
                            Here&#39;s something I&#39;ve noticed: when people are anxious, their hands are busy. Picking at nails. Checking their phone over and over. Tapping on things.
                        </p>
                        <p>Instead of fighting that urge, give it somewhere to go.</p>
                        <p>
                            A fidget ring is perfect for this—you can wear it during the date and quietly spin it whenever you need to. No one notices, but it gives your nervous energy an outlet. <span className="text-primary italic">[LINK TO FIDGET RING]</span>
                        </p>
                        <p>
                            Or keep a small piece of thinking putty in your pocket. Squeezing it for even 30 seconds while you&#39;re waiting at the table can help ground you. <span className="text-primary italic">[LINK TO THINKING PUTTY]</span>
                        </p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">3. Help Your Nervous System From the Inside</h3>
                        <p>
                            If you know date nights tend to spike your anxiety, you can actually prep your body beforehand.
                        </p>
                        <p>
                            Magnesium is one of the most well-researched nutrients for calming your nervous system. It helps dial down the fight-or-flight response and supports your body&#39;s "rest and digest" mode. Taking it about an hour before you leave can take the edge off without making you drowsy. <span className="text-primary italic">[LINK TO MAGNESIUM BREAKTHROUGH]</span>
                        </p>
                        <p>
                            Some people also find that supporting their overall nerve health makes a difference. When the communication between your brain and body is working smoothly, you tend to feel more grounded. That&#39;s what supplements like <span className="text-primary italic">[LINK TO NERVOVIVE]</span> are designed to do—support those pathways so your system doesn&#39;t go into overdrive so easily.
                        </p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">4. Try the Cold Trick</h3>
                        <p>This one&#39;s a little weird, but bear with me.</p>
                        <p>
                            Cold exposure on your neck can actually activate your vagus nerve—which is basically the main line of communication between your brain and your body. When you stimulate it, it sends a signal to your nervous system that says "okay, we can calm down now."
                        </p>
                        <p>
                            If you have an ice roller, run it along the sides of your neck for about 30-60 seconds before you head out. <span className="text-primary italic">[LINK TO ICE ROLLER]</span>
                        </p>
                        <p>
                            Don&#39;t have one? Splash some cold water on your face. Hold an ice cube against your wrists for a few seconds. Same effect—it interrupts the anxiety spiral.
                        </p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">5. Eat Something Small</h3>
                        <p>Don&#39;t show up to the restaurant already feeling shaky and lightheaded.</p>
                        <p>
                            Have a small snack about an hour before—something with protein and a little fat. A handful of almonds. Some cheese. Half an avocado.
                        </p>
                        <p>
                            This keeps your blood sugar stable, which helps keep your nervous system from thinking you&#39;re in crisis mode.
                        </p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What to Do If You Still Feel Anxious During the Date</h2>
                        <p>
                            Even with all the prep, you might still get hit with a wave of nerves once you&#39;re sitting there.
                        </p>
                        <p>Here&#39;s what helps:</p>
                        <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                            <li>
                                <strong>Ground yourself physically.</strong> Press your feet flat on the floor. Feel the chair underneath you. Notice the weight of your body. This brings you out of your head and back into the present moment.
                            </li>
                            <li>
                                <strong>Excuse yourself for a minute if you need to.</strong> Go to the bathroom, splash some cold water on your wrists, take a few slow breaths. Give yourself a 60-second reset. It&#39;s okay to step away.
                            </li>
                            <li>
                                <strong>Shift your focus outward.</strong> Anxiety makes you hyper-aware of yourself—how you look, what you&#39;re saying, whether you&#39;re being awkward. Instead, focus on them. Ask a question. Actually listen to their answer. Notice something about their expression or what they&#39;re saying. It breaks the self-consciousness loop.
                            </li>
                            <li>
                                <strong>Use your fidget tool if you brought one.</strong> Seriously. Spin the ring. Squeeze the putty in your pocket. No one&#39;s going to notice, and it gives your hands something to do besides shake.
                            </li>
                        </ul>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Goal Isn&#39;t to Feel Zero Anxiety</h2>
                        <p>
                            Let&#39;s be real—feeling a little nervous before a date is normal. It means you care. It means this person matters to you.
                        </p>
                        <p>
                            The goal isn&#39;t to eliminate every bit of nervousness. It&#39;s to keep your nervous system from hijacking the whole experience.
                        </p>
                        <p>
                            You should be able to actually enjoy the night. To be present. To laugh without wondering if you laughed weird.
                        </p>
                        <p>
                            And that starts with understanding what&#39;s happening in your body, and giving it what it needs to settle down.
                        </p>
                    </div>
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
