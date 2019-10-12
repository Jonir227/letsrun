import { Action } from "redux";

interface IWaitingAction {
  checkDone: (action: string) => void;
  action: string;
}

interface IReduxSagaSSRMiddleware {
  middleware: (store: any) => (next: any) => (action: Action) => any;
  wait: (type: string) => Promise<void>;
}

const createReduxSagaSSRMiddleware = (): IReduxSagaSSRMiddleware => {
  const waitingActions: IWaitingAction[] = [];
  return {
    middleware: store => next => action => {
      waitingActions.forEach(l => l.checkDone(action.type));
      return next(action);
    },
    wait(action: string) {
      return new Promise((res, rej) => {
        waitingActions.push({
          checkDone: t => {
            if (t === action) {
              res();
            }
          },
          action
        });
      });
    }
  };
};

const {
  middleware: reduxSagaSSRMiddleware,
  wait
} = createReduxSagaSSRMiddleware();

export { wait };

export default reduxSagaSSRMiddleware;
