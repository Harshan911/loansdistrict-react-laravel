import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "What types of loans does LoansDirect offer?",
    answer: "We offer various types of loans including Business Loans, Home Loans, Personal Loans, and Education Loans. Each loan type is designed to meet specific financial needs and requirements."
  },
  {
    question: "How can I apply for a loan through LoansDirect?",
    answer: "You can easily apply for a loan by filling out our online application form. The process is simple and hassle-free, requiring basic personal information and documentation."
  },
  {
    question: "What documents are required for loan approval?",
    answer: "Required documents typically include ID proof, address proof, income proof, and bank statements. Specific requirements may vary based on the type of loan you're applying for."
  },
  {
    question: "How long does the loan approval process take?",
    answer: "The loan approval process usually takes 2-3 business days, depending on the loan type and documentation provided. We strive to make the process as quick and efficient as possible."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};