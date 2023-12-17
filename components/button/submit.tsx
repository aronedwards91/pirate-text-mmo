import { ReactNode } from "react";

export function SubmitButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-sm text-white tracking-wide
    font-big font-normal
    border-x-2 border-sand-400 px-6 py-3 
  bg-sand-700
    shadow-inner-2xl hover:shadow-inner-lg
    transition-all`}
    >
      {children}
    </button>
  );
}
