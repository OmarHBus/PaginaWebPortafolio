 "use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useEffect, useMemo, useState } from "react";

function IconMenu(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const nav = useMemo(() => SITE.nav, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="group inline-flex items-center gap-3">
            <div className="relative">
              <Image
                src="/oriweb_logo.svg"
                alt="OriWeb logo"
                width={180}
                height={48}
                priority
                sizes="(max-width: 640px) 150px, 180px"
                className="h-auto w-[140px] bg-transparent sm:w-[150px] lg:w-[180px]"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[#CBD5E1] lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#F9FAFB] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <ButtonLink
                href={SITE.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2"
              >
                {SITE.whatsapp.label}
              </ButtonLink>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#F9FAFB] ring-1 ring-inset ring-white/10 hover:bg-white/8 lg:hidden"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <IconClose className="h-5 w-5" />
              ) : (
                <IconMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="lg:hidden">
          <div className="border-t border-white/10 bg-[#050816]/90">
            <Container>
              <div className="flex flex-col gap-2 py-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-[#CBD5E1] hover:bg-white/5 hover:text-[#F9FAFB]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <ButtonLink
                  href={SITE.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full"
                  onClick={() => setOpen(false)}
                >
                  {SITE.whatsapp.label}
                </ButtonLink>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  );
}

