import {
  ADD_TEAM_MEMBER,
  EDIT_TEAM_MEMBER_NAME,
  EDIT_TEAM_MEMBER_ABOUT,
  EDIT_TEAM_MEMBER_IS_VISIBLE_ON_SITE,
  EDIT_TEAM_MEMBER_POSITION,
} from "../actions/teamActions";

interface User {
  name: string;
  about: string;
  position: { id: string; value: string }[];
  isVisibleOnSite: boolean;
}

export interface TeamStateProps {
  [id: string]: User;
}

// reducer
export function teamState(state: TeamStateProps = {}, action) {
  switch (action.type) {
    case ADD_TEAM_MEMBER: {
      return {
        ...state,
        [action.payload]: {
          name: "",
          about: "",
          position: [],
          isVisibleOnSite: true,
        },
      };
    }

    case EDIT_TEAM_MEMBER_NAME: {
      const { id, name } = action.payload;

      return {
        ...state,
        [id]: { ...state[id], name },
      };
    }

    case EDIT_TEAM_MEMBER_ABOUT: {
      const { id, about } = action.payload;

      return { ...state, [id]: { ...state[id], about } };
    }

    case EDIT_TEAM_MEMBER_IS_VISIBLE_ON_SITE: {
      const id = action.payload;
      return {
        ...state,
        [id]: { ...state[id], isVisibleOnSite: !state[id].isVisibleOnSite },
      };
    }

    case EDIT_TEAM_MEMBER_POSITION: {
      const { id, position } = action.payload;
      return {
        ...state,
        [id]: { ...state[id], position },
      };
    }
    default:
      return state;
  }
}

// selectors
export const getName = (state, id) => state.teamState[id]?.name || "";
export const getAbout = (state, id) => state.teamState[id]?.about || "";
export const getIsVisibleOnSite = (state, id) =>
  state.teamState[id]?.isVisibleOnSite;
export const getPosition = (state, id) => state.teamState[id]?.position;
