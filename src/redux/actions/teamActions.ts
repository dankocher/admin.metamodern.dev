export const ADD_TEAM_MEMBER = "ADD_TEAM_MEMBER";
export const EDIT_TEAM_MEMBER_NAME = "EDIT_TEAM_MEMBER_NAME";
export const EDIT_TEAM_MEMBER_ABOUT = "EDIT_TEAM_MEMBER_ABOUT";
export const EDIT_TEAM_MEMBER_IS_VISIBLE_ON_SITE =
  "EDIT_TEAM_MEMBER_IS_VISIBLE_ON_SITE";
export const EDIT_TEAM_MEMBER_POSITION = "EDIT_TEAM_MEMBER_POSITION";

export const addTeamMember = (id: string) => ({
  type: ADD_TEAM_MEMBER,
  payload: id,
});

export const editName = (id: string, name: string) => ({
  type: EDIT_TEAM_MEMBER_NAME,
  payload: { id, name },
});

export const editAbout = (id: string, about: string) => ({
  type: EDIT_TEAM_MEMBER_ABOUT,
  payload: { id, about },
});

export const onToggleIsVisibleOnSite = (id: string) => ({
  type: EDIT_TEAM_MEMBER_IS_VISIBLE_ON_SITE,
  payload: id,
});

export const editPosition = (
  id: string,
  position: { id: string; value: string }[]
) => ({
  type: EDIT_TEAM_MEMBER_POSITION,
  payload: { id, position },
});
