'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#workout-generator', label: 'Workout AI' },
  { href: '#nutrition-assistant', label: 'Nutrition AI' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#resources', label: 'Resources' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  const navContent = (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={handleLinkClick}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'border-b bg-background/95 shadow-sm backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {isMobile ? (
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Logo />
                </Link>
                {navContent}
                 <a href="tel:11112223333" className="flex items-center gap-2 text-sm font-semibold text-primary mt-4">
                 <Phone className="h-4 w-4" />
                 111-122-23333
               </a>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden items-center gap-6 text-base md:flex">
            {navContent}
            <div className="flex items-center gap-4">
               <a href="tel:11112223333" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                 <Phone className="h-4 w-4" />
                 111-122-23333
               </a>
               <Link href="#workout-generator">
                <Button>Get Started</Button>
               </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
