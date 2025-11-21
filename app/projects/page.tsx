import ProjectGallery from '@/components/ProjectGallery';

export const metadata = {
  title: 'Our Projects | Prime Home Construction',
  description: 'Browse our portfolio of completed construction projects',
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <div className="bg-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Our Projects</h1>
          <p className="mt-4 text-xl text-gray-300">
            See the quality and craftsmanship in every project we complete
          </p>
        </div>
      </div>
      <ProjectGallery />
    </div>
  );
}
