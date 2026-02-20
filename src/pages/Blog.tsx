import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

const blogPosts = [
  {
    id: 1,
    slug: "best-career-options-after-10th",
    title: "Best Career Options After 10th in India (2026 Guide)",
    date: "10 Feb 2026",
    excerpt:
      "Confused after 10th? Explore diploma courses, ITI, Science, Commerce and Arts stream options in detail.",
  },
  {
    id: 2,
    slug: "top-it-skills-2026",
    title: "Top IT Skills To Learn in 2026",
    date: "12 Feb 2026",
    excerpt:
      "Discover the most in-demand IT skills like Web Development, AI, Cyber Security and Data Science.",
  },
  {
    id: 3,
    slug: "government-exams-preparation-strategy",
    title: "Government Exams Preparation Strategy",
    date: "15 Feb 2026",
    excerpt:
      "Smart preparation strategy for UPSC, SSC and Banking exams.",
  },
];

const Blog = () => {
  return (
    <Layout>

      {/* SEO META TAGS */}
      {/* <Helmet>
        <title>Career Blog | CareerPath India</title>
        <meta
          name="description"
          content="Read latest career guidance articles, IT roadmaps, government exam strategies and industry insights in India."
        />
      </Helmet> */}

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Career Guidance Blog
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore expert career advice, exam tips and future career opportunities.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-16">
        <div className="container mx-auto grid gap-6 md:grid-cols-3 px-4">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mt-2">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary font-medium text-sm hover:underline"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

    </Layout>
  );
};

export default Blog;