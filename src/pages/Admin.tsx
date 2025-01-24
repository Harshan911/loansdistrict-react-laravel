import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { BlogList } from "@/components/BlogList";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  content: string;
  excerpt: string;
  seo?: {
    metaDescription?: string;
    customUrl?: string;
  };
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (!auth) {
      navigate("/");
      toast({
        title: "Access Denied",
        description: "Please login to access the admin panel",
        variant: "destructive",
      });
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate, toast]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Link to="/blog/new">
            <Button>Create New Blog</Button>
          </Link>
        </div>
        <BlogList />
      </main>
      <Footer />
    </div>
  );
};

export default Admin;