import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout';
import { fetchPosts } from '../../utils/fetchPosts';
import { Post } from '../../types';
import { useState } from 'react';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await fetchPosts();
  return { props: { posts: posts.slice(0, 5) } };
};

export default function Admin({ posts }: { posts: Post[] }) {
  const [data, setData] = useState(posts);

  const handleDelete = (id: number) => {
    setData(prev => prev.filter(p => p.id !== id));
  };

  return (
    <Layout title="Admin Dashboard">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Link href="/admin/create" className="bg-blue-500 text-white px-4 py-1 rounded">+ Create</Link>
      </div>
      <ul>
        {data.map(post => (
          <li key={post.id} className="mb-3 border p-3">
            <div className="font-semibold">{post.title}</div>
            <div className="mt-2">
              <button onClick={() => alert('Edit simulated')} className="mr-4 text-blue-600">Edit</button>
              <button onClick={() => handleDelete(post.id)} className="text-red-600">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}