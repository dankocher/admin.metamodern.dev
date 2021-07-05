import styles from "./index.module.scss";

import React from "react";

import { Contacts } from "./Contacts";
import { TagInputList } from "../TagLists/TagInputList";
import { TagbleType } from "../TagLists/TagbleType";

export const GeneralSettings = () => {
    return (
        <div className={styles.container}>
            <Contacts />

            <hr />

            <div className={styles.container__tagLists}>
                <TagInputList
                    tagListType={TagbleType.BRIEF}
                    header="Теги для брифа"
                />
                <TagInputList
                    tagListType={TagbleType.PROJECT}
                    header="Теги для кейсов"
                />
                <TagInputList
                    tagListType={TagbleType.MAIL}
                    header="Почты для отправки брифа"
                />
            </div>
        </div>
    );
};
