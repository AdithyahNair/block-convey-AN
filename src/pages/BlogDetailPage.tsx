import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "../firebase";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  User,
  Tag,
  ChevronRight,
} from "lucide-react";
import { BlogPost, Section } from "../types/blog";

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const fetchBlogBySlug = async () => {
      try {
        if (!slug) {
          setError("Blog post not found.");
          setLoading(false);
          return;
        }

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

        const blogDoc = querySnapshot.docs[0];
        const blogData = {
          id: blogDoc.id,
          ...blogDoc.data(),
        } as BlogPost;

        // Debug logs
        console.log("Blog data fetched:", blogData);
        console.log("Content sections:", blogData.contentSection);

        setBlog(blogData);

        // Check if we have contentSection or need to parse content
        if (blogData.contentSection && blogData.contentSection.length > 0) {
          // Make sure to handle any unexpected data format
          try {
            setSections(blogData.contentSection as Section[]);
          } catch (err) {
            console.error("Error processing contentSection:", err);
            setError("Error processing blog content. Please try again later.");
          }
        } else if (blogData.content) {
          // Fall back to parsing content if contentSection isn't available
          try {
            parseContent(blogData.content);
          } catch (err) {
            console.error("Error parsing blog content:", err);
            setError("Error processing blog content. Please try again later.");
          }
        } else {
          setError("Blog content is missing.");
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog post. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogBySlug();
  }, [slug]);

  // Keep parseContent for backward compatibility
  const parseContent = (content: string | undefined) => {
    // Check if content exists
    if (!content) {
      console.error("Blog content is missing");
      setSections([]);
      return;
    }

    // First, let's split by recognizable patterns rather than just newlines
    // This regex looks for sections that start with numbers like 1., 2.1., etc.
    const parts = content.split(/(?=^\d+\.\s+|^\d+\.\d+\.\s+)/gm);
    const parsedSections: Section[] = [];

    // Process the intro paragraph separately (content before first numbered section)
    if (parts[0] && !parts[0].match(/^\d+\./)) {
      parsedSections.push({
        type: "introduction",
        content: parts[0].trim(),
      });
      // Remove the intro from sections
      parts.shift();
    }

    // Process each numbered section
    parts.forEach((part) => {
      if (!part.trim()) return; // Skip empty sections

      // Extract the header and content
      const match = part.match(/^(\d+(?:\.\d+)*)\.\s+([^\n]+)([\s\S]*)$/);

      if (match) {
        const [_, numberPart, title, sectionContent] = match;
        const headerText = `${numberPart}. ${title}`;

        // Determine the header level based on the number format
        let level = 1;
        if (numberPart.split(".").length > 1) {
          level = 2;
        }

        // Create section ID from the number part
        const sectionId = numberPart;

        // Add the header
        parsedSections.push({
          type: "heading",
          level: level,
          sectionId: sectionId,
          content: headerText,
        });

        // Process the content of this section - split into paragraphs
        const paragraphs = sectionContent.trim().split(/\n\s*\n/);

        paragraphs.forEach((paragraph) => {
          if (paragraph.trim()) {
            parsedSections.push({
              type: "paragraph",
              content: paragraph.trim().replace(/\s+/g, " "),
            });
          }
        });
      } else {
        // If no pattern match, treat it as a regular paragraph
        parsedSections.push({
          type: "paragraph",
          content: part.trim(),
        });
      }
    });

    console.log("Parsed sections:", parsedSections);
    setSections(parsedSections);
  };

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll("[data-section-id]");
      let current = "";

      headings.forEach((heading) => {
        const sectionId = heading.getAttribute("data-section-id");
        if (sectionId) {
          const rect = heading.getBoundingClientRect();
          if (rect.top <= 100) {
            current = sectionId;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.summary,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const estimateReadTime = (sections: Section[]): number => {
    const wordsPerMinute = 200;
    const totalWords = sections.reduce((count, section) => {
      return count + section.content.split(/\s+/).length;
    }, 0);
    return Math.ceil(totalWords / wordsPerMinute);
  };

  const getSectionIdStr = (sectionId: string | number | undefined): string => {
    if (sectionId === undefined) return "";
    return typeof sectionId === "number" ? sectionId.toString() : sectionId;
  };

  const getSectionTitle = (content: string): string => {
    // Extract just the title part after the number
    const titleMatch = content.match(/^\d+(?:\.\d+)*\.\s+(.+)$/);
    return titleMatch ? titleMatch[1] : content;
  };

  const scrollToSection = (sectionId: string | number | undefined) => {
    if (!sectionId) return;

    const sectionIdStr = getSectionIdStr(sectionId);
    const element = document.querySelector(
      `[data-section-id="${sectionIdStr}"]`
    );

    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Get all major headings for table of contents
  const getTableOfContents = () => {
    return sections.filter(
      (section) => section.type === "heading" && section.level === 1
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-brand-lightest to-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-pulse text-brand">Loading article...</div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-brand-lightest to-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <Link
              to="/blogs"
              className="inline-flex items-center text-brand hover:text-brand-dark transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const tableOfContents = getTableOfContents();
  console.log("Table of contents:", tableOfContents);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative pt-24">
        {/* Back to articles link at top */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            to="/blogs"
            className="inline-flex items-center text-gray-600 hover:text-brand transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>
        </div>

        {/* Hero Section with Title */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(blog.createdAt.toDate())}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{estimateReadTime(sections)} min read</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {blog.categories.map((category, index) => (
              <span
                key={index}
                className="bg-brand-light/20 text-brand px-3 py-1 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Featured Image */}
          {blog.imageUrl && (
            <div className="w-full h-[400px] rounded-xl overflow-hidden mb-12">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Content Section with New Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Table of Contents Sidebar - New Design */}
            <div className="lg:w-1/4 lg:max-w-xs">
              <div className="sticky top-24">
                <h2 className="text-xl font-semibold mb-6 text-gray-900">
                  Table of Contents
                </h2>

                <nav className="flex flex-col space-y-1">
                  {tableOfContents.map((section, index) => {
                    const isActive =
                      activeSection === getSectionIdStr(section.sectionId);
                    return (
                      <button
                        key={index}
                        onClick={() => scrollToSection(section.sectionId)}
                        className={`flex items-center py-3 px-4 rounded-lg transition-all ${
                          isActive
                            ? "text-brand font-medium bg-brand-light/10 border-l-4 border-brand"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <div className="mr-2 flex items-center">
                          <div
                            className={`w-2 h-2 rounded-full mr-2 ${
                              isActive ? "bg-brand" : "bg-gray-400"
                            }`}
                          ></div>
                          {getSectionTitle(section.content)}
                        </div>

                        <ChevronRight
                          className={`h-4 w-4 ml-auto transition-transform ${
                            isActive ? "rotate-90 text-brand" : ""
                          }`}
                        />
                      </button>
                    );
                  })}
                </nav>

                {/* Share Button */}
                <div className="mt-8 relative">
                  <button
                    onClick={handleShare}
                    className="w-full flex items-center justify-center gap-2 bg-brand text-white px-4 py-3 rounded-lg hover:bg-brand-dark transition-colors"
                  >
                    <Share2 className="h-5 w-5" />
                    Share Article
                  </button>
                  {showShareTooltip && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg">
                      Link copied to clipboard!
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-5 w-5 text-brand" />
                    <h3 className="font-semibold text-gray-900">Tags</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags && blog.tags.length > 0 ? (
                      blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-brand-light/20 text-brand px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 text-sm">No tags</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="prose prose-lg max-w-none">
                {sections.map((section, index) => {
                  if (section.type === "heading" && section.level === 1) {
                    return (
                      <h2
                        key={index}
                        data-section-id={getSectionIdStr(section.sectionId)}
                        className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24"
                      >
                        {section.content}
                      </h2>
                    );
                  } else if (
                    section.type === "heading" &&
                    section.level === 2
                  ) {
                    return (
                      <h3
                        key={index}
                        data-section-id={getSectionIdStr(section.sectionId)}
                        className="text-2xl font-semibold text-gray-800 mt-8 mb-4 scroll-mt-24"
                      >
                        {section.content}
                      </h3>
                    );
                  } else if (
                    section.type === "introduction" ||
                    section.type === "paragraph"
                  ) {
                    return (
                      <p
                        key={index}
                        className="text-gray-600 leading-relaxed mb-6"
                      >
                        {section.content}
                      </p>
                    );
                  } else if (section.type === "list-item") {
                    return (
                      <li
                        key={index}
                        className="text-gray-600 leading-relaxed mb-2"
                      >
                        {section.content}
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
