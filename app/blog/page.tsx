import { getAllPosts } from "../../lib/cms";
import Link from "next/link";

export default async function Blog() {
  const post = await getAllPosts();
  return (
    <div>
      {post.map((post, key) => (
        <div key={key}>
          <div>
            <Link href={`/blog/${post.slug}`}>
              <h1>{post.title}</h1>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
