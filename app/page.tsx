import Link from "next/link";
import { db } from '@/db';
import { notes } from '@/db/schema';
import { desc } from "drizzle-orm";


export default async function Page() {

  const latestNotes = await db.select().from(notes).orderBy(desc(notes.createdAt)).limit(5);

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-900">Mini Blog</h1>
        <p className="mt-2 text-slate-600">
          Belajar Next.js dari nol dengan membuat mini blog sederhana. Di sini kamu bisa membaca artikel terbaru dan membuat catatan pribadi.
        </p>

        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">Latest Notes</h2>
            <Link href="/notes" className="text-sm text-blue-500 hover:underline">
              View All Notes
              </Link>
          </div>
          {latestNotes.length === 0 ? (
            <p className="mt-4 text-slate-600">No notes found. Create your first note!</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {latestNotes.map((note) => (
                <li key={note.id} className="rounded-lg border bg-white p-4 shadow-sm">
                  <Link href={`/notes/${note.id}`} className="text-lg font-semibold text-slate-900 hover:underline">
                    {note.title}
                  </Link>
                  <p className="mt-1 text-sm text-slate-600">{new Date(note.createdAt).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
