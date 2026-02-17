import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function ArticlePage() {
    return (
        <>
            <Nav />
            <main className="min-h-screen flex items-center justify-center pt-20">
                <div className="max-w-xl mx-auto px-6 w-full">
                    <div className="border-2 border-dashed border-slate-200 dark:border-white/10 rounded-3xl p-16 text-center bg-slate-50/50 dark:bg-white/2 transition-all hover:bg-slate-50 dark:hover:bg-white/5">
                        <div className="mb-6 flex justify-center">
                            <span className="material-symbols-outlined text-7xl text-primary animate-pulse">coffee</span>
                        </div>
                        <h1 className="font-display text-4xl font-bold mb-4 text-slate-900 dark:text-white">This Article is Brewing</h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                            We&#39;re currently deep in the research phase for this piece. Check back soon for the full deep-dive into your nervous system.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
