export const routConstants = {
    HOME: "/progects",
    USERS_SETTINGS: "/users-settings",
    GENERAL_SETTINGS: "/general-settings",
    EDIT_PROGECT: "/progects/edit-progects/:id?",
};

export const getEditProgectUrl = (id: string): string => {
    return `/progects/edit-progects/${id}`;
};
