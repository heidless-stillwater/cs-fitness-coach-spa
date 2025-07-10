'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { href: '#features', label: 'Features' },
  {
    label: 'Tools',
    isDropdown: true,
    items: [
      { href: '#workout-generator', label: 'Workout AI' },
      { href: '#nutrition-assistant', label: 'Nutrition AI' },
    ],
  },
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
  };

  const renderNavLinks = (mobile: boolean = false) => {
    return navLinks.map((link, index) => {
      if (link.isDropdown && link.items) {
        if (mobile) {
          return (
            <div key={index} className="grid gap-2">
              <span className="text-sm font-medium">{link.label}</span>
              {link.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="pl-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          );
        }
        return (
          <DropdownMenu key={index}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-sm font-medium transition-colors hover:bg-transparent hover:text-primary focus-visible:ring-0 p-0"
              >
                {link.label}
                <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {link.items.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
      return (
        <Link
          key={link.href}
          href={link.href!}
          onClick={handleLinkClick}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {link.label}
        </Link>
      );
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b bg-background/95 shadow-sm backdrop-blur'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-base md:flex">
            {renderNavLinks()}
          </nav>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          {isMobile && (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  <Link
                    href="/"
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 text-lg font-semibold mb-4"
                  >
                    <Logo />
                  </Link>
                  {renderNavLinks(true)}
                </nav>
                <div className="absolute bottom-4 right-4">
                    <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
