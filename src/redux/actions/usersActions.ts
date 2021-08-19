export const ADD_USER = "ADD_USER";
export const EDIT_USER_NAME = "EDIT_USER_NAME";
export const EDIT_USER_MAIL = "EDIT_USER_MAIL";
export const EDIT_IS_USER_DISABLE =
  "EDIT_IS_USER_DISABLE";
export const EDIT_USER_ROLE = "EDIT_USER_ROLE";

export const addUser = (id: string) => ({
  type: ADD_USER,
  payload: id,
});

export const editName = (id: string, name: string) => ({
  type: EDIT_USER_NAME,
  payload: { id, name },
});

export const editMail = (id: string, mail: string) => ({
  type: EDIT_USER_MAIL,
  payload: { id, mail },
});

export const onToggleIsUserDisable = (id: string) => ({
  type: EDIT_IS_USER_DISABLE,
  payload: id,
});

export const editRole = (
  id: string,
  role: { id: string; value: string }[]
) => ({
  type: EDIT_USER_ROLE,
  payload: { id, role },
});
