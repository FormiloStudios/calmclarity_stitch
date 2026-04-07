'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
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
                            Aromatherapy
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tighter text-balance">
                            Best Essential Oils for Anxiety (Compared): Single Oils, Blends & Roll-Ons
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>March 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl leading-relaxed font-display italic mb-12 text-slate-700 dark:text-slate-300">
                            You&#39;ve probably smelled lavender in a candle, a lotion, or a spa and felt something shift. That moment of calm isn&#39;t just nostalgia or placebo. There&#39;s a real biological mechanism behind it — and understanding it will help you use essential oils for anxiety far more effectively than most people do.
                        </p>

                        <p>The challenge with essential oils on Amazon is that there are thousands of options, dozens of brands making impossible-sounding claims, and almost no guidance on what the difference between a $8 lavender oil and a $50 one actually means. Some brands sell pure, third-party tested oils. Others sell fragrance oils with synthetic compounds that smell similar but have none of the therapeutic properties. And some oils that work brilliantly for anxiety — ylang ylang, frankincense, roman chamomile — most people have never even considered.</p>

                        <p>This article covers two things: the oils themselves (what each one does and why), and the best products to buy on Amazon across single oils, pre-made blends, and ready-to-use roll-ons. By the end, you&#39;ll know exactly which oil matches your type of anxiety and which brand to trust.</p>

                        <hr className="my-16 opacity-10" />

                        <h2 className="font-display text-4xl font-bold mb-8 uppercase tracking-tighter">How Essential Oils Actually Work for Anxiety</h2>

                        <p>When you inhale an essential oil, the aromatic molecules travel through your nose to the olfactory bulb — the part of your brain that processes smell. The olfactory bulb has a direct neural connection to the limbic system, which is the brain&#39;s emotional processing center and the same system involved in the anxiety response. No other sensory input has this direct a pathway to the limbic system. This is why scent can trigger emotional states faster than sight, sound, or touch.</p>

                        <p>When certain aromatic compounds reach the limbic system, they interact with receptors that regulate mood, stress hormones, heart rate, and sleep. Lavender&#39;s primary compound, linalool, for example, has been shown to increase GABA activity — the same neurotransmitter that anti-anxiety medications target, though through a gentler mechanism. Bergamot compounds reduce cortisol production. Ylang ylang has been shown in studies to lower blood pressure and heart rate within minutes of inhalation.</p>

                        <p>Topical application adds a secondary mechanism. When diluted essential oils are applied to the skin, their compounds absorb into the bloodstream and can reach the same receptor systems through circulation rather than the olfactory route.</p>

                        <p>The honest caveat: essential oils are a complementary tool, not a clinical treatment. The research is promising but often involves small studies. They work best as part of a broader approach to anxiety management — not as a standalone solution. That said, the risk profile is extremely low, the cost is minimal, and for many people the practical benefit is real and immediate.</p>

                        <hr className="my-16 opacity-10" />

                        <h2 className="font-display text-4xl font-bold mb-8 uppercase tracking-tighter">What Makes an Essential Oil Worth Buying</h2>

                        <p>Before looking at any specific product, understand what separates a quality essential oil from a cheap one. This matters more here than in any other product category — because a poor-quality oil doesn&#39;t just underperform, it may cause skin irritation or respiratory sensitivity.</p>

                        <p><strong>GC/MS testing</strong> is the gold standard. Gas Chromatography-Mass Spectrometry testing analyzes the precise chemical composition of an oil, confirming it contains the right therapeutic compounds and no synthetic additives. The best brands publish these reports publicly, batch by batch, so you can verify what you&#39;re buying. Plant Therapy and Edens Garden both do this — it&#39;s a major reason they dominate every credible recommendation list.</p>

                        <p><strong>&quot;100% pure&quot; vs &quot;therapeutic grade&quot;</strong> — understand that &quot;therapeutic grade&quot; is not a regulated term. Any brand can print it on a bottle. It means nothing on its own. &quot;100% pure&quot; combined with third-party GC/MS testing means something. Prioritize transparency over marketing language.</p>

                        <p><strong>Single oils vs blends</strong> — single oils contain only one botanical source and give you more control over what you&#39;re using. Blends combine multiple oils, pre-formulated for a specific purpose. Both have a place: single oils for targeted use, blends for convenience.</p>

                        <p><strong>Dilution</strong> — pure essential oils should almost never be applied directly to skin. They need to be diluted in a carrier oil (coconut, jojoba, sweet almond) at 1–3% concentration. Roll-ons come pre-diluted, which removes the guesswork. When buying a pure oil for topical use, you&#39;ll need a carrier oil separately.</p>

                        <hr className="my-16 opacity-10" />

                        <h2 className="font-display text-4xl font-bold mb-8 uppercase tracking-tighter">The 7 Best Essential Oils for Anxiety: What Each One Does</h2>

                        <p>Before the product recommendations, here&#39;s what the most researched anxiety oils actually do — so you can choose based on your specific anxiety pattern rather than just picking the most popular one.</p>

                        <p><strong>Lavender</strong> is the most studied essential oil for anxiety by a significant margin. Its primary compound, linalool, increases GABA activity, lowers cortisol, reduces heart rate, and has been compared in some studies to low-dose anti-anxiety medication for mild generalized anxiety. It&#39;s calming without being sedating during the day, and mildly sleep-promoting in the evening. The most versatile anxiety oil for most people.</p>

                        <p><strong>Bergamot</strong> is unique because it&#39;s simultaneously uplifting and calming — it reduces anxiety without making you drowsy. Studies show bergamot inhalation lowers cortisol and blood pressure during stressful situations. It&#39;s the best choice for anxiety that comes with low mood, morning anxiety, or situations where you need to stay functional while reducing stress.</p>

                        <p><strong>Ylang Ylang</strong> works quickly on the physical symptoms of anxiety. Research shows it reduces blood pressure and heart rate within minutes of inhalation — making it particularly effective for acute stress, moments of panic, or the physical heart-racing sensation that accompanies anxiety. The scent is intensely floral and heady — use in small amounts, as it can feel overwhelming if overdiffused.</p>

                        <p><strong>Frankincense</strong> slows and deepens breathing, quiets mental noise, and creates a grounding effect through its primary compounds (boswellic acids and incensole acetate). It&#39;s the best oil for anxiety connected to racing thoughts, difficulty meditating, or the kind of chronic background stress that accumulates over time. It&#39;s also particularly effective paired with lavender for nighttime use.</p>

                        <p><strong>Roman Chamomile</strong> has mild sedative properties that work on the central nervous system. It&#39;s particularly effective for anxiety that presents as irritability, overthinking, or difficulty winding down at night. It&#39;s more expensive than most oils because of the low yield from chamomile flowers — but a little goes a long way.</p>

                        <p><strong>Clary Sage</strong> reduces cortisol levels and supports emotional balance. It&#39;s particularly effective for anxiety related to hormonal fluctuations — it&#39;s one of the most commonly recommended oils for PMS-related anxiety, mood swings, and emotional volatility.</p>

                        <p><strong>Sweet Orange / Citrus</strong> oils are uplifting without being sedating, making them the best daytime anxiety support. Research shows citrus inhalation can reduce anxiety and improve mood without affecting alertness. The most accessible, affordable, and socially acceptable anxiety oil — the scent reads as &quot;fresh&quot; rather than &quot;wellness product.&quot;</p>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 uppercase tracking-tighter">Quick Comparison Table</h2>
                        <div className="overflow-x-auto my-12 border border-slate-100 dark:border-slate-800 rounded-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                                    <tr>
                                        <th className="p-4 font-bold uppercase text-[0.7rem] tracking-widest text-slate-500">Product</th>
                                        <th className="p-4 font-bold uppercase text-[0.7rem] tracking-widest text-slate-500">Type</th>
                                        <th className="p-4 font-bold uppercase text-[0.7rem] tracking-widest text-slate-500">Key Oil(s)</th>
                                        <th className="p-4 font-bold uppercase text-[0.7rem] tracking-widest text-slate-500">Best For</th>
                                        <th className="p-4 font-bold uppercase text-[0.7rem] tracking-widest text-slate-500">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: "Plant Therapy Lavender", type: "Single Oil", oil: "Lavender", best: "General anxiety, sleep, all-round use", price: "$10" },
                                        { name: "NOW Foods Bergamot", type: "Single Oil", oil: "Bergamot", best: "Morning anxiety, low mood, daytime calm", price: "$15" },
                                        { name: "Plant Therapy Ylang Ylang", type: "Single Oil", oil: "Ylang Ylang", best: "Acute stress, rapid heart rate, panic", price: "$15" },
                                        { name: "Edens Garden Frankincense", type: "Single Oil", oil: "Frankincense", best: "Meditation, grounding, chronic stress", price: "$22" },
                                        { name: "Plant Therapy Roman Chamomile", type: "Single Oil", oil: "Roman Chamomile", best: "Nighttime anxiety, overthinking, irritability", price: "$25" },
                                        { name: "Edens Garden Anxiety Ease Blend", type: "Pre-made Blend", oil: "Orange + blend", best: "Ready-to-use anxiety diffuser blend", price: "$12" },
                                        { name: "Plant Therapy Worry Free Roll-On", type: "Roll-On", oil: "6-oil blend", best: "On-the-go anxiety relief, no preparation", price: "$13" },
                                        { name: "Plant Therapy Relaxation Set", type: "Starter Set", oil: "3 blends", best: "Beginners, gifting, full routine coverage", price: "$30" }
                                    ].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors border-b border-slate-50 dark:border-slate-900 last:border-0">
                                            <td className="p-4 font-medium">{row.name}</td>
                                            <td className="p-4 text-slate-600 dark:text-slate-400">{row.type}</td>
                                            <td className="p-4 text-slate-600 dark:text-slate-400">{row.oil}</td>
                                            <td className="p-4 text-slate-600 dark:text-slate-400">{row.best}</td>
                                            <td className="p-4 font-bold text-primary">{row.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h2 className="font-display text-4xl font-bold mt-32 mb-16 uppercase tracking-tighter">8 Best Essential Oils for Anxiety on Amazon</h2>

                        {/* 1. Plant Therapy Lavender */}
                        <section className="mb-32">
                            <h3 className="font-display text-3xl font-bold mb-6 italic">1. Plant Therapy Lavender Essential Oil</h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20">🏆 Best Overall / Most Researched</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-[0.95rem]">
                                <div className="space-y-2">
                                    <p><strong>Price:</strong> $10</p>
                                    <p><strong>Size:</strong> 10mL</p>
                                    <p><strong>Brand:</strong> Plant Therapy</p>
                                </div>
                                <div className="space-y-2">
                                    <p><strong>Stars:</strong> 4.5 (25,419 reviews)</p>
                                    <p><strong>Testing:</strong> Batch-specific GC/MS reports publicly available</p>
                                    <p><strong>Link:</strong> <a href="https://amzn.to/4mgDp14" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View on Amazon</a></p>
                                </div>
                            </div>

                            <p>Plant Therapy Lavender is the starting point for anyone new to essential oils for anxiety — and often the only oil experienced users need. Twenty-five thousand reviews at 4.5 stars make this the most socially validated essential oil on this list by a wide margin, and the price-to-quality ratio at $10 for 10mL of GC/MS-tested pure lavender is genuinely exceptional.</p>
                            <p>Plant Therapy&#39;s approach to quality is worth understanding: they never standardize their batches (meaning they don&#39;t adulterate the oil to create a consistent scent profile), publish batch-specific test reports that anyone can download, and have certified aromatherapists on staff for customer questions. This transparency is what separates them from the dozens of cheaper brands on Amazon that sell synthetic fragrance oils labeled as essential oils.</p>
                            <p>The lavender itself is versatile enough to cover almost every anxiety use case: diffuse in the evening for a calm, sleep-ready atmosphere; dilute in a carrier oil and apply to wrists and temples during anxious moments; add to a bath for deep relaxation; or apply to your pillow before sleep. It blends well with bergamot, roman chamomile, frankincense, and almost everything else on this list.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 font-sans">
                                <div className="bg-green-50/50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-100 dark:border-green-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-green-700 dark:text-green-400">Pros</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>25,419 reviews at 4.5 stars — the most validated product on this list</li>
                                        <li>Batch-specific GC/MS reports publicly downloadable — highest transparency available</li>
                                        <li>Never standardized or adulterated — pure botanical oil</li>
                                        <li>Certified aromatherapists on staff for support</li>
                                        <li>Most versatile anxiety oil — works for daytime calm, nighttime sleep, and everything between</li>
                                        <li>$10 for 10mL — exceptional value for third-party tested pure oil</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50/50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-red-700 dark:text-red-400">Cons</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>10mL is a small bottle — heavy users will need to reorder frequently</li>
                                        <li>Scent can vary batch to batch (natural variation, not a quality issue) — some users find this surprising</li>
                                        <li>Needs dilution for topical use — requires a separate carrier oil purchase</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 2. NOW Foods Bergamot */}
                        <section className="mb-32">
                            <h3 className="font-display text-3xl font-bold mb-6 italic">2. NOW Foods Bergamot Essential Oil</h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20">☀️ Best for Morning Anxiety</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-[0.95rem]">
                                <div className="space-y-2">
                                    <p><strong>Price:</strong> $15</p>
                                    <p><strong>Size:</strong> 1 oz (30mL) — the largest bottle on this list</p>
                                    <p><strong>Brand:</strong> NOW Foods</p>
                                </div>
                                <div className="space-y-2">
                                    <p><strong>Stars:</strong> 4.7 (2,004 reviews)</p>
                                    <p><strong>Extraction:</strong> Cold pressed from fresh fruit peels</p>
                                    <p><strong>Link:</strong> <a href="https://amzn.to/4sQte5w" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View on Amazon</a></p>
                                </div>
                            </div>

                            <p>NOW Foods has been making natural wellness products since 1968 — one of the oldest and most established brands in the category — and their bergamot is one of the best-reviewed essential oils in their range. The 4.7-star rating is the highest of any single oil on this list, and the 30mL bottle is triple the size of most oils at a comparable price point.</p>
                            <p>Bergamot&#39;s combination of uplifting and calming properties makes it unique among anxiety oils. Where lavender is predominantly calming and can feel sedating for some people, bergamot reduces stress while simultaneously boosting mood and energy — the right choice for anxiety that hits in the morning, anxiety that comes with low mood or depression, or any situation where you need to feel calm but still functional and alert.</p>
                            <p>Cold pressing (rather than steam distillation) preserves more of the aromatic compounds from the fruit peel, resulting in a more vibrant, true-to-fruit scent. The one important note with bergamot: it is photosensitizing, meaning if you apply it topically it can increase your skin&#39;s sensitivity to sunlight. Apply topically only in the evening, or use it exclusively through diffusion during the day.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 font-sans">
                                <div className="bg-green-50/50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-100 dark:border-green-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-green-700 dark:text-green-400">Pros</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>4.7 stars — highest rating of any single oil on this list</li>
                                        <li>30mL bottle — three times the size of most oils at similar price</li>
                                        <li>Cold pressed for maximum aromatic compound preservation</li>
                                        <li>NOW Foods — one of the most established natural wellness brands since 1968</li>
                                        <li>100% pure, vegan, never tested on animals</li>
                                        <li>Uplifting and calming simultaneously — unique among anxiety oils</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50/50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-red-700 dark:text-red-400">Cons</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>Photosensitizing — cannot be applied topically before sun exposure</li>
                                        <li>The 30mL listing shows it alongside Camphor and Marjoram variants — ensure you select Bergamot specifically</li>
                                        <li>Stronger citrus scent than some users expect — may not blend as subtly as lavender</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 3. Plant Therapy Ylang Ylang */}
                        <section className="mb-32">
                            <h3 className="font-display text-3xl font-bold mb-6 italic">3. Plant Therapy Ylang Ylang Complete Essential Oil</h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20">💓 Best for Acute Stress & Rapid Heart Rate</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-[0.95rem]">
                                <div className="space-y-2">
                                    <p><strong>Price:</strong> $15</p>
                                    <p><strong>Size:</strong> 10mL</p>
                                    <p><strong>Brand:</strong> Plant Therapy</p>
                                </div>
                                <div className="space-y-2">
                                    <p><strong>Stars:</strong> 4.5 (2,815 reviews)</p>
                                    <p><strong>Origin:</strong> Madagascar and France</p>
                                    <p><strong>Link:</strong> <a href="https://amzn.to/4cpxwem" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View on Amazon</a></p>
                                </div>
                            </div>

                            <p>Ylang ylang is the most underused anxiety oil on this list. Most people gravitate toward lavender and miss an oil that has some of the fastest-acting physical anxiety-relief properties of any aromatic plant. Research consistently shows ylang ylang inhalation reduces blood pressure and heart rate within minutes — which makes it uniquely effective for the physical manifestations of anxiety: heart racing, chest tightness, that wired, wound-up feeling that doesn&#39;t respond easily to calming thoughts.</p>
                            <p>Plant Therapy&#39;s ylang ylang is labeled &quot;Complete&quot; — meaning it&#39;s distilled for the full 12–18 hour steam distillation period that captures all the aromatic fractions of the flower (extra, first, second, and third). This gives you the complete therapeutic profile rather than just the top notes captured in shorter distillations. The result is a richer, more complex scent that&#39;s also more therapeutically complete.</p>
                            <p>One practical note: ylang ylang has an intensely sweet, heady floral scent that can feel overwhelming if overdiffused. Start with 1–2 drops rather than the 5–10 you might use with lavender. It blends beautifully with lavender, bergamot, and frankincense, and those combinations help moderate the intensity while combining their anxiety-relief properties.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 font-sans">
                                <div className="bg-green-50/50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-100 dark:border-green-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-green-700 dark:text-green-400">Pros</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>Research-backed for reducing blood pressure and heart rate — fastest physical anxiety relief on this list</li>
                                        <li>&quot;Complete&quot; distillation captures full therapeutic profile of the flower</li>
                                        <li>Plant Therapy quality standard — GC/MS tested, batch reports available</li>
                                        <li>4.5 stars across 2,815 reviews</li>
                                        <li>Powerful aphrodisiac and massage oil properties beyond anxiety use</li>
                                        <li>Blends well with lavender and bergamot for combined effects</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50/50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-red-700 dark:text-red-400">Cons</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>Intensely floral scent — polarizing, not universally loved</li>
                                        <li>Easy to overdiffuse — requires much smaller amounts than other oils</li>
                                        <li>10mL bottles goes quickly if used frequently due to small dose requirement per session</li>
                                        <li>Not ideal as a standalone daytime scent for office or public use</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 4. Edens Garden Frankincense */}
                        <section className="mb-32">
                            <h3 className="font-display text-3xl font-bold mb-6 italic">4. Edens Garden Frankincense Essential Oil</h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20">🧘 Best for Meditation & Chronic Stress</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-[0.95rem]">
                                <div className="space-y-2">
                                    <p><strong>Price:</strong> $22</p>
                                    <p><strong>Size:</strong> 10mL</p>
                                    <p><strong>Brand:</strong> Edens Garden</p>
                                </div>
                                <div className="space-y-2">
                                    <p><strong>Stars:</strong> 4.7 (1,750 reviews)</p>
                                    <p><strong>Type:</strong> Frankincense Carterii (Boswellia carterii resin)</p>
                                    <p><strong>Link:</strong> <a href="https://amzn.to/4tm5YMG" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View on Amazon</a></p>
                                </div>
                            </div>

                            <p>Edens Garden has been voted the #1 non-MLM essential oil company by Essential Oil University for multiple consecutive years, and their frankincense is among their most respected single oils. The Carterii variety — distilled from the resin of the Boswellia carterii tree — delivers the classic frankincense profile: rich, resinous, slightly sweet, with a woody depth that is immediately grounding.</p>
                            <p>Frankincense works differently from the other oils on this list. Where lavender and bergamot primarily target mood and stress hormones, frankincense works through breathing. Its compounds encourage slower, deeper, more diaphragmatic breathing — which directly activates the parasympathetic nervous system. This is why it has been used for thousands of years in meditation and spiritual practices: the deepened breathing it encourages creates a calming cascade that quiets mental chatter and grounds anxious thought patterns.</p>
                            <p>For anxiety that manifests as racing thoughts, inability to be present, chronic background stress, or difficulty meditating, frankincense is often more effective than lavender. It also enhances the effects of other oils when blended — a few drops of frankincense with lavender before bed creates a combination that works more powerfully than either alone.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 font-sans">
                                <div className="bg-green-50/50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-100 dark:border-green-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-green-700 dark:text-green-400">Pros</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>4.7 stars across 1,750 reviews — tied for highest rating on this list</li>
                                        <li>Edens Garden is the #1 rated non-MLM essential oil company</li>
                                        <li>GC/MS batch reports publicly available — full transparency</li>
                                        <li>Encourages deeper breathing — directly activates parasympathetic nervous system</li>
                                        <li>Licensed aromatherapists on staff for customer support</li>
                                        <li>Woman-owned, family-operated since 2009 — ethical business model</li>
                                        <li>Blends with virtually everything — enhances other anxiety oils</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50/50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-red-700 dark:text-red-400">Cons</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>$22 for 10mL — the most expensive single oil on this list</li>
                                        <li>Resinous scent is not universally appealing — very different from floral or citrus oils</li>
                                        <li>Carterii variety is listed as #50 in Essential Oil Blends rather than Singles — confirms strong cross-category use</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 5. Plant Therapy Roman Chamomile */}
                        <section className="mb-32">
                            <h3 className="font-display text-3xl font-bold mb-6 italic">5. Plant Therapy Roman Chamomile Essential Oil</h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20">🌙 Best for Nighttime Anxiety</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-[0.95rem]">
                                <div className="space-y-2">
                                    <p><strong>Price:</strong> $25</p>
                                    <p><strong>Size:</strong> 5mL</p>
                                    <p><strong>Brand:</strong> Plant Therapy</p>
                                </div>
                                <div className="space-y-2">
                                    <p><strong>Stars:</strong> 4.6 (680 reviews)</p>
                                    <p><strong>Certification:</strong> KidSafe</p>
                                    <p><strong>Link:</strong> <a href="https://amzn.to/4m7YlHf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View on Amazon</a></p>
                                </div>
                            </div>

                            <p>Roman chamomile is the most expensive oil per milliliter on this list — $25 for just 5mL compared to $10 for 10mL of lavender. This reflects the genuine economics of the plant: chamomile flowers produce an extraordinarily low yield of essential oil, meaning significantly more plant material is required per bottle. A higher price for chamomile is a sign of an honest product, not an inflated one.</p>
                            <p>The therapeutic payoff justifies the cost for nighttime use specifically. Roman chamomile&#39;s sedative properties work on the central nervous system more directly than lavender — it&#39;s the oil most commonly compared to mild natural sedatives. The apigenin compound in chamomile binds to the same brain receptors as benzodiazepines, though with a fraction of the effect and none of the dependency risk. For anxiety that presents at night — racing thoughts at bedtime, inability to switch off, waking anxious in the early hours — roman chamomile is often more effective than lavender.</p>
                            <p>The KidSafe certification is meaningful: Plant Therapy&#39;s aromatherapists have verified it&#39;s safe for use around children when properly diluted, which is useful for parents who want to use it in a bedroom diffuser. The sweet, apple-like, herbaceous scent is gentle and non-intrusive — easy to diffuse for an entire evening without becoming overwhelming.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 font-sans">
                                <div className="bg-green-50/50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-100 dark:border-green-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-green-700 dark:text-green-400">Pros</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>The most sedative essential oil on this list — best for nighttime anxiety and sleep</li>
                                        <li>KidSafe certified — safe to diffuse in children&#39;s rooms when properly used</li>
                                        <li>Plant Therapy quality standard with GC/MS testing</li>
                                        <li>Sweet apple-like scent — gentle and easy to diffuse for extended periods</li>
                                        <li>4.6 stars across 680 reviews</li>
                                        <li>Can be added to bath or diluted for muscle massage</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50/50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-red-700 dark:text-red-400">Cons</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>$25 for only 5mL — the highest cost per mL on this list</li>
                                        <li>Lower review count than other Plant Therapy oils on this list</li>
                                        <li>Strong sedative effect means daytime use is not recommended</li>
                                        <li>The higher price point will surprise buyers unfamiliar with chamomile&#39;s yield economics</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 6. Edens Garden Anxiety Ease */}
                        <section className="mb-32">
                            <h3 className="font-display text-3xl font-bold mb-6 italic">6. Edens Garden Anxiety Ease Essential Oil Blend</h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20">🎯 Best Ready-to-Diffuse Anxiety Blend</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-[0.95rem]">
                                <div className="space-y-2">
                                    <p><strong>Price:</strong> $12</p>
                                    <p><strong>Size:</strong> 10mL</p>
                                    <p><strong>Brand:</strong> Edens Garden</p>
                                </div>
                                <div className="space-y-2">
                                    <p><strong>Stars:</strong> 4.6 (107 reviews)</p>
                                    <p><strong>Certifications:</strong> Kid Safe, Skin Safe</p>
                                    <p><strong>Link:</strong> <a href="https://amzn.to/4c88pM4" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View on Amazon</a></p>
                                </div>
                            </div>

                            <p>If you don&#39;t want to think about which oils to combine or in what proportions, Anxiety Ease is the answer. Edens Garden&#39;s licensed aromatherapists have pre-formulated a blend specifically for anxiety — you add 10 drops per 100mL of water in your diffuser and the work is done. No carrier oil, no measuring, no blending experimentation.</p>
                            <p>The citrus-forward scent (orange-based) makes this one of the most accessible anxiety blends for people who find florals or resins too heavy. The Kid Safe and Skin Safe certifications mean it&#39;s dilutable for topical application on the skin without risk of irritation, making it more versatile than many undiluted blends. At $12 it&#39;s the most affordable product on this list and the fastest path from purchase to using an anxiety-targeted blend in your home.</p>
                            <p>The lower review count (107) compared to Plant Therapy products reflects Edens Garden&#39;s smaller Amazon presence rather than product quality — their in-house testing and quality standards are equivalent to Plant Therapy, and their reputation across the broader aromatherapy community is equally strong.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 font-sans">
                                <div className="bg-green-50/50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-100 dark:border-green-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-green-700 dark:text-green-400">Pros</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>Pre-formulated specifically for anxiety — no blending required</li>
                                        <li>Diffuser-ready straight from the bottle</li>
                                        <li>Kid Safe and Skin Safe certified — versatile for topical use when diluted</li>
                                        <li>Edens Garden quality standards with GC/MS testing</li>
                                        <li>$12 — the most affordable product on this list</li>
                                        <li>Citrus-forward scent appeals to people who don&#39;t enjoy heavy florals or resins</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50/50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-red-700 dark:text-red-400">Cons</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>107 reviews — lowest review count on this list, less social validation</li>
                                        <li>Blend composition not fully detailed in listing — less transparency than single oils</li>
                                        <li>10mL goes quickly when diffusing at the recommended 10 drops per 100mL</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 7. Plant Therapy Worry Free Roll-On */}
                        <section className="mb-32">
                            <h3 className="font-display text-3xl font-bold mb-6 italic">7. Plant Therapy Worry Free Roll-On</h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20">👜 Best On-the-Go Anxiety Relief</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-[0.95rem]">
                                <div className="space-y-2">
                                    <p><strong>Price:</strong> $13</p>
                                    <p><strong>Size:</strong> 10mL</p>
                                    <p><strong>Brand:</strong> Plant Therapy</p>
                                </div>
                                <div className="space-y-2">
                                    <p><strong>Stars:</strong> 4.2 (649 reviews)</p>
                                    <p><strong>Dilution:</strong> Pre-diluted to 3% in Fractionated Coconut Oil</p>
                                    <p><strong>Link:</strong> <a href="https://amzn.to/4sXKZA4" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View on Amazon</a></p>
                                </div>
                            </div>

                            <p>The Worry Free roll-on solves the problem that every other product on this list has: they all require a diffuser, a carrier oil, or some preparation before use. The roll-on is ready the moment you open it. Apply to your wrists, inhale, and within seconds you&#39;ve got six anxiety-targeted oils working together through both topical absorption and direct inhalation.</p>
                            <p>The formulation covers the full anxiety spectrum in one blend: lavender for general calm, ylang ylang for rapid heart rate and acute stress, roman chamomile for mental chatter, Australian sandalwood for grounding, sweet marjoram for nervous system support, and balsam peru as a warming base note that helps anchor the blend. Plant Therapy&#39;s aromatherapists designed this combination specifically for worry and anxious thinking — it&#39;s not a generic relaxation blend but a targeted anxiety formulation.</p>
                            <p>The 3% dilution in fractionated coconut oil is exactly the right concentration for pulse point application — strong enough to be effective, gentle enough for sensitive skin and daily use. This is also the only product on this list you&#39;d take out of the house. Keep it in your bag, desk drawer, or car for anxiety moments that happen away from your diffuser.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 font-sans">
                                <div className="bg-green-50/50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-100 dark:border-green-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-green-700 dark:text-green-400">Pros</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>No preparation required — apply and inhale immediately</li>
                                        <li>Pre-diluted at 3% — safe for direct skin application, no carrier oil needed</li>
                                        <li>Six-oil blend specifically formulated for worry and anxious thinking</li>
                                        <li>Portable — the only product on this list suitable for on-the-go use</li>
                                        <li>Covers lavender, ylang ylang, and roman chamomile in one product</li>
                                        <li>Plant Therapy quality with GC/MS testing</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50/50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-red-700 dark:text-red-400">Cons</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>4.2 stars — lowest rating on this list</li>
                                        <li>Roll-on format means less control over dosage than a dropper bottle</li>
                                        <li>10mL goes quickly with daily use</li>
                                        <li>Balsam peru is a sensitizer for some people — patch test before daily use</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 8. Plant Therapy Relaxation Set */}
                        <section className="mb-32">
                            <h3 className="font-display text-3xl font-bold mb-6 italic">8. Plant Therapy Relaxation Essential Oil Blend Set</h3>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="bg-primary/10 text-primary text-[0.65rem] font-bold uppercase tracking-widest px-4 py-1.2 rounded-full border border-primary/20">🎁 Best for Beginners / Best Gift</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-[0.95rem]">
                                <div className="space-y-2">
                                    <p><strong>Price:</strong> $30</p>
                                    <p><strong>Contents:</strong> 3 x 10mL blends (Meditation, Relax, Tranquil)</p>
                                    <p><strong>Brand:</strong> Plant Therapy</p>
                                </div>
                                <div className="space-y-2">
                                    <p><strong>Stars:</strong> 4.6 (333 reviews)</p>
                                    <p><strong>Link:</strong> <a href="https://amzn.to/47Gy1hw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View on Amazon</a></p>
                                </div>
                            </div>

                            <p>For someone who wants to start using essential oils for anxiety and sleep but doesn&#39;t know where to begin, this set removes every decision. Three pre-formulated blends — each designed for a different moment in the anxiety-sleep cycle — cover an entire daily routine in one $30 purchase.</p>
                            <p><strong>Meditation</strong> (Ylang Ylang, Patchouli, Frankincense Serrata, Clary Sage) is designed for grounding anxious thought patterns and deepening meditation or mindfulness practice. <strong>Tranquil</strong> (Bergamot, Patchouli, Ylang Ylang and others) balances uplifting and calming properties for general daytime anxiety support. <strong>Relax</strong> (Lavender, Sweet Marjoram, Mandarin, Patchouli, Egyptian Geranium, Roman Chamomile) is the evening blend — a comprehensive combination of the most studied sleep and relaxation oils designed to transition body and mind from the day to rest.</p>
                            <p>Each blend is 10mL of undiluted pure oil, meaning you can diffuse them, dilute them for topical use, or add them to a bath. At $10 per blend the value is equivalent to buying each separately, but the curation by Plant Therapy&#39;s certified aromatherapists removes the guesswork from combination and use. As a gift, the set is complete and self-explanatory — the recipient has everything they need to start immediately.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 font-sans">
                                <div className="bg-green-50/50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-100 dark:border-green-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-green-700 dark:text-green-400">Pros</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>Three purpose-designed blends covering the full anxiety-sleep cycle</li>
                                        <li>Each blend uses multiple oil combinations that would cost more to assemble individually</li>
                                        <li>Plant Therapy quality standard — GC/MS tested, certified aromatherapists on staff</li>
                                        <li>4.6 stars across 333 reviews</li>
                                        <li>100% satisfaction guarantee</li>
                                        <li>Complete gifting solution — self-explanatory, requires only a diffuser</li>
                                    </ul>
                                </div>
                                <div className="bg-red-50/50 dark:bg-red-900/10 p-8 rounded-2xl border border-red-100 dark:border-red-900/20">
                                    <h4 className="font-display font-bold uppercase tracking-tight mb-4 text-red-700 dark:text-red-400">Cons</h4>
                                    <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                                        <li>No roll-on or pre-diluted option — requires a diffuser or separate carrier oil for topical use</li>
                                        <li>10mL per blend goes quickly if all three are used regularly</li>
                                        <li>Less targeted than single oils for people with a specific anxiety type in mind</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <hr className="my-16 opacity-10" />

                        <h2 className="font-display text-4xl font-bold mb-8 uppercase tracking-tighter">How to Use Essential Oils for Anxiety</h2>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Diffusion (Most Common)</h3>
                        <p>Add 3–10 drops to a diffuser with water per the diffuser&#39;s instructions. Run for 30–60 minutes. Diffusion fills your environment with aromatic molecules and is the most effective method for general mood and anxiety support. Don&#39;t run a diffuser continuously — 30–60 minute sessions with breaks are more effective and safer than constant diffusion.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Topical Application</h3>
                        <p>Always dilute pure essential oils before skin contact. The standard dilution is 1–3%: approximately 6–18 drops of essential oil per 30mL (1 oz) of carrier oil. Common carrier oils include fractionated coconut oil, jojoba, and sweet almond oil. Apply to pulse points — wrists, temples, behind the ears, back of the neck. These areas have blood vessels close to the surface, which aids absorption and keeps the scent close to your nose for continued inhalation.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Direct Inhalation</h3>
                        <p>For acute anxiety moments, place 1–2 drops on your palms, rub them together, cup your hands over your nose and mouth, and inhale slowly for 3–5 breaths. This is the fastest delivery method and works well for panic-adjacent moments when you need immediate effect. The Worry Free roll-on is designed for this method.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Bath</h3>
                        <p>Add 5–10 drops of your chosen oil to 1 tablespoon of carrier oil or unscented bath gel, then add to running bath water. Never add pure essential oil directly to bath water — it won&#39;t disperse evenly and can cause skin irritation. The warm water enhances absorption and the steam carries the aromatic compounds effectively.</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4 uppercase tracking-tight">Pillow and Linen</h3>
                        <p>Add 1–2 drops to your pillowcase or a cotton ball placed near your pillow. This provides gentle overnight inhalation and is particularly effective with Roman chamomile and lavender for sleep anxiety.</p>

                        <hr className="my-16 opacity-10" />

                        <h2 className="font-display text-4xl font-bold mb-8 uppercase tracking-tighter">Safety — Important Before You Start</h2>

                        <p><strong>Never ingest essential oils</strong> unless working with a qualified clinical aromatherapist. Despite what some brands and online communities suggest, internal use of essential oils carries real risks of toxicity and mucous membrane damage. All the therapeutic benefits described in this article are achievable through inhalation and properly diluted topical application.</p>

                        <p><strong>Bergamot is photosensitizing.</strong> If applied topically, it increases your skin&#39;s sensitivity to UV light and can cause burns or discoloration. Use it in the evening if applying to skin, or use exclusively through diffusion during the day.</p>

                        <p><strong>Clary sage during pregnancy.</strong> If you are pregnant, avoid clary sage entirely — it can stimulate uterine contractions. Also approach rosemary, thyme, and cinnamon oils with caution during pregnancy.</p>

                        <p><strong>Pets — particularly cats.</strong> Many essential oils are toxic to cats, including tea tree, eucalyptus, peppermint, clove, and thyme. Cats lack the liver enzyme to metabolize certain aromatic compounds. If you have cats, research pet safety before diffusing any oil, and ensure cats can leave rooms where oils are being diffused.</p>

                        <p><strong>Skin patch test.</strong> Before using any diluted oil regularly on skin, apply a small amount to the inside of your wrist and wait 24 hours for any reaction. Even properly diluted pure oils can cause sensitivity in some individuals.</p>

                        <p><strong>Citrus oils and sun exposure.</strong> Cold-pressed citrus oils (bergamot, lemon, grapefruit) are photosensitizing. Steam-distilled versions are generally not. Check your oil&#39;s extraction method if you&#39;re using citrus oils topically.</p>

                        <hr className="my-16 opacity-10" />

                        <h2 className="font-display text-4xl font-bold mb-8 uppercase tracking-tighter">Does Science Support Essential Oils for Anxiety?</h2>

                        <p>The evidence base is genuinely promising, though not as conclusive as some brands suggest.</p>

                        <p>Lavender has the strongest research support. A 2019 review examining 71 studies found that lavender inhalation significantly reduced anxiety levels on clinically validated scales. A separate line of research on Silexan — an oral lavender preparation, not inhaled oil — found it comparable to low-dose lorazepam for generalized anxiety, which supports the biological mechanism even if the delivery differs. Multiple studies show lavender inhalation reduces cortisol, heart rate, and blood pressure measurably.</p>

                        <p>Bergamot has good supporting evidence for stress reduction. Studies show inhalation reduces salivary cortisol and improves mood in stressed participants. Its GABA-modulating properties have been confirmed in animal models.</p>

                        <p>Ylang ylang has demonstrated blood pressure and heart rate reduction in multiple controlled studies — the fastest physical effect of any oil on this list.</p>

                        <p>Frankincense, roman chamomile, and clary sage have less specific clinical research but have compelling mechanistic evidence — the compounds in these oils interact with known receptor systems involved in anxiety, stress, and sedation.</p>

                        <p>The broader field of aromatherapy for anxiety received a significant boost from a 2025 review by Caballero-Gallardo et al., which found that inhalation aromatherapy and massage with essential oils were linked to improvements in anxiety symptoms, mood, fatigue, and sleep quality across multiple studies. The authors noted that further large randomized controlled trials are needed but characterized existing findings as encouraging.</p>

                        <p>The bottom line: essential oils are not a clinical treatment for anxiety disorders. They are a low-risk, accessible, and increasingly evidence-supported complement to other anxiety management strategies. Used consistently alongside proper sleep, exercise, and professional support where needed, they can meaningfully contribute to a calmer baseline.</p>

                        <hr className="my-16 opacity-10" />

                        <h2 className="font-display text-4xl font-bold mb-8 uppercase tracking-tighter">FAQ</h2>

                        <p><strong>Do I need a diffuser to use essential oils for anxiety?</strong><br />No — direct palm inhalation and topical application work without a diffuser. However, a diffuser is the most convenient method for sustained ambient benefit and the one most people find easiest to use consistently. If you don&#39;t have a diffuser, the Worry Free roll-on on this list requires nothing.</p>

                        <p><strong>How long does it take to notice an effect?</strong><br />Inhalation produces the fastest effect — some people notice a shift in heart rate and mental state within minutes. Consistent daily use over 1–2 weeks tends to produce more reliable, sustained anxiety reduction than occasional use.</p>

                        <p><strong>Can I mix oils from different brands?</strong><br />Yes, as long as both are pure, undiluted oils. The botanical source matters more than the brand for blending. Plant Therapy and Edens Garden oils can be mixed freely.</p>

                        <p><strong>How long do essential oils last?</strong><br />Most pure essential oils last 1–3 years when stored properly — in a dark glass bottle, away from heat and light. Citrus oils have shorter shelf lives (1 year). Frankincense and sandalwood actually improve with age. Keep caps tightly closed and store away from sunlight.</p>

                        <p><strong>Are essential oils safe for children?</strong><br />Some oils are safe for children when properly diluted at much lower concentrations than for adults. Plant Therapy&#39;s KidSafe line specifically identifies oils safe for children. Roman chamomile (on this list) is KidSafe certified. Avoid eucalyptus, peppermint, and rosemary around children under 10. When in doubt, consult Plant Therapy&#39;s certified aromatherapists — they offer this service free to customers.</p>

                        <p><strong>What carrier oil should I use?</strong><br />Fractionated coconut oil is the most neutral, odorless, and widely recommended carrier oil — it won&#39;t alter the scent of your essential oil and has an indefinite shelf life. Jojoba is excellent for facial application. Sweet almond oil is good for body massage. Any of these work with the oils on this list.</p>

                        <p><strong>Can I use essential oils if I take anxiety medication?</strong><br />Generally yes for inhalation. Consult your prescribing doctor if you&#39;re using them topically at high frequency, particularly with lavender and clary sage which interact with some medications. Essential oils should complement, not replace, prescribed anxiety treatment.</p>

                        <div className="text-center py-20 bg-slate-50 dark:bg-slate-900 rounded-[3.5rem] px-12 border border-slate-100 dark:border-slate-800 shadow-xl max-w-4xl mx-auto my-32">
                            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter italic leading-none text-balance">Final Verdict</h2>
                            <p>For most people, the <strong>Plant Therapy Lavender at $10</strong> is the right starting point. The research behind it is the most extensive of any essential oil for anxiety, the brand quality is verifiable, and the versatility means it&#39;s useful morning, afternoon, and night. Start here.</p>
                            <p>If your anxiety tends to hit in the morning or comes with low mood, add <strong>NOW Foods Bergamot at $15</strong> — its uplifting-while-calming effect is something lavender alone doesn&#39;t provide.</p>
                            <p>For nighttime anxiety and racing thoughts at bedtime, <strong>Plant Therapy Roman Chamomile at $25</strong> is worth the higher price per mL. Use it in a bedroom diffuser 30 minutes before sleep.</p>
                            <p>If you want something to carry with you for anxiety that happens away from home, <strong>Plant Therapy Worry Free Roll-On at $13</strong> is the only product on this list that works on-the-go with zero preparation.</p>
                            <p>And if you&#39;re buying for someone else or want a complete starter experience, <strong>Plant Therapy Relaxation Set at $30</strong> gives you three expertly formulated blends that cover morning, evening, and sleep — everything needed to build a genuine aromatherapy routine from day one.</p>
                        </div>
                    </div>

                    <ShareSection title="Best Essential Oils for Anxiety (Compared): Single Oils, Blends & Roll-Ons" />
                    <CommentsSection articleId="essential-oils-anxiety" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
