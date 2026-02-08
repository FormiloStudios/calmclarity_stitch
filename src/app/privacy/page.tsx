import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <>
            <Nav />
            <main className="max-w-3xl mx-auto px-6 py-40 min-h-screen">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-12 text-white">Privacy Policy</h1>

                <div className="space-y-12 text-lg text-muted font-light leading-relaxed">
                    <section>
                        <h2 className="text-white font-medium text-xl mb-4">What We Collect</h2>
                        <p>
                            We only collect your email address when you sign up for our newsletter. That&#39;s it.
                            We use it to send you helpful articles and tips, nothing else.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-medium text-xl mb-4">How We Protect It</h2>
                        <p>
                            Your email is never sold, shared, or handed over to third parties.
                            We use secure, industry-standard systems to keep your information safe.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-medium text-xl mb-4">Your Control</h2>
                        <p>
                            You can unsubscribe anytime by clicking the link at the bottom of any email we send.
                            No hard feelings.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
