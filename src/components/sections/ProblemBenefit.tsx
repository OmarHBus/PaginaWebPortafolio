import { Container } from "@/components/ui/Container";

const benefits = [
  {
    title: "Más profesional",
    text: "Una web cuidada da confianza cuando te encuentran por Google Maps o Instagram.",
  },
  {
    title: "Todo en un solo sitio",
    text: "Servicios, precios y horarios claros sin tener que preguntar por mensaje.",
  },
  {
    title: "Contacto rápido",
    text: "Botón directo a WhatsApp para reservas o dudas, en dos toques.",
  },
  {
    title: "Mejor presencia local",
    text: "Ayuda a aparecer mejor en búsquedas de Orihuela y alrededores con SEO local básico.",
  },
  {
    title: "Servicios, precios y horarios claros",
    text: "Menos dudas, menos mensajes repetidos y más clientes listos para reservar.",
  },
] as const;

export function ProblemBenefit() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight text-[#F9FAFB] sm:text-3xl">
              Una web te ayuda a convertir visitas en mensajes (y reservas)
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#CBD5E1]">
              En Orihuela pasa mucho: alguien te encuentra, mira dos fotos y se
              queda con dudas. Una web bien pensada lo deja todo claro y hace
              que el cliente contacte más fácil.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.28)]">
              <div className="text-sm font-semibold text-[#F9FAFB]">
                Lo importante
              </div>
              <p className="mt-2 text-sm leading-7 text-[#CBD5E1]">
                Que entren, vean precios y horarios, entiendan lo que ofreces y
                te escriban por WhatsApp sin dar vueltas.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="group rounded-2xl border border-white/10 bg-[#101624] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.34)] transition-all hover:-translate-y-0.5 hover:border-white/15 hover:bg-[#111827]"
                >
                  <div className="text-base font-semibold text-[#F9FAFB]">
                    {b.title}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[#CBD5E1]">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

