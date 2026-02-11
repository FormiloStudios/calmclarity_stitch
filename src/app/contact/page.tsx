"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
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
        <>
            <Nav />
            <main className="max-w-3xl mx-auto px-6 py-40 min-h-screen">
                <div className="text-center mb-16">
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h1>
                    <p className="text-xl text-muted font-light">I&#39;d love to hear from you.</p>
                </div>

                <div className="space-y-12 text-lg text-muted font-light leading-relaxed mb-16">
                    <p>
                        Whether you have a question about something you read, want to suggest a topic,
                        or just need to share what&#39;s been helping you, I&#39;m here.
                    </p>
                </div>

                {status === "success" ? (
                    <div className="p-12 border border-white/20 bg-white/5 text-center animate-fade-in rounded-2xl">
                        <span className="material-symbols-outlined text-white text-5xl mb-6">task_alt</span>
                        <h2 className="text-white text-2xl font-bold mb-4">Message Received</h2>
                        <p className="text-muted leading-relaxed">
                            Thank you for reaching out. I read every message and will do my best to respond within 2-3 business days.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Name</label>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="Your full name"
                                    className="w-full bg-transparent border-b border-white/20 py-3 px-1 text-white focus:border-white transition-colors outline-none font-light"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Email</label>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-transparent border-b border-white/20 py-3 px-1 text-white focus:border-white transition-colors outline-none font-light"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold ml-1">Message</label>
                            <textarea
                                required
                                name="message"
                                rows={5}
                                placeholder="How can I help you?"
                                className="w-full bg-transparent border-b border-white/20 py-3 px-1 text-white focus:border-white transition-colors outline-none font-light resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-white text-black px-12 py-4 text-xs tracking-[0.2em] uppercase font-bold hover:bg-muted transition-all hover:scale-[1.02] active:scale-[0.98] w-full md:w-auto"
                        >
                            Send Message
                        </button>
                    </form>
                )}

                <div className="mt-16 text-sm text-muted/60 font-light leading-relaxed italic text-center">
                    <p>
                        I read every message and do my best to respond within 2-3 business days.
                        If you&#39;re reaching out about a specific article, feel free to mention which one so I can give you the most helpful response.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
