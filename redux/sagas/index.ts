import { take } from "@redux-saga/core/effects";

function* rootSaga() {
  while (true) {
    yield take("NO_ACTION");
  }
}

export default rootSaga;
