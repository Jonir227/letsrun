import {
  GetHorseInfoEntityAction,
  GetHorseProfile
} from "./horseProfileActions";

export type HorseProfileAction = GetHorseProfile | GetHorseInfoEntityAction;
