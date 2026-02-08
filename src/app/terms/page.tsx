import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
    return (
        <>
            <Nav />
            <main className="max-w-3xl mx-auto px-6 py-40 min-h-screen">
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-12 text-white">Terms of Service</h1>

                <div className="space-y-12 text-lg text-muted font-light leading-relaxed">
                    <section>
                        <h2 className="text-white font-medium text-xl mb-4">Medical Disclaimer</h2>
                        <p>
                            The information on Calm Clarity is educational and based on research about nervous system regulation.
                            It is not medical advice, and it&#39;s not intended to diagnose, treat, or cure any condition.
                            Always talk to a healthcare professional before trying new supplements or making changes to your health routine.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-medium text-xl mb-4">Affiliate Disclosure</h2>
                        <p>
                            Some links on this site are affiliate links, which means I may earn a small commission if you purchase
                            through them, at no extra cost to you. I only recommend products I&#39;ve thoroughly researched and
                            genuinely believe can help. Your trust matters more than any commission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white font-medium text-xl mb-4">Use of Content</h2>
                        <p>
                            All content on this site is for personal use only. Please don&#39;t copy or republish articles without permission.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}
