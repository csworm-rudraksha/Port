import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = `
      query {
        publication(host: "rudraksha-kush.hashnode.dev") {
          posts(first: 6) {
            edges {
              node {
                title
                brief
                slug
                coverImage {
                  url
                }
                publishedAt
              }
            }
          }
        }
      }`;

    fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((data) => {
        const edges = data.data.publication.posts.edges;
        const formattedPosts = edges.map((edge) => edge.node);
        setPosts(formattedPosts);
      })
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  return (
    <section className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">📝 My Latest Blog Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Link
            key={index}
            to={`/blog/${post.slug}`}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {post.coverImage?.url && (
              <img
                src={post.coverImage.url}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-2">
                {new Date(post.publishedAt).toDateString()}
              </p>
              <p className="text-gray-700">{post.brief}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
