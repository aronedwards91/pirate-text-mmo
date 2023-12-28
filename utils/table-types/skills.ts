export type TableSkills =
  | "tech_melee"
  | "trad_melee"
  | "tech_ranged"
  | "trad_ranged"
  | "red_moon_harmony"
  | "blue_moon_synergy"
  | "strength"
  | "reflexes"
  | "hardware_tech"
  | "software_tech"
  | "rhetoric"
  | "charisma"
  | "intimidation"
  | "cyberwear_integration";

export type TableXPSkills =
  | "xp_tech_melee"
  | "xp_trad_melee"
  | "xp_tech_ranged"
  | "xp_trad_ranged"
  | "xp_red_moon_harmony"
  | "xp_blue_moon_synergy"
  | "xp_strength"
  | "xp_reflexes"
  | "xp_hardware_tech"
  | "xp_software_tech"
  | "xp_rhetoric"
  | "xp_charisma"
  | "xp_intimidation"
  | "xp_cyberwear_integration";

export type SkillsTable = TableSkills | TableXPSkills;
