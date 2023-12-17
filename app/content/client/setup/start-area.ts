import { Faction, FactionKey } from "./faction";

export type StartAreaData = {
  title: string;
  population: string;
  weather: string;
  type: string;
  description: string;
  factionUnlockedBy: Faction[];
  icon: string;
};

export const StartAreaKey = {
  HellasCity: "HellasCity",
  ChryseForestGlade: "ChryseForestGlade",
  TharsisMinor7Foundry: "TharsisMinor7Foundry",
} as const;

export type StartArea = (typeof StartAreaKey)[keyof typeof StartAreaKey];

export const startAreas: Record<StartArea, StartAreaData> = {
  [StartAreaKey.HellasCity]: {
    title: "Hellas City",
    population: "Huge",
    weather: "mixed",
    type: "Megacity",
    description:
      "Once Megacity 5, after it's takeover by the Unity Paradigm, it was renamed 'Hellas City', sold as a paradise, exempt from the petty squabbles that dominate the Planet's fragile politics. Such peacefulness is rare however, across the poorer districts petty squabbles flare up, but are put down quickly by the draconian Hellas guard",
    factionUnlockedBy: [
      FactionKey.churchMachine,
      FactionKey.moonsRebirth,
      FactionKey.unityParadigm,
    ],
    icon: "",
  },
  [StartAreaKey.ChryseForestGlade]: {
    title: "Chryse Forest Glade",
    population: "Small",
    weather: "Warm, wet",
    type: "Green MicroCity",
    description:
      "A haven for those who see the magics of the world as boon to humanity. The city was built to maximize humanities integration within the martian ecology awakened by the terraforming process. Built over an important crossing of Ley Lines, it remains a powerful place of healing and growth for those who have become in-tune with the dual moon powers.",
    factionUnlockedBy: [FactionKey.moonsRebirth],
    icon: "",
  },
  [StartAreaKey.TharsisMinor7Foundry]: {
    title: "Tharsis Minor 7 - Foundry",
    population: "Large",
    weather: "Hot",
    type: "Industrial Foundry",
    description:
      "The Huge Industrial area of Tharsis Minor is home to many powerful and important manufacturing giants. Corporate politics and underhanded games overhang a collection of Cyborg promoting collectives, the use of these capable meta-humans is a huge boon to the labour hungry  rich corporations who share this dynamic zone.",
    factionUnlockedBy: [FactionKey.churchMachine],
    icon: "",
  },
};
