import { Currency } from "lucide-react";

export type CurrencyData = {
  title: string;
  description: string;
  icon: string;
};

// match with supbase ENUM
export const CurrencyKey = {
  RedChit: "RED_CHIT",
  BlackMark: "BLACK_MARK",
} as const;

export type Currency = (typeof CurrencyKey)[keyof typeof CurrencyKey];

export const currencies: Record<Currency, CurrencyData> = {
  [CurrencyKey.RedChit]: {
    title: "Red Chit",
    description: "Universal currency of choice",
    icon: "",
  },
  [CurrencyKey.BlackMark]: {
    title: "Black Mark",
    description: "A untraceable digital coin used by black market traders",
    icon: "",
  },
};
