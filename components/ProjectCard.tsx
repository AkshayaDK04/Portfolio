// app/components/ProjectCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';


export default function ProjectCard({ project }: { project: any }) {
return (
<Card className="w-full">
<AspectRatio ratio={16 / 9} className="rounded-t-md overflow-hidden bg-slate-100">
{project.image ? (
<div className="relative w-full h-full">
<Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
</div>
) : (
<div className="flex items-center justify-center text-sm text-slate-500">No image</div>
)}
</AspectRatio>


<CardHeader className="px-4 pt-4">
<h3 className="text-lg font-semibold">{project.title}</h3>
</CardHeader>


<CardContent className="px-4 pb-4">
<p className="text-sm text-slate-600">{project.description}</p>


<div className="mt-4 flex items-center justify-between gap-3">
<Link href={project.href ?? '#'} className="inline-block">
<Button size="sm">View</Button>
</Link>
<div className="text-xs text-slate-500">{(project.tech || []).slice(0, 3).join(' • ')}</div>
</div>
</CardContent>
</Card>
);
}