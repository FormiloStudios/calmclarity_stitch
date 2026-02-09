"use client";

import { useState, useEffect } from "react";

interface Comment {
    id: string;
    name: string;
    text: string;
    date: string;
}

export function CommentsSection({ articleId }: { articleId: string }) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Load comments from localStorage on mount
    useEffect(() => {
        const savedComments = localStorage.getItem(`comments_${articleId}`);
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, [articleId]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) return;

        setIsSubmitting(true);

        const newComment: Comment = {
            id: Date.now().toString(),
            name: name.trim(),
            text: text.trim(),
            date: new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            }),
        };

        const updatedComments = [newComment, ...comments];
        setComments(updatedComments);
        localStorage.setItem(`comments_${articleId}`, JSON.stringify(updatedComments));

        setName("");
        setText("");

        // Brief delay to simulate network
        setTimeout(() => setIsSubmitting(false), 500);
    };

    return (
        <section className="py-20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-white mb-10 text-center">
                Reflections & Thoughts
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="mb-20 bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-muted mb-2 ml-1">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Anonymous Reader"
                        className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-light"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="comment" className="block text-xs uppercase tracking-[0.2em] text-muted mb-2 ml-1">
                        Your Comment
                    </label>
                    <textarea
                        id="comment"
                        rows={4}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="What are your thoughts on this approach?"
                        className="w-full bg-background-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors font-light resize-none"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg uppercase tracking-[0.2em] text-xs transition-all disabled:opacity-50"
                >
                    {isSubmitting ? "Postings..." : "Post Comment"}
                </button>
            </form>

            {/* Comments List */}
            <div className="space-y-12">
                {comments.length === 0 ? (
                    <p className="text-center text-muted font-light italic">No thoughts shared yet. Be the first to join the conversation.</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="border-l-2 border-primary/30 pl-8 py-2">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-white font-medium">{comment.name}</h4>
                                <span className="text-[10px] uppercase tracking-widest text-muted">{comment.date}</span>
                            </div>
                            <p className="text-muted font-light leading-relaxed">{comment.text}</p>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
