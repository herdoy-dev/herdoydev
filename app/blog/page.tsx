import Head from "next/head";
import { CalendarDays, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Blog | herdoydev - Web Development Insights",
  description:
    "Read our latest articles on web development trends, best practices, and case studies from our projects.",
  keywords: [
    "web development blog",
    "frontend articles",
    "JavaScript tutorials",
    "React tips",
    "Next.js blog",
  ],
  openGraph: {
    title: "Blog | herdoydev - Web Development Insights",
    description:
      "Expert articles on modern web development technologies and practices.",
    url: "https://herdoydev.com/blog",
    images: [
      {
        url: "https://herdoydev.com/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev Blog",
      },
    ],
  },
};

const featuredPost = {
  id: 1,
  title: "The Future of React in 2024",
  excerpt:
    "Exploring the latest features and upcoming changes in React that will shape frontend development.",
  image: "/about/team-working.jpeg",
  date: "May 15, 2024",
  readTime: "8 min read",
  category: "Frontend",
  slug: "the-future-of-react-in-2024",
};

const posts = [
  {
    id: 2,
    title: "Optimizing Next.js Applications for Performance",
    excerpt:
      "Practical techniques to improve your Next.js app's speed and user experience.",
    image: "/projects/portfolio1.jpeg",
    date: "April 28, 2024",
    readTime: "10 min read",
    category: "Performance",
    slug: "optimizing-nextjs-applications",
  },
  {
    id: 3,
    title: "State Management Solutions Compared",
    excerpt:
      "A comprehensive look at Zustand, Redux, and Context API for state management.",
    image: "/projects/portfolio2.jpeg",
    date: "April 10, 2024",
    readTime: "12 min read",
    category: "Frontend",
    slug: "state-management-solutions-compared",
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    excerpt:
      "Essential accessibility practices every developer should implement.",
    image: "/projects/portfolio3.jpeg",
    date: "March 22, 2024",
    readTime: "6 min read",
    category: "Best Practices",
    slug: "building-accessible-web-applications",
  },
  {
    id: 5,
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "A practical guide to choosing the right layout system for your project.",
    image: "/projects/portfolio1.jpeg",
    date: "March 5, 2024",
    readTime: "5 min read",
    category: "CSS",
    slug: "css-grid-vs-flexbox",
  },
  {
    id: 6,
    title: "TypeScript Best Practices for Large Projects",
    excerpt: "How we structure TypeScript code for maintainability at scale.",
    image: "/projects/portfolio2.jpeg",
    date: "February 18, 2024",
    readTime: "9 min read",
    category: "TypeScript",
    slug: "typescript-best-practices",
  },
];

const categories = [
  { name: "All", count: 12 },
  { name: "Frontend", count: 5 },
  { name: "Backend", count: 3 },
  { name: "Performance", count: 2 },
  { name: "TypeScript", count: 4 },
  { name: "CSS", count: 3 },
  { name: "Best Practices", count: 6 },
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
      </Head>

      <main>
        {/* Blog Hero */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Insights & Tutorials
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                herdoydev Blog
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Expert articles on web development, design patterns, and
                industry trends.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="mr-1 h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <Button asChild className="self-start">
                  <Link href={`/blog/${featuredPost.slug}`}>Read Article</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-4">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h2 className="text-xl font-semibold mb-4">Categories</h2>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <Button
                          variant="ghost"
                          className="w-full justify-between"
                          asChild
                        >
                          <Link href="#">
                            {category.name}
                            <span className="text-gray-500">
                              {category.count}
                            </span>
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "CSS",
                        "Performance",
                        "Accessibility",
                        "State Management",
                      ].map((tag) => (
                        <Button
                          key={tag}
                          variant="outline"
                          size="sm"
                          className="rounded-full"
                          asChild
                        >
                          <Link href="#">
                            <Tag className="mr-1 h-3 w-3" />
                            {tag}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="lg:col-span-3">
                <div className="grid gap-8 md:grid-cols-2">
                  {posts.map((post) => (
                    <article key={post.id} className="group">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-4">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                          {post.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarDays className="mr-1 h-3 w-3" />
                          {post.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Button variant="link" className="p-0" asChild>
                        <Link href={`/blog/${post.slug}`}>
                          Read more
                          <svg
                            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Link>
                      </Button>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center gap-2">
                  <Button variant="outline" disabled>
                    Previous
                  </Button>
                  <Button variant="outline">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest web development
              insights, tutorials, and company news.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white"
              />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
