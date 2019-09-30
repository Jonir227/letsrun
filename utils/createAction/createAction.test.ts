import createAction from "./createAciton";

const ACTION = "ACTION";
describe("createAction", () => {
  test("Should return proper action when only type is provieded", () => {
    const action = createAction(ACTION);
    expect(action()).toEqual({ type: ACTION });
  });
  test("Should return proper action when both argments are provieded", () => {
    const selector = (id: string) => ({ id });
    const action = createAction(ACTION, selector);
    expect(action("123")).toEqual({ type: ACTION, payload: { id: "123" } });
  });
});
