import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Mock blog data - in a real app this would come from an API
  const blogs = [
    {
      id: 1,
      title: "Best Home Loan NBFC In Chennai",
      date: "23-1-25",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      excerpt: "Learn about the best home loan options available in Chennai...",
    },
    {
      id: 2,
      title: "Understanding Personal Loan Terms",
      date: "23-1-24",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      excerpt: "A comprehensive guide to personal loan terms and conditions...",
    },
    {
      id: 3,
      title: "Education Loan Application Guide",
      date: "23-1-23",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      excerpt: "Step by step guide to applying for an education loan...",
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
        <h1 className="text-4xl font-bold text-center mb-12">Our Blogs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                />
              </PaginationItem>
              
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
              
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;