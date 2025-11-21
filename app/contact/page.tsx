import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Prime Home Construction',
  description: 'Get in touch with us for a free quote on your construction project',
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <div className="bg-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-300">
            Let's discuss your next construction project
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
