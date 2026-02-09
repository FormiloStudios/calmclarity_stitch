"use client";

import { useState } from "react";

export function ShareSection({ title }: { title: string }) {
    const [copied, setCopied] = useState(false);

    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sharePlatforms = [
        {
            name: "Twitter",
            icon: "X",
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
        },
        {
            name: "Facebook",
            icon: "FB",
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        },
        {
            name: "LinkedIn",
            icon: "LI",
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        },
    ];

    return (
        <section className="py-12 border-y border-white/10 my-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">Share this article</h3>
                    <p className="text-sm text-muted font-light">If you found this helpful, consider sharing it with someone who might need it.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        {sharePlatforms.map((platform) => (
                            <a
                                key={platform.name}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 transition-colors text-xs font-bold text-muted hover:text-white"
                                title={`Share on ${platform.name}`}
                            >
                                {platform.icon}
                            </a>
                        ))}
                    </div>
                    <div className="h-8 w-px bg-white/10"></div>
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all text-xs font-bold uppercase tracking-widest"
                    >
                        <span className="material-symbols-outlined text-sm">content_copy</span>
                        {copied ? "Copied!" : "Copy Link"}
                    </button>
                </div>
            </div>
        </section>
    );
}
