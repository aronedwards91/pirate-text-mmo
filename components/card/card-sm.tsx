import { ReactNode } from "react";

export function CardSM({
  children,
  selected,
}: {
  children: ReactNode;
  selected?: boolean;
}) {
  return (
    <div
      className={`corner-cut-line flex-1 flex flex-col ${
        selected && "selected"
      }`}
    >
      <div className="bg-gradient-to-bl from-rust-500/70 via-rust-400/80 to-sand-500/70 flex-1 p-3 px-6 h-full">
        {children}
      </div>
    </div>
  );
}
