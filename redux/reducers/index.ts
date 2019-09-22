import { Action } from "redux";

const rootReducer = (state = {}, action: Action) => {
  console.log(action);
  return state;
};

export default rootReducer;
