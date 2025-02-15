import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts.json'; // We'll create this next

export default function BlogPost() {
  const { slug } = useParams(); // Extracts the slug from the URL

  // Find the blog post that matches the slug
  const post = blogPosts.find((post) => post.slug === slug);

  // Handle 404 if post not found
  if (!post) {
    return <h2>Post Not Found</h2>;
  }

  return (
    <section className="container py-5">
      <h1 className="fw-bold" style={{ color: "#A855F7" }}>{post.title}</h1>
      <p className="text-muted">{post.date}</p>
      <div className="mt-4">{post.content}</div>
    </section>
  );
}