"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <main className="min-h-screen bg-slate-50 p-8">
            <div className="mx-auto max-w-2xl">
                <h1 className="text-4xl font-bold text-red-600">Error</h1>
                <p className="mt-2 text-slate-600">{error.message}</p>
                <button
                    onClick={reset}
                    className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                    Try Again
                </button>
            </div>
        </main>
    );
}