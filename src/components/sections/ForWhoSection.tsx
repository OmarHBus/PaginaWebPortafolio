import { Container } from "@/components/ui/Container";

const chips = [
  "Peluquerías",
  "Barberías",
  "Restaurantes",
  "Cafeterías",
  "Centros de estética",
  "Pequeños negocios locales",
] as const;

export function ForWhoSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-[#F9FAFB] sm:text-3xl">
              ¿Para quién es este servicio?
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#CBD5E1]">
              Para negocios de Orihuela que quieren una web moderna, clara y con
              lo importante a la vista y contacto fácil por WhatsApp.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              {chips.map((c) => (
                <div
                  key={c}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#F9FAFB] shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
                >
                  {c}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#101624] p-6 text-sm leading-7 text-[#CBD5E1] shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
              Si tu negocio ya funciona con Instagram y Google Maps, perfecto:
              la web no sustituye eso, lo complementa. Te dejo un enlace claro
              para compartir y convertir visitas en clientes.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

