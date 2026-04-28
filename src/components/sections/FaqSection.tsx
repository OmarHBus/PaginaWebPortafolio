import { Container } from "@/components/ui/Container";

const faqs = [
  {
    q: "¿Necesito tener dominio?",
    a: "No es obligatorio para empezar, pero sí es muy recomendable. Un dominio propio (tipo tu-negocio.com) da confianza. Si no tienes, te ayudo a elegirlo y configurarlo.",
  },
  {
    q: "¿La web funciona en móvil?",
    a: "Sí. La web está pensada primero para móvil (responsive), porque la mayoría de clientes te encuentra desde el teléfono.",
  },
  {
    q: "¿Puedo poner botón de WhatsApp?",
    a: "Claro. Lo dejamos visible para que puedan reservar o preguntar en un clic.",
  },
  {
    q: "¿El dominio lo pago yo?",
    a: "Sí, el dominio lo pagas tú (suele costar 10 € – 20 €/año). Así siempre es tuyo.",
  },
  {
    q: "¿Incluye mantenimiento?",
    a: "La publicación inicial está incluida. El mantenimiento es opcional (desde 29 €/mes + IVA) si quieres que me encargue de cambios y actualizaciones.",
  },
  {
    q: "¿Cuánto tarda la web?",
    a: "Depende del contenido, pero normalmente en pocos días si tenemos fotos, servicios, precios y horarios listos.",
  },
  {
    q: "¿Puedo ver una demo antes?",
    a: "Sí. Te enseño una demo para que veas el estilo antes de decidir y la adaptamos a tu negocio.",
  },
] as const;

export function FaqSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-[#F9FAFB] sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-[#CBD5E1]">
            Respuestas cortas y claras, para que sepas qué incluye y cómo
            trabajamos en Orihuela.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-[#101624] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-base font-semibold text-[#F9FAFB]">
                  {f.q}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
                  <span className="text-[#CBD5E1] transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-[#CBD5E1]">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

