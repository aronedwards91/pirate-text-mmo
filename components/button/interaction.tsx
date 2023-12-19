import { ReactNode } from "react";

export function InteractionButton({
  onClick,
  children,
  disabled,
}: {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={`text-sm text-white tracking-wide
    font-big font-normal
    border-x-2 px-6 py-3 w-min
    shadow-inner-2xl
    transition-all 
    ${
      disabled
        ? "border-flame-900 bg-flame-800 opacity-60"
        : "border-flame-400 bg-flame-600 hover:shadow-inner-lg"
    }`}
    >
      {children}
    </button>
  );
}
