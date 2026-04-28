import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE } from "@/lib/site";

function MockupCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#22D3EE]/18 via-[#A78BFA]/10 to-transparent blur-3xl" />
      <div className="rounded-3xl border border-white/10 bg-[#101624] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          </div>
          <div className="text-xs font-medium text-[#CBD5E1]">
            Demo · Barbería / Restaurante
          </div>
          <div className="h-5 w-14 rounded-full bg-white/5 ring-1 ring-inset ring-white/10" />
        </div>

        <div className="grid gap-4 p-5 sm:p-6">
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-[#F9FAFB]">
                Local Orihuela Centro
              </div>
              <div className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-200 ring-1 ring-inset ring-emerald-400/20">
                Responde por WhatsApp
              </div>
            </div>
            <div className="text-xs text-[#CBD5E1]">
              Orihuela · Horarios, precios y ubicación claros
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 rounded-2xl bg-white/5 p-4 ring-1 ring-inset ring-white/10">
              <div className="h-3 w-28 rounded bg-white/20" />
              <div className="mt-3 h-2.5 w-44 rounded bg-white/15" />
              <div className="mt-2 h-2.5 w-32 rounded bg-white/15" />
              <div className="mt-4 h-9 w-40 rounded-xl bg-gradient-to-r from-[#22D3EE] to-[#38BDF8]" />
            </div>
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-inset ring-white/10">
              <div className="h-3 w-16 rounded bg-white/20" />
              <div className="mt-3 h-20 rounded-xl bg-[#050816]/40 ring-1 ring-inset ring-white/10" />
              <div className="mt-3 h-8 rounded-xl bg-gradient-to-r from-[#34D399] to-[#22D3EE]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "Corte", price: "12 €" },
              { title: "Corte + barba", price: "18 €" },
              { title: "Barba", price: "10 €" },
              { title: "Niños", price: "10 €" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#111827] p-4"
              >
                <div className="text-sm font-semibold text-[#F9FAFB]">
                  {item.title}
                </div>
                <div className="mt-1 text-sm text-[#CBD5E1]">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-4">
            <div className="text-sm font-semibold text-[#F9FAFB]">
              Horario de hoy
            </div>
            <div className="mt-1 text-sm text-[#CBD5E1]">
              10:00–14:00 · 16:30–20:30
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="h-10 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10" />
              <div className="h-10 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#22D3EE]/10 blur-3xl" />
        <div className="absolute -bottom-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-[#A78BFA]/10 blur-3xl" />
      </div>
      <Container>
        <div className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#CBD5E1]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_14px_rgba(34,211,238,0.6)]" />
              Orihuela y alrededores · webs modernas para negocios locales
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#F9FAFB] sm:text-5xl">
              Páginas web para negocios locales en Orihuela
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-[#CBD5E1]">
              Creo webs modernas para peluquerías, barberías, restaurantes y
              pequeños negocios que quieren verse más profesionales y conseguir
              que sus clientes contacten más fácil.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Diseño responsive", "WhatsApp", "SEO local básico", "Dominio propio"].map(
                (b) => (
                  <div
                    key={b}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#CBD5E1]"
                  >
                    {b}
                  </div>
                ),
              )}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/demo-peluqueria" variant="secondary">
                Ver demo
              </ButtonLink>
              <ButtonLink
                href={SITE.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir información por WhatsApp
              </ButtonLink>
            </div>

            <div className="mt-10 grid max-w-xl gap-3 text-sm text-[#CBD5E1] sm:grid-cols-3">
              {[
                {
                  title: "Rápida y ligera",
                  text: "Carga ágil en móvil, perfecta para clientes en la calle.",
                },
                {
                  title: "Hecha para convertir",
                  text: "Precios, horarios y CTA a WhatsApp bien visibles.",
                },
                {
                  title: "Enfoque local",
                  text: "Textos y estructura pensados para Orihuela y tu zona.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.22)]"
                >
                  <div className="font-semibold text-[#F9FAFB]">{c.title}</div>
                  <div className="mt-1">{c.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-4">
            <MockupCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

