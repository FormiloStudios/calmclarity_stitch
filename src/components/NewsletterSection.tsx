"use client";

import { useState } from "react";

export function NewsletterSection() {
    const [status, setStatus] = useState<"idle" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mykdkkzr", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    return (
        <section id="newsletter" className="bg-white/5 py-32 border-t border-white/10">
            <div className="max-w-xl mx-auto px-6 text-center">
                <h3 className="font-display text-4xl font-bold mb-6 text-white">
                    The Weekly Clarity
                </h3>
                <p className="text-muted mb-10 text-lg font-light">
                    Get Weekly Calm, Simple strategies to regulate your nervous system, straight to your inbox
                </p>

                {status === "success" ? (
                    <div className="p-6 border border-white/20 bg-white/5 animate-fade-in">
                        <p className="text-white font-medium">Thank you for subscribing!</p>
                        <p className="text-muted text-sm mt-2">Check your inbox for your first strategies soon.</p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-0 border border-white/20 focus-within:border-white transition-colors"
                    >
                        <input
                            required
                            name="email"
                            className="flex-grow bg-transparent border-none focus:ring-0 px-6 py-4 text-sm tracking-wide text-white placeholder:text-muted/50 font-light"
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
                )}
            </div>
        </section>
    );
}
