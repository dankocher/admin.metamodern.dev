import { ADD_TAG, DELETE_TAG, CHANGE_VALUE } from "../actions/tagsActions";

import { v4 as uuidv4 } from "uuid";

import { TagbleType } from "../../Components/TagLists/TagbleType";

import { deleteHandler } from "../helperRedux";

export interface tagsStateProps {
    [id: string]: {
        tagType: TagbleType.BRIEF | TagbleType.MAIL | TagbleType.PROJECT;
        value: string;
        isChecked?: boolean;
    };
}

const initialState = {
    [uuidv4()]: { tagType: TagbleType.BRIEF, value: "", isChecked: false },
    [uuidv4()]: { tagType: TagbleType.MAIL, value: "" },
    [uuidv4()]: { tagType: TagbleType.PROJECT, value: "" },
};

const tagsState = (state: tagsStateProps = initialState, action) => {
    switch (action.type) {
        case ADD_TAG:
            return {
                ...state,
                [uuidv4()]: { tagType: action.payload, value: "" },
            };

        case DELETE_TAG:
            return deleteHandler(state, action);

        case CHANGE_VALUE:
            const id = action.payload.id;
            const value = action.payload.value;

            return { ...state, [id]: { ...state[id], value } };
        default:
            return state;
    }
};

export default tagsState;
