import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">LoansDirect</Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
            <Link to="/blogs" className="text-white hover:text-gray-300">Blogs</Link>
            <a href="#services" className="text-white hover:text-gray-300">Services</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
              <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
              <Link to="/blogs" className="text-white hover:text-gray-300">Blogs</Link>
              <a href="#services" className="text-white hover:text-gray-300">Services</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};