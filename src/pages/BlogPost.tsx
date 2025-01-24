import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  content: string;
}

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const post = savedPosts.find((p: BlogPost) => p.id === Number(id));
    setBlog(post);
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <time className="text-muted-foreground">{blog.date}</time>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <MDEditor.Markdown source={blog.content} />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;