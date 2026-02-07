import Image from "next/image";

export function StoryContent() {
    return (
        <article className="max-w-6xl mx-auto px-6 pb-32">
            {/* Why I Started Section */}
            <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-white">
                        Why I Started Calm Clarity
                    </h2>
                    <div className="space-y-6 text-lg leading-relaxed text-muted font-light">
                        <p>
                            I&#39;m not a neuroscientist. I&#39;m not a biohacker with a garage
                            full of equipment.
                        </p>
                        <p>
                            What I am is someone who got frustrated watching people suffer
                            through generic advice that didn&#39;t work, while the actual
                            solutions were buried in overly-technical forums and expensive
                            courses.
                        </p>
                        <p>So I started digging.</p>
                        <p>
                            I spent months researching the science behind nervous system
                            regulation, the physical tools that actually calm your body (not
                            just your mind), and the supplements that have real mechanisms
                            behind them — not just marketing hype.
                        </p>
                        <p>
                            And what I found was this: The tools exist. They&#39;re just not
                            being explained in a way normal people can use.
                        </p>
                        <p>That&#39;s what Calm Clarity is for.</p>
                    </div>
                </div>
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/5 md:translate-y-12 shadow-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=800"
                        alt="Abstract Nervous System"
                        fill
                        className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                    />
                </div>
            </section>

            {/* What You'll Find Section */}
            <section className="mb-32">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                        What You&#39;ll Find Here
                    </h2>
                    <p className="text-lg text-muted font-light">
                        This isn&#39;t a site that&#39;s going to throw complicated science at
                        you or tell you to overhaul your entire life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 relative h-[500px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=800"
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
                    My Promise to You
                </h2>
                <div className="space-y-8 text-xl leading-relaxed text-muted font-light">
                    <p>
                        I&#39;ll never recommend something I haven&#39;t thoroughly
                        researched. I&#39;ll explain why something works, not just tell you to
                        buy it. And I&#39;ll always keep things simple, because feeling calm
                        and clear-headed shouldn&#39;t require a biology degree.
                    </p>
                    <p className="text-white font-normal">
                        If you&#39;re tired of being tired and wired, you&#39;re in the right
                        place.
                    </p>
                    <p>Let&#39;s fix this together.</p>
                    <div className="pt-12">
                        <p className="font-display italic text-4xl text-white">
                            Claire Miller
                        </p>
                    </div>
                </div>
            </section>
        </article>
    );
}
