export const SkillIDKey = {
  TechMelee: "TechMelee",
  TradMelee: "TradMelee",
  Strength: "Strength",
  TechRanged: "TechRanged",
  TradRanged: "TradRanged",
  Reflexes: "Reflexes",
  HardwareTech: "HardwareTech",
  SoftwareTech: "SoftwareTech",
  Rhetoric: "Rhetoric",
  Charisma: "Charisma",
  Intimidation: "Intimidation",
  RedMoonHarmony: "RedMoonHarmony",
  BlueMoonSynergy: "BlueMoonSynergy",
  CyberwearIntegration: "CyberwearIntegration",
} as const;

export type SkillID = (typeof SkillIDKey)[keyof typeof SkillIDKey];

export type SkillData = {
  label: string;
  short: string;
  description: string;
  icon: string;
};
