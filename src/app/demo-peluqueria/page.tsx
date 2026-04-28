import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Demo peluquería | OriWeb",
  description: "Demo estática de página web para peluquería o barbería creada por OriWeb.",
};

const WHATSAPP_DEMO =
  "https://wa.me/34687589183?text=Hola%2C%20he%20visto%20la%20demo%20de%20peluquer%C3%ADa%20y%20quiero%20informaci%C3%B3n%20para%20mi%20negocio";

function SectionTitle(props: { kicker?: string; title: string; text?: string }) {
  return (
    <div className="flex flex-col gap-3">
      {props.kicker ? (
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#CBD5E1]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] shadow-[0_0_14px_rgba(34,211,238,0.6)]" />
          {props.kicker}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-[#F9FAFB] sm:text-3xl">
        {props.title}
      </h2>
      {props.text ? (
        <p className="max-w-2xl text-lg leading-8 text-[#CBD5E1]">{props.text}</p>
      ) : null}
    </div>
  );
}

function DemoHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="#inicio" className="inline-flex items-center gap-2">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-[#34D399] shadow-[0_0_20px_rgba(52,211,153,0.55)]" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-[#F9FAFB]">
              Barbería Nova
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[#CBD5E1] lg:flex">
            {[
              ["Inicio", "#inicio"],
              ["Servicios", "#servicios"],
              ["Precios", "#precios"],
              ["Galería", "#galeria"],
              ["Ubicación", "#ubicacion"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-[#F9FAFB]">
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href={WHATSAPP_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2"
            >
              Reservar por WhatsApp
            </ButtonLink>
            <Link
              href="/"
              className="hidden rounded-xl bg-white/5 px-3 py-2 text-sm font-semibold text-[#CBD5E1] ring-1 ring-inset ring-white/10 hover:bg-white/8 hover:text-[#F9FAFB] sm:inline-flex"
            >
              Volver a OriWeb
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

function HeroMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#34D399]/18 via-[#22D3EE]/10 to-transparent blur-3xl" />
      <div className="rounded-3xl border border-white/10 bg-[#101624] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="text-xs font-semibold text-[#CBD5E1]">Reserva rápida</div>
          <div className="text-xs text-[#CBD5E1]">Orihuela · 4,9 ★</div>
          <div className="h-5 w-14 rounded-full bg-white/5 ring-1 ring-inset ring-white/10" />
        </div>

        <div className="grid gap-4 p-5 sm:p-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold text-[#F9FAFB]">Horario</div>
            <div className="mt-2 text-sm text-[#CBD5E1]">
              L–V 10:00–20:00 · S 10:00–14:00
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-10 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10" />
              <div className="h-10 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              ["Corte", "12 €"],
              ["Corte + barba", "18 €"],
              ["Arreglo de barba", "8 €"],
              ["Degradado", "14 €"],
            ].map(([t, p]) => (
              <div
                key={t}
                className="rounded-2xl border border-white/10 bg-[#111827] p-4"
              >
                <div className="text-sm font-semibold text-[#F9FAFB]">{t}</div>
                <div className="mt-1 text-sm text-[#CBD5E1]">{p}</div>
              </div>
            ))}
          </div>

          <ButtonLink
            href={WHATSAPP_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            Reservar por WhatsApp
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default function DemoPeluqueriaPage() {
  return (
    <div className="min-h-full bg-[#050816] text-[#F9FAFB]">
      <DemoHeader />

      <main className="flex-1">
        <section id="inicio" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#22D3EE]/10 blur-3xl" />
            <div className="absolute -bottom-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-[#34D399]/10 blur-3xl" />
          </div>
          <Container>
            <div className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-14">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#CBD5E1]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#34D399] shadow-[0_0_14px_rgba(52,211,153,0.6)]" />
                  Barbería Nova · Orihuela
                </div>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#F9FAFB] sm:text-5xl">
                  Tu barbería de confianza en Orihuela
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-[#CBD5E1]">
                  Cortes modernos, arreglo de barba y estilo cuidado en un
                  ambiente profesional.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Cita por WhatsApp", "Precios claros", "Horario visible", "Ubicación"].map(
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
                  <ButtonLink href="#servicios" variant="secondary">
                    Ver servicios
                  </ButtonLink>
                  <ButtonLink
                    href={WHATSAPP_DEMO}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar por WhatsApp
                  </ButtonLink>
                </div>

                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-[#CBD5E1]">
                  Esta es una demo estática. La información, precios e imágenes
                  son de ejemplo.
                </div>
              </div>

              <div className="lg:pl-4">
                <HeroMock />
              </div>
            </div>
          </Container>
        </section>

        <section id="servicios" className="py-16 sm:py-24">
          <Container>
            <SectionTitle
              kicker="Servicios"
              title="Servicios"
              text="Cortes actuales, barba cuidada y un estilo limpio. Todo pensado para que el cliente lo entienda en segundos."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Corte de pelo", "Corte clásico o moderno, a tu estilo."],
                ["Corte + barba", "Pack completo para salir impecable."],
                ["Arreglo de barba", "Perfilado, arreglo y cuidado."],
                ["Degradado", "Fade limpio con acabado profesional."],
                ["Peinado", "Textura y forma para tu tipo de pelo."],
                ["Corte infantil", "Rápido, cómodo y con buen resultado."],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="group rounded-2xl border border-white/10 bg-[#101624] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:border-white/15 hover:bg-[#111827]"
                >
                  <div className="text-base font-semibold text-[#F9FAFB]">{t}</div>
                  <p className="mt-2 text-sm leading-7 text-[#CBD5E1]">{d}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="precios" className="py-16 sm:py-24">
          <Container>
            <SectionTitle
              kicker="Precios"
              title="Precios"
              text="Precios ficticios para la demo. En una web real se ajustan a tu negocio."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["Corte de pelo", "12 €"],
                ["Corte + barba", "18 €"],
                ["Arreglo de barba", "8 €"],
                ["Degradado", "14 €"],
                ["Corte infantil", "10 €"],
              ].map(([t, p]) => (
                <div
                  key={t}
                  className="rounded-2xl border border-white/10 bg-[#101624] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
                >
                  <div className="text-sm font-semibold text-[#CBD5E1]">{t}</div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight text-[#F9FAFB]">
                    {p}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="galeria" className="py-16 sm:py-24">
          <Container>
            <SectionTitle
              kicker="Galería"
              title="Galería"
              text="Placeholders de imagen para simular trabajos, local y detalles."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Corte clásico",
                "Degradado",
                "Barba",
                "Local",
                "Peinado",
                "Detalle",
              ].map((t) => (
                <div
                  key={t}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#101624] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:border-white/15"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#22D3EE]/10 blur-2xl opacity-60 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="text-sm font-semibold text-[#F9FAFB]">{t}</div>
                    <div className="mt-4 flex h-40 items-center justify-center rounded-2xl bg-white/5 text-sm text-[#CBD5E1] ring-1 ring-inset ring-white/10">
                      {t} · Foto de ejemplo
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="ubicacion" className="py-16 sm:py-24">
          <Container>
            <SectionTitle
              kicker="Ubicación"
              title="Ubicación y horarios"
              text="Dirección y horarios ficticios para la demo."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-white/10 bg-[#101624] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                  <div className="text-sm font-semibold text-[#CBD5E1]">Dirección</div>
                  <div className="mt-2 text-lg font-semibold text-[#F9FAFB]">
                    Calle Mayor 12, Orihuela
                  </div>
                  <div className="mt-6 text-sm font-semibold text-[#CBD5E1]">
                    Horarios
                  </div>
                  <div className="mt-3 grid gap-2 text-sm text-[#CBD5E1]">
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span>Lunes a Viernes</span>
                      <span className="font-semibold text-[#F9FAFB]">10:00 - 20:00</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span>Sábado</span>
                      <span className="font-semibold text-[#F9FAFB]">10:00 - 14:00</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span>Domingo</span>
                      <span className="font-semibold text-[#F9FAFB]">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-white/10 bg-[#101624] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                  <div className="text-sm font-semibold text-[#CBD5E1]">
                    Mapa
                  </div>
                  <div className="mt-4 flex h-64 items-center justify-center rounded-2xl bg-white/5 text-sm text-[#CBD5E1] ring-1 ring-inset ring-white/10">
                    Mapa de ubicación
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="contacto" className="py-16 sm:py-24">
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101624] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.38)] sm:p-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#22D3EE]/10 blur-3xl" />
              <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#34D399]/10 blur-3xl" />

              <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#F9FAFB] sm:text-3xl">
                    ¿Quieres una web como esta para tu negocio?
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[#CBD5E1]">
                    Esta es una demo estática. La información, precios e imágenes
                    son de ejemplo.
                  </p>
                </div>
                <div className="lg:col-span-5 lg:flex lg:justify-end">
                  <ButtonLink
                    href={WHATSAPP_DEMO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    Reservar por WhatsApp
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050816]">
        <Container>
          <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="font-semibold text-[#38BDF8] hover:text-[#22D3EE]"
            >
              Demo creada por OriWeb
            </Link>
            <Link
              href="/"
              className="rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-[#CBD5E1] ring-1 ring-inset ring-white/10 hover:bg-white/8 hover:text-[#F9FAFB]"
            >
              Volver a OriWeb
            </Link>
          </div>
        </Container>
      </footer>
    </div>
  );
}

