export const ADD_TEAM_MEMBER = "ADD_TEAM_MEMBER";
export const EDIT_TEAM_USER_NAME = "EDIT_TEAM_USER_NAME";

export const addTeamMember = (id: string) => ({
  type: ADD_TEAM_MEMBER,
  payload: id,
});

export const editName = (id: string, name: string) => ({
  type: EDIT_TEAM_USER_NAME,
  payload: { id, name },
});
