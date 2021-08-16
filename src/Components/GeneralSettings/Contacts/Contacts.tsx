import styles from "./index.module.scss";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MetTextField } from "@metamodern.dev/metamodern-ui/";

import translation from "../../../language/ru.json";

import {
    editWatsapp,
    editEmail,
    editTelegram,
} from "../../../redux/actions/contactsActions";

import {
    getWhatsApp,
    getEmail,
    getTelegram,
} from "../../../redux/redusers/contactsReduser";

export const Contacts = () => {
    const labelFont = "subtitle2";
    const inputFont = "body2";

    const dispatch = useDispatch();

    const [localWhatsApp, setLocalWhatsApp] = useState("");
    const [localEmail, setLocalEmail] = useState("");
    const [localTelegram, setLocalTelegram] = useState("");

    const whatsApp = useSelector(getWhatsApp);
    const email = useSelector(getEmail);
    const telegram = useSelector(getTelegram);

    useEffect(() => {
        setLocalWhatsApp(whatsApp);
        setLocalEmail(email);
        setLocalTelegram(telegram);
    }, []);

    const onChangeWhatsApp = (event) => {
        const value = event.target.value;
        setLocalWhatsApp(value);
    };

    const onChangeEmail = (event) => {
        const value = event.target.value;
        setLocalEmail(value);
    };

    const onChangeTelegram = (event) => {
        const value = event.target.value;
        setLocalTelegram(value);
    };

    const onBlurWhatsApp = (_) => {
        dispatch(editWatsapp(localWhatsApp));
    };

    const onBlurEmail = (_) => {
        dispatch(editEmail(localEmail));
    };

    const onBlurTelegram = (_) => {
        dispatch(editTelegram(localTelegram));
    };

    return (
        <div className={styles.contacts}>
            <div className={styles.contacts__leftSide}>
                <MetTextField
                    labelFontClass={labelFont}
                    inputFontClass={inputFont}
                    isTextField={true}
                    label={translation.whatsApp}
                    value={localWhatsApp}
                    onChange={onChangeWhatsApp}
                    onBlur={onBlurWhatsApp}
                />
                <MetTextField
                    labelFontClass={labelFont}
                    inputFontClass={inputFont}
                    isTextField={true}
                    label={translation.email}
                    value={localEmail}
                    onChange={onChangeEmail}
                    onBlur={onBlurEmail}
                />
            </div>
            <div className={styles.contacts__rightSide}>
                <MetTextField
                    labelFontClass={labelFont}
                    inputFontClass={inputFont}
                    isTextField={true}
                    label={translation.telegram}
                    value={localTelegram}
                    onChange={onChangeTelegram}
                    onBlur={onBlurTelegram}
                />
            </div>
        </div>
    );
};
