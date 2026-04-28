import { Container } from "@/components/ui/Container";

const services = [
  {
    icon: "📱",
    title: "Diseño web responsive",
    text: "Una web que se ve perfecta en móvil, tablet y ordenador.",
  },
  {
    icon: "💬",
    title: "Botón de WhatsApp",
    text: "Contacto directo para reservas o dudas, sin complicaciones.",
  },
  {
    icon: "🏷️",
    title: "Servicios y precios",
    text: "Listado claro para que el cliente decida rápido y te contacte.",
  },
  {
    icon: "📍",
    title: "Integración con Google Maps",
    text: "Ubicación clara para que te encuentren fácil en Orihuela.",
  },
  {
    icon: "🖼️",
    title: "Galería de fotos",
    text: "Muestras de trabajos, local, carta o ambiente con buen aspecto.",
  },
  {
    icon: "🔗",
    title: "Redes sociales",
    text: "Instagram, TikTok o Facebook a un clic, sin perder tu esencia.",
  },
  {
    icon: "🔎",
    title: "SEO local básico",
    text: "Estructura y textos pensados para búsquedas locales.",
  },
  {
    icon: "🚀",
    title: "Publicación en Vercel",
    text: "Hosting moderno y rápido, ideal para una web de negocio local.",
  },
  {
    icon: "🌐",
    title: "Configuración de dominio",
    text: "Te ayudo a conectar tu dominio para que tu web se vea más seria.",
  },
  {
    icon: "🛠️",
    title: "Mantenimiento opcional",
    text: "Para cambios, actualizaciones y estar tranquilo mes a mes.",
  },
  {
    icon: "🗓️",
    title: "Servicios, precios y horarios",
    text: "Horarios visibles para que el cliente no se quede con dudas.",
  },
] as const;

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-[#F9FAFB] sm:text-3xl">
            Servicios para negocios locales
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-[#CBD5E1]">
            Orihuela está llena de negocios buenos que no se ven “tan
            profesionales” online. Aquí la idea es que tu web sea moderna,
            clara y pensada para que te contacten.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#101624] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:border-white/15 hover:bg-[#111827]"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#22D3EE]/8 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-lg ring-1 ring-inset ring-white/10">
                  <span aria-hidden="true">{s.icon}</span>
                </div>
                <div>
                  <div className="text-base font-semibold text-[#F9FAFB]">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[#CBD5E1]">
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

