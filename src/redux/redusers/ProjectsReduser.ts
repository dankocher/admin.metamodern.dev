import {
    ADD_PROJECT,
    EDIT_FULL_NAME,
    EDIT_SHORT_NAME,
    EDIT_SHORT_DESCRIPTION,
    TOGGLE_IS_VISIBLE_ON_SITE,
    TOGGLE_IS_MAIN_PAGE_ON_SITE,
    EDIT_APPSTORE_LINK,
    EDIT_PLAYMARKET_LINK,
    EDIT_FIGMA_LINK,
    EDIT_SITE_LINK,
    CHOOSE_TAG_BTN,
    UNCHOOSE_TAG_BTN,
    ADD_CONTENT_BLOCK,
    DELETE_CONTENT_BLOCK,
    EDIT_HEADING_CONTENT_BLOCK,
    EDIT_DESCRIPTION_CONTENT_BLOCK,
} from "../actions/ProjectsActions";

import update from "react-addons-update";

import { v4 as uuidv4 } from "uuid";

interface ContentBlockProps {
    id: string;
    heading: string;
    description: string;
}

interface ProjectProps {
    fullName: string;
    shortName?: string;
    shortDescriprion?: string;
    creationDate?: string;
    isVisibleOnSite?: boolean;
    isMainPageOnSite?: boolean;
    tagList?: string[];
    linkList?: {
        appStore: string;
        playMarket: string;
        figma: string;
        site: string;
    };
    contentList?: ContentBlockProps[];
}

interface ProjectsStateProps {
    [id: string]: ProjectProps;
}

const initialState = {};

// reducer
export function projectsState(
    state: ProjectsStateProps = initialState,
    action
) {
    switch (action.type) {
        case ADD_PROJECT: {
            return {
                ...state,
                ["newProject"]: {
                    creationDate: new Date(),
                    isVisibleOnSite: true,
                    isMainPageOnSite: false,
                },
            };
        }
        case EDIT_FULL_NAME: {
            const { id, fullName } = action.payload;

            return { ...state, [id]: { ...state[id], fullName } };
        }
        case EDIT_SHORT_NAME: {
            const { id, shortName } = action.payload;

            return { ...state, [id]: { ...state[id], shortName } };
        }
        case EDIT_SHORT_DESCRIPTION: {
            const { id, shortDescriprion } = action.payload;

            return { ...state, [id]: { ...state[id], shortDescriprion } };
        }
        case TOGGLE_IS_VISIBLE_ON_SITE: {
            const id = action.payload;

            return {
                ...state,
                [id]: {
                    ...state[id],
                    isVisibleOnSite: !state[id].isVisibleOnSite,
                },
            };
        }
        case TOGGLE_IS_MAIN_PAGE_ON_SITE: {
            const id = action.payload;

            return {
                ...state,
                [id]: {
                    ...state[id],
                    isMainPageOnSite: !state[id].isMainPageOnSite,
                },
            };
        }

        case EDIT_APPSTORE_LINK: {
            const { id, link } = action.payload;

            return {
                ...state,
                [id]: {
                    ...state[id],
                    linkList: { ...state[id].linkList, appStore: link },
                },
            };
        }

        case EDIT_PLAYMARKET_LINK: {
            const { id, link } = action.payload;

            return {
                ...state,
                [id]: {
                    ...state[id],
                    linkList: { ...state[id].linkList, playMarket: link },
                },
            };
        }

        case EDIT_FIGMA_LINK: {
            const { id, link } = action.payload;

            return {
                ...state,
                [id]: {
                    ...state[id],
                    linkList: { ...state[id].linkList, figma: link },
                },
            };
        }

        case EDIT_SITE_LINK: {
            const { id, link } = action.payload;

            return {
                ...state,
                [id]: {
                    ...state[id],
                    linkList: { ...state[id].linkList, site: link },
                },
            };
        }

        case CHOOSE_TAG_BTN: {
            const { projectId, tagId } = action.payload;

            return {
                ...state,
                [projectId]: {
                    ...state[projectId],
                    tagList: [...(state[projectId].tagList ?? []), tagId],
                },
            };
        }

        case UNCHOOSE_TAG_BTN: {
            const { projectId, index } = action.payload;
            const tagList = state[projectId].tagList;

            if (!tagList) return state;

            return {
                ...state,
                [projectId]: {
                    ...state[projectId],
                    tagList: [
                        ...tagList.slice(0, index),
                        ...tagList.slice(index + 1),
                    ],
                },
            };
        }

        case ADD_CONTENT_BLOCK: {
            const { id, heading, description } = action.payload;

            return {
                ...state,
                [id]: {
                    ...state[id],
                    contentList: [
                        ...(state[id]?.contentList ?? []),
                        { id: uuidv4(), heading, description },
                    ],
                },
            };
        }

        case DELETE_CONTENT_BLOCK: {
            const { id, index } = action.payload;
            const contentList = state[id].contentList;

            if (!contentList) return state;

            return {
                ...state,
                [id]: {
                    ...state[id],
                    contentList: [
                        ...contentList.slice(0, index),
                        ...contentList.slice(index + 1),
                    ],
                },
            };
        }

        case EDIT_HEADING_CONTENT_BLOCK: {
            const { id, index, heading } = action.payload;

            return update(state, {
                [id]: {
                    contentList: {
                        [index]: {
                            heading: { $set: heading },
                        },
                    },
                },
            });
        }

        case EDIT_DESCRIPTION_CONTENT_BLOCK: {
            const { id, index, description } = action.payload;

            return update(state, {
                [id]: {
                    contentList: {
                        [index]: {
                            description: { $set: description },
                        },
                    },
                },
            });
        }

        default:
            return state;
    }
}

// selectors
export const selectCreationDate = (state, id: string) =>
    state.projectsState[id]?.creationDate;

export const selectFullName = (state, id: string) =>
    state.projectsState[id]?.fullName;

export const selectIsVisibleOnSite = (state, id: string) =>
    state.projectsState[id]?.isVisibleOnSite;

export const selectIsMainPageOnSite = (state, id: string) =>
    state.projectsState[id]?.isMainPageOnSite;

export const selectChoosedTagList = (state, id: string): Array<string> =>
    state.projectsState[id]?.tagList ?? [];

export const selectContentList = (
    state,
    id: string
): Array<ContentBlockProps> => state.projectsState[id]?.contentList ?? [];
