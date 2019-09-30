import { all, call, fork, take } from "redux-saga/effects";
import fetchEntity from "../../utils/fetchEntity";
import {
  getHorseInfoEntityAction,
  GetHorseProfile
} from "../actions/horseProfileActions";
import { GET_HORSE_PROFILE } from "../actionTypes";

const horseProfileEntitiySaga = fetchEntity(getHorseInfoEntityAction);

function* horseProfileWatcher() {
  while (true) {
    const {
      payload: { id }
    }: GetHorseProfile = yield take(GET_HORSE_PROFILE);
    yield call(horseProfileEntitiySaga, id);
  }
}

function* horseProfileRootSaga() {
  yield all([fork(horseProfileWatcher)]);
}

export default horseProfileRootSaga;