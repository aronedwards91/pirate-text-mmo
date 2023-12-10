import { SkillAdjust } from "../../types";
import { SkillIDKey } from "../attributes/skills";

export type BackgroundData = {
  title: string;
  description: string;
  bonuses: SkillAdjust[];
  icon: string;
};

export const BackgroundKey = {
  urchin: "urchin",
  excon: "excon",
  hunter: "hunter",
  military: "military",
} as const;
export type Background = (typeof BackgroundKey)[keyof typeof BackgroundKey];

export const background: Record<Background, BackgroundData> = {
  [BackgroundKey.urchin]: {
    title: "Urchin",
    description:
      "Street-smart and tough you know how hard life can be and you aim to avoid being bottom of the social hierarchy again",
    bonuses: [
      { skillId: SkillIDKey.Intimidation, value: 10 },
      { skillId: SkillIDKey.Reflexes, value: 5 },
      { skillId: SkillIDKey.Strength, value: -5 },
      { skillId: SkillIDKey.SoftwareTech, value: -5 },
    ],
    icon: "/icons/setup/background/bg-urchin.webp",
  },
  [BackgroundKey.excon]: {
    title: "Ex Convict",
    description:
      "A history of senseless violence and self interest have left you with a chip on your soldier and a distinct lack of authority, drawing you to the most lawless places, like mars",
    bonuses: [
      { skillId: SkillIDKey.Intimidation, value: 10 },
      { skillId: SkillIDKey.Strength, value: 5 },
      { skillId: SkillIDKey.TradMelee, value: 5 },
      { skillId: SkillIDKey.HardwareTech, value: -5 },
      { skillId: SkillIDKey.SoftwareTech, value: -5 },
      { skillId: SkillIDKey.Rhetoric, value: -5 },
    ],
    icon: "/icons/setup/background/bg-excon.webp",
  },
  [BackgroundKey.hunter]: {
    title: "Hunter",
    description:
      "The beasts of earth no longer draw any fear or wonder upon you, only the strange prey of mars can hold your attention now",
    bonuses: [
      { skillId: SkillIDKey.Reflexes, value: 10 },
      { skillId: SkillIDKey.TechRanged, value: 5 },
      { skillId: SkillIDKey.Charisma, value: -5 },
      { skillId: SkillIDKey.TechMelee, value: -5 },
    ],
    icon: "/icons/setup/background/bg-hunter.webp",
  },
  [BackgroundKey.military]: {
    title: "Military",
    description:
      "As earth becomes more peaceful, the only place for such skills as yours is the violent extremes of the new frontier.",
    bonuses: [
      { skillId: SkillIDKey.TradRanged, value: 10 },
      { skillId: SkillIDKey.TechRanged, value: 5 },
      { skillId: SkillIDKey.Charisma, value: -5 },
      { skillId: SkillIDKey.TechMelee, value: -5 },
    ],
    icon: "/icons/setup/background/bg-military.webp",
  },
};
