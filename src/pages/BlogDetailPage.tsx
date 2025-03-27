import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "../firebase";
import { Navbar } from "../components/landing/Navbar";
import { BlogPost } from "../types/blog";

export const BlogDetailPage: React.FC = () => {
  // In React Router v6, useParams is typed correctly without needing to specify the generic type
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogBySlug = async () => {
      try {
        if (!slug) {
          setError("Blog post not found.");
          setLoading(false);
          return;
        }

        // Query the blog with the matching slug
        const blogsQuery = query(
          collection(db, "blogs"),
          where("slug", "==", slug),
          where("published", "==", true),
          limit(1)
        );

        const querySnapshot = await getDocs(blogsQuery);

        if (querySnapshot.empty) {
          setError("Blog post not found.");
          setLoading(false);
          return;
        }

        // Get the first (and should be only) document
        const blogDoc = querySnapshot.docs[0];
        setBlog({
          id: blogDoc.id,
          ...blogDoc.data(),
        } as BlogPost);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog post. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogBySlug();
  }, [slug]);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {loading && (
          <div className="text-center py-4">Loading blog post...</div>
        )}

        {error && (
          <div>
            <div className="text-red-500 mb-4">{error}</div>
            <Link to="/blog" className="text-blue-600 hover:underline">
              ← Back to all blogs
            </Link>
          </div>
        )}

        {!loading && !error && blog && (
          <>
            <Link
              to="/blog"
              className="text-blue-600 hover:underline block mb-6"
            >
              ← Back to all blogs
            </Link>

            {blog.imageUrl && (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
              />
            )}

            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

            <div className="flex items-center mb-6">
              <p className="text-gray-600">
                By {blog.author} •{" "}
                {new Date(blog.createdAt.toDate()).toLocaleDateString()}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {blog.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="prose max-w-none">
              {/* Format the content for display */}
              {blog.content.split("\n").map((paragraph, index) =>
                paragraph ? (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ) : (
                  <br key={index} />
                )
              )}
            </div>

            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
