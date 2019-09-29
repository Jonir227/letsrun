import { call, put } from "redux-saga/effects";
import createEntityAction from "../createEntityAction";
import fetchEntity from "./fetchEntitiy";

const actionMock = {
  REQUEST: "REQUEST",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE"
} as const;

const apiMock = <T>(success: boolean, returnValue: T) => () =>
  new Promise<T>((res, rej) => (success ? res(returnValue) : rej()));

describe("fetchEntity", () => {
  test("should return proper function", async () => {
    const apiData = { data: "zzz" };
    const api = apiMock(true, apiData);
    const entitiyGenerator = fetchEntity(createEntityAction(actionMock, api));
    const saga = entitiyGenerator();
    expect(saga.next().value).toEqual(put({ type: actionMock.REQUEST }));
    expect(saga.next().value).toEqual(call(api));
    expect(saga.next(await api()).value).toEqual(
      put({ type: actionMock.SUCCESS, payload: apiData })
    );
  });
  test("should throw Error when api request is failed", async () => {
    const apiData = { data: "zzz" };
    const api = apiMock(false, apiData);
    const entitiyGenerator = fetchEntity(createEntityAction(actionMock, api));
    const saga = entitiyGenerator();
    expect(saga.next().value).toEqual(put({ type: actionMock.REQUEST }));
    expect(saga.next().value).toEqual(call(api));
    expect(saga.throw(new Error()).value).toEqual(
      put({ type: actionMock.FAILURE })
    );
  });
});
