import { Action } from 'redux';

function createAction<T, P extends (...args: any) => any>(
  type: T,
  payloadSelector: P
): (...args: Parameters<P>) => Action<T> & { payload: ReturnType<P> };
function createAction<T>(type: T): () => Action<T>;
function createAction(type: any, payloadSelector?: any) {
  const actionCreator = (...args: any[]) => ({
    type,
    ...(payloadSelector && { payload: payloadSelector(...args) })
  });
  actionCreator.toString = () => type;
  return actionCreator;
}

export default createAction;
