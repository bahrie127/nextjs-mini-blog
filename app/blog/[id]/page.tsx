import Link from "next/link";
import { notFound } from "next/navigation";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function getPost(id: number): Promise<Post | null> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        return null;
    }
    return res.json();
}

export default async function BlogDetailPage({ params } : { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getPost(parseInt(id));
    if (!post) {
        notFound();
    }
    return (
        <main className="min-h-screen bg-slate-50 p-8">
            <div className="mx-auto max-w-2xl">
                <Link href="/blog" className="text-blue-500 hover:underline">
                    &larr; Back to Blog
                </Link>
                <h1 className="mt-4 text-4xl font-bold text-slate-900">{post.title}</h1>
                <p className="mt-2 text-slate-600">{post.body}</p>
            </div>

        </main>
    );
}