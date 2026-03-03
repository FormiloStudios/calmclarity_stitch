import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";

export default function ArticlePage() {
    return (
        <>
            <Nav />
            <main className="pt-32 pb-24 min-h-screen flex items-center justify-center">
                <article className="max-w-3xl mx-auto px-6 text-center">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                        Coming Soon
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                        Best Fidget Rings for Anxiety (Tested & Compared)
                    </h1>
                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed">
                        <p className="text-2xl italic opacity-50">Article Brewing...</p>
                    </div>
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
