import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <Container>
        <div className="flex flex-col gap-8 py-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="inline-flex items-center">
              <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-inset ring-white/10">
                <Image
                  src="/oriweb-logo.png"
                  alt="OriWeb logo"
                  width={160}
                  height={44}
                  sizes="160px"
                  className="h-auto w-[140px]"
                />
              </div>
            </div>
            <div className="mt-1 text-sm text-[#CBD5E1]">{SITE.tagline}</div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <Link
                href={SITE.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 font-semibold text-[#CBD5E1] ring-1 ring-inset ring-white/10 hover:bg-white/8 hover:text-[#F9FAFB]"
              >
                Instagram {SITE.instagram.label}
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href={SITE.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#38BDF8] hover:text-[#22D3EE]"
            >
              WhatsApp
            </Link>
            <div className="flex flex-col gap-2 text-sm">
              <div className="font-semibold text-[#F9FAFB]">Secciones</div>
              <div className="flex flex-col gap-2 text-[#CBD5E1]">
                <Link className="hover:text-[#F9FAFB]" href="#inicio">
                  Inicio
                </Link>
                <Link className="hover:text-[#F9FAFB]" href="#servicios">
                  Servicios
                </Link>
                <Link className="hover:text-[#F9FAFB]" href="#demo">
                  Demo
                </Link>
                <Link className="hover:text-[#F9FAFB]" href="#precios">
                  Precios
                </Link>
                <Link className="hover:text-[#F9FAFB]" href="#proceso">
                  Proceso
                </Link>
                <Link className="hover:text-[#F9FAFB]" href="#contacto">
                  Contacto
                </Link>
              </div>
            </div>
            <div className="text-sm text-[#CBD5E1] lg:text-right">
              © 2026 {SITE.name}. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

