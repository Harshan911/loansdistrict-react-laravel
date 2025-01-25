import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  backgroundColor?: string;
  textColor?: string;
}

export const Hero = ({ backgroundColor = 'bg-white', textColor = 'text-gray-900' }: HeroProps) => {
  return (
    <div className={`py-16 px-4 ${backgroundColor}`}>
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className={`text-4xl md:text-5xl font-bold mb-8 ${textColor}`}>
          One Loan Application For<br />All Banks in India
        </h1>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-2">
            <Check className="text-green-500" />
            <span className={textColor}>Save Time, Stay Home</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Check className="text-green-500" />
            <span className={textColor}>Hassle-free loan processing</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Check className="text-green-500" />
            <span className={textColor}>Trusted by Banking Partners Around India</span>
          </div>
        </div>

        <Button 
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          onClick={() => document.getElementById('loan-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};