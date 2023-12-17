import { ReactNode } from "react";

export default function CardSection({ children }: { children: ReactNode }) {
  return (
    <section className="corner-cut-r bg-gradient-to-bl from-rust-700/70 via-rust-600/80 to-rust-800/70 p-8 border border-l-8 border-rust-400">
      {children}
    </section>
  );
}
