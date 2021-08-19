import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import { TagsStateProps, tagsState } from "./tagsState";
import { contactsState } from "./contactsReducer";
import { projectsState } from "./projectsReducer";
import { teamState } from "./teamReducer";
import { usersState } from "./usersReducer";

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

const rootReducer = combineReducers({
  tagsState,
  contactsState,
  projectsState,
  teamState,
  usersState,
});

export default rootReducer;
