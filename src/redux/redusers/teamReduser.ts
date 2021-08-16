import { ADD_TEAM_MEMBER, EDIT_TEAM_USER_NAME } from "../actions/teamActions";

interface User {
  name: string;
  about: string;
  position: string;
  isVisibleOnSite: boolean;
}

export interface TeamStateProps {
  [id: string]: User;
}

// const initialState: TeamStateProps = [];

// reducer
export function teamState(state: TeamStateProps = {}, action) {
  switch (action.type) {
    case ADD_TEAM_MEMBER: {
      return {
        ...state,
        [action.payload]: {
          name: "",
          about: "",
          position: "",
          isVisibleOnSite: true,
        },
      };
    }

    case EDIT_TEAM_USER_NAME: {
      const { id, name } = action.payload;

      return {
        ...state,
        [id]: { ...state[id], name },
      };
    }
    default:
      return state;
  }
}

// selectors
export const getWhatsApp = (state) => state.contactsState.whatsApp;
export const getEmail = (state) => state.contactsState.email;
export const getTelegram = (state) => state.contactsState.telegram;
