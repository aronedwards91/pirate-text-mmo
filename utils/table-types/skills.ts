export type TableSkills =
  | "tech_melee"
  | "trad_melee"
  | "strength"
  | "tech_ranged"
  | "trad_ranged"
  | "reflexes"
  | "hardware_tech"
  | "software_tech"
  | "rhetoric"
  | "charisma"
  | "intimidation"
  | "red_moon_harmony"
  | "blue_moon_synergy"
  | "cyberwear_integration";

export type TableXPSkills =
  | "xp_tech_melee"
  | "xp_trad_melee"
  | "xp_strength"
  | "xp_tech_ranged"
  | "xp_trad_ranged"
  | "xp_reflexes"
  | "xp_hardware_tech"
  | "xp_software_tech"
  | "xp_rhetoric"
  | "xp_charisma"
  | "xp_intimidation"
  | "xp_red_moon_harmony"
  | "xp_blue_moon_synergy"
  | "xp_cyberwear_integration";

export type SkillsTable = TableSkills | TableXPSkills;
