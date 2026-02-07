import Image from "next/image";

export function StoryHeader() {
    return (
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                <div className="flex-1 text-left">
                    <h1 className="font-display text-5xl md:text-8xl font-bold leading-[1.1] text-white">
                        Hi, I’m <br />
                        <span className="italic">Claire Miller</span>
                    </h1>
                    <p className="mt-8 text-xl text-muted max-w-md font-light leading-relaxed">
                        Founder of Calm Clarity and your guide to a more intentional,
                        high-performance lifestyle rooted in wellness.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnZRaCCmVjqy9MF_f9nris0UITASyuSRVyOKofnEY99_aTDhWaoEx9MO7zS2Yf8PhrF1QdIo6eCY47DbEKQHqK_arJ1zMCgccPaKdAVqXleMGnhLyCa0_Qk0fVH-_IFzwigDkUfbFZEOXtDNp-TtvTrmWpCnw_Gsr_47e1srcs-rSYEmKkDFM_pDCof4F9zolXXKHYWnCMlTVN5LjVfiIblzwRbEGqMLpKVjh3iBSTTeqgHjP32B3Z_Z4bReb77khmgsiSRIskiA"
                            alt="Claire Miller"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
