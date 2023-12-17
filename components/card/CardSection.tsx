import { ReactNode } from "react";

export default function CardSection({ children }: { children: ReactNode }) {
  return (
    <section className="corner-cut bg-gradient-to-bl from-rust-700/70 via-rust-600/80 to-rust-800/70 p-8 border border-rust-800">
      {children}
    </section>
  );
}
