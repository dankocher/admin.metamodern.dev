import {
  ADD_USER,
  EDIT_USER_NAME,
  EDIT_USER_MAIL,
  EDIT_IS_USER_DISABLE,
  EDIT_USER_ROLE,
} from "../actions/usersActions";

interface User {
  name: string;
  mail: string;
  role: { id: string; value: string }[];
  isDisable: boolean;
}

export interface UsersStateProps {
  [id: string]: User;
}

// reducer
export function usersState(state: UsersStateProps = {}, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        [action.payload]: {
          name: "",
          mail: "",
          role: [],
          isDisable: false,
        },
      };
    }

    case EDIT_USER_NAME: {
      const { id, name } = action.payload;

      return {
        ...state,
        [id]: { ...state[id], name },
      };
    }

    case EDIT_USER_MAIL: {
      const { id, mail } = action.payload;

      return { ...state, [id]: { ...state[id], mail } };
    }

    case EDIT_IS_USER_DISABLE: {
      const id = action.payload;
      return {
        ...state,
        [id]: { ...state[id], isDisable: !state[id].isDisable },
      };
    }

    case EDIT_USER_ROLE: {
      const { id, role } = action.payload;
      return {
        ...state,
        [id]: { ...state[id], role },
      };
    }
    default:
      return state;
  }
}

// selectors
export const getName = (state, id) => state.teamState[id]?.name || "";
export const getMail = (state, id) => state.teamState[id]?.mail || "";
export const getIsDisable = (state, id) => state.teamState[id]?.isDisable;
export const getRole = (state, id) => state.teamState[id]?.role;
