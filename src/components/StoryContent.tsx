import Image from "next/image";

export function StoryContent() {
    return (
        <article className="max-w-6xl mx-auto px-6 pb-32">
            {/* Why I Started Section */}
            <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-white">
                        Why this site exists
                    </h2>
                    <div className="space-y-6 text-lg leading-relaxed text-muted font-light">
                        <p>
                            Calm Clarity was built out of frustration with how hard it is to
                            find straightforward, honest information about nervous system
                            regulation. The actual science exists. The tools that work
                            exist. They&#39;re just buried under overly technical research,
                            wellness marketing, and advice that sounds good but doesn&#39;t
                            hold up.
                        </p>
                        <p>
                            This site cuts through that. Every article is researched
                            carefully, written in plain English, and focused on what&#39;s
                            practical - not what&#39;s trending.
                        </p>
                    </div>
                </div>
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/5 md:translate-y-12 shadow-2xl">
                    <Image
                        src="/nervousystem.jpg"
                        alt="Nervous System - Biological Regulation"
                        fill
                        className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                    />
                </div>
            </section>

            {/* What You'll Find Section */}
            <section className="mb-32">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                        What you&#39;ll find here
                    </h2>
                    <p className="text-lg text-muted font-light">
                        Practical explanations of what&#39;s happening in your body and why, honest reviews of physical tools like weighted blankets and acupressure mats that have real mechanisms behind them, and supplement information grounded in actual research rather than marketing claims.
                    </p>
                    <p className="mt-6 text-lg text-muted font-light">
                        No fluff. No agenda. Just clear information for people who are tired of feeling tired.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 relative h-[500px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                        <Image
                            src="/welllnesstools.jpg"
                            alt="Wellness Aesthetic"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <div className="order-1 md:order-2 flex flex-col justify-center space-y-10 p-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm h-full">
                        <h3 className="font-display text-3xl text-white">Instead, you&#39;ll find:</h3>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start">
                                <span className="material-symbols-outlined text-white/80 text-2xl mt-1">article</span>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Practical Clarity</h4>
                                    <p className="text-muted font-light leading-relaxed">
                                        Articles that explain what&#39;s happening in your body (in plain English) and what you can actually do about it.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <span className="material-symbols-outlined text-white/80 text-2xl mt-1">healing</span>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Real Solutions</h4>
                                    <p className="text-muted font-light leading-relaxed">
                                        From weighted blankets that ground your nervous system, to specific supplements that target the biological roots of anxiety.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <span className="material-symbols-outlined text-white/80 text-2xl mt-1">check_circle</span>
                                <div>
                                    <h4 className="text-white font-medium mb-1">No Fluff</h4>
                                    <p className="text-muted font-light leading-relaxed">
                                        I&#39;m not here to sell you on trends. If something&#39;s on this site, it&#39;s because the science checks out and real people find it helpful.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* My Promise Section */}
            <section className="max-w-4xl mx-auto text-center bg-gradient-to-br from-white/5 to-transparent p-16 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                <h2 className="font-display text-3xl md:text-5xl font-bold mb-10 text-white">
                    One promise
                </h2>
                <div className="space-y-8 text-xl leading-relaxed text-muted font-light">
                    <p>
                        Nothing gets recommended here without thorough research behind it. If
                        it&#39;s on this site, there&#39;s a reason - and that reason will
                        be explained to you, not just asserted.
                    </p>
                    <p className="text-white font-normal">
                        You&#39;re in the right place. Let&#39;s make this simpler.
                    </p>
                    <div className="pt-12">
                        <p className="font-display italic text-4xl text-white">
                            - The Calm Clarity Team
                        </p>
                    </div>
                </div>
            </section>
        </article>
    );
}
