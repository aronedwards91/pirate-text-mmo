import { Currency } from "@/content/client/currency";

export type OpportunityTable = {
  id: string;
  location: string;
  difficulty_tier: number;
  difficulty_value: number;
  currency_1_show: boolean;
  currency_1_key: Currency;
  currency_1_drop_min: number;
  currency_1_drop_max: number;
  currency_2_show: boolean;
  currency_2_key: Currency;
  currency_2_drop_min: number;
  currency_2_drop_max: number;
  xp_gain: number
};
