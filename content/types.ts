import { SkillID } from "./client/attributes/skills";

export type SkillAdjust = {
  skillId: SkillID;
  value: number;
};

// drop chance /1000
export type Opportunity = {
  title: string;
  location: string; // Place
  difficulty_tier: number;
  description: string;
  action_power_cost: number;
  show_item_drop_chance: number;
  currency_1_show: string;
  currency_1_key: string;
  currency_1_drop_min: number;
  currency_1_drop_max: number;
  currency_2_show: string;
  currency_2_key: string;
  currency_2_drop_min: number;
  currency_2_drop_max: number;

  // serverVals
};
