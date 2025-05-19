import Link from 'next/link';
import { Post } from '../types';

export default function BlogCard({ post }: { post: Post }) {
  return (
    <div className="p-4 border rounded-md hover:shadow-md">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body.substring(0, 100)}...</p>
      <Link href={`/blog/${post.id}`} className="text-blue-500 mt-2 block">Read more</Link>
    </div>
  );
}