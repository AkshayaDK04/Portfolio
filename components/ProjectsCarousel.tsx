// app/components/ProjectsCarousel.tsx
'use client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ProjectCard from './ProjectCard';
import projects from '@/app/data/projects';


export default function ProjectsCarousel() {
return (
<section id="projects" className="py-16">
<div className="container">
<h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>


<Carousel className="w-full">
<CarouselContent className="flex gap-6">
{projects.map((p) => (
<CarouselItem key={p.id} className="min-w-[280px] sm:min-w-[360px] md:min-w-[420px]">
<div className="w-full"><ProjectCard project={p} /></div>
</CarouselItem>
))}
</CarouselContent>


<div className="mt-6 flex justify-center gap-4">
<CarouselPrevious className="px-3 py-2 border rounded">Prev</CarouselPrevious>
<CarouselNext className="px-3 py-2 border rounded">Next</CarouselNext>
</div>
</Carousel>
</div>
</section>
);
}