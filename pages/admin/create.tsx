import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../../components/Layout";

export default function CreatePost() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", body: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    alert("Post created!");
    router.push("/admin");
  };

  return (
    <Layout title="Create New Post ">
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-1/4 max-w-xl">
          <h1 className="text-2xl font-bold mb-6 text-center mb-[10px]">
            Create New Blog Post
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col gap-[10px]"
          >
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-[5px] focus:outline-none focus:ring focus:ring-blue-300 p-[10px]"
              required
            />
            <textarea
              placeholder="Content"
              value={form.body}
              onChange={(e) => setForm({ ...form, body: e.target.value })}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-[5px] min-h-[100px] focus:outline-none focus:ring focus:ring-blue-300 p-[10px]"
              required
            />
            <button
              type="submit"
              className="w-1/2 m-auto bg-[blue] border-none hover:bg-[white] hover:text-[black] text-white font-medium p-[10px]  transition-colors cursor-pointer rounded-[5px]"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
