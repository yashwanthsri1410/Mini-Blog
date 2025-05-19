import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import { fetchPosts } from '../utils/fetchPosts';
import { Post } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts();
  return { props: { posts: posts.slice(0, 10) } };
};

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Layout title="Mini Blog - Home">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <div className="grid gap-4">{posts.map(post => <BlogCard key={post.id} post={post} />)}</div>
    </Layout>
  );
}
