import { fetchHorseProfileUsingGET } from "../../api/horse";
import createAction, { createEntityAction } from "../../utils/createAction";
import { GET_HORSE_PROFILE, GET_HORSE_PROFILE_ENTITY } from "../actionTypes";

export const getHorseProfile = createAction(
  GET_HORSE_PROFILE,
  (id: number) => ({
    id
  })
);
export type GetHorseProfile = ReturnType<typeof getHorseProfile>;

export const getHorseProfileEntityAction = createEntityAction(
  GET_HORSE_PROFILE_ENTITY,
  fetchHorseProfileUsingGET
);
export type GetHorseProfileEntityAction = EntityAction<
  typeof getHorseProfileEntityAction
>;
