// app/components/Footer.tsx
export default function Footer() {
return (
<footer className="w-full border-t mt-16">
<div className="container py-6 text-sm text-center text-slate-600">© {new Date().getFullYear()} YourName — Built with Next.js + Tailwind</div>
</footer>
);
}