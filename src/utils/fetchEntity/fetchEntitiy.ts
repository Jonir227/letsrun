import { call, put } from "redux-saga/effects";

function fetchEntity<T extends IEntityAction>({ action, api }: T) {
  return function*(...p: Parameters<T["api"]>) {
    try {
      yield put(action.REQUEST());
      const data = yield call(api, ...p);
      yield put(action.SUCCESS(data));
    } catch {
      yield put(action.FAILURE());
    }
  };
}

export default fetchEntity;
