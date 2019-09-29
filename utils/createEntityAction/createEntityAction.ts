// 액션 타입 추출을 위한 타입
// ACTION의 각 단계의 리턴타입을 가져왔다.

const createEntityAction = <R, S, F, PARAM extends any[], DATA>(
  entitiy: IEntity<R, S, F>,
  api: API<PARAM, DATA>
): IEntityAction => ({
  action: {
    REQUEST: () => ({ type: entitiy.REQUEST }),
    SUCCESS: (data: DATA) => ({ type: entitiy.SUCCESS, payload: data }),
    FAILURE: () => ({ type: entitiy.FAILURE })
  },
  api
});

export default createEntityAction;
