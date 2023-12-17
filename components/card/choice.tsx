import { ReactNode } from "react";

export function CardChoice({
  header,
  children,
}: {
  header: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="corner-cut-line ">
      <div className="border-b flex items-center px-6">{header}</div>
      <div className=" bg-gradient-to-tl from-sand-700 via-sand-600 to-sand-600">
        <div
          className="p-6 min-h-[4rem]"
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
