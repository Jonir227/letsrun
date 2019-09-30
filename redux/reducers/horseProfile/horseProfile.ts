import produce from "immer";
import { HorseProfile } from "../../../models";
import { HorseProfileAction } from "../../actions";
import { GET_HORSE_PROFILE_ENTITY } from "../../actionTypes";

export interface IHorseProfileStore {
  getHorseInfoStatus: Status;
  horseProfile: HorseProfile | null;
}

const defaultState: IHorseProfileStore = {
  getHorseInfoStatus: "INIT",
  horseProfile: null
};

const horseProfile = produce(
  (draft: IHorseProfileStore, action: HorseProfileAction) => {
    switch (action.type) {
      case GET_HORSE_PROFILE_ENTITY.REQUEST: {
        draft.getHorseInfoStatus = "REQUEST";
        break;
      }
      case GET_HORSE_PROFILE_ENTITY.SUCCESS: {
        draft.getHorseInfoStatus = "SUCCESS";
        draft.horseProfile = action.payload.horseProfile;
        break;
      }
      case GET_HORSE_PROFILE_ENTITY.FAILURE: {
        draft.getHorseInfoStatus = "FAILURE";
        draft.horseProfile = null;
        break;
      }
    }
  },
  defaultState
);

export default horseProfile;
