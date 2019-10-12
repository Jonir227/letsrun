import { Action } from 'redux';

type ActionMap<A extends Action<string>, S> = {
  [AT in A['type']]?: (state: S, action: MatchedAction<A, AT>) => S;
};

type MatchedAction<A, T> = A extends Action<T> ? A : never;

const matchAction = <S, A extends Action<string>>(
  actionMap: ActionMap<A, S>,
  defaultState: S
) => (state = defaultState, action?: A): S => {
  // @ts-ignore
  const useReducer = !!(action && actionMap[action.type]);
  // @ts-ignore
  return useReducer ? actionMap[action.type](state, action) : state;
};

type ActionMapForProduce<A extends Action<string>, S> = {
  [AT in A['type']]?: (state: S, action: MatchedAction<A, AT>) => S | void;
};

export const matchProduceAction = matchAction as <S, A extends Action<string>>(
  actionMap: ActionMapForProduce<A, S>,
  defaultState: S
) => (state: S, action?: A) => S | void;

export default matchAction;
