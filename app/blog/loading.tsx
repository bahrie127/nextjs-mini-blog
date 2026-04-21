export default function Loading() {
    return (
        <main className="min-h-screen bg-slate-50 p-8">
            <div className="mx-auto max-w-2xl">
                <div className="h-8 w-32 animate-pulse rounded bg-slate-200" />
                <div className="mt-6 space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-20 animate-pulse rounded-lg bg-slate-200" />
                    ))}
                </div>
               
            </div>
        </main>
    );
}