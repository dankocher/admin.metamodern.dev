export const EDIT_WHATSAPP = "EDIT_WHATSAPP";
export const EDIT_EMAIL = "EDIT_EMAIL";
export const EDIT_TELEGRAM = "EDIT_TELEGRAM";

export const editWatsapp = (value) => ({
    type: EDIT_WHATSAPP,
    payload: value,
});

export const editEmail = (value) => ({
    type: EDIT_EMAIL,
    payload: value,
});

export const editTelegram = (value) => ({
    type: EDIT_TELEGRAM,
    payload: value,
});
