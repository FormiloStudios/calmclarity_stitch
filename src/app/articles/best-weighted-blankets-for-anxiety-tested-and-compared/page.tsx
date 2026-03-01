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
                            Best Weighted Blankets for Anxiety (Tested & Compared)
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
                                You&#39;ve heard weighted blankets help with anxiety. You&#39;ve seen them everywhere. But standing in front of dozens of options, trying to figure out which one is actually worth buying - that&#39;s a different story.
                            </p>
                        </div>
                        <div className="lg:w-1/2 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/evergreen_2.jpg"
                                alt="Cozy weighted blanket on a bed"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p>Some are $60. Some are $200. Some say &quot;cooling,&quot; others say &quot;cozy.&quot; Some use glass beads, others don&#39;t use beads at all.</p>
                        <p>And when you&#39;re spending money on something to help you sleep and manage anxiety, you want to get it right the first time.</p>
                        <p>After extensive research, analyzing hundreds of customer reviews, and comparing specs across dozens of weighted blankets, here&#39;s what actually matters - and which blankets are worth your money.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">What to Look For in a Weighted Blanket</h2>
                        <p>Before getting into specific blankets, here&#39;s what actually matters:</p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Weight</h3>
                        <p>The general rule: 10% of your body weight.</p>
                        <p>If you weigh 150 pounds, you&#39;d want a 15-pound blanket. If you weigh 180 pounds, go for 18-20 pounds.</p>
                        <p>But this isn&#39;t a hard rule. Some people prefer slightly lighter (especially if they feel claustrophobic easily). Others prefer heavier for more pressure.</p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/evergreen_2a.jpg"
                                alt="Weighted blanket texture closeup"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Fabric</h3>
                        <ul>
                            <li><strong>Cotton:</strong> Breathable, natural, good year-round. Most versatile.</li>
                            <li><strong>Minky/Sherpa/Fleece:</strong> Soft and cozy but can get hot. Better for cold climates or winter use only.</li>
                            <li><strong>Knit (no beads):</strong> Very breathable, stylish, but more expensive. Great for hot sleepers.</li>
                            <li><strong>Bamboo or cooling fabrics:</strong> Best for people who overheat. More expensive but worth it if you run hot.</li>
                        </ul>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">Weight Distribution</h3>
                        <p>Cheap weighted blankets have uneven weight distribution. The beads shift to one side, leaving you with heavy spots and light spots.</p>
                        <p>Look for blankets with small pockets (4x4 inches or smaller) that keep the fill evenly distributed. The smaller the pocket, the better.</p>

                        <h2 className="font-display text-4xl font-bold mt-20 mb-8 text-slate-900 dark:text-white">8 Best Weighted Blankets for Anxiety</h2>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">1. YnM Weighted Blanket - 🏆 Best Overall</h3>
                        <p>YnM is the most popular weighted blanket on Amazon for a reason. It has a 7-layer design with 2x2-inch compartments, which means the glass beads stay evenly distributed. The microfiber is breathable enough for year-round use.</p>
                        <p><a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check YnM on Amazon →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">2. Bare Home Weighted Blanket - 💰 Best Budget</h3>
                        <p>This is the best budget option if you want natural materials. It&#39;s 100% cotton with non-toxic glass beads, which is rare at this price point. The weight distribution is solid, and it&#39;s gentle on sensitive skin.</p>
                        <p><a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check Bare Home on Amazon →</a></p>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg my-12">
                            <Image
                                src="/evergreen_2b.jpg"
                                alt="Relaxing with a weighted blanket"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">3. Gravity Weighted Blanket - 😴 Best for Easy Cleaning</h3>
                        <p>Gravity nailed the duvet cover system. The inner weighted blanket is separate from the outer cover, so you can wash the cover frequently without dealing with the heavy blanket. The weight distribution is excellent.</p>
                        <p><a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check Gravity on Amazon →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">4. Casper Weighted Blanket - ✨ Best Premium Cotton</h3>
                        <p>Casper is known for quality sleep products, and their weighted blanket lives up to the reputation. The 100% cotton outer layer is breathable and soft. It&#39;s designed to work in all seasons.</p>
                        <p><a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check Casper on Amazon →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">5. Bearaby Cotton Hand-Knit Weighted Blanket - 🌿 Best for Hot Sleepers</h3>
                        <p>This is completely different from traditional weighted blankets. Instead of beads, the weight comes from the thick, chunky knit cotton itself. This makes it incredibly breathable - no internal filling means air flows freely.</p>
                        <p><a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check Bearaby on Amazon →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">6. LUXOME Luxury Weighted Blanket - 👑 Best Luxury</h3>
                        <p>This is the luxury option. The reversible cover has a cool bamboo side for warm nights and a plush minky side for cozy nights. The inner weighted blanket is 100% percale cotton.</p>
                        <p><a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check LUXOME on Amazon →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">7. Degrees of Comfort Weighted Blanket - 🔄 Best Reversible</h3>
                        <p>This comes with a removable minky plush cover that&#39;s perfect for winter. Remove the cover, and the inner blanket is breathable enough for hot sleepers or warmer weather. You&#39;re essentially getting two blankets in one.</p>
                        <p><a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check Degrees of Comfort on Amazon →</a></p>

                        <h3 className="font-display text-2xl font-bold mt-12 mb-4">8. Wemore Fleece Weighted Blanket - 🛋️ Best for Winter/Cozy</h3>
                        <p>This is the coziest, warmest option on the list. One side is jacquard fleece, the other side is fluffy sherpa. It&#39;s ultra-soft and perfect for cold climates or people who love being extra warm.</p>
                        <p><a href="https://amzn.to/4aol6kK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold">Check Wemore on Amazon →</a></p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Does Science Actually Support Weighted Blankets for Anxiety?</h2>
                        <p>Yes. Weighted blankets work through <strong>deep pressure stimulation</strong> (also called deep touch pressure therapy).</p>
                        <p>When you apply gentle, even pressure across your body, it activates your parasympathetic nervous system - the part that calms you down. This increases serotonin and melatonin (which help you relax and sleep) and decreases cortisol (your stress hormone).</p>
                        <p>Research shows weighted blankets can reduce anxiety, improve sleep quality, and help with nervous system regulation.</p>

                        <h2 className="font-display text-3xl font-bold mt-16 mb-6">Quick Comparison Table</h2>
                        <div className="overflow-x-auto my-8">
                            <table className="min-w-full text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 dark:border-slate-700">
                                        <th className="text-left py-4 px-2">Blanket</th>
                                        <th className="text-left py-4 px-2">Best For</th>
                                        <th className="text-left py-4 px-2">Material</th>
                                        <th className="text-left py-4 px-2">Price</th>
                                        <th className="text-left py-4 px-2">Weight Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="py-4 px-2 font-bold">YnM</td>
                                        <td className="py-4 px-2">Most People</td>
                                        <td className="py-4 px-2">Microfiber/Cotton</td>
                                        <td className="py-4 px-2">$50-80</td>
                                        <td className="py-4 px-2">15, 20, 25 lbs</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="py-4 px-2 font-bold">Bare Home</td>
                                        <td className="py-4 px-2">Budget Cotton</td>
                                        <td className="py-4 px-2">100% Cotton</td>
                                        <td className="py-4 px-2">$75</td>
                                        <td className="py-4 px-2">15, 17, 20 lbs</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="py-4 px-2 font-bold">Gravity</td>
                                        <td className="py-4 px-2">Easy Cleaning</td>
                                        <td className="py-4 px-2">Microfiber + Duvet</td>
                                        <td className="py-4 px-2">$124</td>
                                        <td className="py-4 px-2">15, 20, 35 lbs</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="py-4 px-2 font-bold">Casper</td>
                                        <td className="py-4 px-2">Trusted Brand</td>
                                        <td className="py-4 px-2">Cotton</td>
                                        <td className="py-4 px-2">$144</td>
                                        <td className="py-4 px-2">15, 20, 25 lbs</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="py-4 px-2 font-bold">Bearaby</td>
                                        <td className="py-4 px-2">Hot Sleepers</td>
                                        <td className="py-4 px-2">Knit Cotton</td>
                                        <td className="py-4 px-2">$199</td>
                                        <td className="py-4 px-2">10, 15, 20, 25 lbs</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="py-4 px-2 font-bold">LUXOME</td>
                                        <td className="py-4 px-2">Luxury</td>
                                        <td className="py-4 px-2">Bamboo/Minky</td>
                                        <td className="py-4 px-2">$205</td>
                                        <td className="py-4 px-2">15, 20, 25 lbs</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="py-4 px-2 font-bold">Degrees of Comfort</td>
                                        <td className="py-4 px-2">Hot/Cold Versatility</td>
                                        <td className="py-4 px-2">Polyester + Minky</td>
                                        <td className="py-4 px-2">$92</td>
                                        <td className="py-4 px-2">15, 18, 20 lbs</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="py-4 px-2 font-bold">Wemore</td>
                                        <td className="py-4 px-2">Winter Warmth</td>
                                        <td className="py-4 px-2">Sherpa/Fleece</td>
                                        <td className="py-4 px-2">$66</td>
                                        <td className="py-4 px-2">15, 20, 25 lbs</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <ShareSection title="Best Weighted Blankets for Anxiety (Tested & Compared)" />
                    <CommentsSection articleId="best-weighted-blankets" />
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
