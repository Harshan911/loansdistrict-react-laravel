import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About LoansDirect</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              At LoansDirect, our mission is to make financial services accessible and straightforward for everyone. 
              We believe in providing transparent, efficient, and personalized loan solutions that help our clients 
              achieve their financial goals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p>We believe in clear communication and no hidden fees or terms.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p>Your financial success is our top priority.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p>We continuously improve our services to serve you better.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Security</h3>
                <p>Your data security and privacy are paramount to us.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-lg leading-relaxed">
              Our team consists of experienced financial experts and loan specialists who are 
              dedicated to providing you with the best possible service. With years of experience 
              in the financial industry, we understand the unique needs of our clients and work 
              tirelessly to meet them.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;