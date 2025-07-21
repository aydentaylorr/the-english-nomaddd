import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ArrowLeft } from "lucide-react";
import { getAllBlogs, getBlogContent } from "@/utils/blogUtils";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string | null>(null);
  
  const blogs = getAllBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    const loadContent = async () => {
      if (slug) {
        const markdownContent = await getBlogContent(slug);
        setContent(markdownContent);
      }
    };
    loadContent();
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-nomad-beige p-6">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4 text-nomad-navy">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="bg-nomad-teal hover:bg-nomad-teal/90 flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-nomad-beige py-16 border-b border-gray-200">
        <div className="nomad-container">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-nomad-teal hover:underline mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex items-center mb-4">
              <span className="text-sm font-medium text-nomad-teal bg-nomad-teal/10 px-3 py-1 rounded-full">
                {blog.category}
              </span>
              <span className="text-sm text-gray-500 ml-3 flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {blog.date}
              </span>
            </div>

            <h1 className="page-title mb-4">{blog.title}</h1>
            <p className="text-gray-600 text-lg">{blog.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-12">
        <div className="nomad-container">
          <div className="max-w-4xl mx-auto">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="bg-white py-12">
        <div className="nomad-container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {content ? (
                <ReactMarkdown>{content}</ReactMarkdown>
              ) : (
                <p className="text-gray-500">Loading content...</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
