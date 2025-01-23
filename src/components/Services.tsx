import { Building2, Home, User, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'Business Loan',
    icon: Building2,
  },
  {
    title: 'Home Loan',
    icon: Home,
  },
  {
    title: 'Personal Loan',
    icon: User,
  },
  {
    title: 'Education Loan',
    icon: GraduationCap,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Services We Offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <service.icon className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="font-semibold text-lg">{service.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};