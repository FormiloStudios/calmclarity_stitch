'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import Link from "next/link";

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
            <ScrollObserver />
            <Nav />

            <main className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-24">
                <article className="max-w-screen-xl mx-auto px-6">
                    {/* Header */}
                    <header className="max-w-4xl mx-auto text-center mb-16">
                        <div className="flex justify-center mb-8">
                            <span className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-[0.65rem] font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
                                Psychology and Tools
                            </span>
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-slate-900 dark:text-white tracking-tight">
                            Best Anxiety Journals and Guided Journals (Compared): Find the Right One for You
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>April 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    {/* Image: Hero (Placeholder: journal_1.jpg) */}
                    <div className="relative w-full mb-16 rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                        <img src="/journal_1.jpg" alt="Best Anxiety Journals" className="w-full h-auto block" />
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed max-w-none">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-12 leading-relaxed italic">
                                Most anxiety management tools in this series work on your body. Weighted blankets apply pressure. White noise machines calm your nervous system through sound. Acupressure mats release physical tension. They&#39;re all passive - you use them and they do their work.
                            </p>

                            <p>Journals are different. They&#39;re an active practice, and that&#39;s precisely what makes them valuable in a way no physical tool can replicate. Writing about anxiety externalizes it - moves it from the swirling, overwhelming inside of your head onto a page where you can see it, examine it, and respond to it with some distance. The thoughts that feel enormous and all-consuming when they&#39;re inside you often look smaller and more manageable when they&#39;re written down in front of you.</p>
                            
                            <p>The challenge is that Amazon is full of journals, most of which look similar and claim to do the same thing. The real differences - between a gratitude journal and a CBT workbook, between a 12-week structure and a yearlong commitment, between a journal written by a psychologist and one written by a lifestyle blogger - matter enormously for whether you&#39;ll actually use it and whether it will help with your specific type of anxiety.</p>
                            
                            <p>This article covers seven genuinely different journals, each approaching anxiety from a different angle, so you can choose based on how your anxiety actually works rather than just picking the prettiest cover.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">Does Journaling Actually Help with Anxiety?</h2>
                            
                            <p>Yes - and the research behind it is stronger than for many popular anxiety interventions.</p>
                            
                            <p>The foundational research comes from psychologist James Pennebaker, whose decades of work on expressive writing established that writing about difficult emotional experiences produces measurable improvements in psychological and physical health. Participants who wrote about traumatic or stressful events for 15-20 minutes over several days showed lower anxiety levels, improved mood, and even improved immune function compared to control groups. The mechanism: writing forces you to construct a coherent narrative around your experience, which engages your prefrontal cortex (the rational, problem-solving part of your brain) and reduces the dominance of the amygdala (the threat-detection, fear-response part).</p>
                            
                            <p>Gratitude journaling has its own strong evidence base. A 2003 study by Emmons and McCullough found that people who wrote weekly about things they were grateful for reported higher well-being and lower anxiety compared to those who wrote about daily hassles or neutral events. Gratitude practice works for anxiety specifically because it redirects attention from future-focused worry (what might go wrong) to present-focused appreciation (what is already good) - directly counteracting anxiety&#39;s core cognitive pattern.</p>

                            <p>CBT-based journaling - the thought records and cognitive restructuring exercises in journals like Worry for Nothing and Goodbye Anxiety - has the most clinical support of any journaling approach. Cognitive Behavioral Therapy is the gold-standard treatment for anxiety disorders, and the journaling component of CBT produces measurable changes in anxiety when practiced consistently.</p>

                            <p>The honest limitation: journaling works best as a complement to other anxiety management strategies, not as a standalone treatment for clinical anxiety disorders. If your anxiety significantly interferes with daily functioning, journaling is a valuable tool but professional support is more important.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">The 5 Types of Anxiety Journals</h2>
                            
                            <p>Understanding journal types before you choose is more important here than in any other product category. Buying the wrong type isn&#39;t just a waste of money - it actively puts you off journaling because you&#39;re using an approach that doesn&#39;t match how your anxiety works.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 not-prose">
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <h4 className="font-display text-xl font-bold mb-4 italic text-slate-900 dark:text-white">1. Daily guided journals</h4>
                                    <p className="text-muted font-light leading-relaxed">Provide short, structured prompts for morning and evening use. Best for beginners who want a low-pressure habit. *Example: Five Minute Journal.*</p>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <h4 className="font-display text-xl font-bold mb-4 italic text-slate-900 dark:text-white">2. CBT-based workbooks</h4>
                                    <p className="text-muted font-light leading-relaxed">Use thought records and evidence examination to challenge anxious patterns. Best for clinical depth. *Example: Worry for Nothing.*</p>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <h4 className="font-display text-xl font-bold mb-4 italic text-slate-900 dark:text-white">3. Gratitude journals</h4>
                                    <p className="text-muted font-light leading-relaxed">Redirect attention from worry toward present-moment awareness. Best as a gentle secondary strategy.</p>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <h4 className="font-display text-xl font-bold mb-4 italic text-slate-900 dark:text-white">4. Structured programs</h4>
                                    <p className="text-muted font-light leading-relaxed">Provide defined timelines (12-52 weeks) for accountability. Best for people who want to track long-term progress.</p>
                                </div>
                            </div>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic text-center">Quick Comparison Table</h2>
                            <div className="overflow-x-auto my-12 shadow-xl rounded-2xl border border-slate-100 dark:border-slate-800 not-prose">
                                <table className="w-full text-left border-collapse bg-white dark:bg-slate-900 text-sm">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-800/50">
                                            <th className="p-4 font-bold border-b border-slate-100 dark:border-slate-800 uppercase tracking-widest text-[0.65rem]">Journal</th>
                                            <th className="p-4 font-bold border-b border-slate-100 dark:border-slate-800 uppercase tracking-widest text-[0.65rem]">Type</th>
                                            <th className="p-4 font-bold border-b border-slate-100 dark:border-slate-800 uppercase tracking-widest text-[0.65rem]">Structure</th>
                                            <th className="p-4 font-bold border-b border-slate-100 dark:border-slate-800 uppercase tracking-widest text-[0.65rem]">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-light">
                                        {[
                                            { name: "Five Minute Journal", type: "Daily Gratitude", structure: "Morning + Evening", price: "$25" },
                                            { name: "No Worries", type: "Daily Guided", structure: "12 weeks", price: "$9-$18" },
                                            { name: "Worry for Nothing", type: "CBT Workbook", structure: "60 worksheets", price: "$15" },
                                            { name: "Goodbye Anxiety", type: "CBT + DBT", structure: "Prompts + tools", price: "$17" },
                                            { name: "52-Week Journal", type: "Year Program", structure: "52 weeks", price: "$10-$18" }
                                        ].map((item, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                                <td className="p-4 border-b border-slate-100 dark:border-slate-800 font-medium text-slate-900 dark:text-white">{item.name}</td>
                                                <td className="p-4 border-b border-slate-100 dark:border-slate-800 text-slate-500">{item.type}</td>
                                                <td className="p-4 border-b border-slate-100 dark:border-slate-800 text-slate-500">{item.structure}</td>
                                                <td className="p-4 border-b border-slate-100 dark:border-slate-800 font-mono text-[0.7rem]">{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">7 Best Anxiety Journals & Guided Journals</h2>

                            <div className="space-y-24 not-prose">
                                {/* Product 1 */}
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold">1</span>
                                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight italic">The Five Minute Journal by Intelligent Change</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20 self-start mb-6">🏆 Best Overall / Best for Beginners</p>
                                    
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-8 group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[300px]">
                                        <img src="/journal_1.jpg" alt="Five Minute Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 text-[0.95rem]">
                                        <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                            <p>The Five Minute Journal is the most popular guided journal on Amazon globally. The format is almost impossibly simple: three morning prompts and two evening prompts. Five minutes. Done.</p>
                                            <p>Anxiety thrives on overwhelm. Five minutes is small enough that there&#39;s almost no valid reason to skip it, and consistent practice produces measurable results over weeks by training your brain away from threat-scanning.</p>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/5">
                                            <p className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-xs">Specs at a Glance</p>
                                            <ul className="space-y-4 font-light text-slate-600 dark:text-slate-400 list-none p-0 m-0">
                                                <li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2"><span>Price</span> <span className="font-medium">$25</span></li>
                                                <li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2"><span>Structure</span> <span className="font-medium">Morning + Eve</span></li>
                                                <li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2"><span>Format</span> <span className="font-medium">Linen Hardcover</span></li>
                                                <li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2"><span>Reviews</span> <span className="font-medium">18k+ (4.5★)</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="https://amzn.to/4tzpJAF" className="block text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Five Minute Journal on Amazon →</a>
                                </div>

                                {/* Product 2 */}
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold">2</span>
                                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight italic">No Worries: A Guided Journal</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20 self-start mb-6">📅 Best 12-Week Anxiety Structure</p>
                                    
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-8 group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[300px]">
                                        <img src="/journal_2.jpg" alt="No Worries Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 text-[0.95rem]">
                                        <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                            <p>No Worries occupies a specific and useful middle ground: more anxiety-specific than a gratitude journal, but more accessible than a clinical workbook. The 12-week structure gives you a defined arc.</p>
                                            <p>Each day includes mood checks, trigger reflections, and fear-setting exercises. It&#39;s a structured worry-examination technique borrowed from cognitive therapy that is more action-oriented than standard journaling.</p>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/5">
                                            <p className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-xs">Specs at a Glance</p>
                                            <ul className="space-y-4 font-light text-slate-600 dark:text-slate-400 list-none p-0 m-0">
                                                <li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2"><span>Price</span> <span className="font-medium">$9-$18</span></li>
                                                <li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2"><span>Program</span> <span className="font-medium">12 Weeks</span></li>
                                                <li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2"><span>Focus</span> <span className="font-medium">Fear-Setting</span></li>
                                                <li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2"><span>Reviews</span> <span className="font-medium">3k+ (4.5★)</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="https://amzn.to/3Q1NJxF" className="block text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check No Worries on Amazon →</a>
                                </div>

                                {/* Product 3 */}
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold">3</span>
                                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight italic">Worry for Nothing: Guided CBT Workbook</h3>
                                    </div>
                                    <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20 self-start mb-6">🧠 Best CBT-Based Journal</p>
                                    
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-8 group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[300px]">
                                        <img src="/journal_3.jpg" alt="Worry for Nothing" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 text-[0.95rem]">
                                        <div className="space-y-6 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                            <p>Worry for Nothing solves two problems: it delivers clinical-quality CBT thought work in a journal that looks like a tasteful hardcover notebook. The cover is deliberately discreet.</p>
                                            <p>The format is based directly on the CBT thought record - identifying triggers, Examining evidence, and developing more balanced perspectives. Prompts developed by clinical therapists for deep work.</p>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/5">
                                            <p className="font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-widest text-xs">Specs at a Glance</p>
                                            <ul className="space-y-4 font-light text-slate-600 dark:text-slate-400 list-none p-0 m-0">
                                                <li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2"><span>Price</span> <span className="font-medium">$15</span></li>
                                                <li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2"><span>Type</span> <span className="font-medium">CBT Worksheets</span></li>
                                                <li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2"><span>Paper</span> <span className="font-medium">100gsm</span></li>
                                                <li className="flex justify-between border-b border-slate-100 dark:border-white/5 pb-2"><span>Design</span> <span className="font-medium">Discreet Linen</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="https://amzn.to/4sTAhdV" className="block text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Worry for Nothing on Amazon →</a>
                                </div>
                            </div>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">The Science of Journaling</h2>
                            
                            <p>Three evidence-based mechanisms explain why journaling reduces anxiety:</p>
                            <ul>
                                <li><strong>Expressive writing:</strong> Translating emotion into words engages the prefrontal cortex, reducing raw emotional charge and amygdala activation.</li>
                                <li><strong>Cognitive restructuring:</strong> Writing thoughts down makes them more examinable and less overwhelming, allowing you to challenge irrational fears.</li>
                                <li><strong>Attention training:</strong> Gratitude practice counteracts anxiety&#39;s threat-scanning bias by training the brain to notice positive experiences.</li>
                            </ul>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-[3.5rem] px-12 border border-slate-100 dark:border-slate-800 shadow-xl max-w-4xl mx-auto my-32">
                                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter italic leading-none text-slate-900 dark:text-white">Final Verdict</h2>
                                <p>For most people starting out, <strong>The Five Minute Journal at $25</strong> is the right choice. It builds the habit and requires the least mental bandwidth on bad days.</p>
                                <p>If you want anxiety-specific structure for a low price, <strong>No Worries at $9</strong> is unbeatable value for a 12-week program.</p>
                                <p>For genuine clinical depth, the <strong>Worry for Nothing Workbook at $15</strong> offers the best self-guided CBT tools in a discreet format.</p>
                                <p className="mt-8 text-xl font-bold text-slate-900 dark:text-white italic leading-tight">One session shows you the format. Four weeks shows you the patterns underneath.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            <NewsletterSection />
            <Footer />
        </>
    );
}
