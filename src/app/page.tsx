import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterSection } from "@/components/NewsletterSection";
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
  },
  {
    image: "/val_article1.jpg",
    category: "Relationships",
    readTime: "6 Min Read",
    title: "Why You Feel Anxious Before Date Night (And How to Actually Enjoy It)",
    description: "Pre-date jitters are your nervous system in overdrive, here's how to calm down and actually have fun.",
    href: "#"
  },
  {
    image: "/val_article2.jpg",
    category: "Relationships",
    readTime: "10 Min Read",
    title: "How to Stop Relationship Anxiety From Ruining Valentine's Day",
    description: "If you're spiraling with 'what ifs' about your relationship, your nervous system needs a reset, not reassurance.",
    href: "#"
  },
  {
    image: "/val_article3.jpg",
    category: "Lifestyle",
    readTime: "7 Min Read",
    title: "The Anti-Anxiety Valentine's Day (For People Who Hate the Pressure)",
    description: "Valentine's Day overwhelm is real, here's how to opt out of the chaos and actually enjoy yourself.",
    href: "#"
  }
];

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Nav />
      <Hero />

      <main className="max-w-6xl mx-auto px-6 py-32" id="feed">
        <div className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.5em] mb-4 opacity-50">Start Here</h2>
          <div className="h-px w-12 bg-slate-400 dark:bg-slate-600 mx-auto"></div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </section>
      </main>

      <NewsletterSection />
      <Footer />
    </>
  );
}
