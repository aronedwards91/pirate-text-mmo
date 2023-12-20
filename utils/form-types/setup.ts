import { Background } from "@/app/content/client/setup/background";
import { CharClass } from "@/app/content/client/setup/char-class";
import { Faction } from "@/app/content/client/setup/faction";
import { StartArea } from "@/app/content/client/setup/start-area";

export type CharacterSetup = {
  avatar_name: string;
  background: Background;
  charClass: CharClass;
  faction: Faction;
  startArea: StartArea;
};
