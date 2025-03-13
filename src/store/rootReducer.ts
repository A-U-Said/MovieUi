import { combineReducers } from "redux";
import type { UnknownAction  } from "redux";
import { globalActions } from "@/clients";
import sharedReducers from "./sharedReducers";


const reducers = combineReducers({
  ...sharedReducers
});


const rootReducer = (state: ReturnType<typeof reducers> | undefined, action: UnknownAction ) => {

  if (action.type === globalActions.RESET_REDUCERS) {
    state = undefined;
  }

  return reducers(state, action)
}


export default rootReducer;
