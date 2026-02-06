import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { ScrollObserver } from "@/components/ScrollObserver";

const articles = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeSPggPie6sOfEV81ZemgLLWScaKd-zx46HRlSFtMEJWg-ry3tHA8memjIUQHSt9u6SuRE-Z0MFjUrSs3-Dia9tXdjn4zCqP0d65XbGn-xw9pS0g5fqshSHEZfHuf21qLlMcthrjQ3rMzlXARy7aVUwB2DlDbEdq-DdR6QyoaDnuGF8uLkVjNxq63V0AtdUDQv3jDl9flugzMSMcV2ZJFk8oy1C1rhDipbSRK1zoFdhqAbmc8Lrm0KBdbmF4Ppeq4gZYbeZeaaAg",
    category: "Neurology",
    readTime: "8 Min Read",
    title: "The Neuro-Architecture of Focus: Rethinking Modern Productivity",
    description: "How high-performance environments reshaped our neural pathways, and the biological protocols required to reclaim deep cognitive states in a distracted world.",
    href: "#"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDT6EbxVsAQeLLxE8f4s8f8y3YGak4Mluc4v7nkkP5LoDeqMxPu4JX2UHdWUCWqEBGJPPlmjvZVErNdXBDSdOC3US_fV3i0HR29cEooCxZMuD2cTKEAFd7R56uNWY5F814rr4vDZGFinJV49iYUglbVGBioG_2jm1Cv3cpJjaFNF-HYQiVuFDJM8vc5qNoOVvfdPyHmvBqIZOhcX-vBAQ3dss2c4q5qV1hYRd-4vecrcSNLoEpE0J-GjC9uWRvbE5kEFB7T_Z8Kzw",
    category: "Endocrinology",
    readTime: "12 Min Read",
    title: "Optimizing the Cortisol Curve for Sustained Resilience",
    description: "Beyond stress management. Learn how to synchronize your biological clock with your endocrine system to eliminate the 3 PM slump and improve nocturnal recovery.",
    href: "#"
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3caRDpaXKs1oyWlaxrjUBl_8Y57N5o_0XzkOXqeXbYzrif6OMai7dbfeTB0cHbPPVfgoN5gMb7J7Uo_DVI7mS-sfUgjVWop317RIuU8k7QuZrr1Iz7Bhnkbd_j6C8uOTfkfMCBOiNnQPdz09Q-6Abp2dQh0G8Qu5UdvHBfPnHKZdfijWpO1Ws3RikOhgLfLTkvM2c5-9yG5V55zyyxmHbknMfY-QUW6nJGew-U8BGzczBAOWqiBaWgq-fY4f9AgxACO0QtQkNSw",
    category: "Supplementation",
    readTime: "15 Min Read",
    title: "The Magnesium Protocol: A Deep Dive into Cellular Energy",
    description: "Not all magnesium is created equal. We examine the bioavailability of seven different forms and their specific impacts on sleep quality and executive function.",
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
