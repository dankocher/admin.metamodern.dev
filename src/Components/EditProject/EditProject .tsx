import styles from "./index.module.scss";

import React from "react";

import {
    MetTextField,
    MetToggle,
    MetSquareIconBtn,
    MetSquareIconCheckbox,
    MetTextArea,
} from "@metamodern.dev/metamodern-ui/";

import { linkIcon } from "../../assets/icons/link-icon";
import { TagbleType } from "../TagLists/TagbleType";
import { TagButtonList } from "../TagLists/TagButtonList";
import { AddSectionBtn } from "./AddSectionBtn";

export const EditProject = () => {
    const inputFont = "body2";

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className="subtitle3">Date: 15.12.2020</span>

                <div className={styles.header__nameWrapper}>
                    <MetTextField
                        inputFontClass={inputFont}
                        placeholder={"Название"}
                        // value={localWhatsApp}
                        // onChange={onChangeWhatsApp}
                        // onBlur={onBlurWhatsApp}
                    />
                    <div className={styles.header__nameWrapper__options}>
                        <div className={styles.toggleWrapper}>
                            <MetToggle />
                        </div>
                        <MetSquareIconCheckbox />
                        <MetSquareIconBtn icon={linkIcon} />
                        <MetSquareIconBtn />
                    </div>
                </div>

                <MetTextField
                    inputFontClass={inputFont}
                    placeholder={"Короткое название"}

                    // value={localWhatsApp}
                    // onChange={onChangeWhatsApp}
                    // onBlur={onBlurWhatsApp}
                />

                <MetTextArea
                    inputFontClass={inputFont}
                    placeholder={"Описание"}
                    rowsMins={2}
                />
            </div>

            <div className={styles.tagLists}>
                <TagButtonList
                    header={"Тэги"}
                    tagListType={TagbleType.PROJECT}
                />
            </div>

            <hr />

            <div className={styles.content}>
                <span className={`${styles.content__header} adminkaH6`}>
                    {"Контент"}
                </span>

                <div className={styles.content__description}>
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
                        rowsMins={2}
                    />
                </div>

                <AddSectionBtn label="Добавить блок" />
            </div>
        </div>
    );
};
