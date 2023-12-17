import { SkillAdjust } from "../../types";
import { SkillIDKey } from "../attributes/skills";
import { Faction, FactionKey } from "./faction";

export type CharClassData = {
  title: string;
  description: string;
  bonuses: SkillAdjust[];
  icon: string;
};

export const CharClassKey = {
  Cyberblade: "Cyberblade",
  Marksman: "Marksman",
  TechShaman: "TechShaman",
} as const;

export type CharClass = (typeof CharClassKey)[keyof typeof CharClassKey];

export const charClass: Record<CharClass, CharClassData> = {
  [CharClassKey.Cyberblade]: {
    title: "Cyberblade",
    description:
      "Mastery of cyberwear allows you to return the ancient art of the blade to the modern battlefield. The modern Cyborg is a powerful machine that transcends the limits fof the human body, though the rejection of the human form will put you at great odds with those who engage with the strange magics of the red world.",
    bonuses: [
      { skillId: SkillIDKey.CyberwearIntegration, value: 10 },
      { skillId: SkillIDKey.TechMelee, value: 5 },
      { skillId: SkillIDKey.Reflexes, value: 5 },
      { skillId: SkillIDKey.TradRanged, value: -5 },
      { skillId: SkillIDKey.TechRanged, value: -5 },
      { skillId: SkillIDKey.SoftwareTech, value: -5 },
    ],
    icon: "",
  },
  [CharClassKey.Marksman]: {
    title: "Marksman",
    description:
      "From far away you strike against your enemies, dropping them before they can get close. The great array of the modern arsenal is at your disposal, ready to vanquish al those how stand against you.",
    bonuses: [
      { skillId: SkillIDKey.TechRanged, value: 10 },
      { skillId: SkillIDKey.TradRanged, value: 10 },
      { skillId: SkillIDKey.Reflexes, value: 5 },
      { skillId: SkillIDKey.TechMelee, value: -5 },
      { skillId: SkillIDKey.TradMelee, value: -5 },
      { skillId: SkillIDKey.Charisma, value: -5 },
      { skillId: SkillIDKey.Rhetoric, value: -5 },
    ],
    icon: "",
  },
  [CharClassKey.TechShaman]: {
    title: "Tech Shaman",
    description:
      "The strange powers of Mars only became apparent when humanity arrived, many hid from the strange mysticism of the planet, others took it in wholeheartedly, swimming in the veins of power and evoking it's magics via the strange ley-lines that ",
    bonuses: [
      { skillId: SkillIDKey.RedMoonHarmony, value: 10 },
      { skillId: SkillIDKey.BlueMoonSynergy, value: 10 },
      { skillId: SkillIDKey.Charisma, value: 5 },
      { skillId: SkillIDKey.TechMelee, value: -5 },
      { skillId: SkillIDKey.TradMelee, value: -5 },
      { skillId: SkillIDKey.TechRanged, value: -5 },
      { skillId: SkillIDKey.CyberwearIntegration, value: -5 },
    ],
    icon: "",
  },
};
