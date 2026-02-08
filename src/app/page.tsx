import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { ScrollObserver } from "@/components/ScrollObserver";

const articles = [
  {
    image: "/article1.jpg",
    category: "Neurology",
    readTime: "8 Min Read",
    title: "Why You Feel Anxious for No Reason And What Your Body Is Actually Trying to Tell You",
    description: "Your nervous system is stuck in survival mode, here's how to help it feel safe again.",
    href: "#"
  },
  {
    image: "/article2.jpg",
    category: "Sleep Science",
    readTime: "12 Min Read",
    title: "How to Stop Your Mind From Racing at Night (The Nervous System Fix)",
    description: "If you can't fall asleep even when you're exhausted, your body hasn't switched off yet, here's how to reset it.",
    href: "#"
  },
  {
    image: "/article3.jpg",
    category: "Vagus Nerve",
    readTime: "5 Min Read",
    title: "The 5-Minute Vagus Nerve Reset (When You Need to Calm Down Fast)",
    description: "A simple physical trick that tells your body to stop panicking and start calming down, in minutes.",
    href: "#"
  }
];

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Nav />
      <Hero />

      <main className="max-w-4xl mx-auto px-6 py-32 space-y-40" id="feed">
        <div className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.5em] mb-4 opacity-50">The Brief</h2>
          <div className="h-px w-12 bg-slate-400 dark:bg-slate-600 mx-auto"></div>
        </div>

        <section className="space-y-40">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </section>

        <div className="pt-20 border-t border-slate-200 dark:border-white/10 flex justify-between items-center">
          <span className="text-xs uppercase tracking-widest opacity-40">Page 01 / 12</span>
          <button className="flex items-center space-x-4 group">
            <span className="text-sm uppercase tracking-widest font-bold">Older Entries</span>
            <span className="material-icons group-hover:translate-x-2 transition-transform">east</span>
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
