import {
  Background,
  BackgroundKey,
} from "@/content/client/setup/background";
import { CharClass, CharClassKey } from "@/content/client/setup/char-class";
import { Faction, FactionKey } from "@/content/client/setup/faction";
import { StartArea, StartAreaKey } from "@/content/client/setup/start-area";
import { usernameRegex } from "../regex";

export type CharacterSetup = {
  avatar_name: string;
  background: Background;
  charClass: CharClass;
  faction: Faction;
  startArea: StartArea;
};

export function characterSetupTest(val: CharacterSetup): boolean {
  return (
    usernameRegex.test(val.avatar_name) &&
    Object.values(BackgroundKey).includes(val.background) &&
    Object.values(CharClassKey).includes(val.charClass) &&
    Object.values(FactionKey).includes(val.faction) &&
    Object.values(StartAreaKey).includes(val.startArea)
  );
}
