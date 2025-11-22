import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Prime Home Construction',
  description: 'Get in touch with us for a free quote on your construction project',
};

export default function ContactPage() {
  return (
    <main>
      <div className="bg-secondary pb-16 pt-32 text-white sm:pt-36 sm:pb-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            Let's discuss your next construction project
          </p>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
