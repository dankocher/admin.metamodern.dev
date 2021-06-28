export const ADD_TAG = "ADD_TAG";
export const DELETE_TAG = "DELETE_TAG";
export const CHANGE_VALUE = "CHANGE_VALUE";

export const addTag = (tagType) => ({
    type: ADD_TAG,
    payload: tagType,
});

export const deleteTag = (id) => ({
    type: DELETE_TAG,
    payload: id,
});

export const changeValue = (id, value) => ({
    type: CHANGE_VALUE,
    payload: { id, value },
});
