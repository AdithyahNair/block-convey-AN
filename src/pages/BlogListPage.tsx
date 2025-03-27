import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { Navbar } from "../components/landing/Navbar";
import { BlogPost } from "../types/blog";

export const BlogListPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Create a query to get only published blogs, ordered by creation date
        const blogsQuery = query(
          collection(db, "blogs"),
          where("published", "==", true),
          orderBy("createdAt", "desc")
        );

        const querySnapshot = await getDocs(blogsQuery);
        const blogList: BlogPost[] = [];

        querySnapshot.forEach((doc) => {
          blogList.push({
            id: doc.id,
            ...doc.data(),
          } as BlogPost);
        });

        setBlogs(blogList);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Block Convey Blog</h1>

        {loading && <div className="text-center py-4">Loading blogs...</div>}

        {error && <div className="text-center py-4 text-red-500">{error}</div>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="border rounded-lg overflow-hidden shadow-md"
                >
                  {blog.imageUrl && (
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="text-blue-600 hover:underline"
                      >
                        {blog.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 text-sm mb-2">
                      By {blog.author} •{" "}
                      {new Date(blog.createdAt.toDate()).toLocaleDateString()}
                    </p>

                    <p className="text-gray-700 mb-4">{blog.summary}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${blog.slug}`}
                      className="text-blue-600 hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No blog posts found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
