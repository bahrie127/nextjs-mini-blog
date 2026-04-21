import Link from "next/link";
import { createNote } from "../actions";

export default function NewNotePage() {
    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="mx-auto max-w-2xl">
                <Link href="/notes" className="text-blue-500 hover:underline">
                    &larr; Back to Notes
                </Link>
                <h1 className="mt-4 text-4xl font-bold text-slate-900">New Note</h1>
                <form action={createNote} className="mt-4 space-y-4">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-slate-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="mt-1 w-full rounded-lg border bg-white px-4 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-slate-700">
                            Content
                        </label>
                        <textarea
                            id="content"
                            name="content"
                            rows={4}
                            className="mt-1 w-full rounded-lg border bg-white px-4 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                    >
                        Create Note
                    </button>

                </form>

            </div>
            </div>

    );
}