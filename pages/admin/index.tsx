import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import { fetchPosts } from "../../utils/fetchPosts";
import { Post } from "../../types";
import { useState } from "react";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await fetchPosts();
  return { props: { posts: posts.slice(0, 5) } };
};

export default function Admin({ posts }: { posts: Post[] }) {
  const [data, setData] = useState(posts);

  const handleDelete = (id: number) => {
    setData((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Layout title="Admin Dashboard">
      <div className="flex justify-between items-center p-[20px]">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Link
          href="/admin/create"
          className="p-[10px] bg-[blue] border-none rounded-[5px]  hover:bg-[white] hover:text-[black]"
        >
          + Create
        </Link>
      </div>
      <ul className="list-none">
        {data.map((post) => (
          <li
            key={post.id}
            className="mb-[10px] border p-[10px] rounded-[5px] w-1/2 m-auto"
          >
            <div className="font-semibold">{post.title}</div>
            <div className="mt-2 flex gap-[10px] p-[10px]  ">
              <button
                onClick={() => alert("Edit simulated")}
                className="p-[10px] rounded-[5px] border-none cursor-pointer "
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="p-[10px] bg-[red] border-none rounded-[5px] cursor-pointer "
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
