import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE } from "@/lib/site";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101624] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.38)] sm:p-10">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#38BDF8]/10 blur-3xl" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#34D399]/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[#F9FAFB] sm:text-3xl">
                ¿Quieres una web para tu negocio?
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#CBD5E1]">
                Escríbeme por WhatsApp y te enseño una demo sin compromiso.
              </p>
              <div className="mt-4 flex items-center gap-3 text-sm">
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
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <ButtonLink
                href={SITE.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                Contactar por WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

