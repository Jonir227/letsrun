// redux type helpers

type API<P extends any[], R> = (...p: P) => Promise<R>;

interface IEntity<R, S, F> {
  REQUEST: R;
  SUCCESS: S;
  FAILURE: F;
}

interface IEntityAction {
  action: {
    REQUEST: (...p: any[]) => any;
    SUCCESS: (...p: any[]) => any;
    FAILURE: (...p: any[]) => any;
    [key: string]: (...p: any[]) => any;
  };
  api: API<any, any>;
}

type EntityAction<T extends IEntityAction> = ReturnType<
  T["action"][keyof T["action"]]
>;
