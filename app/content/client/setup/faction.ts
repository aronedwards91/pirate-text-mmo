import { CharClass, CharClassKey } from "./char-class";

export type FactionData = {
  title: string;
  size: string;
  age: string;
  resources: string;
  description: string;
  classUnlockedBy: CharClass[];
  icon: string;
};

export const FactionKey = {
  churchMachine: "churchMachine",
  moonsRebirth: "moonsRebirth",
  unityParadigm: "unityParadigm",
} as const;

export type Faction = (typeof FactionKey)[keyof typeof FactionKey];

export const factions: Record<Faction, FactionData> = {
  [FactionKey.churchMachine]: {
    title: "Church of the Machine God",
    size: "Huge",
    age: "new",
    resources: "strong",
    description:
      "The fervour of the church knows no bounds, they have seen what man can become when merged with machine. The missionaries of the church use coercion, bribery, trickery and all manner of methods that would be swiftly outlawed on a planted ruled by law",
    icon: "/icons/setup/factions/faction-church-machine.sm.webp",
    classUnlockedBy: [CharClassKey.Cyberblade, CharClassKey.Marksman],
  },
  [FactionKey.moonsRebirth]: {
    title: "Moons Rebirth",
    size: "small",
    age: "old",
    resources: "plentiful",
    description:
      "The strange powers of the moon have given bold new direction to this ancient cult, who now see the planet as their holy place, and one that must not be defiled.",
    icon: "/icons/setup/factions/faction-moons-rebirth.sm.webp",
    classUnlockedBy: [
      CharClassKey.Cyberblade,
      CharClassKey.Marksman,
      CharClassKey.TechShaman,
    ],
  },
  [FactionKey.unityParadigm]: {
    title: "The Unity Paradigm",
    size: "very large",
    age: "institution",
    resources: "Fairly strong",
    description:
      "The chaos of the new frontier has left many clawing for an institution of law, from the ashes of a powerful mercenary group has been formed a city that is one of the few peaceful places on the planet, but for this taxes are high. As long as you don't cause trouble, all views are allowed within their walls.",
    icon: "/icons/setup/factions/faction-unity-paradigm.sm.webp",
    classUnlockedBy: [CharClassKey.Marksman, CharClassKey.TechShaman],
  },
};
