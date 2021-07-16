export const ADD_PROJECT = "ADD_PROJECT";
export const EDIT_FULL_NAME = "EDIT_FULL_NAME";
export const EDIT_SHORT_NAME = "EDIT_SHORT_NAME";
export const EDIT_SHORT_DESCRIPTION = "EDIT_SHORT_DESCRIPTION";
export const TOGGLE_IS_VISIBLE_ON_SITE = "TOGGLE_IS_VISIBLE_ON_SITE";
export const TOGGLE_IS_MAIN_PAGE_ON_SITE = "TOGGLE_IS_MAIN_PAGE_ON_SITE";
export const EDIT_APPSTORE_LINK = "EDIT_APPSTORE_LINK";
export const EDIT_PLAYMARKET_LINK = "EDIT_PLAYMARKET_LINK";
export const EDIT_FIGMA_LINK = "EDIT_FIGMA_LINK";
export const EDIT_SITE_LINK = "EDIT_SITE_LINK";
export const CHOOSE_TAG_BTN = "CHOOSE_TAG_BTN";
export const UNCHOOSE_TAG_BTN = "UNCHOOSE_TAG_BTN";
export const ADD_CONTENT_BLOCK = "ADD_CONTENT_BLOCK";
export const DELETE_CONTENT_BLOCK = "DELETE_CONTENT_BLOCK";
export const EDIT_HEADING_CONTENT_BLOCK = "EDIT_HEADING_CONTENT_BLOCK";
export const EDIT_DESCRIPTION_CONTENT_BLOCK = "EDIT_DESCRIPTION_CONTENT_BLOCK";

export const addProject = () => ({
    type: ADD_PROJECT,
});

export const editFullName = (id: string, fullName: string) => ({
    type: EDIT_FULL_NAME,
    payload: { id, fullName },
});

export const editShortName = (id: string, shortName: string) => ({
    type: EDIT_SHORT_NAME,
    payload: { id, shortName },
});

export const editShortDescriprion = (id: string, shortDescriprion: string) => ({
    type: EDIT_SHORT_DESCRIPTION,
    payload: { id, shortDescriprion },
});

export const toggleIsVisibleOnSite = (id: string) => ({
    type: TOGGLE_IS_VISIBLE_ON_SITE,
    payload: id,
});

export const toggleIsMainPageOnSite = (id: string) => ({
    type: TOGGLE_IS_MAIN_PAGE_ON_SITE,
    payload: id,
});

export const editAppStoreLink = (id: string, link: string) => ({
    type: EDIT_APPSTORE_LINK,
    payload: { id, link },
});

export const editPlayMarketLink = (id: string, link: string) => ({
    type: EDIT_PLAYMARKET_LINK,
    payload: { id, link },
});

export const editFigmaLink = (id: string, link: string) => ({
    type: EDIT_FIGMA_LINK,
    payload: { id, link },
});

export const editSiteLink = (id: string, link: string) => ({
    type: EDIT_SITE_LINK,
    payload: { id, link },
});

export const chooseTagBtn = (projectId: string, tagId: string) => ({
    type: CHOOSE_TAG_BTN,
    payload: { projectId, tagId },
});

export const unchooseTagBtn = (projectId: string, index: number) => ({
    type: UNCHOOSE_TAG_BTN,
    payload: { projectId, index },
});

export const addContentBlock = (
    id: string,
    heading: string,
    description: string
) => ({
    type: ADD_CONTENT_BLOCK,
    payload: { id, heading, description },
});

export const deleteContentBlock = (id: string, index: number) => ({
    type: DELETE_CONTENT_BLOCK,
    payload: { id, index },
});

export const editHeadingContentBlock = (
    id: string,
    index: number,
    heading: string
) => ({
    type: EDIT_HEADING_CONTENT_BLOCK,
    payload: { id, index, heading },
});

export const editDescriptionContentBlock = (
    id: string,
    index: number,
    description: string
) => ({
    type: EDIT_DESCRIPTION_CONTENT_BLOCK,
    payload: { id, index, description },
});
