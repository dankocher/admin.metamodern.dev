export const ADD_TAG = "ADD_TAG";
export const DELETE_TAG = "DELETE_TAG";
export const CHANGE_VALUE = "CHANGE_VALUE";
export const CHANGE_TOGGLE = "CHANGE_TOGGLE";

export const addTag = (tagType, value, isChecked) => ({
    type: ADD_TAG,
    payload: { tagType, value, isChecked },
});

export const deleteTag = (id) => ({
    type: DELETE_TAG,
    payload: id,
});

export const changeValue = (id, value) => ({
    type: CHANGE_VALUE,
    payload: { id, value },
});

export const changeToggle = (id) => ({
    type: CHANGE_TOGGLE,
    payload: id,
});
