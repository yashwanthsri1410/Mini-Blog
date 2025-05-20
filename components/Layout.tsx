import Head from "next/head";
import Link from "next/link";

export default function Layout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="max-w-3xl mx-auto p-4">
        <header className="mb-6 border-b border-gray-200 pb-4 p-[10px]">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">My Blog</h1>
            <div className="flex gap-[25px] mr-[50px]">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 hover:underline transition-colors"
              >
                Home
              </Link>
              <Link
                href="/admin"
                className="text-gray-700 hover:text-blue-600 hover:underline transition-colors"
              >
                Admin
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </main>
    </>
  );
}
