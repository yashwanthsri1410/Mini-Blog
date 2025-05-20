import Link from "next/link";
import { Post } from "../types";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <div className="w-[400px] bg-white border border-gray-200 rounded-[10px] p-[20px] shadow-sm hover:shadow-md transition-shadow  h-[250px] gap-[10px] ">
      <div>
        <h2 className="text-lg font-semibold min-h-[80px] mb-[10px]">
          {post.title}
        </h2>
        <p className="min-h-[80px] mb-[10px]">
          {post.body.length > 100
            ? post.body.substring(0, 100) + "..."
            : post.body}
        </p>
      </div>
      <Link
        href={`/blog/${post.id}`}
        className="p-[8px] font-medium absolute border border-white hover:underline rounded-[5px]"
      >
        Read more →
      </Link>
    </div>
  );
}
