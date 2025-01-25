import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { LoanForm } from "@/components/LoanForm";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { LoginButton } from "@/components/LoginButton";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <LoginButton />
      <Navigation />
      <Hero backgroundColor="bg-white" textColor="text-gray-900" />
      <Services />
      <LoanForm />
      <About backgroundColor="bg-gray-50" textColor="text-gray-900" />
      <FAQ />
      <Footer backgroundColor="bg-primary" textColor="text-white" />
    </div>
  );
};

export default Index;