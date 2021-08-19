export const routConstants = {
  HOME: "/progects",
  TEAM_SETTINGS: "/team-settings",
  GENERAL_SETTINGS: "/general-settings",
  EDIT_PROGECT: "/progects/edit-progects/:id?",
  EDIT_TEAM_MEMBER: "/team-settings/edit-team-member/:id?",
  EDIT_ACCESS_RIGHTS: "/team-settings/edit-access-rights/:id?",
};

export const getEditProgectUrl = (id: string): string => {
  return `/progects/edit-progects/${id}`;
};

export const getEditTeamMemberUrl = (id: string): string => {
  return `/team-settings/edit-team-member/${id}`;
};

export const getEditAccessRightsUrl = (id: string): string => {
  return `/team-settings/edit-access-rights/${id}`;
};
