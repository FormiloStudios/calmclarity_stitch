import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";

export default function LoadingArticle() {
    return (
        <>
            <Nav />
            <main className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center">
                <article className="max-w-2xl mx-auto px-6 text-center">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 block">
                        Coming Soon
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
                        This One&#39;s Still Brewing
                    </h1>
                    <div className="prose prose-lg dark:prose-invert prose-slate mx-auto font-light leading-relaxed mb-12">
                        <p>
                            We&#39;re working on this article and want to make sure it&#39;s actually helpful, not just another generic blog post you&#39;ll skim and forget.
                        </p>
                        <p>
                            It&#39;ll be ready soon. In the meantime, check out what&#39;s already live.
                        </p>
                    </div>
                    <a
                        href="/"
                        className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all"
                    >
                        Back to Home
                    </a>
                </article>
            </main>
            <NewsletterSection />
            <Footer />
        </>
    );
}
