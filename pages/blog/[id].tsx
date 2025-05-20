import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import { fetchPosts } from "../../utils/fetchPosts";
import { Post } from "../../types";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchPosts();
  const paths = posts
    .slice(0, 10)
    .map((post: Post) => ({ params: { id: post.id.toString() } }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await fetchPosts();
  const post = posts.find((p: Post) => p.id.toString() === params?.id);
  return { props: { post } };
};

export default function BlogDetail({ post }: { post: Post }) {
  if (!post) return <div>Loading...</div>;
  // console.log(post)
  return (
    <Layout title={post.title}>
      <div className="items-center min-h-[60vh] flex justify-center flex-col border mt-[10px]">
        <h1 className="text-3xl font-bold text-center w-1/2 mb-[20px]">
          {post.title}
        </h1>
        <p className="mt-4 text-center">{post.body}</p>
        <Link
          href="/"
          className="text-blue-500 border border-gray-300 mt-6 block mt-[20px] p-[10px] rounded-[5px]"
        >
          ← Back to Home
        </Link>
      </div>
    </Layout>
  );
}
