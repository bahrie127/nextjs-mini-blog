import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import { notes } from "@/db/schema";
import { eq } from "drizzle-orm";
import { deleteNote } from "@/app/notes/actions";

export default async function NoteDetailPage({ params }: { params: Promise<{ id: string }> }) {
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
                <Link href="/notes" className="text-blue-500 hover:underline">
                    &larr; Back to Notes
                </Link>
                
                <article className="mt-4 rounded-lg border bg-white p-6 shadow-sm">
                    <h1 className="text-4xl font-bold text-slate-900">{note.title}</h1>
                    <p className="mt-2 text-slate-600 whitespace-pre-wrap">{note.content}</p>
                </article>

                <div className="mt-4 flex gap-2">
                    <Link href={`/notes/${note.id}/edit`} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Edit
                    </Link>
                    <form action={deleteNote.bind(null, note.id)} >
                        <input type="hidden" name="id" value={note.id} />
                        <button
                            type="submit"
                            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
