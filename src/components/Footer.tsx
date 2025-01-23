export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/blogs" className="hover:text-gray-300">Blogs</a></li>
              <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Business Loan</a></li>
              <li><a href="#" className="hover:text-gray-300">Home Loan</a></li>
              <li><a href="#" className="hover:text-gray-300">Education Loan</a></li>
              <li><a href="#" className="hover:text-gray-300">Personal Loan</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Blogs</h3>
            <ul className="space-y-2">
              <li><a href="/blogs" className="hover:text-gray-300">Latest Posts</a></li>
              <li><a href="/blogs" className="hover:text-gray-300">Featured Articles</a></li>
              <li><a href="/blogs" className="hover:text-gray-300">News Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>loansdirect@gmail.com</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Terms And Conditions</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};