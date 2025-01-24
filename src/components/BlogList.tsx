import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  seo?: {
    metaDescription?: string;
    customUrl?: string;
  };
}

export const BlogList = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    setBlogs(savedPosts);
  }, []);

  const handleDelete = (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this blog post?");
    if (confirmed) {
      const updatedPosts = blogs.filter((post) => post.id !== id);
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
      setBlogs(updatedPosts);
      toast({
        title: "Blog deleted",
        description: "The blog post has been deleted successfully",
      });
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell>{blog.title}</TableCell>
              <TableCell>{blog.date}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Link to={`/blog/edit/${blog.id}`}>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};