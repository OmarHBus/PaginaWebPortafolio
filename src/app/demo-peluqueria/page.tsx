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
  bg: "#F3E7D3",
  sand: "#EAD8BE",
  surface: "#E6D2B5",
  card: "#FFF7EC",
  soft: "#F8F1E7",
  ink: "#20130D",
  ink2: "#5F4636",
  dark: "#2A1810",
  mid: "#5A3825",
  copper: "#B47A2B",
  copperHover: "#D19A3D",
  burgundy: "#6E1F1B",
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
          ? "bg-[#B47A2B] text-[#160D08] shadow-[0_14px_32px_rgba(180,122,43,0.28)] hover:bg-[#D19A3D] active:brightness-95 focus-visible:ring-[#B47A2B] focus-visible:ring-offset-[#F3E7D3]"
          : "border border-[#C7A77A] bg-[#F8F1E7] text-[#3A2417] hover:bg-[#E6D2B5] focus-visible:ring-[#5A3825] focus-visible:ring-offset-[#F3E7D3]",
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
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(90,56,37,0.25)] bg-[#EFE0C8] px-3 py-1 text-xs font-semibold text-[#5A3825]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B47A2B]" />
          {props.kicker}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-[#20130D] sm:text-3xl">
        {props.title}
      </h2>
      {props.text ? (
        <p className="max-w-2xl text-lg leading-8 text-[#5F4636]">{props.text}</p>
      ) : null}
    </div>
  );
}

function DemoHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(42,24,16,0.16)] bg-[#F8F1E7]/75 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="#inicio" className="inline-flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-[#20130D]">
              Barbería Nova
            </span>
            <span className="hidden text-xs font-medium text-[#5F4636] sm:inline">
              · Orihuela
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[#5F4636] lg:flex">
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
                className="hover:text-[#20130D] transition-colors"
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
              className="hidden rounded-full border border-[#C7A77A] bg-transparent px-4 py-2 text-sm font-semibold text-[#3A2417] hover:bg-[#E6D2B5] sm:inline-flex"
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
      <div className="absolute -inset-10 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#B47A2B]/18 via-[#6E1F1B]/10 to-transparent blur-3xl" />
      <div className="rounded-[1.75rem] border border-white/8 bg-[#2A1810] p-6 shadow-[0_26px_70px_rgba(42,24,16,0.38)]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#D19A3D]">
              Abierto hoy
            </div>
            <div className="mt-4 text-3xl font-semibold tracking-tight text-[#F8F1E7]">
              10:00 - 20:00
            </div>
            <div className="mt-2 text-sm text-[#E6D2B5]">
              Corte · Barba · Degradado
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
            <div className="text-xs font-semibold text-[#E6D2B5]">Valoración</div>
            <div className="mt-1 text-sm font-semibold text-[#F8F1E7]">
              4.9 ★★★★★
            </div>
            <div className="mt-1 text-xs text-[#E6D2B5]/80">Orihuela</div>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs font-semibold text-[#E6D2B5]">Recomendado</div>
            <div className="mt-1 text-sm font-semibold text-[#F8F1E7]">
              Corte + barba
            </div>
            <div className="mt-1 text-sm text-[#D19A3D]">18 €</div>
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
      style={{
        background:
          "linear-gradient(180deg, #F3E7D3 0%, #EAD8BE 40%, #F8F1E7 100%)",
        color: NOVA.ink,
      }}
    >
      <DemoHeader />

      <main className="flex-1">
        <section id="inicio" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-52 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#B47A2B]/14 blur-3xl" />
            <div className="absolute -bottom-64 right-[-140px] h-[620px] w-[620px] rounded-full bg-[#6E1F1B]/10 blur-3xl" />
            <div className="absolute -bottom-72 left-[-160px] h-[520px] w-[520px] rounded-full bg-[#5A3825]/10 blur-3xl" />
          </div>
          <Container>
            <div className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-14">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(90,56,37,0.25)] bg-[#EFE0C8] px-3 py-1 text-xs font-semibold text-[#5A3825]">
                    Barbería ficticia · Demo OriWeb
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(90,56,37,0.25)] bg-[#EFE0C8] px-3 py-1 text-xs font-semibold text-[#5A3825]">
                    Orihuela
                  </div>
                </div>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#20130D] sm:text-5xl">
                  Cortes clásicos y modernos en Orihuela
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-[#5F4636]">
                  Barbería Nova combina técnica, estilo y trato cercano para que
                  salgas siempre con tu mejor versión.
                </p>

                <div className="mt-8 h-px w-24 bg-[rgba(42,24,16,0.16)]" />

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

                <div className="mt-10 rounded-2xl border border-[rgba(42,24,16,0.16)] bg-[#FFF7EC]/70 p-5 text-sm leading-7 text-[#5F4636] shadow-[0_14px_40px_rgba(42,24,16,0.08)]">
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
                  className="group rounded-3xl border border-[rgba(42,24,16,0.16)] bg-[#FFF7EC] p-6 shadow-[0_18px_45px_rgba(42,24,16,0.10)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(42,24,16,0.14)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold text-[#20130D]">
                        {t}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[#5F4636]">
                        {d}
                      </p>
                    </div>
                    <div className="mt-1 h-10 w-10 rounded-2xl border border-[rgba(42,24,16,0.16)] bg-[#F8F1E7] text-center text-sm font-semibold leading-10 text-[#B47A2B]">
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
            <div className="mt-10 rounded-[2rem] border border-white/8 bg-[#2A1810] p-6 shadow-[0_22px_65px_rgba(42,24,16,0.28)] sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-[#E6D2B5]">
                    BARBERÍA NOVA
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-[#F8F1E7]">
                    Servicios y precios
                  </div>
                </div>
                <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-[#D19A3D] sm:block">
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
                  <div className="text-sm font-semibold text-[#F8F1E7]">{t}</div>
                  <div className="min-w-0 flex-1 border-b border-dotted border-[#C7A77A]/35" />
                  <div className="text-sm font-semibold text-[#D19A3D]">{p}</div>
                </div>
              ))}
              <div className="mt-6 h-px bg-white/10" />
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-[#E6D2B5]">
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
                  className="group overflow-hidden rounded-[1.75rem] border border-[rgba(42,24,16,0.16)] bg-[#FFF7EC] shadow-[0_18px_45px_rgba(42,24,16,0.10)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(42,24,16,0.14)]"
                >
                  <div className="h-40 bg-gradient-to-br from-[#E6D2B5] via-[#F8F1E7] to-[#F3E7D3]" />
                  <div className="p-5">
                    <div className="text-sm font-semibold text-[#20130D]">{t}</div>
                    <div className="mt-1 text-sm text-[#5F4636]">Foto de ejemplo</div>
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
                <div className="rounded-[2rem] border border-[rgba(42,24,16,0.16)] bg-[#FFF7EC] p-8 shadow-[0_18px_45px_rgba(42,24,16,0.10)]">
                  <div className="text-sm font-semibold text-[#5A3825]">Dirección</div>
                  <div className="mt-2 text-lg font-semibold text-[#20130D]">
                    Calle Mayor 12, Orihuela
                  </div>
                  <div className="mt-6 text-sm font-semibold text-[#5A3825]">
                    Horarios
                  </div>
                  <div className="mt-3 grid gap-2 text-sm text-[#5F4636]">
                    <div className="flex items-center justify-between rounded-2xl border border-[rgba(42,24,16,0.16)] bg-[#F8F1E7] px-4 py-3">
                      <span>Lunes a Viernes</span>
                      <span className="font-semibold text-[#20130D]">10:00 - 20:00</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-[rgba(42,24,16,0.16)] bg-[#F8F1E7] px-4 py-3">
                      <span>Sábado</span>
                      <span className="font-semibold text-[#20130D]">10:00 - 14:00</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-[rgba(42,24,16,0.16)] bg-[#F8F1E7] px-4 py-3">
                      <span>Domingo</span>
                      <span className="font-semibold text-[#20130D]">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-[2rem] border border-[rgba(42,24,16,0.16)] bg-[#FFF7EC] p-8 shadow-[0_18px_45px_rgba(42,24,16,0.10)]">
                  <div className="text-sm font-semibold text-[#5A3825]">Mapa</div>
                  <div className="mt-4 flex h-64 items-center justify-center rounded-2xl bg-[#F8F1E7] text-sm text-[#5F4636] border border-[rgba(42,24,16,0.16)]">
                    Mapa de ubicación
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="contacto" className="py-16 sm:py-24">
          <Container>
            <div className="rounded-[2.25rem] border border-white/8 bg-[#2A1810] p-8 shadow-[0_26px_70px_rgba(42,24,16,0.34)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#F8F1E7] sm:text-3xl">
                    Reserva tu cita en Barbería Nova
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[#E6D2B5]">
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
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-[#F8F1E7] hover:bg-white/8 sm:mt-0 sm:w-auto"
                  >
                    Volver a OriWeb
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-[#2A1810]/20 bg-[#20130D]">
        <Container>
          <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-semibold text-[#F8F1E7]">Barbería Nova</div>
              <div className="mt-1 text-sm text-[#E6D2B5]">
                Demo ficticia creada por{" "}
                <Link href="/" className="font-semibold text-[#D19A3D] hover:underline">
                  OriWeb
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-[#F8F1E7] hover:bg-white/8"
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

