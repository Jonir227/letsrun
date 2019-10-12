import { Action } from "redux";

function createAction<T, P extends (...args: any) => any>(
  type: T,
  payloadSelector: P
): (...args: Parameters<P>) => Action<T> & { payload: ReturnType<P> };
function createAction<T>(type: T): () => Action<T>;
function createAction(type: any, payloadSelector?: any) {
  return (...args: any[]) => ({
    type,
    ...(payloadSelector && { payload: payloadSelector(...args) })
  });
}

export default createAction;
