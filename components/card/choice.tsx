import { ReactNode } from "react";

export function CardChoice({
  header,
  children,
  selected
}: {
  header: ReactNode;
  children: ReactNode;
  selected: boolean;
}) {
  return (
    <div className={`corner-cut-line flex-1 flex flex-col ${selected && 'selected'}`}>
      <div className="border-b flex items-center px-6 font-big font-normal tracking-widest no-prose uppercase">{header}</div>
      <div className="bg-inner flex-1">
        <div
          className="p-6 min-h-[4rem] h-full"
          style={{
            backgroundImage: "url('/wall-card-light.webp')",
            backgroundSize: "12px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
