"use client";

import { useState } from "react";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function SearchBox({
    posts
}:{ posts: Post[] }) {
    const [query, setQuery] = useState("");
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="mb-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts..."
                className="w-full rounded-lg border bg-white px-4 py-2 text-sm focus:border-slate-400 focus:outline-none"
            />
            <p className="mt-2 text-xs text-slate-500">
                {filteredPosts.length} posts found from {posts.length} total posts.
            </p>
            <ul className="mt-4 space-y-3">
                {filteredPosts.slice(0, 10).map((post) => (
                    <li key={post.id} className="border rounded-lg p-4 bg-white shadow-sm">
                        <h2 className="font-semibold text-slate-900">{post.title}</h2>
                        <p className="mt-1 line-clamp-2 text-sm text-slate-600">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
    