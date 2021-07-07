import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";

import { MetTextField, MetTextArea } from "@metamodern.dev/metamodern-ui/";

import { AddSectionBtn } from "../AddSectionBtn";

export const ProjectContent = (): ReactElement => {
    const inputFont = "body2";

    return (
        <div className={styles.container}>
            <span className={`${styles.container__header} adminkaH6`}>
                {"Контент"}
            </span>

            <div className={styles.container__description}>
                <MetTextField
                    inputFontClass={inputFont}
                    placeholder={"Заголовок"}

                    // value={localWhatsApp}
                    // onChange={onChangeWhatsApp}
                    // onBlur={onBlurWhatsApp}
                />

                <MetTextArea
                    inputFontClass={inputFont}
                    placeholder={"Описание"}
                    rowsMins={3}
                    rowsMax={11}
                />
            </div>

            <AddSectionBtn label="Добавить блок" />
        </div>
    );
};
