import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { Pagination } from "@/components/ui/pagination";
import { useState } from "react";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Mock blog data - in a real app this would come from an API
  const blogs = [
    {
      id: 1,
      title: "Mpox - Symptoms | Causes | Transmission | Updates",
      date: "Aug 15, 2024",
      image: "/placeholder.svg",
      excerpt: "Learn about the latest updates and what steps should be taken...",
    },
    {
      id: 2,
      title: "How Shahkar Mehran Did Palliative Care On Time",
      date: "Jun 25, 2024",
      image: "/placeholder.svg",
      excerpt: "A detailed case study on palliative care implementation...",
    },
    {
      id: 3,
      title: "What Makes Naruto Different From Formelander",
      date: "Jun 24, 2024",
      image: "/placeholder.svg",
      excerpt: "An analysis of character development and impact...",
    },
    // Add more blog posts as needed
  ];

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  
  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Daily Blogs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;