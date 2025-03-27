import React, { useState, useEffect, useMemo } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import { BlogPost } from "../types/blog";
import { ArrowRight, Search, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

export const BlogListPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
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

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogs.forEach((blog) => {
      blog.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.summary.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = !selectedTag || blog.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [blogs, searchQuery, selectedTag]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-lightest to-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Insights for Building a
              <span className="bg-gradient-to-r from-brand to-brand-dark text-transparent bg-clip-text">
                {" "}
                Sustainable AI Future
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Exploring the latest developments in AI governance, blockchain
              technology, and regulatory compliance.
            </p>

            <div className="max-w-2xl mx-auto">
              <div
                className={`relative transform transition-all duration-300 ${
                  searchFocused ? "scale-105" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full px-6 py-4 bg-white rounded-2xl border-2 border-brand-light/30 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10 pl-14 text-lg shadow-lg"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-brand" />
              </div>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  !selectedTag
                    ? "bg-brand text-white shadow-lg shadow-brand/25"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
                }`}
              >
                All
              </button>
              {allTags.map((tag, index) => (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() =>
                    setSelectedTag(tag === selectedTag ? null : tag)
                  }
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    tag === selectedTag
                      ? "bg-brand text-white shadow-lg shadow-brand/25"
                      : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
                  }`}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-pulse text-gray-500">
                Loading articles...
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-red-500">{error}</div>
            </div>
          ) : (
            <div className="grid gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-light/10"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-2/5 relative">
                        <div className="aspect-[16/9] lg:aspect-auto lg:h-full relative overflow-hidden">
                          <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                      <div className="lg:w-3/5 p-8 lg:p-12">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {blog.categories.map((category, idx) => (
                            <span
                              key={idx}
                              className="bg-brand-light/20 text-brand px-4 py-1 rounded-full text-sm font-medium"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand transition-colors duration-300">
                          {blog.title}
                        </h2>
                        <p className="text-gray-600 mb-8 line-clamp-3">
                          {blog.summary}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-brand" />
                              <span className="text-sm font-medium text-gray-900">
                                {blog.author}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-brand" />
                              <span className="text-sm text-gray-600">
                                {new Date(
                                  blog.createdAt.toDate()
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <span className="flex items-center gap-2 text-brand font-medium group-hover:gap-4 transition-all duration-300">
                            Read More
                            <ArrowRight className="h-5 w-5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};
