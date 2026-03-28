'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function UnlockDraftsContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const secret = searchParams.get('secret');

    useEffect(() => {
        // The secret key to unlock drafts
        const MASTER_SECRET = 'CLARITY26';

        if (secret === MASTER_SECRET) {
            // Set the cookie to expire in 30 days
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 30);
            
            document.cookie = `dev_access=true; path=/; expires=${expirationDate.toUTCString()}; SameSite=Lax`;
            
            // Redirect to the first draft page (Journal 3)
            // Using window.location.href to ensure a full refresh so Middleware sees the new cookie
            window.location.href = '/journal/3';
        } else if (secret) {
            // Incorrect secret
            alert('Incorrect secret key.');
            router.push('/');
        }
    }, [secret, router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
            <div className="text-center p-8 max-w-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl">
                <h1 className="text-2xl font-display font-bold mb-4 italic tracking-widest text-primary">Unlocking Drafts...</h1>
                <p className="text-sm opacity-60 mb-8 lowercase tracking-widest">Verifying access to developer tools.</p>
                {!secret && (
                    <div className="text-xs opacity-40 uppercase tracking-[0.3em]">
                        Please provide a secret key in the URL starting with ?secret=
                    </div>
                )}
            </div>
        </div>
    );
}

export default function UnlockDraftsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UnlockDraftsContent />
        </Suspense>
    );
}
