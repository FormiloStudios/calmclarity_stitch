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
                            Relationships
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            Family Gathering Anxiety: Why Holidays and Events Feel So Draining
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
                                The invitation comes. Family dinner. Holiday gathering. Someone&#39;s birthday. You know you should feel excited. Or at least neutral. These are people you care about. It&#39;s just a few hours.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/ccmar263.2.jpg"
                                alt="A person looking nervous before entering a family home"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>But instead, you feel dread. Not because you don&#39;t love your family. Not because you don&#39;t want to see them. But because family gatherings drain you in a way that&#39;s hard to explain to people who don&#39;t experience it.</p>
                        <p>You show up. You smile. You make conversation. You navigate the dynamics, the questions, the expectations, the old patterns that never quite go away. And by the time you leave, you&#39;re completely wiped out. Not just tired - depleted. Like every ounce of energy has been wrung out of you.</p>
                        <p className="font-bold text-xl text-slate-900 dark:text-white">If this is your pattern, you&#39;re not antisocial. You&#39;re not broken. Your nervous system is just processing a lot more than people realize.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Why Family Gatherings Hit Different</h2>
                        <p>Family events aren&#39;t like hanging out with friends or going to a work function. With friends, you choose the relationship. With work, there are clear roles and boundaries. But with family, the history is deep, the expectations are high, and the dynamics are complicated.</p>
                        <p>You&#39;re not just showing up as yourself. You&#39;re showing up as the role you&#39;ve always played in that family system - the responsible one, the peacekeeper, the quiet one, the scapegoat, the golden child. And even if you&#39;ve grown, changed, or worked hard to establish boundaries, family gatherings have a way of pulling you back into old patterns.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">You&#39;re Managing More Than Just Conversation</h2>
                        <p>When you&#39;re at a family gathering, you&#39;re doing a lot of invisible emotional labor. You&#39;re monitoring the room. Reading the mood. Anticipating conflicts. Managing other people&#39;s emotions. Making sure nobody gets upset. Deflecting difficult topics. Keeping the peace.</p>
                        <p>You might not even realize you&#39;re doing it. But your nervous system is. And it&#39;s exhausting.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Old Wounds Get Activated</h2>
                        <p>Family gatherings can bring up old hurts, even when nobody&#39;s doing anything overtly wrong. A comment that sounds innocent to everyone else lands differently for you because of your history with that person.</p>
                        <p>A familiar dynamic - someone dominating the conversation, someone being dismissed, someone making passive-aggressive remarks - triggers old feelings even if you&#39;ve worked through them in therapy. Your adult brain knows it&#39;s not that serious. But your nervous system remembers. And it reacts.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">The Performance Pressure Is Real</h2>
                        <p>There&#39;s an unspoken expectation at family gatherings: Be happy. Be grateful. Be present. Don&#39;t cause problems. Even if your family is relatively healthy, there&#39;s still pressure to show up in a certain way. To not be &quot;too sensitive.&quot; To laugh at jokes that aren&#39;t funny.</p>
                        <p>That constant self-monitoring - Am I being enough? Am I being too much? Am I doing this right? - is mentally and emotionally exhausting. Unlike with friends, where you can leave early, with family, leaving early often comes with judgment or guilt. So you stay longer than you want to, overriding your body&#39;s signals that it needs a break.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar263.2a.jpg"
                                alt="A busy family dinner with many conversations happening at once"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What It Feels Like</h2>
                        <p>Family gathering anxiety doesn&#39;t always look like panic. Sometimes it just looks like:</p>
                        <ul>
                            <li><strong>Exhaustion that lasts for days:</strong> You get home and collapse. The next day, you&#39;re still drained.</li>
                            <li><strong>Physical symptoms:</strong> Headaches, stomach issues, muscle tension, jaw clenching.</li>
                            <li><strong>Difficulty being yourself:</strong> You feel like you&#39;re performing and can&#39;t fully relax or let your guard down.</li>
                            <li><strong>Irritability afterward:</strong> You snap at your partner for no clear reason once you leave.</li>
                            <li><strong>Dread:</strong> You start feeling anxious days before the event happens.</li>
                        </ul>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white">How to Get Through It Without Completely Falling Apart</h2>
                        <p>You can&#39;t avoid family gatherings entirely, but you can manage them in a way that doesn&#39;t wreck you for days.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Set a Time Limit Before You Go</h3>
                        <p>Don&#39;t commit to staying &quot;as long as it takes.&quot; Decide ahead of time: I&#39;m staying for two hours. Or three hours. Having a set exit time gives you something to anchor to. When that time comes, leave. You don&#39;t need an elaborate excuse. &quot;I have to head out&quot; is enough.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Have a Physical Outlet for Nervous Energy</h3>
                        <p>Family gatherings create a lot of restless, anxious energy that has nowhere to go. A <a href="/articles/best-fidget-rings-for-anxiety-tested-and-compared" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">fidget ring</a> gives your hands something to do without being obvious. You can quietly spin it while you&#39;re listening to someone talk. If you have pockets, <a href="https://amzn.to/465CSIr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">therapy putty</a> works too - squeezing it under the table gives your hands an outlet.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Take Breaks</h3>
                        <p>You don&#39;t have to be &quot;on&quot; the entire time. Excuse yourself to the bathroom. Step outside for a few minutes. Offer to help in the kitchen. Even five minutes away from the main group can help your nervous system reset.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/ccmar263.2b.jpg"
                                alt="Taking a moment of quiet away from a crowd"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Don&#39;t Try to Fix or Manage Everyone</h3>
                        <p>This is hard if you&#39;re the person who usually keeps the peace. But you don&#39;t have to manage everyone&#39;s emotions. Let things be uncomfortable. Let other people handle their own feelings. Your job is to get through without depleting yourself.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Support Your Nervous System</h3>
                        <p><strong>Before:</strong> Take <a href="https://a2828zngl4s9kd09v-s2ng3l9p.hop.clickbank.net" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">magnesium</a> an hour or two before you go. It helps regulate your stress response.</p>
                        <p><strong>After:</strong> When you get home, get under a <a href="/articles/best-weighted-blankets-for-anxiety-tested-and-compared" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">weighted blanket</a>. The deep pressure helps signal to your body that the performance is over and you are safe. If you&#39;re too wound up, use an <a href="https://amzn.to/4kqM8MU" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">acupressure mat</a> for 10-15 minutes.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Be Honest With Your Partner or Close Friend</h3>
                        <p>If you&#39;re going with a partner, talk to them beforehand. Let them know these gatherings are hard for you. Having someone who understands makes it easier. If you&#39;re going alone, text a friend before and after. Just knowing someone gets it can help.</p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 font-bold">It&#39;s Okay to Say No Sometimes</h2>
                        <p>Not every gathering is mandatory. If you&#39;re already drained, it&#39;s okay to skip it. You don&#39;t owe anyone an explanation beyond &quot;I can&#39;t make it this time.&quot; Saying no doesn&#39;t make you a bad family member. It makes you someone who knows your limits.</p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 font-bold">When the Issue Is More Than Just Exhaustion</h2>
                        <p>If gatherings leave you feeling triggered or unsafe, that&#39;s a different issue. Some families are toxic. You might need stronger boundaries or to limit contact entirely. That&#39;s not dramatic. That&#39;s self-protection. Therapy can help you figure out what boundaries you need.</p>

                        <h2 className="font-display text-3xl font-bold mt-20 mb-6 text-primary uppercase tracking-widest text-sm">You&#39;re Not Overreacting</h2>
                        <p>Family gatherings are sold as joyful experiences. And for some they are. But for others they are complicated and draining. If you feel exhausted after family events, you are not being dramatic.</p>
                        <p>The goal isn&#39;t to show up perfectly to every event. The goal is to show up in a way that doesn&#39;t completely wreck you. Your nervous system is asking for help. Listen to it.</p>
                    </div>

                    <ShareSection title="Family Gathering Anxiety: Why Holidays and Events Feel So Draining" />
                    <CommentsSection articleId="family-gathering-anxiety" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
