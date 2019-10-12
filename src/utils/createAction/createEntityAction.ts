import createAction from "./createAciton";

// 액션 타입 추출을 위한 타입
// ACTION의 각 단계의 리턴타입을 가져왔다.

const createEntityAction = <R, S, F, PARAM extends any[], DATA>(
  entitiy: IEntity<R, S, F>,
  api: API<PARAM, DATA>
) => ({
  action: {
    REQUEST: createAction(entitiy.REQUEST),
    SUCCESS: createAction(entitiy.SUCCESS, (data: DATA) => data),
    FAILURE: createAction(entitiy.FAILURE)
  },
  api
});

export default createEntityAction;
