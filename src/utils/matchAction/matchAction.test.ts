import matchAction from './matchAction';

interface State {
  name: string;
  age: number;
}

const defaultState: State = {
  name: 'none',
  age: 0
};

const CHANGE_NAME = 'ACTION_A' as const;
const CHANGE_AGE = 'ACTION_B' as const;

const changeName = () => ({
  type: CHANGE_NAME,
  payload: { name: 'A' }
});

const changeAge = () => ({
  type: CHANGE_AGE,
  payload: { age: 3 }
});

type Actions = ReturnType<typeof changeAge | typeof changeName>;

const handleChangeName = (
  state: State,
  { payload }: ReturnType<typeof changeName>
): State => {
  const { name } = payload;
  return { ...state, name };
};

const handleChangeAge = (
  state: State,
  { payload }: ReturnType<typeof changeAge>
) => {
  const { age } = payload;
  return { ...state, age };
};

describe('matchAction', () => {
  const reducer = matchAction<State, Actions>(
    {
      [CHANGE_NAME]: handleChangeName,
      [CHANGE_AGE]: handleChangeAge
    },
    defaultState
  );
  test('should be return proper inital state in reducer', () => {
    const state = reducer();
    expect(state).toEqual(defaultState);
  });
  test('should match proper action and return new state', () => {
    let state = reducer();
    expect(state).toEqual(defaultState);
    state = reducer(state, changeName());
    expect(state).toEqual({ name: 'A', age: 0 });
    state = reducer(state, changeAge());
    expect(state).toEqual({ name: 'A', age: 3 });
  });
});
