'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function UnlockDraftsContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const secret = searchParams.get('secret');

    useEffect(() => {
        const MASTER_SECRET = 'CLARITY26';

        if (secret === MASTER_SECRET) {
            // Set localStorage instead of cookies for better static compatibility
            localStorage.setItem('dev_access', 'true');
            
            // Redirect to home or journal page
            router.push('/journal/3');
        } else if (secret) {
            // Incorrect secret
            alert('Incorrect secret key.');
            router.push('/');
        }
    }, [secret, router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
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
