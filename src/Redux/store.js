import { applyMiddleware, createStore } from "redux";
import { myMiddleware } from "./Middlewares/myMiddleware";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(myMiddleware, logger));

export default store;
