// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export const metadata = {
title: 'YourName — Portfolio',
description: 'Portfolio built with Next.js, Tailwind, shadcn',
};


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body className="bg-white text-slate-900 antialiased">
<Header />
<main>{children}</main>
<Footer />
</body>
</html>
);
}