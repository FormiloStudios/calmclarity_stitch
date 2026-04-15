import Image from "next/image";

export function StoryHeader() {
    return (
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
            <div className="flex flex-col md:flex-row items-start justify-between gap-16">
                <div className="flex-1 text-left">
                    <h1 className="font-display text-5xl md:text-8xl font-bold leading-[1.1] text-white animate-fade-in-up">
                        Cut Through the <br />
                        <span className="italic">Wellness Noise</span>
                    </h1>
                    <div className="mt-8 space-y-6 text-lg text-muted font-light leading-relaxed max-w-xl animate-fade-in-up delay-100">
                        <p>
                            If you&#39;ve landed here, chances are you know the feeling.
                            You&#39;re exhausted, but you can&#39;t turn off.
                        </p>
                        <p>
                            Your brain is on overdrive. You lie in bed replaying conversations.
                            You sit at your desk unable to focus. You feel on edge for no clear
                            reason, like your body forgot how to relax.
                        </p>
                        <p>
                            The advice people get for this? It usually isn&#39;t helping.
                        </p>
                        <p className="italic text-white/80">
                            &quot;Just meditate.&quot; &quot;Try yoga.&quot; &quot;Get more sleep.&quot;
                        </p>
                        <p>
                            All reasonable ideas - but they don&#39;t address what&#39;s
                            actually happening beneath the surface. Your nervous system
                            is stuck, and generic advice doesn&#39;t unstick it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
