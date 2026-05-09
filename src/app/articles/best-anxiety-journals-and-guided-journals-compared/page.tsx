'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ShareSection } from "@/components/ShareSection";
import { CommentsSection } from "@/components/CommentsSection";

export default function ArticlePage() {
    return (
        <>
            <ScrollObserver />
            <Nav />

            <main className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-24 text-slate-900 dark:text-slate-100">
                <article className="max-w-screen-xl mx-auto px-6 font-sans">
                    {/* Header */}
                    <header className="max-w-4xl mx-auto text-center mb-16">
                        <div className="flex justify-center mb-8 text-xs font-bold tracking-[0.2em] uppercase text-primary">
                            Psychology and Tools
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tighter">
                            Best Anxiety Journals & Guided Journals (2026): Find the Right One for You
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400 font-light">
                            <span>15 Min Read</span>
                            <span className="w-1 h-1 bg-current rounded-full"></span>
                            <span>April 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    {/* Hero Image */}
                    <div className="relative w-full mb-16 rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                        <img src="/bajc_a.jpg" alt="Best Anxiety Journals" className="w-full h-auto block" />
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed max-w-none">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-display italic mb-12 leading-relaxed">
                                Most anxiety management tools work on your body. Weighted blankets apply pressure. White noise machines calm your nervous system through sound. Acupressure mats release physical tension. They&#39;re all passive - you use them and they do their work. <Link href="/articles/best-weighted-blankets-for-anxiety-tested-and-compared" className="text-primary hover:underline font-medium underline-offset-4">Best Weighted Blankets for Anxiety and Sleep</Link>
                            </p>

                            <p>Journals are different. They&#39;re an active practice, and that&#39;s precisely what makes them valuable in a way no physical tool can replicate. Writing about anxiety externalizes it - moves it from the swirling, overwhelming inside of your head onto a page where you can see it, examine it, and respond to it with some distance. The thoughts that feel enormous and all-consuming when they&#39;re inside you often look smaller and more manageable when they&#39;re written down in front of you.</p>

                            <div className="my-16 flex justify-center">
                                <img src="/bajc_b.jpg" alt="Journaling practice" className="w-full max-w-4xl h-auto rounded-2xl shadow-xl" />
                            </div>

                            <p>The challenge is that Amazon is full of journals, most of which look similar and claim to do the same thing. The real differences - between a gratitude journal and a CBT workbook, between a 12-week structure and a yearlong commitment, between a journal written by a psychologist and one written by a lifestyle blogger - matter enormously for whether you&#39;ll actually use it and whether it&#39;ll help with your specific type of anxiety.</p>

                            <p>Seven genuinely different journals are covered here, each approaching anxiety from a different angle, so you can choose based on how your anxiety actually works - not just which cover looks nicest.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 uppercase italic tracking-tighter">Does Journaling Actually Help with Anxiety?</h2>
                            
                            <p>Yes - and the research behind it is stronger than for many popular anxiety interventions.</p>

                            <p>The foundational research comes from psychologist James Pennebaker, whose decades of work on expressive writing established that writing about difficult emotional experiences produces measurable improvements in psychological and physical health. Participants who wrote about traumatic or stressful events for 15-20 minutes over several days showed lower anxiety levels, improved mood, and even improved immune function compared to control groups. The mechanism: writing forces you to construct a coherent narrative around your experience, which engages your prefrontal cortex - the rational, problem-solving part of your brain - and reduces the dominance of the amygdala, the threat-detection center that anxiety keeps in a state of constant activation. This is the same dynamic at the heart of nervous system regulation: when the prefrontal cortex comes online, the fight-or-flight response dials down. <Link href="/articles/what-the-vagus-nerve-actually-does" className="text-primary hover:underline font-medium underline-offset-4">What the Vagus Nerve Actually Does</Link></p>

                            <p>Gratitude journaling has its own strong evidence base. A 2003 study by Emmons and McCullough found that people who wrote weekly about things they were grateful for reported higher well-being and lower anxiety compared to those who wrote about daily hassles or neutral events. Gratitude practice works for anxiety specifically because it redirects attention from future-focused worry (what might go wrong) to present-focused appreciation (what is already good) - directly counteracting anxiety&#39;s core cognitive pattern.</p>

                            <p>CBT-based journaling - the thought records and cognitive restructuring exercises in journals like Worry for Nothing and Goodbye Anxiety - has the most clinical support of any journaling approach. Cognitive Behavioral Therapy is the gold-standard treatment for anxiety disorders, and the journaling component of CBT produces measurable changes in anxiety when practiced consistently.</p>

                            <p>One honest note: journaling works best as a complement to other anxiety management strategies, not as a standalone treatment for clinical anxiety. If your anxiety significantly interferes with daily functioning, journaling is a valuable tool - but professional support matters more.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 uppercase italic tracking-tighter">The 5 Types of Anxiety Journals</h2>

                            <p>Knowing which type of journal matches how your anxiety actually works matters more here than in almost any other product category. Buying the wrong type isn&#39;t just a waste of money - it actively puts you off journaling because you&#39;re using an approach that doesn&#39;t fit.</p>
                            
                            <ul className="space-y-4">
                                <li><strong>Daily guided journals</strong> provide short, structured prompts for morning and evening use - typically 5-10 minutes. They build a consistent daily habit without overwhelming you. Best for people who want to start a journaling practice and need low-pressure, achievable structure. The Five Minute Journal is the best example.</li>
                                <li><strong>CBT-based journals and workbooks</strong> use cognitive behavioral therapy techniques - thought records, evidence examination, cognitive restructuring - to identify and challenge anxious thought patterns. They require more time and engagement per session but deliver more clinical depth. Best for people who want to understand and actively change their anxiety patterns rather than just manage them day to day.</li>
                                <li><strong>Gratitude and mindfulness journals</strong> redirect attention from worry toward appreciation and present-moment awareness. They don&#39;t directly address anxiety - they shift the cognitive focus that feeds it. Gentler approach, lower pressure, better for mild anxiety or as a complement to other strategies.</li>
                                <li><strong>Structured program journals</strong> provide a defined timeline - 12 weeks, 52 weeks - with a progression of exercises and themes. Best for people who want accountability and measurable progress over time rather than open-ended daily practice.</li>
                                <li><strong>Creative and reflective journals</strong> use diverse prompts - drawing, movement, imaginative exercises alongside writing - for people who find traditional journaling dry or who resist purely written formats. Put Your Worries Here is the best example on this list.</li>
                            </ul>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 uppercase italic tracking-tighter">How to Actually Use a Guided Journal</h2>

                            <p>More important than which journal you pick is what consistent use actually looks like.</p>
                            
                            <ul className="space-y-4">
                                <li><strong>Morning vs evening.</strong> Morning journaling sets an intentional tone for the day and works best for gratitude and goal-setting styles. Evening journaling processes the day&#39;s experiences and is better for anxiety that peaks at bedtime or shows up as racing thoughts at night. Many journals use both. Choose based on when your anxiety is worst. <Link href="/articles/how-to-stop-your-mind-from-racing-at-night" className="text-primary hover:underline font-medium underline-offset-4">How to Stop Your Mind From Racing at Night</Link></li>
                                <li><strong>Time commitment matters.</strong> Five minutes daily is achievable for almost everyone and produces results if done consistently. Thirty minutes of CBT worksheets three times a week requires more activation energy but delivers deeper work. Be honest with yourself about what you&#39;ll actually do rather than what you aspire to do. Starting with five minutes and building is always better than starting with thirty and quitting.</li>
                                <li><strong>What to do when you miss days.</strong> Missing days is normal and not a reason to quit. What matters is returning quickly. A useful rule: never miss two days in a row. One missed day is an accident. Two starts to become quitting.</li>
                                <li><strong>Writing style.</strong> There is no wrong way to journal. Bullet points, incomplete sentences, illegible handwriting - none of it matters. The benefit comes from putting thoughts into words and examining them, not from the quality of the writing. If you feel pressure to write well, it&#39;ll prevent you from writing honestly, which defeats the purpose.</li>
                                <li><strong>Privacy.</strong> Some people find it harder to write honestly if they&#39;re worried about someone reading their journal. Choose a journal with a discreet cover (Worry for Nothing specifically addresses this) or keep it somewhere private. The more honest you are, the more useful it becomes.</li>
                            </ul>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 uppercase italic tracking-tighter text-center">Quick Comparison Table</h2>
                            <div className="overflow-x-auto my-12 not-prose border border-slate-100 dark:border-slate-800 rounded-2xl">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                                        <tr className="text-[0.65rem] uppercase tracking-widest text-slate-500 font-bold">
                                            <th className="p-4">Journal</th>
                                            <th className="p-4">Type</th>
                                            <th className="p-4">Structure</th>
                                            <th className="p-4">Best For</th>
                                            <th className="p-4">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr className="border-b border-slate-50 dark:border-slate-900">
                                            <td className="p-4 font-medium">Five Minute Journal</td>
                                            <td className="p-4">Daily Gratitude</td>
                                            <td className="p-4">Morning + Evening daily</td>
                                            <td className="p-4">Beginners, daily habit building</td>
                                            <td className="p-4 font-bold text-primary">$25</td>
                                        </tr>
                                        <tr className="border-b border-slate-50 dark:border-slate-900">
                                            <td className="p-4 font-medium">No Worries</td>
                                            <td className="p-4">Daily Guided</td>
                                            <td className="p-4">12 weeks</td>
                                            <td className="p-4">Anxiety-specific daily structure</td>
                                            <td className="p-4 font-bold text-primary">$9-$18</td>
                                        </tr>
                                        <tr className="border-b border-slate-50 dark:border-slate-900">
                                            <td className="p-4 font-medium">Worry for Nothing</td>
                                            <td className="p-4">CBT Workbook</td>
                                            <td className="p-4">60 repeating worksheets</td>
                                            <td className="p-4">CBT thought work, discreet cover</td>
                                            <td className="p-4 font-bold text-primary">$15</td>
                                        </tr>
                                        <tr className="border-b border-slate-50 dark:border-slate-900">
                                            <td className="p-4 font-medium">Goodbye Anxiety</td>
                                            <td className="p-4">CBT + DBT Workbook</td>
                                            <td className="p-4">Prompts + strategies</td>
                                            <td className="p-4">Clinical depth, dual approach</td>
                                            <td className="p-4 font-bold text-primary">$17</td>
                                        </tr>
                                        <tr className="border-b border-slate-50 dark:border-slate-900">
                                            <td className="p-4 font-medium">Corinne Sweet Anxiety Journal</td>
                                            <td className="p-4">Guided + Illustrated</td>
                                            <td className="p-4">Flexible</td>
                                            <td className="p-4">Portable, beautiful, CBT-light</td>
                                            <td className="p-4 font-bold text-primary">$16-$19</td>
                                        </tr>
                                        <tr className="border-b border-slate-50 dark:border-slate-900">
                                            <td className="p-4 font-medium">52-Week Mental Health Journal</td>
                                            <td className="p-4">Year-Long Program</td>
                                            <td className="p-4">52 weeks daily</td>
                                            <td className="p-4">Long-term commitment, broad mental health</td>
                                            <td className="p-4 font-bold text-primary">$10-$18</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium">Put Your Worries Here</td>
                                            <td className="p-4">Creative/Reflective</td>
                                            <td className="p-4">100 flexible prompts</td>
                                            <td className="p-4">Teens, creative thinkers, mixed formats</td>
                                            <td className="p-4 font-bold text-primary">$15</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 uppercase italic text-center tracking-tighter leading-none underline decoration-primary/20 underline-offset-8">7 Best Anxiety Journals & Guided Journals</h2>

                            <div className="space-y-32">
                                {/* Product 1 */}
                                <section className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">1</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">The Five Minute Journal by Intelligent Change</h3>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🏆 Best Overall / Best for Beginners</span>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/bajc_1.jpg" alt="The Five Minute Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$25 (regularly $30)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Type</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Daily gratitude journal</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Structure</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Morning + evening prompts, undated</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Link</p>
                                                    <a href="https://amzn.to/4tzpJAF" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p>The Five Minute Journal is the most popular guided journal on Amazon globally, and for good reason. The format is almost impossibly simple: three morning prompts (what are you grateful for, what would make today great, a daily affirmation) and two evening prompts (three amazing things that happened, how could today have been better). Five minutes. Done.</p>
                                            <p>That simplicity is the point. Anxiety thrives on overwhelm. A journaling practice that requires twenty minutes of thoughtful writing is the one you&#39;ll skip when you&#39;re anxious, tired, or busy - exactly when you need it most. Five minutes is small enough that there&#39;s almost no valid reason to skip it, and consistent practice of even this minimal format produces measurable results over weeks.</p>
                                            <p>The science behind it targets anxiety specifically. Anxiety is future-focused - it&#39;s worry about what might happen. Gratitude is present-focused - it anchors you in what is actually good right now. Practiced daily, this shift in attention gradually rewires your brain&#39;s default from threat-scanning to appreciation-noticing. Morning affirmations build the self-talk patterns that counteract anxiety&#39;s tendency toward catastrophizing. Evening prompts train you to notice positive experiences that anxiety tends to filter out.</p>
                                            <p>The linen hardcover and sustainably sourced paper make this a journal you&#39;ll keep on your bedside table rather than shove in a drawer. The undated format means you can start any day without the pressure of catching up if you miss a session.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>18,000+ reviews at 4.5 stars - the most validated journal on this list by a wide margin</li>
                                                        <li>Five minutes daily - the most achievable commitment on this list</li>
                                                        <li>Undated pages - start any time, no catch-up pressure</li>
                                                        <li>Science-backed gratitude and affirmation approach</li>
                                                        <li>Premium linen hardcover - genuinely beautiful to use</li>
                                                        <li>6 colour options</li>
                                                        <li>Works equally well for anxiety, general well-being, and productivity</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Doesn&#39;t directly address anxiety - gratitude works indirectly, not through anxiety-specific techniques</li>
                                                        <li>No CBT or DBT tools - for clinical thought work, you&#39;ll need something additional</li>
                                                        <li>$25 is the most expensive journal on this list</li>
                                                        <li>Some people find the positive-focus format feels forced during high-anxiety periods</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4tzpJAF" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check The Five Minute Journal on Amazon →</a>
                                        </div>
                                    </div>
                                </section>

                                {/* Product 2 */}
                                <section className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">2</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">No Worries: A Guided Journal</h3>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">📅 Best 12-Week Anxiety Structure</span>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-6 md:order-1 order-2">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$9 (paperback) or $18 (hardcover)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Structure</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">12-week program with daily pages</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Link</p>
                                                    <a href="https://amzn.to/3Q1NJxF" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p>No Worries hits a specific and useful middle ground: more anxiety-specific than the Five Minute Journal, more accessible than a full CBT workbook. The 12-week structure gives you a defined arc - a beginning, middle, and end - which is particularly helpful for people who find open-ended journaling directionless.</p>
                                            <p>Each daily page includes a mood check-in, space to reflect on anxiety triggers, gratitude practice, and room to note positive thoughts or moments. Weekly pages cover habit tracking and therapy reflections - if you&#39;re seeing a therapist, this makes the journal a direct extension of that work. Monthly progress pages let you look back and assess how your anxiety has shifted, which is one of the most motivating features for people who struggle with the slow, invisible nature of anxiety improvement.</p>
                                            <p>The fear-setting exercises are a practical addition. Rather than just recording worries, the journal walks you through examining them: what&#39;s the worst that could happen, how likely is it, what would you do if it did. This is a worry-examination technique from cognitive therapy that&#39;s more action-oriented than standard prompts.</p>
                                            <p>The paperback at $9 makes this the best value on the list.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Anxiety-specific - every element designed for anxiety management, not general wellness</li>
                                                        <li>12-week structure - defined program with a clear beginning and end</li>
                                                        <li>Multiple formats per page (mood, triggers, gratitude, positives) - comprehensive daily check-in</li>
                                                        <li>Fear-setting exercises - practical worry examination beyond standard prompts</li>
                                                        <li>Therapy reflection pages - integrates with professional support</li>
                                                        <li>$9 paperback - best value on this list</li>
                                                        <li>3,300+ reviews at 4.5 stars</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Once complete, you need to buy another copy for continued use</li>
                                                        <li>Lighter therapeutic depth than Worry for Nothing or Goodbye Anxiety</li>
                                                        <li>Some prompts repeat frequently - can feel formulaic for longer-term users</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/3Q1NJxF" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check No Worries on Amazon →</a>
                                        </div>
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-2 order-1">
                                            <img src="/bajc_2.jpg" alt="No Worries Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                    </div>
                                </section>

                                {/* Product 3 */}
                                <section className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">3</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">Worry for Nothing: Guided Anxiety Journal & CBT Workbook</h3>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🧠 Best CBT-Based Journal</span>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/bajc_3.jpg" alt="Worry for Nothing Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$15</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Type</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">CBT worksheet journal</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Structure</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">60 repeating two-page CBT worksheets</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Link</p>
                                                    <a href="https://amzn.to/4sTAhdV" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p>Worry for Nothing solves two problems at once: it delivers clinical-quality CBT thought work, and it does so in a journal that looks like a tasteful hardcover notebook rather than a mental health product. The cover doesn&#39;t spell out &#34;worry&#34; or &#34;anxiety&#34; - a deliberately discreet design choice that matters for people who journal in shared spaces, at work, or who simply don&#39;t want a wellness journal announcing their anxiety to anyone who walks in.</p>
                                            <p>The format is based directly on the CBT thought record - the core tool that cognitive behavioral therapists use in clinical settings. Each two-page worksheet walks you through identifying the triggering situation, noting physical and emotional sensations, examining your automatic thoughts, evaluating the evidence for and against those thoughts, and arriving at a more balanced perspective. This is the actual therapeutic technique, translated into a self-guided format by therapists who use these prompts with their own clients.</p>
                                            <p>Sixty worksheets means sixty complete thought-record exercises - enough for daily use for two months, or intermittent use over a much longer period. The 100gsm paper is a practical choice: thick enough for gel pens without bleed-through.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>CBT thought records - the gold standard clinical technique in self-guided format</li>
                                                        <li>Therapist-backed prompts</li>
                                                        <li>Discreet cover - looks like a regular notebook, appropriate for any setting</li>
                                                        <li>60 complete worksheets - substantial content for the price</li>
                                                        <li>100gsm paper - gel pen compatible, no bleed-through</li>
                                                        <li>Same structure each time builds automatic habit</li>
                                                        <li>1,300+ reviews at 4.5 stars</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Repetitive by design - same worksheet format every time</li>
                                                        <li>No variety of exercises - purely thought records, no gratitude or mood tracking</li>
                                                        <li>Requires repurchase once complete</li>
                                                        <li>No author credentials listed prominently</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4sTAhdV" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Worry for Nothing on Amazon →</a>
                                        </div>
                                    </div>
                                </section>

                                {/* Product 4 */}
                                <section className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">4</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">Goodbye, Anxiety: A Guided Journal for Overcoming Worry</h3>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🏥 Most Clinically Grounded</span>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-6 md:order-1 order-2">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$17 (print) / $9 (Kindle)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Author</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Terri Bacow, PhD (clinical psychologist)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Link</p>
                                                    <a href="https://amzn.to/4m7VAFS" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p>The credentials here are the differentiator. Terri Bacow is a clinical psychologist who specializes in anxiety treatment, and Goodbye Anxiety is endorsed by Lisa Damour PhD - one of the most respected psychologists working on adult and adolescent anxiety. The journal combines CBT (Cognitive Behavioral Therapy) and DBT (Dialectical Behavior Therapy) - two of the most evidence-based approaches for anxiety - in a self-guided format that makes these clinical tools accessible without requiring a therapist.</p>
                                            <p>The scope is broader than anything else on this list: 100+ writing prompts, 40+ CBT and DBT strategies, and 50+ practical coping tools. Where Worry for Nothing focuses purely on CBT thought records, Goodbye Anxiety also incorporates DBT skills - distress tolerance, emotion regulation, mindfulness, and interpersonal effectiveness - which are particularly helpful for anxiety that has a strong emotional intensity or physical component alongside the cognitive patterns.</p>
                                            <p>The low review count (93) reflects a more recent publication date rather than quality concerns. The credentials, endorsements, and clinical content place it clearly above most anxiety journals on Amazon regardless of review volume.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Written by a clinical psychologist specializing in anxiety</li>
                                                        <li>Endorsed by Lisa Damour PhD - significant credibility signal</li>
                                                        <li>Combines CBT and DBT - the broadest evidence-based approach on this list</li>
                                                        <li>100+ prompts, 40+ strategies, 50+ tools - the most comprehensive content here</li>
                                                        <li>$9 Kindle price - most affordable entry point for the clinical depth offered</li>
                                                        <li>4.6 stars - highest rated on this list</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Only 93 reviews - limited social proof compared to other journals here</li>
                                                        <li>More workbook than daily journal - less suited to a 5-minute daily habit format</li>
                                                        <li>Requires more time and engagement per session</li>
                                                        <li>CBT and DBT concepts may feel unfamiliar without some background knowledge</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4m7VAFS" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Goodbye, Anxiety on Amazon →</a>
                                        </div>
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-2 order-1">
                                            <img src="/bajc_4.jpg" alt="Goodbye Anxiety Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                    </div>
                                </section>

                                {/* Product 5 */}
                                <section className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">5</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">The Anxiety Journal by Corinne Sweet</h3>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">🎨 Best Design / Best Carry-Along</span>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/bajc_5.jpg" alt="The Anxiety Journal by Corinne Sweet" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$16-$19</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Type</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Guided and illustrated CBT-informed journal</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Author</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Corinne Sweet (psychologist and psychotherapist)</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Link</p>
                                                    <a href="https://amzn.to/3PVdf7O" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p>Corinne Sweet is a psychologist and psychotherapist who has written fourteen books. The Anxiety Journal, beautifully illustrated by designer Marcia Mihotich, brings that clinical background into a format that prioritizes accessibility and aesthetics alongside therapeutic value.</p>
                                            <p>The CBT techniques here are present but light - cognitive behavioral principles as a framework without requiring you to work through formal thought records or structured worksheets. Instead, it offers grounding facts about anxiety, mindfulness exercises, writing prompts that help identify anxiety causes and patterns, and lined pages for free reflection. The overall feel is supportive and calming rather than clinical and procedural.</p>
                                            <p>The portable size is a deliberate design choice - small enough to carry in a bag and use wherever anxiety strikes rather than being a bedside-only object. For social anxiety, work anxiety, or anxiety triggered by specific situations away from home, this makes it uniquely practical. The heavy cover is built for repeated use in transit.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Written by a practicing psychologist and psychotherapist</li>
                                                        <li>Beautiful illustrations - the most aesthetically appealing journal on this list</li>
                                                        <li>Portable size - designed for use wherever anxiety strikes, not just at home</li>
                                                        <li>CBT-informed but accessible - therapeutic depth without clinical formality</li>
                                                        <li>Heavy-duty cover built for on-the-go use</li>
                                                        <li>1,100+ reviews at 4.5 stars</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Less clinical depth than Worry for Nothing or Goodbye Anxiety</li>
                                                        <li>No structured program or defined timeline - more flexible, less accountable</li>
                                                        <li>Limited space for free writing</li>
                                                        <li>Some readers find the exercises too brief for the depth they want</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/3PVdf7O" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check The Anxiety Journal on Amazon →</a>
                                        </div>
                                    </div>
                                </section>

                                {/* Product 6 */}
                                <section className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">6</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">52-Week Mental Health Journal</h3>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">📆 Best Long-Term Commitment</span>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-6 md:order-1 order-2">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$10-$18</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Structure</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">52 weeks daily</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Link</p>
                                                    <a href="https://amzn.to/4dOHtn5" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p>The 52-Week Mental Health Journal is the only option here designed for a full year of daily practice. Where most journals offer 12 weeks or a set number of worksheets, this one provides a structured prompt for every single day of the year - organized across four core pillars: calm and resiliency, connection and engagement, goals and purpose, and healthy living.</p>
                                            <p>This scope matters because anxiety doesn&#39;t resolve in 12 weeks. Real change in anxiety patterns takes months of consistent practice, and a yearlong journal provides the accountability structure to sustain that without needing to repurchase or restart. The progression through different themes prevents the repetition fatigue that shorter journals sometimes produce.</p>
                                            <p>The methods are explicitly evidence-based - mindfulness and CBT techniques referenced throughout. Inspiring quotes from philosophers, artists, and writers appear across the year, providing perspective alongside the practical prompts. At its current price of $10, it&#39;s roughly three cents per day of guided practice - the best value per session on this list.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>52 weeks of daily prompts - the longest commitment structure here</li>
                                                        <li>Four core pillars provide thematic variety - prevents repetition fatigue</li>
                                                        <li>Evidence-based methods (mindfulness + CBT) throughout</li>
                                                        <li>4.6 stars across 2,000+ reviews</li>
                                                        <li>$10 current price - best value per day of content</li>
                                                        <li>Covers anxiety as part of broader mental health</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Broad mental health focus rather than anxiety-specific - not every prompt targets anxiety directly</li>
                                                        <li>Year-long commitment is motivating for some, overwhelming for others</li>
                                                        <li>Less clinical depth than CBT-specific journals</li>
                                                        <li>Returning after missed periods can feel daunting</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://amzn.to/4dOHtn5" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check 52-Week Journal on Amazon →</a>
                                        </div>
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] md:order-2 order-1">
                                            <img src="/bajc_6.jpg" alt="52-Week Mental Health Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                    </div>
                                </section>

                                {/* Product 7 */}
                                <section className="space-y-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl">7</span>
                                        <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">Put Your Worries Here: A Creative Journal for Teens with Anxiety</h3>
                                    </div>
                                    <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20 inline-block">✏️ Best for Teens</span>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                            <img src="/bajc_7.jpg" alt="Put Your Worries Here" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Price</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">$15</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Author</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Lisa M. Schab LCSW</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Type</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-light">Creative and reflective journal</p>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-widest text-[0.65rem]">Link</p>
                                                    <a href="https://www.amazon.com/Put-Your-Worries-Here-Creative/dp/1684032148" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">View on Amazon</a>
                                                </div>
                                            </div>
                                            <p>Put Your Worries Here is clinician-recommended, published by New Harbinger - the most respected publisher of evidence-based mental health self-help resources in the US. Lisa Schab is a licensed clinical social worker with extensive experience working with teens, and also the author of The Anxiety Workbook for Teens.</p>
                                            <p>The creative format is what sets it apart. Where every other journal on this list is primarily a writing journal, this one uses a mix of writing, drawing, movement prompts, laughter, and physical self-soothing techniques alongside traditional written reflection. This is deliberately designed for the teenage brain - which engages more readily with variety, creativity, and physical activity than with structured written exercises. The result is a journal that actually reaches teens who would put down a traditional format within a week.</p>
                                            <p>The flexibility built into the prompts is notable: the author explicitly tells teens they can complete them in any order, skip ones that don&#39;t resonate, and repeat prompts they found useful. This non-prescriptive approach reduces the resistance that anxious teens often have toward therapy-adjacent activities, while still delivering the clinical content effectively.</p>
                                            
                                            <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Pros</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Written by a licensed clinical social worker specializing in teen anxiety</li>
                                                        <li>Published by New Harbinger - the most credible mental health self-help publisher</li>
                                                        <li>Creative format (writing, drawing, movement, laughter) - engages teens who resist traditional journaling</li>
                                                        <li>Clinician-recommended - endorsed as an adjunct to therapy</li>
                                                        <li>Flexible structure - teens can use it in any order, skip and repeat as needed</li>
                                                        <li>4.7 stars - highest rating on this list</li>
                                                        <li>100 diverse prompts - the most varied format on this list</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-widest text-[0.65rem]">Cons</p>
                                                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 list-disc pl-4 leading-relaxed font-light">
                                                        <li>Specifically designed for teens - not the right choice for adults</li>
                                                        <li>Creative format may feel too young for older teens or young adults</li>
                                                        <li>Less structured than program-based journals - some teens do better with more defined routine</li>
                                                        <li>640 reviews - lower count than other options here</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a href="https://www.amazon.com/Put-Your-Worries-Here-Creative/dp/1684032148" target="_blank" rel="noopener noreferrer" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Put Your Worries Here on Amazon →</a>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-8 uppercase italic tracking-tighter">How to Choose the Right Journal</h2>
                            
                            <ul className="space-y-4">
                                <li><strong>Never journaled before, want the lowest-pressure start:</strong> Five Minute Journal ($25) - five minutes, beautiful format, no wrong answers.</li>
                                <li><strong>Want anxiety-specific daily structure with a defined endpoint:</strong> No Worries ($9-$18) - 12 weeks, covers triggers, mood, gratitude, and therapy integration.</li>
                                <li><strong>Your anxiety is driven by negative thought patterns you want to challenge:</strong> Worry for Nothing ($15) - CBT thought records, discreet cover, 60 worksheets.</li>
                                <li><strong>Want the most clinically rigorous approach combining CBT and DBT:</strong> Goodbye Anxiety ($17) - written by a clinical psychologist, the deepest therapeutic content here.</li>
                                <li><strong>Want something beautiful and portable for anxiety that strikes away from home:</strong> Corinne Sweet Anxiety Journal ($16-$19) - psychologist-authored, illustrated, carry-anywhere size.</li>
                                <li><strong>Want a full year of structured daily practice:</strong> 52-Week Mental Health Journal ($10-$18) - 365 prompts, four mental health pillars, best value per session.</li>
                                <li><strong>Buying for a teenager:</strong> Put Your Worries Here ($15) - creative format, clinician-endorsed, flexible structure teens actually engage with.</li>
                            </ul>
                            
                            <h3 className="text-2xl font-bold mb-4 mt-12">Guided Journal vs Blank Journal</h3>
                            <p>For anxiety specifically, guided journals are almost always better to start with. Anxiety creates avoidance - the blank page of an unguided journal is an invitation to think about what to write, which for an anxious person often means thinking about anxiety itself in an unstructured way that can spiral. Prompts break this by giving your mind somewhere specific to go.</p>

                            <p>Once you&#39;ve built a consistent journaling habit through a guided journal, transitioning to a blank journal with your own prompts becomes much more viable - and often more rewarding.</p>

                            <hr className="my-24 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 uppercase italic tracking-tighter">The Science of Journaling for Anxiety</h2>

                            <p>Three evidence-based mechanisms explain why journaling consistently reduces anxiety.</p>
                            
                            <ul className="space-y-6">
                                <li><strong>Expressive writing and affect labeling.</strong> When you write about an anxious experience, you engage the prefrontal cortex in a way that simply feeling the anxiety doesn&#39;t. Pennebaker&#39;s research shows that translating emotional experience into words produces what he calls &#34;cognitive integration&#34; - your brain constructs a coherent narrative around the experience, which reduces its raw emotional charge. Brain imaging studies confirm this: labeling emotions in writing reduces amygdala activation and increases prefrontal cortex engagement. You are literally thinking your way calm through the act of writing.</li>
                                <li><strong>Cognitive restructuring through CBT journaling.</strong> The thought record technique used in journals like Worry for Nothing and Goodbye Anxiety has decades of clinical research behind it. When you write down an automatic negative thought and systematically examine the evidence for and against it, you engage in the same cognitive restructuring that makes CBT one of the most effective anxiety treatments available. The key finding: writing thoughts down makes them more examinable and less overwhelming than keeping them in your head. Thoughts that feel certain and catastrophic when internal often reveal themselves as uncertain and manageable when written.</li>
                                <li><strong>Gratitude and attention training.</strong> Anxiety is characterized by a bias toward noticing and dwelling on threatening or negative information - sometimes called negative attentional bias. Gratitude practice systematically counteracts this by training you to notice and record positive experiences daily. Over weeks, this isn&#39;t just mood improvement - it&#39;s a gradual retraining of what your brain notices and prioritizes. Research by Robert Emmons consistently finds that gratitude practice reduces anxiety and worry symptoms over time through exactly this mechanism.</li>
                            </ul>

                            <hr className="my-24 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-4xl font-bold mb-10 uppercase italic tracking-tighter">FAQ</h2>
                            
                            <div className="space-y-12">
                                <div>
                                    <p className="font-bold text-xl mb-4">How long should I journal each day?</p>
                                    <p>Five to fifteen minutes is the sweet spot for daily journaling. Less than five minutes doesn&#39;t allow enough time for meaningful reflection. More than thirty minutes can feel burdensome and unsustainable as a daily habit. If you&#39;re using a CBT workbook style (Worry for Nothing, Goodbye Anxiety), sessions of 15-20 minutes three to four times a week work better than daily shorter sessions.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-xl mb-4">Morning or evening - which is better for anxiety?</p>
                                    <p>Evening if your anxiety is worst at night or shows up as racing thoughts at bedtime - processing the day&#39;s experiences before sleep reduces the mental load that feeds nighttime anxiety. Morning if your anxiety is worst when you wake up - setting an intentional, grateful tone first thing prevents anxiety from hijacking the start of your day. Many journals (Five Minute Journal, No Worries) include both morning and evening components.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-xl mb-4">What if I don&#39;t know what to write?</p>
                                    <p>Write that. &#34;I don&#39;t know what to write right now. I&#39;m feeling [blank].&#34; This almost always breaks the block because naming where you are - even the blankness - is itself a valid journaling entry. Guided journals solve this more directly because the prompts tell you exactly what to write.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-xl mb-4">Can journaling replace therapy?</p>
                                    <p>No. Journaling is a complement to therapy, not a replacement. If your anxiety significantly interferes with daily functioning, therapy is the most important step. Journaling makes therapy more effective and extends the work between sessions.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-xl mb-4">How do I know if it&#39;s working?</p>
                                    <p>Look for three indicators over four to eight weeks of consistent practice: slightly easier sleep on nights when you journal; moments of noticing anxious thoughts earlier rather than being overwhelmed by them; and the occasional shift during a journaling session where a worry that felt large becomes more manageable through writing. These are subtle changes that compound. Monthly progress pages (in No Worries) or looking back at early entries often reveals more change than you noticed in real time.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-xl mb-4">What if I miss several days?</p>
                                    <p>Start again the next day without guilt. Guilt about missing journaling sessions is itself an anxiety-feeding pattern. The goal is a sustainable long-term practice, not a perfect record. Undated journals (Five Minute Journal) eliminate the visual reminder of skipped dates. If you&#39;ve missed so long that returning feels overwhelming, re-read a few old entries first - it usually motivates returning more than any fresh resolution.</p>
                                </div>
                            </div>

                            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-[3.5rem] px-12 border border-slate-100 dark:border-slate-800 shadow-xl max-w-4xl mx-auto my-32">
                                <div className="mb-12 flex justify-center">
                                    <img src="/bajc_c.jpg" alt="Final Verdict" className="w-full max-w-2xl h-auto rounded-3xl" />
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter italic leading-none">Final Verdict</h2>
                                <p>For most people starting out, <strong>The Five Minute Journal at $25</strong> is the right choice. Eighteen thousand reviews at 4.5 stars is not an accident - this format works, and five minutes daily is achievable even on the worst anxiety days. Start here, build the habit, and evaluate after four weeks whether you want to add something with more clinical depth.</p>
                                <p>If you want anxiety-specific structure from day one, <strong>No Worries at $9 paperback</strong> is the best value here - a complete 12-week anxiety program covering triggers, mood, gratitude, and therapy integration for under $10.</p>
                                <p>For genuine CBT work on the thought patterns driving your anxiety, <strong>Worry for Nothing at $15</strong> is the most practical choice - clinical technique, discreet format, sustainable habit-building structure.</p>
                                <p>If you want the deepest therapeutic content in a self-guided format, <strong>Goodbye Anxiety at $17</strong> by clinical psychologist Terri Bacow PhD offers CBT and DBT tools at a level of clinical rigor nothing else here matches.</p>
                                <p>And if you&#39;re buying for a teenager, <strong>Put Your Worries Here at $15</strong> - clinician-endorsed, creative format, genuinely designed for how teenage brains engage with anxiety.</p>
                                <p className="opacity-70 leading-relaxed font-light mt-12 italic text-lg text-center">Give whichever you choose four weeks of consistent use before judging it. One session shows you the format. Four weeks shows you what it does to the patterns underneath.</p>
                            </div>
                        </div>
                    </div>

                    <ShareSection title="Best Anxiety Journals & Guided Journals (2026): Find the Right One for You" />
                    <CommentsSection articleId="anxiety-journals" />
                </article>
            </main>

            <NewsletterSection />
            <Footer />
        </>
    );
}
