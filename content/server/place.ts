export type PlaceData = {
  title: string;
  description: string;
  mapIcon: string;
  icon: string;
};

// match with supbase ENUM
export const PlaceKey = {
  HellasCity: "HELLAS_CITY",
  HellasCitySlums: "HELLAS_CITY_SLUMS",
  HellasCityTunnels: "HELLAS_CITY_TUNNELS",
  ChryseForestGlade: "CHRYSE_FOREST_GLADE",
  TharsisMinor7Foundry: "THARSIS_MINOR_7_FOUNDRY",
} as const;

export type Place = (typeof PlaceKey)[keyof typeof PlaceKey];

export const places: Record<Place, PlaceData> = {
  [PlaceKey.HellasCity]: {
    title: "Hellas City",
    description:
      "Once Megacity 5, after it's takeover by the Unity Paradigm, it was renamed 'Hellas City', sold as a paradise, exempt from the petty squabbles that dominate the Planet's fragile politics. Such peacefulness is rare however, across the poorer districts petty squabbles flare up, but are put down quickly by the draconian Hellas guard",
      mapIcon: '',
    icon: "icons/setup/startArea/HellasCity.webp",
  },
  [PlaceKey.HellasCitySlums]: {
    title: "Hellas Slums",
    description:
      "The Slums of Hellas City",
      mapIcon: '',
    icon: "",
  },
  [PlaceKey.HellasCityTunnels]: {
    title: "Hellas Tunnels",
    description:
      "The Tunnels Beneath Hellas City",
      mapIcon: '',
    icon: "",
  },
  [PlaceKey.ChryseForestGlade]: {
    title: "Chryse Forest Glade",
    description:
      "A haven for those who see the magics of the world as boon to humanity. The city was built to maximize humanities integration within the martian ecology awakened by the terraforming process. Built over an important crossing of Ley Lines, it remains a powerful place of healing and growth for those who have become in-tune with the dual moon powers.",
      mapIcon: '',
    icon: "icons/setup/startArea/ChryseForestGlade.webp",
  },
  [PlaceKey.TharsisMinor7Foundry]: {
    title: "Tharsis Minor 7 - Foundry",
    description:
      "The Huge Industrial area of Tharsis Minor is home to many powerful and important manufacturing giants. Corporate politics and underhanded games overhang a collection of Cyborg promoting collectives, the use of these capable meta-humans is a huge boon to the labour hungry  rich corporations who share this dynamic zone.",
      mapIcon: '',
    icon: "icons/setup/startArea/TharsisMinor7Foundry.webp",
  },
};
