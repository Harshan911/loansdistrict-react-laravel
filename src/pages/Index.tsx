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
      <Hero />
      <Services />
      <LoanForm />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;