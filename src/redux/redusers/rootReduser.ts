import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import { TagsStateProps, tagsState } from "./tagsState";
import { contactsState } from "./contactsReduser";
import { projectsState } from "./ProjectsReduser";
import { teamState } from "./teamReduser";

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
});

export default rootReducer;
