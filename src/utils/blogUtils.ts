// utils/blogUtils.ts

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  featured?: boolean;
}

// Blog metadata only
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why You’re Better at English Than You Think",
    excerpt: "A confidence boost from Tam's, The English Nomadd",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=2000",
    date: "2025-07-18",
    category: "Speaking Skills",
    slug: "why-youre-better-at-english-than-you-think",
    featured: true
  },
  {
    id: 2,
    title: "What You Really Get in a 1:1 English Lesson (That Apps & YouTube Can’t Give You)",
    excerpt: "Why real progress needs real connection",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2000",
    date: "2025-07-18",
    category: "Learning Tips",
    slug: "what-you-really-get-in-a-1-1-english-lesson"
  },
  {
    id: 2,
    title: "How to Keep Your English Alive Between Lessons",
    excerpt: "Even if you’re busy, tired, or totally over it",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=2000",
    date: "2025-07-18",
    category: "Learning Tips",
    slug: "how-to-keep-your-english-alive-between-lessons"
  }
];

// Sort blogs by date (latest first)
export const getAllBlogs = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Load .md file as raw text (no frontmatter to strip)
export const getBlogContent = async (slug: string): Promise<string | null> => {
  try {
    const markdown = await import(`../content/blog/${slug}.md?raw`);
    return markdown.default;
  } catch (error) {
    console.error("Error loading blog content:", error);
    return null;
  }
};
