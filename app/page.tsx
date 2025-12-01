// app/page.tsx
import Hero from "../components/Hero";
import ProjectsCarousel from "../components/ProjectsCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsCarousel />
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-600">Short bio about you — education, experience, interests.</p>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-600">Email: your.email@example.com</p>
      </section>
    </>
  );
}
