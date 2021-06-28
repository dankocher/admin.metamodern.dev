import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import tagsState, { tagsStateProps } from "./tagsState";

// export const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["caruselReducer", "testStorage"],
// };

// export const testStoragePersistConfig = {
//   key: "testStorage",
//   storage,
//   blacklist: ["currentTime", "isLoading"],
// };

export interface rootStateProps {
    tagsState: tagsStateProps;
}

const rootReducer = combineReducers({ tagsState });

export default rootReducer;
