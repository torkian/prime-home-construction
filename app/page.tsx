import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import ProjectGallery from '@/components/ProjectGallery';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <ProjectGallery />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
