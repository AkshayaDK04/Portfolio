// app/components/Hero.tsx
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';


export default function Hero() {
return (
<section className="py-20 bg-gradient-to-b from-white to-brand-50/40">
<div className="container">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
<div className="w-full md:w-1/3 flex justify-center md:justify-start">
<div className="relative w-40 h-40 rounded-full overflow-hidden shadow-soft transform transition hover:-translate-y-1">
<Image src="/profile/me.jpg" alt="Your Name" fill sizes="(max-width: 768px) 160px, 200px" className="object-cover" />
</div>
</div>


<div className="w-full md:w-2/3 text-center md:text-left">
<p className="text-sm font-medium text-brand-700 mb-2">Hi, I’m</p>
<h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">YourName <span className="ml-2" aria-hidden>👋</span></h1>
<p className="mt-4 text-lg text-slate-600 max-w-xl">I build modern, responsive web apps using Next.js, TypeScript and Tailwind. I focus on clean UI, performance, and accessibility.</p>


<div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
<Button className="bg-brand-500 text-white hover:bg-brand-700">View Projects</Button>
<Button variant="outline" className="border-brand-200 text-brand-700">Contact</Button>
</div>


<div className="mt-6">
<span className="inline-block text-sm px-3 py-1 rounded-full bg-brand-100 text-brand-700 shadow-sm">Open to work</span>
<span className="ml-3 text-sm text-slate-500">Based in YourCity · Available for freelance</span>
</div>
</div>
</div>


<div className="mt-12 bg-white/80 border border-transparent rounded-xl p-6 max-w-6xl mx-auto shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-4">Skills & Tools</h3>


<div className="flex flex-wrap items-center gap-3">
<Skill logo="/logos/react.svg" label="React" />
<Skill logo="/logos/typescript.svg" label="TypeScript" />
<Skill logo="/logos/tailwind.svg" label="Tailwind" />
<Skill logo="/logos/nextjs.svg" label="Next.js" />
<Skill logo="/logos/nodejs.svg" label="Node.js" />
</div>
</div>
</div>
</section>
);
}


function Skill({ logo, label }: { logo: string; label: string }) {
return (
<div className="flex items-center gap-3 bg-brand-50/60 border border-brand-100 rounded-full px-3 py-2">
<div className="w-8 h-8 relative flex-shrink-0">
<Image src={logo} alt={label} fill className="object-contain" />
</div>
<div className="text-sm font-medium text-slate-800">{label}</div>
</div>
);
}