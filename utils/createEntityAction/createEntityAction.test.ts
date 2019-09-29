import createEntityAction from "./createEntityAction";

const actionMock = {
  REQUEST: "REQUEST",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE"
} as const;

const apiMock = <T>(success: boolean, returnValue: T) => () =>
  new Promise<T>((res, rej) => (success ? res(returnValue) : rej()));

describe("createEntityAction", () => {
  test("Should be return proper return value", () => {
    const properAPI = apiMock(true, { data: "hi" });
    const entityAction = createEntityAction(actionMock, properAPI);
    expect(entityAction.action.REQUEST()).toEqual({
      type: actionMock.REQUEST
    });
    expect(entityAction.action.SUCCESS({ data: "hi" })).toEqual({
      type: actionMock.SUCCESS,
      payload: { data: "hi" }
    });
    expect(entityAction.action.FAILURE()).toEqual({
      type: actionMock.FAILURE
    });
  });
});
