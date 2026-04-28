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
  bg: "#F5EFE3",
  surface: "#E9DDC7",
  ink: "#1F1A17",
  ink2: "#5F564D",
  dark: "#2B2A28",
  dark2: "#3A3835",
  gold: "#C49A45",
  goldHover: "#D8AE62",
  card: "#FFF8EC",
  border: "rgba(43, 42, 40, 0.14)",
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
          ? "bg-[#C49A45] text-[#1F1A17] shadow-[0_14px_32px_rgba(196,154,69,0.26)] hover:bg-[#D8AE62] active:brightness-95 focus-visible:ring-[#C49A45] focus-visible:ring-offset-[#F5EFE3]"
          : "border border-[#C7A77A] bg-[#FFF8EC] text-[#3A2417] hover:bg-[#E9DDC7] focus-visible:ring-[#3A3835] focus-visible:ring-offset-[#F5EFE3]",
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
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(43,42,40,0.14)] bg-[#EFE7D8] px-3 py-1 text-xs font-semibold text-[#3A3835]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C49A45]" />
          {props.kicker}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-[#1F1A17] sm:text-3xl">
        {props.title}
      </h2>
      {props.text ? (
        <p className="max-w-2xl text-lg leading-8 text-[#5F564D]">{props.text}</p>
      ) : null}
    </div>
  );
}

function DemoHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(43,42,40,0.14)] bg-[#F5EFE3]/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="#inicio" className="inline-flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-[#1F1A17]">
              Barbería Nova
            </span>
            <span className="hidden text-xs font-medium text-[#5F564D] sm:inline">
              · Orihuela
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[#5F564D] lg:flex">
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
                className="hover:text-[#1F1A17] transition-colors"
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
              className="hidden rounded-full border border-[rgba(43,42,40,0.14)] bg-transparent px-4 py-2 text-sm font-semibold text-[#3A3835] hover:bg-[#E9DDC7] sm:inline-flex"
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
      <div className="absolute -inset-10 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#C49A45]/18 via-[#3A3835]/14 to-transparent blur-3xl" />
      <div className="rounded-[1.75rem] border border-white/10 bg-[#2B2A28] p-6 shadow-[0_26px_70px_rgba(43,42,40,0.30)]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-[#D6AD5C]">
              Abierto hoy
            </div>
            <div className="mt-4 text-3xl font-semibold tracking-tight text-[#FFF8EC]">
              10:00 - 20:00
            </div>
            <div className="mt-2 text-sm text-[#FFF8EC]/85">
              Corte · Barba · Degradado
            </div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-right">
            <div className="text-xs font-semibold text-[#FFF8EC]/80">Valoración</div>
            <div className="mt-1 text-sm font-semibold text-[#FFF8EC]">
              4.9 ★★★★★
            </div>
            <div className="mt-1 text-xs text-[#FFF8EC]/75">Orihuela</div>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          <div className="rounded-2xl border border-white/12 bg-[#3A3835] p-4">
            <div className="text-xs font-semibold text-[#FFF8EC]/80">Recomendado</div>
            <div className="mt-1 text-sm font-semibold text-[#FFF8EC]">
              Corte + barba
            </div>
            <div className="mt-1 text-sm font-semibold text-[#D6AD5C]">18 €</div>
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
          "linear-gradient(180deg, #F5EFE3 0%, #E9DDC7 42%, #FFF8EC 100%)",
        color: NOVA.ink,
      }}
    >
      <DemoHeader />

      <main className="flex-1">
        <section id="inicio" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-52 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#C49A45]/14 blur-3xl" />
            <div className="absolute -bottom-64 right-[-140px] h-[620px] w-[620px] rounded-full bg-[#3A3835]/12 blur-3xl" />
            <div className="absolute -bottom-72 left-[-160px] h-[520px] w-[520px] rounded-full bg-[#2B2A28]/10 blur-3xl" />
          </div>
          <Container>
            <div className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-14">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(43,42,40,0.14)] bg-[#FFF8EC] px-3 py-1 text-xs font-semibold text-[#3A3835]">
                    Barbería ficticia · Demo OriWeb
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(43,42,40,0.14)] bg-[#FFF8EC] px-3 py-1 text-xs font-semibold text-[#3A3835]">
                    Orihuela
                  </div>
                </div>
                <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[#1F1A14] sm:text-5xl">
                  Cortes clásicos y modernos en Orihuela
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-[#5E5144]">
                  Barbería Nova combina técnica, estilo y trato cercano para que
                  salgas siempre con tu mejor versión.
                </p>

                <div className="mt-8 h-px w-24 bg-[rgba(43,42,40,0.14)]" />

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

                <div className="mt-10 rounded-2xl border border-[rgba(43,42,40,0.14)] bg-[#FFF8EC]/75 p-5 text-sm leading-7 text-[#5F564D] shadow-[0_14px_40px_rgba(43,42,40,0.08)]">
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
                  className="group rounded-3xl border border-[rgba(43,42,40,0.14)] bg-[#FFF8EC] p-6 shadow-[0_18px_45px_rgba(43,42,40,0.10)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(43,42,40,0.14)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold text-[#1F1A14]">
                        {t}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[#5F564D]">
                        {d}
                      </p>
                    </div>
                    <div className="mt-1 h-10 w-10 rounded-2xl border border-[rgba(43,42,40,0.14)] bg-[#F5EFE3] text-center text-sm font-semibold leading-10 text-[#C49A45]">
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
            <div className="mt-10 rounded-[2rem] border border-[rgba(36,28,23,0.10)] bg-gradient-to-b from-[#F7EBDD] to-[#F2E2CF] p-6 shadow-[0_18px_45px_rgba(36,28,23,0.12)] sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-6">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-[#5F5146]">
                    BARBERÍA NOVA
                  </div>
                  <div className="mt-2 text-2xl font-semibold text-[#241C17]">
                    Servicios y precios
                  </div>
                </div>
                <div className="hidden rounded-2xl border border-[rgba(36,28,23,0.10)] bg-[#EFE0CC] px-4 py-3 text-sm font-semibold text-[#241C17] sm:block">
                  Orihuela ·{" "}
                  <span className="font-semibold text-[#C49A45]">
                    4.9 ★★★★★
                  </span>
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
                  <div className="text-sm font-semibold text-[#241C17]">{t}</div>
                  <div className="min-w-0 flex-1 border-b border-dotted border-[rgba(36,28,23,0.10)]" />
                  <div className="text-sm font-semibold text-[#C49A45]">{p}</div>
                </div>
              ))}
              <div className="mt-6 h-px bg-[rgba(36,28,23,0.10)]" />
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-[#5F5146]">
                  Reserva por WhatsApp y te confirmamos hora.
                </div>
                <ButtonA
                  href={WHATSAPP_DEMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-[#D7AE63] text-[#241C17]"
                >
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
                  className="group overflow-hidden rounded-[1.75rem] border border-[rgba(43,42,40,0.14)] bg-[#FFF8EC] shadow-[0_18px_45px_rgba(43,42,40,0.10)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(43,42,40,0.14)]"
                >
                  <div className="h-40 bg-gradient-to-br from-[#E9DDC7] via-[#FFF8EC] to-[#F5EFE3]" />
                  <div className="p-5">
                    <div className="text-sm font-semibold text-[#1F1A14]">{t}</div>
                    <div className="mt-1 text-sm text-[#5F564D]">Foto de ejemplo</div>
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
                <div className="rounded-[2rem] border border-[rgba(43,42,40,0.14)] bg-[#FFF8EC] p-8 shadow-[0_18px_45px_rgba(43,42,40,0.10)]">
                  <div className="text-sm font-semibold text-[#3A3835]">Dirección</div>
                  <div className="mt-2 text-lg font-semibold text-[#1F1A14]">
                    Calle Mayor 12, Orihuela
                  </div>
                  <div className="mt-6 text-sm font-semibold text-[#3A3835]">
                    Horarios
                  </div>
                  <div className="mt-3 grid gap-2 text-sm text-[#5F564D]">
                    <div className="flex items-center justify-between rounded-2xl border border-[rgba(43,42,40,0.14)] bg-[#F5EFE3] px-4 py-3">
                      <span>Lunes a Viernes</span>
                      <span className="font-semibold text-[#1F1A14]">10:00 - 20:00</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-[rgba(43,42,40,0.14)] bg-[#F5EFE3] px-4 py-3">
                      <span>Sábado</span>
                      <span className="font-semibold text-[#1F1A14]">10:00 - 14:00</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-[rgba(43,42,40,0.14)] bg-[#F5EFE3] px-4 py-3">
                      <span>Domingo</span>
                      <span className="font-semibold text-[#1F1A14]">Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-[2rem] border border-[rgba(43,42,40,0.14)] bg-[#FFF8EC] p-8 shadow-[0_18px_45px_rgba(43,42,40,0.10)]">
                  <div className="text-sm font-semibold text-[#3A3835]">Mapa</div>
                  <div className="mt-4 flex h-64 items-center justify-center rounded-2xl bg-[#F5EFE3] text-sm text-[#5F564D] border border-[rgba(43,42,40,0.14)]">
                    Mapa de ubicación
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="contacto" className="py-16 sm:py-24">
          <Container>
            <div className="rounded-[2.25rem] border border-white/10 bg-[#2B2A28] p-8 shadow-[0_26px_70px_rgba(43,42,40,0.24)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <h2 className="text-2xl font-semibold tracking-tight text-[#FFF8EC] sm:text-3xl">
                    Reserva tu cita en Barbería Nova
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[#FFF8EC]/85">
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
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/14 bg-white/5 px-5 py-3 text-sm font-semibold text-[#FFF8EC] hover:bg-white/10 sm:mt-0 sm:w-auto"
                  >
                    Volver a OriWeb
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-[rgba(43,42,40,0.14)] bg-[#2B2A28]">
        <Container>
          <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-semibold text-[#FFF8EC]">Barbería Nova</div>
              <div className="mt-1 text-sm text-[#FFF8EC]/80">
                Demo ficticia creada por{" "}
                <Link href="/" className="font-semibold text-[#D8AE62] hover:underline">
                  OriWeb
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-full border border-white/14 bg-white/5 px-4 py-2 text-sm font-semibold text-[#FFF8EC] hover:bg-white/10"
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

