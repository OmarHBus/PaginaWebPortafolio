import { Container } from "@/components/ui/Container";

const included = [
  "Diseño responsive",
  "Secciones principales",
  "Botón de WhatsApp",
  "Google Maps",
  "Redes sociales",
  "SEO local básico",
  "Publicación inicial",
] as const;

const externalCosts = [
  { label: "Dominio", value: "10 € – 20 €/año" },
  { label: "Hosting", value: "0 € – 15 €/mes" },
  { label: "SSL", value: "normalmente incluido" },
  { label: "Mantenimiento opcional", value: "desde 29 €/mes + IVA" },
  { label: "Cambios extra", value: "30 €/hora + IVA" },
] as const;

export function PricingSection() {
  return (
    <section id="precios" className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-[#F9FAFB] sm:text-3xl">
            Precios claros para negocio local
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-[#CBD5E1]">
            Una base sólida y moderna, con todo lo que suele necesitar un negocio
            de Orihuela para empezar a captar clientes con una web.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101624] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.38)] sm:p-10">
              <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#22D3EE]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#A78BFA]/10 blur-3xl" />

              <div className="relative">
                <div className="text-sm font-semibold text-[#CBD5E1]">
                  Web profesional para negocio local
                </div>
                <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-2">
                  <div className="text-4xl font-semibold tracking-tight text-[#F9FAFB]">
                    Desde 450 € + IVA
                  </div>
                  <div className="text-sm text-[#CBD5E1]">
                    Precio orientativo · presupuesto cerrado antes de empezar
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {included.map((x) => (
                    <div
                      key={x}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-[#34D399]/15 ring-1 ring-inset ring-emerald-400/30">
                        <div className="flex h-full w-full items-center justify-center text-[10px] text-emerald-200">
                          ✓
                        </div>
                      </div>
                      <div className="text-sm font-medium text-[#F9FAFB]">{x}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-sm leading-7 text-[#CBD5E1]">
                  El precio final depende del número de secciones, nivel de
                  personalización y contenido necesario.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-[#101624] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.38)]">
              <div className="text-base font-semibold text-[#F9FAFB]">
                Costes externos (orientativos)
              </div>
              <div className="mt-5 grid gap-3">
                {externalCosts.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="text-sm font-medium text-[#CBD5E1]">
                      {c.label}
                    </div>
                    <div className="text-sm font-semibold text-[#F9FAFB]">
                      {c.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-[#CBD5E1]">
                Si ya tienes dominio, se puede reutilizar. Si no, te ayudo a
                elegir uno y dejarlo conectado.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-[#CBD5E1]">
          Si tu negocio está en Orihuela (o cerca) y quieres una web moderna,
          hablamos y te digo el presupuesto antes de empezar.
        </div>
      </Container>
    </section>
  );
}

