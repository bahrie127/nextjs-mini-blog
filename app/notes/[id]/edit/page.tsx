import Link from "next/link";
import { db } from "@/db";
import { notes } from "@/db/schema";
import { eq } from "drizzle-orm";
import { updateNote, deleteNote } from "../../actions";
import { notFound } from "next/navigation";

export default async function EditNotePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const noteId = parseInt(id);
    const note = await db.query.notes.findFirst({
        where: eq(notes.id, noteId),
    });

    if (!note) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 p-8">
            <div className="mx-auto max-w-2xl">
                <Link href={`/notes/${note.id}`} className="text-blue-500 hover:underline">
                    &larr; Back to Note
                </Link>

                <h1 className="mt-4 text-4xl font-bold text-slate-900">Edit Note</h1>
                <form action={updateNote.bind(null, note.id)} className="mt-4 space-y-4">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-slate-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={note.title}
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
                            defaultValue={note.content}
                            className="mt-1 w-full rounded-lg border bg-white px-4 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Update Note
                    </button>
                </form>

              
            </div>
        </main>
    );
}