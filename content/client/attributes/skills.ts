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

export const skills: Record<SkillID, SkillData> = {
  [SkillIDKey.TechMelee]: {
    label: "Tech Melee",
    short: "TcM",
    description: "Capacity with technical Melee armaments",
    icon: "",
  },
  [SkillIDKey.TradMelee]: {
    label: "Traditional Melee",
    short: "TrM",
    description: "Capacity with traditional Melee armaments",
    icon: "",
  },
  [SkillIDKey.Strength]: {
    label: "Strength",
    short: "Str",
    description: "Physical Strength",
    icon: "",
  },
  [SkillIDKey.TechRanged]: {
    label: "Tech Ranged",
    short: "TcR",
    description: "Capacity with technical ranged armaments",
    icon: "",
  },
  [SkillIDKey.TradRanged]: {
    label: "Traditional Ranged",
    short: "TrR",
    description: "Capacity with traditional ranged armaments",
    icon: "",
  },
  [SkillIDKey.Reflexes]: {
    label: "Reflexes",
    short: "Ref",
    description: "Reflexes & finesse",
    icon: "",
  },
  [SkillIDKey.HardwareTech]: {
    label: "Hardware Tech",
    short: "HwT",
    description: "Hardware Tech",
    icon: "",
  },
  [SkillIDKey.SoftwareTech]: {
    label: "Software Tech",
    short: "SfT",
    description: "Software Tech",
    icon: "",
  },
  [SkillIDKey.Rhetoric]: {
    label: "Rhetoric",
    short: "Rhr",
    description: "Rhetoric",
    icon: "",
  },
  [SkillIDKey.Charisma]: {
    label: "Charisma",
    short: "Chr",
    description: "Charisma",
    icon: "",
  },
  [SkillIDKey.Intimidation]: {
    label: "Intimidation",
    short: "Imd",
    description: "Intimidation",
    icon: "",
  },
  [SkillIDKey.RedMoonHarmony]: {
    label: "Red Moon Harmony",
    short: "RMH",
    description: "Red Moon Harmony",
    icon: "",
  },
  [SkillIDKey.BlueMoonSynergy]: {
    label: "Blue Moon Synergy",
    short: "BMS",
    description: "Blue Moon Synergy",
    icon: "",
  },
  [SkillIDKey.CyberwearIntegration]: {
    label: "Cyberwear Integration",
    short: "CyI",
    description: "Cyberwear Integration",
    icon: "",
  },
};
