export const deleteHandler = (state, action) => {
    const currentTagId = action.payload;
    const tagType = state[currentTagId]?.tagType;

    let counter = 0;

    for (const item in state) {
        if (state[item].tagType === tagType) {
            counter++;
        }
        if (counter > 1) break;
    }

    if (counter > 1) {
        const { [currentTagId]: value, ...newState } = state;

        return newState;
    } else {
        return {
            ...state,
            [currentTagId]: { ...state[currentTagId], value: "" },
        };
    }
};
