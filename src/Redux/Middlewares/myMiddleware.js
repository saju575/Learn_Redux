import rootReducer from "../rootReducer";

export const myMiddleware = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);
  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log(`After: ${JSON.stringify(upcomingState)}`);
  next(action);
};
