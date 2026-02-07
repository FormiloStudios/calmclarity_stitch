import { Nav } from "@/components/Nav";
import { StoryHeader } from "@/components/StoryHeader";
import { StoryContent } from "@/components/StoryContent";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export default function StoryPage() {
    return (
        <>
            <Nav />
            {/* Background for the entire story page to match design */}
            <main className="min-h-screen bg-background-dark text-white selection:bg-white/20">
                <StoryHeader />
                <StoryContent />
                <NewsletterSection />
            </main>
            <Footer />
        </>
    );
}
