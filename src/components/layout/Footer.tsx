import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row md:px-6">
        <div className="flex flex-col items-center gap-2 sm:items-start">
            <Link href="/" className="flex items-center gap-2">
                <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Achieve Fitness. All rights reserved.
            </p>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
                </Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
