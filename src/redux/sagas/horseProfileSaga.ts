import { all, call, fork, take } from 'redux-saga/effects';
import fetchEntity from '../../utils/fetchEntity';
import {
  getHorseInfoEntityAction,
  GetHorseProfile,
  getHorseProfile
} from '../actions/horseProfileActions';

const horseProfileEntitiySaga = fetchEntity(getHorseInfoEntityAction);

function* horseProfileWatcher() {
  while (true) {
    const {
      payload: { id }
    }: GetHorseProfile = yield take(getHorseProfile);
    yield call(horseProfileEntitiySaga, id);
  }
}

function* horseProfileRootSaga() {
  yield all([fork(horseProfileWatcher)]);
}

export default horseProfileRootSaga;
