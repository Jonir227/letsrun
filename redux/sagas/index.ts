import { all, fork } from "redux-saga/effects";
import horseProfileRootSaga from "./horseProfileSaga";

function* rootSaga() {
  yield all([fork(horseProfileRootSaga)]);
}

export default rootSaga;
