import { combineReducers } from "redux";
import counterReducer from "./Counter/counterReducer";
import dynamicCounterReducer from "./DynamicCounter/dynamicCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
});

export default rootReducer;
