import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <>
      <Head><title>{title}</title></Head>
      <main className="max-w-3xl mx-auto p-4">
        <nav className="flex gap-4 mb-6">
          <Link href="/">Home</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        {children}
      </main>
    </>
  );
}