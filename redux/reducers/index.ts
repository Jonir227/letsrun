import { combineReducers } from "redux";
import horseProfile, { IHorseProfileStore } from "./horseInfo";

export interface IRootStore {
  horseProfile: IHorseProfileStore;
}

const rootReducer = combineReducers({ horseProfile });

export default rootReducer;
