import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
    image: string;
    category: string;
    readTime?: string;
    title: string;
    description: string;
    href: string;
}

export function ArticleCard({
    image,
    category,
    readTime,
    title,
    description,
    href,
}: ArticleCardProps) {
    return (
        <Link href={href} className="group block cursor-pointer fade-in-section">
            <div className="overflow-hidden mb-10 aspect-[16/9]">
                <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
            </div>
            <div className="max-w-2xl">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-4 block">
                    {category}{readTime && ` • ${readTime}`}
                </span>
                <h3 className="text-3xl md:text-4xl font-display mb-6 group-hover:underline decoration-1 underline-offset-8 transition-all">
                    {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-light">
                    {description}
                </p>
                <div className="inline-block mt-8 text-xs uppercase tracking-widest font-bold border-b-2 border-primary pb-1">
                    Read Full Article
                </div>
            </div>
        </Link>
    );
}
