'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";
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

                    {/* Hero Image */}
                    <div className="relative w-full mb-16 rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                        <img src="/bajc_a.jpg" alt="Best Anxiety Journals" className="w-full h-auto block" />
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed max-w-none">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-12 leading-relaxed italic">
                                Most anxiety management tools in this series work on your body. Weighted blankets apply pressure. White noise machines calm your nervous system through sound. Acupressure mats release physical tension. They're all passive - you use them and they do their work.
                            </p>

                            <div className="my-16 flex justify-center">
                                <img src="/bajc_b.jpg" alt="Journaling practice" className="w-full max-w-4xl h-auto rounded-2xl shadow-xl" />
                            </div>

                            <p>Journals are different. They're an active practice, and that's precisely what makes them valuable in a way no physical tool can replicate. Writing about anxiety externalizes it - moves it from the swirling, overwhelming inside of your head onto a page where you can see it, examine it, and respond to it with some distance. The thoughts that feel enormous and all-consuming when they're inside you often look smaller and more manageable when they're written down in front of you.</p>

                            <p>The challenge is that Amazon is full of journals, most of which look similar and claim to do the same thing. The real differences - between a gratitude journal and a CBT workbook, between a 12-week structure and a yearlong commitment, between a journal written by a psychologist and one written by a lifestyle blogger - matter enormously for whether you'll actually use it and whether it will help with your specific type of anxiety.</p>
                            
                            <p>This article covers seven genuinely different journals, each approaching anxiety from a different angle, so you can choose based on how your anxiety actually works rather than just picking the prettiest cover.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">Does Journaling Actually Help with Anxiety?</h2>
                            
                            <p>Yes - and the research behind it is stronger than for many popular anxiety interventions.</p>
                            
                            <p>The foundational research comes from psychologist James Pennebaker, whose decades of work on expressive writing established that writing about difficult emotional experiences produces measurable improvements in psychological and physical health. Participants who wrote about traumatic or stressful events for 15-20 minutes over several days showed lower anxiety levels, improved mood, and even improved immune function compared to control groups. The mechanism: writing forces you to construct a coherent narrative around your experience, which engages your prefrontal cortex (the rational, problem-solving part of your brain) and reduces the dominance of the amygdala (the threat-detection, fear-response part).</p>
                            
                            <p>Gratitude journaling has its own strong evidence base. A 2003 study by Emmons and McCullough found that people who wrote weekly about things they were grateful for reported higher well-being and lower anxiety compared to those who wrote about daily hassles or neutral events. Gratitude practice works for anxiety specifically because it redirects attention from future-focused worry (what might go wrong) to present-focused appreciation (what is already good) - directly counteracting anxiety's core cognitive pattern.</p>
                            
                            <p>CBT-based journaling - the thought records and cognitive restructuring exercises in journals like Worry for Nothing and Goodbye Anxiety - has the most clinical support of any journaling approach. Cognitive Behavioral Therapy is the gold-standard treatment for anxiety disorders, and the journaling component of CBT (identifying automatic negative thoughts, examining evidence for and against them, developing more balanced perspectives) produces measurable changes in anxiety when practiced consistently.</p>
                            
                            <p>The honest limitation: journaling works best as a complement to other anxiety management strategies, not as a standalone treatment for clinical anxiety disorders. If your anxiety significantly interferes with daily functioning, journaling is a valuable tool but professional support is more important.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">The 5 Types of Anxiety Journals</h2>
                            
                            <p>Understanding journal types before you choose is more important here than in any other product category. Buying the wrong type isn't just a waste of money - it actively puts you off journaling because you're using an approach that doesn't match how your anxiety works.</p>

                            <div className="space-y-8 my-12">
                                <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                                    <p><strong>Daily guided journals</strong> provide short, structured prompts for morning and evening use - typically 5-10 minutes. They build a consistent daily habit without overwhelming you. Best for people who want to start a journaling practice and need low-pressure, achievable structure. The Five Minute Journal is the best example.</p>
                                </div>
                                <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                                    <p><strong>CBT-based journals and workbooks</strong> use cognitive behavioral therapy techniques - thought records, evidence examination, cognitive restructuring - to identify and challenge anxious thought patterns. They require more time and engagement per session but deliver more clinical depth. Best for people who want to understand and actively change their anxiety patterns rather than just manage them day to day.</p>
                                </div>
                                <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                                    <p><strong>Gratitude and mindfulness journals</strong> redirect attention from worry toward appreciation and present-moment awareness. They don't directly address anxiety - they shift the cognitive focus that feeds it. Gentler approach, lower pressure, better for mild anxiety or as a complement to other strategies.</p>
                                </div>
                                <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                                    <p><strong>Structured program journals</strong> provide a defined timeline - 12 weeks, 52 weeks - with a progression of exercises and themes. Best for people who want accountability and measurable progress over time rather than open-ended daily practice.</p>
                                </div>
                                <div className="p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/5">
                                    <p><strong>Creative and reflective journals</strong> use diverse prompts - drawing, movement, imaginative exercises alongside writing - for people who find traditional journaling dry or resistant to purely written formats. The Put Your Worries Here teen journal is the best example of this approach.</p>
                                </div>
                            </div>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">How to Actually Use a Guided Journal</h2>
                            
                            <p>Most people buy journals and don't use them consistently. Before choosing which journal is right for you, understand what consistent use actually looks like - because this matters more than which journal you pick.</p>

                            <h3 className="text-xl font-bold mb-4">Morning vs evening</h3>
                            <p>Morning journaling sets an intentional tone for the day and is best for gratitude and goal-setting styles. Evening journaling processes the day's experiences and is better for anxiety that peaks at bedtime or manifests as racing thoughts at night. Many journals (including The Five Minute Journal) use both. Choose based on when your anxiety is worst.</p>

                            <h3 className="text-xl font-bold mb-4">Time commitment matters</h3>
                            <p>Five minutes daily is achievable for almost everyone and produces results if done consistently. Thirty minutes of CBT worksheets three times a week requires more activation energy but delivers deeper work. Be honest with yourself about what you'll actually do rather than what you aspire to do. Starting with five minutes and building is always better than starting with thirty and quitting.</p>

                            <h3 className="text-xl font-bold mb-4">What to do when you miss days</h3>
                            <p>Missing days is normal and not a reason to quit. Research on habit formation shows that occasional missed days don't significantly affect long-term habit strength - what matters is returning quickly. The two-day rule: never miss two days in a row. One missed day is an accident. Two becomes the start of quitting.</p>

                            <h3 className="text-xl font-bold mb-4">Writing style</h3>
                            <p>There is no wrong way to journal. Bullet points, incomplete sentences, illegible handwriting - none of it matters. The benefit comes from the act of putting thoughts into words and examining them, not from the quality of the writing. If you feel pressure to write well, it will prevent you from writing honestly, which defeats the purpose.</p>

                            <h3 className="text-xl font-bold mb-4">Privacy</h3>
                            <p>Some people find it harder to write honestly if they're worried about someone reading their journal. Choose a journal with a discreet cover (Worry for Nothing specifically addresses this) or keep it somewhere private. The more honest you are, the more useful it becomes.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">Quick Comparison Table</h2>

                            <div className="overflow-x-auto my-12 not-prose">
                                <table className="w-full text-left border-collapse border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden">
                                    <thead className="bg-slate-50 dark:bg-white/5">
                                        <tr>
                                            <th className="p-6 text-xs uppercase tracking-widest font-bold">Journal</th>
                                            <th className="p-6 text-xs uppercase tracking-widest font-bold">Type</th>
                                            <th className="p-6 text-xs uppercase tracking-widest font-bold">Structure</th>
                                            <th className="p-6 text-xs uppercase tracking-widest font-bold">Best For</th>
                                            <th className="p-6 text-xs uppercase tracking-widest font-bold">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {[
                                            { name: "Five Minute Journal", type: "Daily Gratitude", structure: "Morning + Evening", best: "Beginners", price: "$25" },
                                            { name: "No Worries", type: "Daily Guided", structure: "12 weeks", best: "Anxiety-specific", price: "$9-$18" },
                                            { name: "Worry for Nothing", type: "CBT Workbook", structure: "60 worksheets", best: "CBT work", price: "$15" },
                                            { name: "Goodbye Anxiety", type: "CBT + DBT", structure: "Prompts + tools", best: "Clinical depth", price: "$17" },
                                            { name: "Corinne Sweet", type: "Guided + Illus.", structure: "Flexible", best: "Portable", price: "$16-$19" },
                                            { name: "52-Week Mental Health", type: "Year-Long", structure: "52 weeks", best: "Long-term", price: "$10-$18" },
                                            { name: "Put Your Worries Here", type: "Creative", structure: "100 prompts", best: "Teens", price: "$15" }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                                                <td className="p-6 font-bold">{row.name}</td>
                                                <td className="p-6 font-light">{row.type}</td>
                                                <td className="p-6 font-light">{row.structure}</td>
                                                <td className="p-6 font-light">{row.best}</td>
                                                <td className="p-6 font-bold">{row.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">7 Best Anxiety Journals and Guided Journals</h2>

                            {/* Product 1 */}
                            <div className="my-24 not-prose">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl italic">1</span>
                                    <h3 className="font-display text-3xl font-bold uppercase tracking-tight italic">The Five Minute Journal by Intelligent Change</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-[0.2em] px-4 py-1.2 rounded-full border border-primary/20 self-start mb-10 inline-block">🏆 Best Overall / Best for Beginners</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                        <img src="/bajc_1.jpg" alt="The Five Minute Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Price</p>
                                                <p className="font-display italic font-bold text-lg">$25</p>
                                            </div>
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Reviews</p>
                                                <p className="font-display italic font-bold text-lg">18,000+</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                            <p>The Five Minute Journal is the most popular guided journal on Amazon globally, and for good reason. The format is almost impossibly simple: three morning prompts (what are you grateful for, what would make today great, a daily affirmation) and two evening prompts (three amazing things that happened, how could today have been better). Five minutes. Done.</p>
                                            <p>That simplicity is the point. Anxiety thrives on overwhelm. A journaling practice that requires twenty minutes of thoughtful writing is the one you'll skip when you're anxious, tired, or busy - exactly when you need it most. Five minutes is small enough that there's almost no valid reason to skip it, and consistent practice of even this minimal format produces measurable results over weeks.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-[0.95rem]">
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Pros</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> 18,000+ reviews at 4.5 stars - the most validated journal</li>
                                            <li className="flex gap-2"><span>-</span> Five minutes daily - the most achievable commitment</li>
                                            <li className="flex gap-2"><span>-</span> Undated pages - start any time</li>
                                            <li className="flex gap-2"><span>-</span> Science-backed gratitude and affirmation approach</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Cons</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> Doesn't directly address anxiety - works indirectly</li>
                                            <li className="flex gap-2"><span>-</span> No CBT or DBT tools</li>
                                            <li className="flex gap-2"><span>-</span> $25 is the most expensive journal on this list</li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="https://amzn.to/4tzpJAF" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check The Five Minute Journal on Amazon →</a>
                            </div>

                            {/* Product 2 */}
                            <div className="my-24 not-prose">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl italic">2</span>
                                    <h3 className="font-display text-3xl font-bold uppercase tracking-tight italic">No Worries: A Guided Journal</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-[0.2em] px-4 py-1.2 rounded-full border border-primary/20 self-start mb-10 inline-block">📅 Best 12-Week Anxiety Structure</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                    <div className="space-y-6 order-2 md:order-1">
                                        <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Price</p>
                                                <p className="font-display italic font-bold text-lg">$9-$18</p>
                                            </div>
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Structure</p>
                                                <p className="font-display italic font-bold text-lg">12 Weeks</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                            <p>No Worries occupies a specific and useful middle ground: more anxiety-specific than the Five Minute Journal, more accessible than a full CBT workbook. The 12-week structure gives you a defined arc - a beginning, middle, and end - which is particularly helpful for people who find open-ended journaling directionless.</p>
                                            <p>Each daily page includes a mood check-in, space to reflect on anxiety triggers, gratitude practice, and room to note positive thoughts or moments. Monthly progress pages let you look back and assess how your anxiety has shifted.</p>
                                        </div>
                                    </div>
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] order-1 md:order-2">
                                        <img src="/bajc_2.jpg" alt="No Worries Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-[0.95rem]">
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Pros</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> Anxiety-specific design</li>
                                            <li className="flex gap-2"><span>-</span> 12-week structure provides clear program</li>
                                            <li className="flex gap-2"><span>-</span> Fear-setting exercises and mood tracking</li>
                                            <li className="flex gap-2"><span>-</span> Genuinely great value at $9</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Cons</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> Limited duration (requires repurchase)</li>
                                            <li className="flex gap-2"><span>-</span> Lighter therapeutic depth than workbooks</li>
                                            <li className="flex gap-2"><span>-</span> Prompts can feel formulaic for some</li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="https://amzn.to/3Q1NJxF" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check No Worries on Amazon →</a>
                            </div>

                            {/* Product 3 */}
                            <div className="my-24 not-prose">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl italic">3</span>
                                    <h3 className="font-display text-3xl font-bold uppercase tracking-tight italic">Worry for Nothing: Guided Anxiety Journal and CBT Workbook</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-[0.2em] px-4 py-1.2 rounded-full border border-primary/20 self-start mb-10 inline-block">🧠 Best CBT-Based Journal</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                        <img src="/bajc_3.jpg" alt="Worry for Nothing Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Price</p>
                                                <p className="font-display italic font-bold text-lg">$15</p>
                                            </div>
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Paper</p>
                                                <p className="font-display italic font-bold text-lg">100gsm</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                            <p>Worry for Nothing delivers clinical-quality CBT thought work in a journal that looks like a tasteful hardcover notebook. The design is deliberately discreet, omitting terms like "worry" or "anxiety" from the cover for privacy.</p>
                                            <p>The format is based directly on the CBT thought record - identifying triggering situations, sensations, and automatic thoughts before evaluating evidence and arriving at a balanced perspective.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-[0.95rem]">
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Pros</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> Real clinical CBT thought records in self-guided format</li>
                                            <li className="flex gap-2"><span>-</span> Discreet black linen hardcover with gold foil</li>
                                            <li className="flex gap-2"><span>-</span> 60 complete worksheets for months of work</li>
                                            <li className="flex gap-2"><span>-</span> High-quality 100gsm paper (no bleed)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Cons</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> Repetitive by design (same format every session)</li>
                                            <li className="flex gap-2"><span>-</span> No variety of mindfulness or gratitude exercises</li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="https://amzn.to/4sTAhdV" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Worry for Nothing on Amazon →</a>
                            </div>

                            {/* Product 4 */}
                            <div className="my-24 not-prose">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl italic">4</span>
                                    <h3 className="font-display text-3xl font-bold uppercase tracking-tight italic">Goodbye, Anxiety: A Guided Journal for Overcoming Worry</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-[0.2em] px-4 py-1.2 rounded-full border border-primary/20 self-start mb-10 inline-block">🏥 Most Clinically Grounded</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                    <div className="space-y-6 order-2 md:order-1">
                                        <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Price</p>
                                                <p className="font-display italic font-bold text-lg">$17</p>
                                            </div>
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Author</p>
                                                <p className="font-display italic font-bold text-lg text-sm">Terri Bacow, PhD</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                            <p>The credentials here are the differentiator. Terri Bacow is a clinical psychologist specializing in anxiety treatment. The book combines CBT and DBT (Dialectical Behavior Therapy) in an accessible self-guided format.</p>
                                            <p>The scope is broader than any other on this list: 100+ writing prompts, 40+ strategies, and 50+ practical tools. It addresses both cognitive and intensity-based anxiety.</p>
                                        </div>
                                    </div>
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] order-1 md:order-2">
                                        <img src="/bajc_4.jpg" alt="Goodbye Anxiety Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-[0.95rem]">
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Pros</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> Written by a clinical psychologist (Terri Bacow, PhD)</li>
                                            <li className="flex gap-2"><span>-</span> Combines CBT and DBT clinical tools</li>
                                            <li className="flex gap-2"><span>-</span> 100+ prompts and 50+ practical tools</li>
                                            <li className="flex gap-2"><span>-</span> Most comprehensive content for serious work</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Cons</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> More workbook than simple daily habit journal</li>
                                            <li className="flex gap-2"><span>-</span> Requires more time/engagement per session</li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="https://amzn.to/4m7VAFS" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Goodbye Anxiety on Amazon →</a>
                            </div>

                            {/* Product 5 */}
                            <div className="my-24 not-prose">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl italic">5</span>
                                    <h3 className="font-display text-3xl font-bold uppercase tracking-tight italic">The Anxiety Journal by Corinne Sweet</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-[0.2em] px-4 py-1.2 rounded-full border border-primary/20 self-start mb-10 inline-block">🎨 Best Design / Best Carry-Along</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                        <img src="/bajc_5.jpg" alt="Corinne Sweet Anxiety Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Price</p>
                                                <p className="font-display italic font-bold text-lg">$16-$19</p>
                                            </div>
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Type</p>
                                                <p className="font-display italic font-bold text-lg">Illustrated</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                            <p>Corinne Sweet is a psychologist who applies her background to a format prioritizing accessibility and aesthetics. Beautifully illustrated by Marcia Mihotich, the journal provides CBT lightframework, grounding facts, and mindfulness exercises in a supportive feel.</p>
                                            <p>The portable size is a deliberate choice - small enough to carry in a bag and use wherever anxiety strikes. Ideal for work or social anxiety situations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-[0.95rem]">
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Pros</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> Written by a practicing psychologist</li>
                                            <li className="flex gap-2"><span>-</span> Beautiful illustrations and premium feel</li>
                                            <li className="flex gap-2"><span>-</span> Portable size for on-the-go support</li>
                                            <li className="flex gap-2"><span>-</span> Grounding exercises and CBT-informed prompts</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Cons</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> Less clinical depth than full workbooks</li>
                                            <li className="flex gap-2"><span>-</span> Limited space for extensive free writing</li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="https://amzn.to/3PVdf7O" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Corinne Sweet Journal on Amazon →</a>
                            </div>

                            {/* Product 6 */}
                            <div className="my-24 not-prose">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl italic">6</span>
                                    <h3 className="font-display text-3xl font-bold uppercase tracking-tight italic">52-Week Mental Health Journal</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-[0.2em] px-4 py-1.2 rounded-full border border-primary/20 self-start mb-10 inline-block">📆 Best Long-Term Commitment</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                    <div className="space-y-6 order-2 md:order-1">
                                        <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Price</p>
                                                <p className="font-display italic font-bold text-lg">$10-$18</p>
                                            </div>
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Duration</p>
                                                <p className="font-display italic font-bold text-lg">Full Year</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                            <p>Designed for a full year of daily practice, this journal provides a structured prompt for every single day, organized across four core pillars: calm/resiliency, connection, goals/purpose, and healthy living.</p>
                                            <p>This allows for long-term consistency which is crucial for changing anxiety patterns. At around $10, it offers the best value per day of content on this list.</p>
                                        </div>
                                    </div>
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px] order-1 md:order-2">
                                        <img src="/bajc_6.jpg" alt="52-Week Mental Health Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-[0.95rem]">
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Pros</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> 365 daily prompts for full-year accountability</li>
                                            <li className="flex gap-2"><span>-</span> Four pillars prevent repetition fatigue</li>
                                            <li className="flex gap-2"><span>-</span> Outstanding value per daily session</li>
                                            <li className="flex gap-2"><span>-</span> Evidence-based methods (mindfulness + CBT)</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Cons</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> General mental health focus rather than 100% anxiety-specific</li>
                                            <li className="flex gap-2"><span>-</span> Year-long commitment can fee overwhelming to some</li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="https://amzn.to/4dOHtn5" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check 52-Week Journal on Amazon →</a>
                            </div>

                            {/* Product 7 */}
                            <div className="my-24 not-prose">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-display font-bold text-xl italic">7</span>
                                    <h3 className="font-display text-3xl font-bold uppercase tracking-tight italic">Put Your Worries Here: A Creative Journal for Teens with Anxiety</h3>
                                </div>
                                <p className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-[0.2em] px-4 py-1.2 rounded-full border border-primary/20 self-start mb-10 inline-block">👧 Best for Teens</p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 min-h-[400px]">
                                        <img src="/bajc_7.jpg" alt="Put Your Worries Here Journal" className="w-full h-auto block transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6 text-sm mb-8">
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Price</p>
                                                <p className="font-display italic font-bold text-lg">$15</p>
                                            </div>
                                            <div>
                                                <p className="font-bold uppercase tracking-widest text-[0.65rem] text-slate-400 mb-1">Author</p>
                                                <p className="font-display italic font-bold text-lg text-sm">Lisa M. Schab, LCSW</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4 text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                                            <p>Clinician-recommended and published by New Harbinger, this creative journal is designed specifically for the teenage brain. Author Lisa Schab leverages her experience to create a mix of writing, drawing, movement, and physical self-soothing prompts.</p>
                                            <p>This variety engages teens who might resist dry written formats, delivering clinical content in a flexible, non-prescriptive way.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 text-[0.95rem]">
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Pros</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> Written by a teen anxiety specialist (LCSW)</li>
                                            <li className="flex gap-2"><span>-</span> Mix of creative formats (drawing, movement, laughter)</li>
                                            <li className="flex gap-2"><span>-</span> Flexible, non-prescriptive structure</li>
                                            <li className="flex gap-2"><span>-</span> Clinician-recommended companion to therapy</li>
                                        </ul>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                                        <p className="font-bold text-slate-900 dark:text-white mb-4">Cons</p>
                                        <ul className="space-y-2 list-none p-0 m-0 text-slate-600 dark:text-slate-400 font-light font-sm">
                                            <li className="flex gap-2"><span>-</span> Specifically for teens (not suitable for adults)</li>
                                            <li className="flex gap-2"><span>-</span> Creative format can feel childish to some older teens</li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="https://amzn.to/3PVdf7O" className="block text-center py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300">Check Put Your Worries Here on Amazon →</a>
                            </div>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">How to Choose the Right Journal for You</h2>
                            
                            <div className="space-y-6 my-12">
                                <p><strong>If you've never journaled and want the lowest-pressure start:</strong> Five Minute Journal ($25) - five minutes, beautiful format, no wrong answers.</p>
                                <p><strong>If you want anxiety-specific daily structure with a defined endpoint:</strong> No Worries ($9-$18) - 12 weeks, covers triggers, mood, gratitude, and therapy integration.</p>
                                <p><strong>If your anxiety is driven by negative thought patterns you want to challenge:</strong> Worry for Nothing ($15) - CBT thought records, discreet cover, 60 worksheets.</p>
                                <p><strong>If you want the most clinically rigorous approach combining CBT and DBT:</strong> Goodbye Anxiety ($17) - written by a clinical psychologist, the deepest therapeutic content on this list.</p>
                                <p><strong>If you want something beautiful and portable for anxiety that strikes away from home:</strong> Corinne Sweet Anxiety Journal ($16-$19) - psychologist-authored, illustrated, carry-anywhere size.</p>
                                <p><strong>If you want a full year of structured daily practice:</strong> 52-Week Mental Health Journal ($10-$18) - 365 prompts, four mental health pillars, best value per session.</p>
                                <p><strong>If you're buying for a teenager:</strong> Put Your Worries Here ($15) - creative format, clinician-endorsed, flexible structure teens actually engage with.</p>
                            </div>

                            <h3 className="text-xl font-bold mb-4">Guided Journal vs Blank Journal: Which Should You Choose?</h3>
                            <p>A guided journal (everything on this list) provides prompts and structure. A blank journal gives you complete freedom. For anxiety specifically, guided journals are almost always better to start with. Anxiety creates avoidance - the blank page of an unguided journal is an invitation to think about what to write, which for an anxious person often means thinking about anxiety itself in an unstructured way that can spiral. Prompts break this by giving your mind somewhere specific to go.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">The Science of Journaling for Anxiety</h2>
                            
                            <p>Three evidence-based mechanisms explain why journaling consistently reduces anxiety across different study populations.</p>
                            
                            <p><strong>Expressive writing and affect labeling.</strong> When you write about an anxious experience, you engage the prefrontal cortex in a way that simply feeling the anxiety doesn't. Psychologist James Pennebaker's research shows that translating emotional experience into words produces "cognitive integration" - the brain constructs a coherent narrative, reducing its raw emotional charge. Naming emotions in writing reduces amygdala activation and increases prefrontal cortex engagement.</p>
                            
                            <p><strong>Cognitive restructuring through CBT journaling.</strong> The thought record technique has decades of clinical research behind it. Writing down and systematically examining automatic negative thoughts makes them more examinable and less overwhelming. Thoughts that feel certain and catastrophic when internal often reveal themselves as uncertain and manageable when written down.</p>
                            
                            <p><strong>Gratitude and attention training.</strong> Gratitude practices work through attention regulation. Anxiety is characterized by negative attentional bias. Gratitude practice counteracts this by training you to notice and record positive experiences. Over weeks, this is a gradual retraining of what your brain notices and prioritizes.</p>

                            <hr className="my-16 border-slate-100 dark:border-slate-800" />

                            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-none uppercase italic">FAQ</h2>
                            <div className="space-y-8">
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white mb-2">How long should I journal each day?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light text-sm">Five to fifteen minutes is the sweet spot. Less than five minutes doesn't allow for meaningful reflection. More than thirty minutes can feel burdensome as a daily habit.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white mb-2">Morning or evening - which is better for anxiety?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light text-sm">Evening if your anxiety is worst at night or manifests as racing thoughts at bedtime. Morning if your anxiety peaks upon waking - setting a grateful tone prevents anxiety from hijacking the start of your day.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white mb-2">Can journaling replace therapy?</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-light text-sm">No. Journaling is a complement, not a replacement. It extends the work between sessions but doesn't provide professional assessment or the relational element of therapy.</p>
                                </div>
                            </div>

                            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-[3.5rem] px-12 border border-slate-100 dark:border-slate-800 shadow-xl max-w-4xl mx-auto my-32">
                                <div className="mb-12 flex justify-center">
                                    <img src="/bajc_c.jpg" alt="Final Verdict" className="w-full max-w-2xl h-auto rounded-3xl" />
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter italic leading-none text-slate-900 dark:text-white">Final Verdict</h2>
                                <p>For most people starting out, <strong>The Five Minute Journal at $25</strong> is the right choice. Its proven simplicity is what targets anxiety-driven overwhelm so effectively.</p>
                                <p>If you want anxiety-specific structure from day one, <strong>No Worries at $9</strong> is the best value. For genuine CBT work, <strong>Worry for Nothing at $15</strong> is the most practical choice.</p>
                                <p className="mt-8 text-xl font-bold text-slate-900 dark:text-white italic leading-tight">Give whichever you choose four weeks of consistent use. One session shows you the format. Four weeks shows you what it does to the patterns underneath.</p>
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
