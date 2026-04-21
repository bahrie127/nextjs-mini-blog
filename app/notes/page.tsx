import Link from "next/link";
import { db } from "../../db";
import { notes } from "../../db/schema";
import { desc } from "drizzle-orm";

export default async function NotesListPage() {
    const notesList = await db.select().from(notes).orderBy(desc(notes.createdAt));
    return (
        <main className="min-h-screen bg-slate-50 p-8">
            <div className="mx-auto max-w-2xl">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-slate-900">Notes</h1>
                    <Link href="/notes/new" className="rounded-lg bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-700">
                        + Create New Note
                    </Link>
                </div>
                {notesList.length === 0 ? (
                    <p className="mt-4 text-slate-600">No notes found. Create your first note!</p>
                ) : (
                    <ul className="mt-4 space-y-4">
                        {notesList.map((note) => (
                            <li key={note.id} className="rounded-lg border bg-white p-4 shadow-sm">
                                <Link href={`/notes/${note.id}`} className="text-lg font-semibold text-slate-900 hover:underline">
                                    {note.title}
                                </Link>
                                <p className="mt-1 text-sm text-slate-600">{new Date(note.createdAt).toLocaleDateString()}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}