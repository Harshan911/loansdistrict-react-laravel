import { Card, CardContent } from '@/components/ui/card';

interface AboutProps {
  backgroundColor?: string;
  textColor?: string;
}

export const About = ({ backgroundColor = 'bg-white', textColor = 'text-gray-900' }: AboutProps) => {
  return (
    <section id="about" className={`py-16 px-4 ${backgroundColor}`}>
      <div className="container mx-auto">
        <h2 className={`text-3xl font-bold text-center mb-12 ${textColor}`}>About Us</h2>
        
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <p className={`text-lg leading-relaxed ${textColor}`}>
              LoansDistrict is a dynamic platform designed to simplify and streamline access to a wide range
              of loan services. We connect individuals and businesses with the most suitable financial
              products tailored to their unique needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};