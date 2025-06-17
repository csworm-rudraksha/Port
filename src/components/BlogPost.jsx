import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // To render raw HTML

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const query = `
      query {
        publication(host: "rudraksha-kush.hashnode.dev") {
          post(slug: "${slug}") {
            title
            content {
              markdown
            }
            publishedAt
            coverImage {
              url
            }
          }
        }
      }`;

    fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPost(data.data.publication.post);
        console.log("Fetched post:", data.data.publication.post.content.markdown);
      })
      .catch((err) => console.error("Failed to fetch post:", err));
  }, [slug]);

  if (!post) return <p className="p-4 text-center">Loading blog post...</p>;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(post.publishedAt).toDateString()}
      </p>

      {post.coverImage?.url && (
        <img
          src={post.coverImage.url}
          alt="Cover"
          className="w-full h-auto max-h-[400px] object-cover rounded-xl mb-8 shadow"
        />
      )}

      <div className=" max-w-none">
        <ReactMarkdown>
          {post.content.markdown}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogPost;
