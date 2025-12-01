// app/components/Header.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';


export default function Header() {
return (
<header className="w-full border-b bg-white/60 backdrop-blur-sm">
<nav className="container flex items-center justify-between py-4">
<Link href="/" className="text-lg font-bold">YourName</Link>
<div className="flex items-center gap-4">
<Link href="#projects" className="text-sm hover:underline">Projects</Link>
<Link href="#about" className="text-sm hover:underline">About</Link>
<Link href="#contact" className="text-sm hover:underline">Contact</Link>
<Button variant="outline" className="ml-2">Resume</Button>
</div>
</nav>
</header>
);
}