import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock blog data - in a real app this would come from an API
  const blog = {
    id: Number(id),
    title: "Best Home Loan NBFC In Chennai",
    date: "23-1-25",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    content: `
      <div class="prose max-w-none">
        <h1>Best Home Loan NBFC In Chennai</h1>
        <p class="lead">
          Finding the right home loan provider in Chennai can be a daunting task. 
          In this comprehensive guide, we'll explore the top NBFCs offering home loans 
          in Chennai and what makes them stand out.
        </p>
        
        <h2>What to Look for in a Home Loan NBFC</h2>
        <p>
          When choosing an NBFC for your home loan, consider these key factors:
        </p>
        <ul>
          <li>Interest rates and processing fees</li>
          <li>Loan tenure flexibility</li>
          <li>Customer service quality</li>
          <li>Documentation requirements</li>
          <li>Disbursement speed</li>
        </ul>

        <h2>Top NBFCs in Chennai</h2>
        <p>
          Here are some of the leading NBFCs offering home loans in Chennai:
        </p>
        
        <h3>1. Example NBFC One</h3>
        <p>
          Known for their competitive interest rates and excellent customer service.
        </p>
        
        <h3>2. Example NBFC Two</h3>
        <p>
          Offers flexible repayment options and quick loan processing.
        </p>
        
        <h2>Conclusion</h2>
        <p>
          Choosing the right NBFC for your home loan is crucial. Consider all factors
          carefully and make an informed decision based on your specific needs.
        </p>
      </div>
    `,
  };

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
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;