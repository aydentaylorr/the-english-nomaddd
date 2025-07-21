import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { getAllBlogs } from "@/utils/blogUtils";

const BlogPage = () => {
  const blogs = getAllBlogs();

  const categories = ["All", "Learning Tips", "Vocabulary", "Grammar", "Speaking Skills", "Travel"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredBlog = blogs.find(blog => blog.featured);
  const nonFeaturedBlogs = blogs.filter(blog => !blog.featured);

  const filteredBlogs = selectedCategory === "All"
    ? nonFeaturedBlogs
    : nonFeaturedBlogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-nomad-beige py-16 border-b border-gray-200">
        <div className="nomad-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="page-title mb-4">The English Nomadd Blog</h1>
            <p className="text-gray-600 text-lg mb-6">
              Insights, tips, and resources to support your English learning journey
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="nomad-container">
          <div className="flex items-center gap-3 overflow-x-auto pb-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-nomad-teal hover:bg-nomad-teal/90" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === "All" && featuredBlog && (
        <section className="bg-white py-12">
          <div className="nomad-container">
            <h2 className="section-title mb-8">Featured Post</h2>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-3">
                    <span className="text-sm font-medium text-nomad-teal bg-nomad-teal/10 px-3 py-1 rounded-full">{featuredBlog.category}</span>
                    <span className="text-sm text-gray-500 ml-3 flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {featuredBlog.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-rounded font-medium mb-3">{featuredBlog.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredBlog.excerpt}</p>
                  <Link to={`/blog/${featuredBlog.slug}`}>
                    <Button className="bg-nomad-dark hover:bg-nomad-dark/90 w-full md:w-auto">
                      Read Full Article
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      {filteredBlogs.length > 0 && (
        <section className="bg-white py-12">
          <div className="nomad-container">
            <h2 className="section-title mb-8">
              {selectedCategory === "All" ? "Recent Posts" : `Posts in "${selectedCategory}"`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-medium text-nomad-teal bg-nomad-teal/10 px-2 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <span className="text-xs text-gray-500 ml-2 flex items-center">
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        {blog.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{blog.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{blog.excerpt}</p>
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="text-nomad-teal font-medium hover:underline text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-nomad-teal text-nomad-teal hover:bg-nomad-teal/10">
              Load More Posts
            </Button>
          </div>

        </section>
      )}

      {filteredBlogs.length === 0 && (
        <div className="nomad-container py-16 text-center text-gray-500">
          No posts found in this category.
        </div>
      )}
    </div>
  );
};

export default BlogPage;
