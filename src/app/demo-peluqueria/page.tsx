import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Demo peluquería | OriWeb",
  description: "Demo estática de página web para peluquería o barbería creada por OriWeb.",
};

const WHATSAPP_DEMO =
  "https://wa.me/34687589183?text=Hola%2C%20he%20visto%20la%20demo%20de%20peluquer%C3%ADa%20y%20quiero%20informaci%C3%B3n%20para%20mi%20negocio";

const NOVA = {
  bg: "#F5EFE6",
  surface: "#E8D8C3",
  ink: "#1F1712",
  brown: "#5C4033",
  gold: "#C89B3C",
  burgundy: "#7A1E1E",
} as const;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function ButtonA(props: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
}) {
  const variant = props.variant ?? "primary";
  return (
    <a
      href={props.href}
      target={props.target}
      rel={props.rel}
      className={cx(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variant === "primary"
          ? "bg-[#C89B3C] text-[#1F1712] shadow-[0_14px_30px_rgba(200,155,60,0.25)] hover:brightness-105 active:brightness-95 focus-visible:ring-[#C89B3C] focus-visible:ring-offset-[#F5EFE6]"
          : "border border-[#5C4033]/25 bg-transparent text-[#1F1712] hover:bg-[#E8D8C3]/60 focus-visible:ring-[#5C4033] focus-visible:ring-offset-[#F5EFE6]",
        props.className,
      )}
    >
      {props.children}
    </a>
  );
}

function SectionTitle(props: { kicker?: string; title: string; text?: string }) {
  return (
    <div className="flex flex-col gap-3">
      {props.kicker ? (
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#5C4033]/20 bg-[#E8D8C3]/60 px-3 py-1 text-xs font-semibold text-[#5C4033]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C89B3C]" />
          {props.kicker}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-[#1F1712] sm:text-3xl">
        {props.title}
      </h2>
      {props.text ? (
        <p className="max-w-2xl text-lg leading-8 text-[#5C4033]">{props.text}</p>
      ) : null}
    </div>
  );
}

function DemoHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#5C4033]/15 bg-[#F5EFE6]/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="#inicio" className="inline-flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-[#1F1712]">
              Barbería Nova
            </span>
            <span className="hidden text-xs font-medium text-[#5C4033] sm:inline">
              · Orihuela
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[#5C4033] lg:flex">
            {[
              ["Inicio", "#inicio"],
              ["Servicios", "#servicios"],
              ["Precios", "#precios"],
              ["Galería", "#galeria"],
              ["Ubicación", "#ubicacion"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="hover:text-[#1F1712] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonA
              href={WHATSAPP_DEMO}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar
            </ButtonA>
            <Link
              href="/"
              className="hidden rounded-full border border-[#5C4033]/25 bg-transparent px-4 py-2 text-sm font-semibold text-[#1F1712] hover:bg-[#E8D8C3]/60 sm:inline-flex"
            >
              Volver a OriWeb
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

function BarberSignCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#C89B3C]/20 via-[#7A1E1E]/10 to-transparent blur-3xl" />
      <div className="rounded-[1.75rem] border border-[#5C4033]/18 bg-[#1F1712] p-6 shadow-[0_30px_80px_rgba(31,23,18,0.55)]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C89B3C]/25 bg-[#C89B3C]/10 px-3 py-1 text-xs font-semibold text-[#C89B3C]">
              Abierto hoy
            </div>
            <div className="mt-4 text-3xl font-semibold tracking-tight text-[#F5EFE6]">
              10:00 - 20:00
            </div>
            <div className="mt-2 text-sm text-[#E8D8C3]">
              Corte · Barba · Degradado
            </div>
          </div>

          <div className="rounded-2xl border border-[#5C4033]/20 bg-[#2a1f19] px-4 py-3 text-right">
            <div className="text-xs font-semibold text-[#E8D8C3]">Valoración</div>
            <div className="mt-1 text-sm font-semibold text-[#F5EFE6]">
              4.9 ★★★★★
            </div>
            <div className="mt-1 text-xs text-[#E8D8C3]/80">Orihuela</div>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          <div className="rounded-2xl border border-[#5C4033]/18 bg-[#2a1f19] p-4">
            <div className="text-xs font-semibold text-[#E8D8C3]">Recomendado</div>
            <div className="mt-1 text-sm font-semibold text-[#F5EFE6]">
              Corte + barba
            </div>
            <div className="mt-1 text-sm text-[#E8D8C3]/90">18 €</div>
          </div>

          <ButtonA
            href={WHATSAPP_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            Reservar por WhatsApp
          </ButtonA>
        </div>
      </div>
    </div>
  );
}

export default function DemoPeluqueriaPage() {
  return (
    <div
      className="min-h-full"
      style={{ background: NOVA.bg, color: NOVA.ink }}
    >
      <DemoHeader />

      <main className="flex-1">
        <section id="inicio" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C89B3C]/18 blur-3xl" />
            <div className="absolute -bottom-56 right-[-120px] h-[560px] w-[560px] rounded-full bg-[#7A1E1E]/10 blur-3xl" />
          </div>
          <Container>
            <div className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-14">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#5C4033]/20 bg-[#E8D8C3]/60 px-3 py-1 text-xs font-semibold text-[#5C4033]">
                    Barbería ficticia · Demo OriWeb
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#5C4033]/20 bg-[#E8D8C3]/60 px-3 py-1 text-xs font-semibold text-[#5C4033]">
                    Orihuela
                  </div>
                </div>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#1F1712] sm:text-5xl">
                  Cortes clásicos y modernos en Orihuela
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-[#5C4033]">
                  Barbería Nova combina técnica, estilo y trato cercano para que
                  salgas siempre con tu mejor versión.
                </p>

                <div className="mt-8 h-px w-24 bg-[#5C4033]/25" />

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonA href="#servicios" variant="secondary">
                    Ver servicios
                  </ButtonA>
                  <ButtonA
                    href={WHATSAPP_DEMO}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar por WhatsApp
                  </ButtonA>
                </div>

                <div className="mt-10 rounded-2xl border border-[#5C4033]/20 bg-[#E8D8C3]/55 p-5 text-sm leading-7 text-[#5C4033]">
                  Demo estática: textos, precios e imágenes son de ejemplo.
                </div>
              </div>

              <div className="lg:pl-4">
                <BarberSignCard />
              </div>
            </div>
          </Container>
        </section>

        <section id="servicios" className="py-16 sm:py-24">
          <Container>
            <SectionTitle
              kicker="Servicios"
              title="Servicios"
              text="Una carta sencilla, pensada para que el cliente elija rápido."
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
                  className="group rounded-3xl border border-[#5C4033]/20 bg-[#E8D8C3]/55 p-6 shadow-[0_18px_50px_rgba(92,64,51,0.12)] transition-all hover:-translate-y-0.5 hover:bg-[#E8D8C3]/70"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold text-[#1F1712]">
                        {t}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[#5C4033]">
                        {d}
                      </p>
                    </div>
                    <div className="mt-1 h-10 w-10 rounded-2xl border border-[#5C4033]/20 bg-[#F5EFE6] text-center text-sm font-semibold leading-10 text-[#7A1E1E]">
                      ✦
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="precios" className="py-16 sm:py-24">
          <Container>
            <SectionTitle
              kicker="Precios"
              title="Carta de precios"
              text="Precios ficticios para la demo."
            />
            <div className="mt-10 rounded-[2rem] border border-[#5C4033]/20 bg-[#1F1712] p-6 shadow-[0_24px_70px_rgba(31,23,18,0.35)] sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-[#E8D8C3]">
                    BARBERÍA NOVA
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-[#F5EFE6]">
                    Servicios y precios
                  </div>
                </div>
                <div className="hidden rounded-2xl border border-[#C89B3C]/25 bg-[#C89B3C]/10 px-4 py-3 text-sm font-semibold text-[#C89B3C] sm:block">
                  Orihuela · 4.9 ★★★★★
                </div>
              </div>

              {[
                ["Corte de pelo", "12 €"],
                ["Corte + barba", "18 €"],
                ["Arreglo de barba", "8 €"],
                ["Degradado", "14 €"],
                ["Corte infantil", "10 €"],
              ].map(([t, p]) => (
                <div key={t} className="flex items-center gap-4 py-3">
                  <div className="text-sm font-semibold text-[#F5EFE6]">{t}</div>
                  <div className="min-w-0 flex-1 border-b border-dotted border-[#E8D8C3]/30" />
                  <div className="text-sm font-semibold text-[#C89B3C]">{p}</div>
                </div>
              ))}
              <div className="mt-6 h-px bg-[#E8D8C3]/15" />
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-[#E8D8C3]">
                  Reserva por WhatsApp y te confirmamos hora.
                </div>
                <ButtonA href={WHATSAPP_DEMO} target="_blank" rel="noopener noreferrer">
                  Reservar por WhatsApp
                </ButtonA>
              </div>
            </div>
          </Container>
        </section>

        <section id="galeria" className="py-16 sm:py-24">
          <Container>
            <SectionTitle
              kicker="Galería"
              title="Galería"
              text="Imágenes de ejemplo (placeholders) con un estilo cálido."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="group overflow-hidden rounded-[1.75rem] border border-[#5C4033]/18 bg-[#E8D8C3]/55 shadow-[0_18px_50px_rgba(92,64,51,0.12)] transition-transform hover:-translate-y-0.5"
                >
                  <div className="h-40 bg-gradient-to-br from-[#E8D8C3] via-[#F5EFE6] to-[#E8D8C3]" />
                  <div className="p-5">
                    <div className="text-sm font-semibold text-[#1F1712]">{t}</div>
                    <div className="mt-1 text-sm text-[#5C4033]">Foto de ejemplo</div>
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
                <div className="rounded-[2rem] border border-[#5C4033]/20 bg-[#E8D8C3]/55 p-8 shadow-[0_18px_50px_rgba(92,64,51,0.12)]">
                  <div className="text-sm font-semibold text-[#5C4033]">Dirección</div>
                  <div className="mt-2 text-lg font-semibold text-[#1F1712]">
                    Calle Mayor 12, Orihuela
                  </div>
                  <div className="mt-6 text-sm font-semibold text-[#5C4033]">
                    Horarios
                  </div>
                  <div className="mt-3 grid gap-2 text-sm text-[#5C4033]">
                    <div className="flex items-center justify-between rounded-2xl border border-[#5C4033]/15 bg-[#F5EFE6] px-4 py-3">
                      <span>Lunes a Viernes</span>
                      <span className="font-semibold text-[#1F1712]">10:00 - 20:00</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-[#5C4033]/15 bg-[#F5EFE6] px-4 py-3">
                      <span>Sábado</span>
                      <span className="font-semibold text-[#1F1712]">10:00 - 14:00</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-[#5C4033]/15 bg-[#F5EFE6] px-4 py-3">
                      <span>Domingo</span>
                      <span className="font-semibold text-[#1F1712]">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-[2rem] border border-[#5C4033]/20 bg-[#E8D8C3]/55 p-8 shadow-[0_18px_50px_rgba(92,64,51,0.12)]">
                  <div className="text-sm font-semibold text-[#5C4033]">Mapa</div>
                  <div className="mt-4 flex h-64 items-center justify-center rounded-2xl bg-[#F5EFE6] text-sm text-[#5C4033] border border-[#5C4033]/15">
                    Mapa de ubicación
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="contacto" className="py-16 sm:py-24">
          <Container>
            <div className="rounded-[2.25rem] border border-[#5C4033]/20 bg-[#1F1712] p-8 shadow-[0_30px_80px_rgba(31,23,18,0.55)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#F5EFE6] sm:text-3xl">
                    Reserva tu cita en Barbería Nova
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[#E8D8C3]">
                    Esta demo es un ejemplo visual. OriWeb puede adaptar una web
                    similar a la imagen de tu negocio.
                  </p>
                </div>
                <div className="lg:col-span-5 lg:flex lg:justify-end lg:gap-3">
                  <ButtonA
                    href={WHATSAPP_DEMO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    Reservar por WhatsApp
                  </ButtonA>
                  <Link
                    href="/"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[#C89B3C]/25 bg-transparent px-5 py-3 text-sm font-semibold text-[#F5EFE6] hover:bg-[#C89B3C]/10 sm:mt-0 sm:w-auto"
                  >
                    Volver a OriWeb
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-[#5C4033]/15 bg-[#F5EFE6]">
        <Container>
          <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-semibold text-[#1F1712]">Barbería Nova</div>
              <div className="mt-1 text-sm text-[#5C4033]">
                Demo ficticia creada por{" "}
                <Link href="/" className="font-semibold text-[#7A1E1E] hover:underline">
                  OriWeb
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-full border border-[#5C4033]/25 bg-transparent px-4 py-2 text-sm font-semibold text-[#1F1712] hover:bg-[#E8D8C3]/60"
              >
                Volver a OriWeb
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

