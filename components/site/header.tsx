"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MAILTO =
  "mailto:kontakt@opploft.no?subject=Gratis%20flaskehals-gjennomgang";

const NAV_LINKS = [
  { href: "#metode", label: "Metode" },
  { href: "#tjenester", label: "Tjenester" },
  { href: "#hvem", label: "Hvem" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <nav
        aria-label="Hovedmeny"
        className="site-container flex min-h-[4.5rem] items-center justify-between gap-6"
      >
        <a
          href="#top"
          aria-label="Oppløft — til toppen"
          className="text-[1.3rem] font-bold tracking-[-0.02em] text-foreground no-underline"
        >
          Oppløft
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="m-0 flex list-none items-center gap-7 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-medium text-foreground no-underline hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild size="nav">
            <a href={MAILTO}>Gratis gjennomgang</a>
          </Button>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Åpne meny"
                className="size-11"
              >
                <span className="flex flex-col gap-[5px]" aria-hidden="true">
                  <span className="block h-[2px] w-5 bg-foreground" />
                  <span className="block h-[2px] w-5 bg-foreground" />
                  <span className="block h-[2px] w-5 bg-foreground" />
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-72 p-0"
            >
              <SheetHeader className="flex-row items-center justify-between border-b border-border p-5">
                <SheetTitle className="text-[1.15rem] font-bold tracking-[-0.02em] text-foreground">
                  Oppløft
                </SheetTitle>
                <SheetClose className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Lukk
                </SheetClose>
              </SheetHeader>
              <ul className="m-0 flex list-none flex-col p-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.href} className="border-b border-border">
                    <SheetClose asChild>
                      <a
                        href={link.href}
                        className="block px-5 py-4 text-base font-medium text-foreground no-underline hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="p-5">
                <Button asChild size="xl" className="w-full">
                  <a href={MAILTO}>Gratis gjennomgang</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
