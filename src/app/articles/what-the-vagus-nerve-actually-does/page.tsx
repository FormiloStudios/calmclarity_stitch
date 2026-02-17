import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
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
                            Vagus Nerve
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                            What the Vagus Nerve Actually Does (And Why You Should Care)
                        </h1>
                        <div className="flex items-center justify-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <span>February 2026</span>
                        </div>
                    </header>

                    <AffiliateDisclosure />

                    <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                        <div className="lg:w-full">
                            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 font-display italic text-center">
                                You&#39;ve heard about the vagus nerve, here&#39;s what it actually does in your body and why it holds the key to calming anxiety fast.
                            </p>
                        </div>
                    </div>

                    <div className="my-24 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-3xl p-16 text-center bg-slate-50/50 dark:bg-white/2">
                        <div className="mb-6 flex justify-center">
                            <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700">coffee</span>
                        </div>
                        <h2 className="font-display text-3xl font-bold mb-4 text-slate-900 dark:text-white">Article Brewing</h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                            We&#39;re currently crafting this piece to bring you the deepest insights into your nervous system. This article will be ready to read very soon.
                        </p>
                    </div>
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
