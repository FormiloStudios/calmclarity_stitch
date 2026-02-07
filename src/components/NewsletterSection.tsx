export function NewsletterSection() {
    return (
        <section className="bg-white/5 py-32 border-t border-white/10">
            <div className="max-w-xl mx-auto px-6 text-center">
                <h3 className="font-display text-4xl font-bold mb-6 text-white">
                    The Weekly Clarity
                </h3>
                <p className="text-muted mb-10 text-lg font-light">
                    Join our inner circle for weekly reflections on wellness, design, and
                    the art of living well.
                </p>
                <form className="flex flex-col sm:flex-row gap-0 border border-white/20 focus-within:border-white transition-colors">
                    <input
                        className="flex-grow bg-transparent border-none focus:ring-0 px-6 py-4 text-sm tracking-wide text-white placeholder:text-muted/50"
                        placeholder="Your email address"
                        type="email"
                    />
                    <button
                        className="bg-white text-black px-10 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-muted transition-colors"
                        type="submit"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
