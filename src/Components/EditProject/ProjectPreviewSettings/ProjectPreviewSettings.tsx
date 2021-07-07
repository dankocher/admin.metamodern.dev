import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";

import {
    MetTextField,
    MetToggle,
    MetSquareIconBtn,
    MetSquareIconCheckbox,
    MetTextArea,
} from "@metamodern.dev/metamodern-ui/";

import { linkIcon } from "../../../assets/icons/link-icon";
import { TagbleType } from "../../TagLists/TagbleType";
import { TagButtonList } from "../../TagLists/TagButtonList";

export const ProjectPreviewSettings = (): ReactElement => {
    const inputFont = "body2";

    return (
        <>
            <div className={styles.container}>
                <div className={styles.container__nameWrapper}>
                    <MetTextField
                        inputFontClass={inputFont}
                        placeholder={"Название"}
                        // value={localWhatsApp}
                        // onChange={onChangeWhatsApp}
                        // onBlur={onBlurWhatsApp}
                    />
                    <div className={styles.container__nameWrapper__options}>
                        <div className={styles.toggleWrapper}>
                            <MetToggle isChecked />
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
                    placeholder={"Короткое описание"}
                    rowsMins={3}
                    rowsMax={11}
                />
            </div>

            <div className={styles.tagLists}>
                <TagButtonList
                    header={"Тэги"}
                    tagListType={TagbleType.PROJECT}
                />
            </div>
        </>
    );
};
