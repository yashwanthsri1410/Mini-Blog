import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/Layout';

export default function CreatePost() {
  const router = useRouter();
  const [form, setForm] = useState({ title: '', body: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Post created!');
    router.push('/admin');
  };

  return (
    <Layout title="Create New Post">
      <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          className="w-full border p-2"
          required
        />
        <textarea
          placeholder="Content"
          value={form.body}
          onChange={e => setForm({ ...form, body: e.target.value })}
          className="w-full border p-2"
          required
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">Create</button>
      </form>
    </Layout>
  );
}
