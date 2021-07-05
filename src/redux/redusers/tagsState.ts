import {
    ADD_TAG,
    DELETE_TAG,
    CHANGE_VALUE,
    CHANGE_TOGGLE,
} from "../actions/tagsActions";

import { v4 as uuidv4 } from "uuid";

import { TagbleType } from "../../Components/TagLists/TagbleType";

import { deleteHandler } from "../helperRedux";

interface Tag {
    tagType: TagbleType.BRIEF | TagbleType.MAIL | TagbleType.PROJECT;
    value: string;
    isChecked?: boolean;
}

export interface TagsStateProps {
    [id: string]: Tag;
}

// reducer
export function tagsState(state: TagsStateProps = {}, action) {
    switch (action.type) {
        case ADD_TAG: {
            const value = action.payload.value;
            const tagType = action.payload.tagType;
            const isChecked = action.payload.isChecked;
            return {
                ...state,
                [uuidv4()]: { tagType, value, isChecked },
            };
        }

        case DELETE_TAG: {
            const currentTagId = action.payload;
            const { [currentTagId]: value, ...newState } = state;
            return newState;
            // return deleteHandler(state, action);
        }

        case CHANGE_VALUE: {
            const id = action.payload.id;
            const value = action.payload.value;
            const isChecked = action.payload.isChecked;
            return { ...state, [id]: { ...state[id], value, isChecked } };
        }

        case CHANGE_TOGGLE: {
            const id = action.payload;
            return {
                ...state,
                [id]: { ...state[id], isChecked: !state[id].isChecked },
            };
        }

        default:
            return state;
    }
}

// selectors
export const getTagArr = (state, tagListType) => {
    const tagList = state.tagsState;

    return Object.keys(tagList).filter(
        (id: string) => tagList[id].tagType === tagListType
    );
};
