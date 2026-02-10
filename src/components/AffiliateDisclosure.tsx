export function AffiliateDisclosure() {
    return (
        <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
                {/* Subtle background accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-2 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-lg">info</span>
                    </div>
                    <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        <p className="font-light">
                            <span className="font-normal italic">Quick note:</span> This article contains affiliate links, which means I may earn a small commission if you purchase through them, at no extra cost to you. I only recommend products I&#39;ve researched and genuinely believe can help. Your trust matters more than any commission. As an Amazon Associate, I earn from qualifying purchases.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
