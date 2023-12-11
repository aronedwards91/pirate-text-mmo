import { ReactNode } from "react";

export default function CardLG({ children }: { children: ReactNode }) {
  return <div className="corner-mark bg-rust-700 p-4 bg-opacity-50 border-y border-rust-400">{children}</div>;
}
