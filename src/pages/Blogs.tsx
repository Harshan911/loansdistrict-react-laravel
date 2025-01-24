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
import { Link } from "react-router-dom";

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
      content: "Full blog content here...",
    },
    {
      id: 2,
      title: "Understanding Personal Loan Terms",
      date: "23-1-24",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      excerpt: "A comprehensive guide to personal loan terms and conditions...",
      content: "Full blog content here...",
    },
    {
      id: 3,
      title: "Education Loan Application Guide",
      date: "23-1-23",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      excerpt: "Step by step guide to applying for an education loan...",
      content: "Full blog content here...",
    },
    // Added more mock blogs to demonstrate pagination
    {
      id: 4,
      title: "Business Loan Success Stories",
      date: "23-1-22",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      excerpt: "Real success stories from our business loan customers...",
      content: "Full blog content here...",
    },
    {
      id: 5,
      title: "How to Improve Your Loan Eligibility",
      date: "23-1-21",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
      excerpt: "Tips and tricks to increase your chances of loan approval...",
      content: "Full blog content here...",
    },
    {
      id: 6,
      title: "Comparing Different Types of Loans",
      date: "23-1-20",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      excerpt: "A detailed comparison of various loan options...",
      content: "Full blog content here...",
    },
    {
      id: 7,
      title: "Guide to Home Loan Interest Rates",
      date: "23-1-19",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      excerpt: "Understanding how home loan interest rates work...",
      content: "Full blog content here...",
    },
    {
      id: 8,
      title: "Student Loan Options Explained",
      date: "23-1-18",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      excerpt: "Different types of student loans and their benefits...",
      content: "Full blog content here...",
    },
    {
      id: 9,
      title: "Small Business Loan Application Tips",
      date: "23-1-17",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      excerpt: "Expert tips for small business loan applications...",
      content: "Full blog content here...",
    },
  ];

  const ITEMS_PER_PAGE = 9;
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
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <BlogCard {...blog} />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(p => Math.max(1, p - 1));
                  }}
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(i + 1);
                    }}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(p => Math.min(totalPages, p + 1));
                  }}
                  aria-disabled={currentPage === totalPages}
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