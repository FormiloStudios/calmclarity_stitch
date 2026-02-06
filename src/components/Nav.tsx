import Link from "next/link";

export function Nav() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center space-x-12">
                    <Link href="#" className="text-xl font-display font-bold tracking-tight">
                        CALM CLARITY
                    </Link>
                    <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
                        <Link href="#" className="hover:text-primary transition-colors">
                            The Brief
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors opacity-60">
                            The Toolkit
                        </Link>
                        <Link href="#" className="hover:text-primary transition-colors opacity-60">
                            The Story
                        </Link>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <button className="material-icons opacity-60 hover:opacity-100 transition-opacity">
                        search
                    </button>
                    <button className="px-5 py-2 border border-slate-900 dark:border-white text-xs uppercase tracking-widest font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                        Subscribe
                    </button>
                </div>
            </div>
        </nav>
    );
}
