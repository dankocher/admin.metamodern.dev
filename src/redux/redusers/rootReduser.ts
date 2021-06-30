import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import { TagsStateProps, tagsState } from "./tagsState";

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

export interface RootStateProps {
    tagsState: TagsStateProps;
}

const rootReducer = combineReducers({ tagsState });

export default rootReducer;
