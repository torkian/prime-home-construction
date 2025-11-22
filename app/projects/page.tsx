import ProjectGallery from '@/components/ProjectGallery';

export const metadata = {
  title: 'Our Projects | Prime Home Construction',
  description: 'Browse our portfolio of completed construction projects',
};

export default function ProjectsPage() {
  return (
    <main>
      <div className="bg-secondary pb-16 pt-32 text-white sm:pt-36 sm:pb-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Our Projects</h1>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl">
            See the quality and craftsmanship in every project we complete
          </p>
        </div>
      </div>
      <ProjectGallery />
    </main>
  );
}
