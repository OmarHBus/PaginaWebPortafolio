import { Container } from "@/components/ui/Container";

const steps = [
  {
    n: "01",
    title: "Hablamos sobre tu negocio",
    text: "Me cuentas qué haces, tu zona (Orihuela y alrededores) y qué necesitas.",
  },
  {
    n: "02",
    title: "Recopilamos contenido",
    text: "Fotos, servicios, precios y horarios. Si te falta algo, te guío.",
  },
  {
    n: "03",
    title: "Diseño y desarrollo la web",
    text: "La preparo con un diseño moderno, rápido y adaptado al móvil.",
  },
  {
    n: "04",
    title: "Revisamos cambios",
    text: "Ajustamos textos, secciones y detalles hasta que quede como quieres.",
  },
  {
    n: "05",
    title: "Publicamos con tu dominio",
    text: "La dejo online y lista para compartir por WhatsApp, redes y Google.",
  },
] as const;

export function ProcessSection() {
  return (
    <section id="proceso" className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-[#F9FAFB] sm:text-3xl">
            Proceso en 5 pasos
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-[#CBD5E1]">
            Ordenado en escritorio y fácil de leer en móvil. Lo justo para
            entender tu negocio y dejar la web lista.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group rounded-2xl border border-white/10 bg-[#101624] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:border-white/15 hover:bg-[#111827]"
            >
              <div className="text-xs font-semibold text-[#38BDF8]">{s.n}</div>
              <div className="mt-2 text-base font-semibold text-[#F9FAFB]">
                {s.title}
              </div>
              <p className="mt-2 text-sm leading-7 text-[#CBD5E1]">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

