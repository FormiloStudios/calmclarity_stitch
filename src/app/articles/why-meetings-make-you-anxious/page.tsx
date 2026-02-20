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
                            Why Meetings Make You Anxious (Even When You&#39;re Prepared)
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
                                You&#39;ve done the prep work. You know your stuff. You&#39;ve rehearsed what you&#39;re going to say. But the second the meeting starts, your heart is racing.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccfeb263.3.jpg"
                                alt="Person feeling anxious during a virtual meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>Your palms are sweaty. Your voice sounds shaky when you speak.</p>
                        <p>You&#39;re not unprepared. You&#39;re not incompetent. But your body is acting like you&#39;re about to face something dangerous.</p>
                        <p>Meetings - even routine ones - can trigger intense anxiety. And being prepared doesn&#39;t fix it because the anxiety isn&#39;t about knowledge. It&#39;s about how your nervous system responds to being evaluated.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Your Body Treats Performance Like a Threat</h2>
                        <p>When you&#39;re in a meeting, especially if you need to speak or present, your brain registers it as a high-stakes social situation.</p>
                        <p>You&#39;re being watched. Judged. Evaluated.</p>
                        <p>Even if it&#39;s just a casual team check-in, there&#39;s an element of performance. You need to sound competent, engaged, like you know what you&#39;re talking about.</p>
                        <p>Your nervous system picks up on that pressure and interprets it the same way it would interpret any threat: by activating fight-or-flight mode.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccfeb263.3a.jpg"
                                alt="POV of a virtual meeting"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p>Your heart rate increases. Your breathing gets shallow. Blood flow redirects away from your extremities (which is why your hands might feel cold or shaky). Your brain goes into hyperalert mode, scanning for anything that could go wrong.</p>
                        <p>This isn&#39;t a character flaw. It&#39;s biology.</p>
                        <p>From an evolutionary standpoint, being judged by the group mattered. Getting rejected or looking incompetent in front of your tribe could mean losing status, resources, or protection.</p>
                        <p>Your body still responds as if those stakes are real. Even though logically, you know a bad meeting isn&#39;t going to ruin your life.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why Preparation Doesn&#39;t Fix It</h2>
                        <p>You can know your material inside and out. You can have every answer ready. But that doesn&#39;t calm your nervous system.</p>
                        <p>Because the anxiety isn&#39;t about what you know. It&#39;s about how your body responds to being in the spotlight.</p>
                        <p>Some people can walk into a meeting totally unprepared and feel fine. Other people can be the most prepared person in the room and still feel like they&#39;re going to pass out.</p>
                        <p>The difference isn&#39;t competence. It&#39;s nervous system regulation. If your baseline stress is already high, if you&#39;re dealing with chronic anxiety, poor sleep, or constant overwhelm, your nervous system is already running hot. Adding the pressure of a meeting pushes it into overdrive.</p>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white">What Actually Helps</h2>
                        <p>You can&#39;t logic your way out of meeting anxiety. But you can give your body tools to handle it better.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Lower Your Baseline Before the Meeting</h3>
                        <p>If you go into a meeting already stressed, your nervous system has less capacity to handle the additional pressure.</p>
                        <p>Give yourself a buffer. Don&#39;t schedule back-to-back meetings if you can avoid it. Take ten minutes before the meeting to reset.</p>
                        <p>Go for a quick walk. Step outside. Move your body. Physical movement burns off some of that excess adrenaline that builds up when you&#39;re sitting and anticipating something stressful.</p>
                        <p>Do some slow breathing. In for four counts, hold for four, out for six. The longer exhale activates your vagus nerve and tells your body to calm down.</p>
                        <p>If you have a few minutes, splash cold water on your face or press an ice cube to your wrists. The cold interrupts the stress response and gives your nervous system a quick reset. Using an <a href="https://amzn.to/4qunLzs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">ice roller</a> on your neck is even more effective.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Give Your Hands Something to Do</h3>
                        <p>During the meeting, your body is pumping out adrenaline. That energy needs somewhere to go. If you&#39;re sitting still, it just builds. Your hands might shake. Your leg might bounce. You feel restless and wired.</p>
                        <p>A <a href="https://amzn.to/4kogorP" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">fidget ring</a> helps with this. You can quietly spin it while you&#39;re listening or talking, and it gives your anxious energy an outlet. Nobody notices, but it keeps your hands occupied and helps discharge some of that energy.</p>
                        <p>Some people keep a small piece of <a href="https://amzn.to/4chc7Ey" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">therapy putty</a> in their pocket. Squeezing it under the table gives your hands something to do and helps ground you.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccfeb263.3b.jpg"
                                alt="Managing anxiety discreetly"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p>It sounds small, but it makes a difference. Your body has somewhere to put the energy instead of channeling it all into shaking or feeling like you&#39;re going to crawl out of your skin.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Support Your Nervous System Long-Term</h3>
                        <p>If meeting anxiety is a regular thing for you, it helps to support your nervous system consistently, not just in the moment.</p>
                        <p><a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Magnesium</a> regulates your stress response. When you take it regularly, your baseline anxiety tends to decrease. You&#39;re not as easily thrown into fight-or-flight mode by everyday stressors like meetings.</p>
                        <p>It&#39;s not going to make you fearless. But it can take the edge off so your body doesn&#39;t react as intensely.</p>
                        <p>If you need help with focus and mental clarity during meetings — like your brain goes blank when you&#39;re anxious - something like <a href="https://www.advancedbionutritionals.com/DS24/BrainAMP/Brain-Just-Switched-On/HD.htm#aff=Select_partner" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">BrainAMP</a> can help. It supports cognitive function and mental energy without the jittery feeling that comes from just drinking more coffee.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Reframe What&#39;s Happening</h2>
                        <p>When you feel your heart racing or your hands shaking, your brain often interprets it as "I&#39;m about to fail" or "Everyone can tell I&#39;m nervous." But those physical sensations don&#39;t mean you&#39;re doing something wrong. They just mean your nervous system is activated.</p>
                        <p>You can acknowledge it without spiraling. "My heart is racing. That&#39;s adrenaline. My body thinks this is important. That&#39;s okay." Sometimes just naming what&#39;s happening - without judgment - takes some of the power out of it.</p>
                        <p>And honestly? Most people can&#39;t tell you&#39;re anxious unless you tell them. What feels like obvious shaking or a quivering voice usually isn&#39;t noticeable to anyone else. Your internal experience is much more intense than what others perceive.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6 text-primary uppercase tracking-widest text-sm">Exposure and Grace</h2>
                        <p>The more meetings you do, the more your nervous system learns: this isn&#39;t actually dangerous. Exposure helps. Not because you "get over it," but because your body starts recognizing the pattern. Meeting happens, nothing bad happens, meeting ends. Over time, the threat response decreases.</p>
                        <p>But it&#39;s not linear. You might have a great meeting one week and then feel awful the next. That&#39;s normal. Your nervous system isn&#39;t a machine. It responds to your overall stress load, sleep quality, and what else is going on in your life.</p>
                        <p>Don&#39;t beat yourself up if you still feel anxious even after doing meetings for years. Some people just have nervous systems that run more reactive. That doesn&#39;t mean you&#39;re doing it wrong. You don&#39;t have to be perfectly calm to do a good job. You just need tools to manage the physical response so it doesn&#39;t completely derail you.</p>
                        <p>Your nervous system is doing what it thinks it needs to do: protect you from social rejection. It&#39;s outdated biology, but it&#39;s not your fault. You can work with it. Give it what it needs to calm down. And over time, meetings get a little easier.</p>
                    </div>

                    <ShareSection title="Why Meetings Make You Anxious (Even When You're Prepared)" />
                    <CommentsSection articleId="meeting-anxiety" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
