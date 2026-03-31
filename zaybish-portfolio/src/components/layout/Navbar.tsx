"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Book a Call" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-start justify-between px-5 py-5 sm:px-6">
        <Link href="/" className="mt-2 flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="text-xl font-semibold tracking-tight text-white">ZT</span>
        </Link>

        <div className="hidden md:block">
          <div className="floating-pill mx-auto flex items-center gap-1 px-3 py-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  pathname === href ? "bg-white/[0.08] text-white" : "text-slate-300 hover:text-white"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-1 flex items-center gap-3">
          <ThemeToggle />
          <button
            className="floating-pill rounded-full p-2 text-slate-100 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-5 mt-2 rounded-[1.5rem] border border-white/10 bg-[#111113]/96 px-5 pb-5 pt-4 shadow-[0_16px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-3 py-2 text-sm transition-colors",
                    pathname === href ? "bg-white/[0.06] text-white" : "text-slate-300"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl px-3 py-2 text-sm text-slate-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
