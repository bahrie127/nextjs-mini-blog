import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mini Blog',
  description: 'Belajar Next.js dari nol 🚀',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className='antialiased'>
        <nav className="border-b bg-white">
          <div className="mx-auto flex max-w-2xl items-center justify-between p-4">
            <Link href="/" className="font-bold text-slate-900">
              Mini Blog
            </Link>
            <div className="flex gap-4 text-sm text-slate-600">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <Link href="/blog" className="hover:text-slate-900">
                Blog
              </Link>
              <Link href="/about" className="hover:text-slate-900">
                About
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}