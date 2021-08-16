import {
    EDIT_WHATSAPP,
    EDIT_EMAIL,
    EDIT_TELEGRAM,
} from "../actions/contactsActions";

interface ContactsStateProps {
    whatsApp: string;
    email: string;
    telegram: string;
}

const initialState = { whatsApp: "", email: "", telegram: "" };

// reducer
export function contactsState(
    state: ContactsStateProps = initialState,
    action
) {
    switch (action.type) {
        case EDIT_WHATSAPP:
            return { ...state, whatsApp: action.payload };
        case EDIT_EMAIL:
            return { ...state, email: action.payload };

        case EDIT_TELEGRAM:
            return { ...state, telegram: action.payload };
        default:
            return state;
    }
}

// selectors
export const getWhatsApp = (state) => state.contactsState.whatsApp;
export const getEmail = (state) => state.contactsState.email;
export const getTelegram = (state) => state.contactsState.telegram;
