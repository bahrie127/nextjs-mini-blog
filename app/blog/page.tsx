import Link from 'next/link';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function getPosts(): Promise<Post[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next: {revalidate: 60},
    });
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <main className="min-h-screen bg-slate-50 p-8">
            <div className="mx-auto max-w-2xl">
                <h1 className="text-4xl font-bold text-slate-900">Blog</h1>
                <p className="mt-2 text-slate-600">
                    {posts.length} posts fetched from JSONPlaceholder API.
                </p>

                <ul className="mt-4 space-y-4">
                    {posts.slice(0,10).map((post) => (
                        <li key={post.id} className="border rounded p-4 bg-white">
                            <h2 className="text-2xl font-semibold text-slate-900">{post.title}</h2>
                            <p className="mt-1 text-slate-600">{post.body}</p>
                            {/* <Link href={`/blog/${post.id}`} className="mt-2 inline-block text-blue-500 hover:underline">
                                Read more
                            </Link> */}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}