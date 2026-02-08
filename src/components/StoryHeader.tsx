import Image from "next/image";

export function StoryHeader() {
    return (
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
            <div className="flex flex-col md:flex-row items-start justify-between gap-16">
                <div className="flex-1 text-left">
                    <h1 className="font-display text-5xl md:text-8xl font-bold leading-[1.1] text-white animate-fade-in-up">
                        Hi, I’m <br />
                        <span className="italic">Claire Miller</span>
                    </h1>
                    <div className="mt-8 space-y-6 text-lg text-muted font-light leading-relaxed max-w-xl animate-fade-in-up delay-100">
                        <p>
                            If you&#39;ve landed here, chances are you know the feeling,
                            You&#39;re exhausted, but you can&#39;t turn off.
                        </p>
                        <p>
                            Your brain is on overdrive. You lie in bed replaying conversations.
                            You sit at your desk unable to focus, even though you desperately
                            need to. You feel on edge for no clear reason, like your body
                            forgot how to relax.
                        </p>
                        <p>
                            For a long time, I watched people around me struggle with this exact
                            problem. And the advice they were getting? It wasn&#39;t helping.
                        </p>
                        <p className="italic text-white/80">
                            &quot;Just meditate.&quot; &quot;Try yoga.&quot; &quot;Get more sleep.&quot;
                        </p>
                        <p>
                            All good ideas in theory, but they don&#39;t address what&#39;s
                            actually happening: <strong>Your nervous system is stuck.</strong>
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 sticky top-32">
                    <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/claire-miller.jpeg"
                            alt="Claire Miller"
                            fill
                            priority
                            className="object-cover object-[center_15%] scale-150"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
