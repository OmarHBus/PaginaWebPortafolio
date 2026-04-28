import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#22D3EE] to-[#38BDF8] text-[#050816] shadow-[0_10px_30px_rgba(56,189,248,0.18)] hover:brightness-110 active:brightness-95",
  secondary:
    "bg-white/5 text-[#F9FAFB] ring-1 ring-inset ring-white/10 hover:bg-white/8 hover:ring-white/15",
  ghost: "text-[#CBD5E1] hover:bg-white/5 hover:text-[#F9FAFB]",
};

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return (
    <Link className={cx(base, variants[variant], className)} {...props} />
  );
}

