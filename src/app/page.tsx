import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ScrollObserver } from "@/components/ScrollObserver";

const articles = [
  {
    image: "/val_article1.jpg",
    category: "Relationships",
    readTime: "6 Min Read",
    title: "Why You Feel Anxious Before Date Night (And How to Actually Enjoy It)",
    description: "Pre-date jitters are your nervous system in overdrive, here's how to calm down and actually have fun.",
    href: "/articles/why-you-feel-anxious-before-date-night"
  },
  {
    image: "/val_article2.jpg",
    category: "Relationships",
    readTime: "5 Min Read",
    title: "How to Stop Relationship Anxiety From Ruining Valentine's Day",
    description: "If you're spiraling with 'what ifs' about your relationship, your nervous system needs a reset, not reassurance.",
    href: "/articles/how-to-stop-relationship-anxiety-from-ruining-valentines-day"
  },
  {
    image: "/val_article3.jpg",
    category: "Lifestyle",
    readTime: "4 Min Read",
    title: "The Anti-Anxiety Valentine's Day (For People Who Hate the Pressure)",
    description: "Valentine's Day overwhelm is real, here's how to opt out of the chaos and actually enjoy yourself.",
    href: "/articles/the-anti-anxiety-valentines-day-for-people-who-hate-the-pressure"
  },
  {
    image: "/article1.jpg",
    category: "Neurology",
    readTime: "7 Min Read",
    title: "Why You Feel Anxious for No Reason (And What Your Body Is Actually Trying to Tell You)",
    description: "Your nervous system is stuck in survival mode, here is how to help it feel safe again.",
    href: "/articles/why-you-feel-anxious-for-no-reason"
  },
  {
    image: "/article2.jpg",
    category: "Sleep Science",
    readTime: "6 Min Read",
    title: "How to Stop Your Mind From Racing at Night (The Nervous System Fix)",
    description: "If you cannot fall asleep even when you are exhausted, your body has not switched off yet, here is how to reset it.",
    href: "/articles/how-to-stop-your-mind-from-racing-at-night"
  },
  {
    image: "/article3.jpg",
    category: "Vagus Nerve",
    readTime: "6 Min Read",
    title: "The 5 Minute Vagus Nerve Reset (When You Need to Calm Down Fast)",
    description: "A simple physical trick that tells your body to stop panicking and start calming down, in minutes.",
    href: "/articles/the-5-minute-vagus-nerve-reset"
  },
  {
    image: "/ccfeb263.1.jpg",
    category: "Neurology",
    readTime: "6 Min Read",
    title: "Why You Clench Your Jaw (And What It Means for Your Nervous System)",
    description: "That tight, sore jaw isn't just a bad habit, it's your nervous system holding tension it can't release.",
    href: "/articles/why-you-clench-your-jaw"
  },
  {
    image: "/ccfeb263.2.jpg",
    category: "Sleep Science",
    readTime: "7 Min Read",
    title: "Why You Wake Up at 3AM Every Night (And How to Stop It)",
    description: "That wide-awake-at-3AM feeling isn't random insomnia, it's a cortisol spike your body doesn't know how to stop.",
    href: "/articles/why-you-wake-up-at-3am-every-night"
  },
  {
    image: "/ccfeb263.3.jpg",
    category: "Neurology",
    title: "Why Meetings Make You Anxious (Even When You're Prepared)",
    description: "Being prepared doesn't stop the nerves, because meeting anxiety isn't about knowledge, it's about your nervous system treating performance like a threat.",
    href: "/articles/why-meetings-make-you-anxious"
  },
  {
    image: "/ccfeb263.4.jpg",
    category: "Lifestyle",
    title: "Why You're Exhausted After Hanging Out With Friends (Even If You Had Fun)",
    description: "Feeling drained after socializing isn't antisocial, it's your nervous system recovering from overstimulation.",
    href: "/articles/why-you-are-exhausted-after-hanging-out-with-friends"
  },
  {
    image: "/ccfeb263.5.jpg",
    category: "Vagus Nerve",
    title: "What the Vagus Nerve Actually Does (And Why You Should Care)",
    description: "You've heard about the vagus nerve, here's what it actually does in your body and why it holds the key to calming anxiety fast.",
    href: "/articles/what-the-vagus-nerve-actually-does"
  },
  {
    image: "/ccfeb263.6.jpg",
    category: "Neurology",
    title: "Why Your Stomach Gets Upset When You're Stressed (The Gut-Brain Connection)",
    description: "That nervous stomach isn't just in your head, your gut and brain are in constant conversation, and stress sends the whole system into chaos.",
    href: "/articles/why-your-stomach-gets-upset-when-you-are-stressed"
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
