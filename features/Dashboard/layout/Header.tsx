"use client";

import { Button } from "@/components/ui/button";
import { Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type NavigationContent = {
  name: string;
  href: string;
};

const navigationContents: NavigationContent[] = [
  { name: "Chat", href: "/chat" },
  { name: "Our Products", href: "/our-products" },
  { name: "Resources", href: "/resources" },
  { name: "About Us", href: "/about-us" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="px-6 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 flex justify-center">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2 h-8 w-8 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <a className="flex items-center space-x-2" href="/">
            <span className="font-bold">
              <span className="text-red-500">V</span>
              <span className="text-yellow-400">K</span>
              <span className="text-blue-500">U </span> ClickSolve
            </span>
          </a>
        </div>

        <div className="mr-4 hidden md:flex ml-6">
          <nav className="flex items-center gap-6 text-sm">
            {navigationContents.map((item) => (
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="w-full max-w-sm md:w-auto">
            <Button
              variant="outline"
              className="relative h-8 w-full justify-start rounded-xl bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
            >
              <span className="hidden sm:inline-flex lg:hidden">Search...</span>
              <span className="hidden lg:inline-flex">
                Search documentation...
              </span>
              <span className="inline-flex sm:hidden">Search</span>
              <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
            <span className="ml-2 text-sm text-muted-foreground hidden sm:inline">
              95.1k
            </span>
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-b border-border bg-background md:hidden">
          <nav className="container flex flex-col space-y-3 py-4">
            <a
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              href="/docs"
            >
              Docs
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              href="/components"
            >
              Components
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              href="/blocks"
            >
              Blocks
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              href="/charts"
            >
              Charts
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              href="/themes"
            >
              Themes
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              href="/colors"
            >
              Colors
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export { Header };
