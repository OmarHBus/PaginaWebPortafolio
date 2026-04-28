import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function DemoSection() {
  return (
    <section id="demo" className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101624] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.38)] sm:p-10">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#38BDF8]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-[#34D399]/10 blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight text-[#F9FAFB] sm:text-3xl">
                Mira cómo podría quedar una web para tu negocio
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#CBD5E1]">
                Puedo enseñarte una demo de peluquería/barbería o adaptar una
                base visual a tu tipo de negocio para que veas el resultado
                antes de decidir.
              </p>
            </div>

            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <ButtonLink
                href="/demo-peluqueria"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Ver demo
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

