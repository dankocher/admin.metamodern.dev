import styles from "./index.module.scss";

import React, { useEffect } from "react";

import { TagInputList } from "../TagLists/TagInputList";
import { TagbleType } from "../TagLists/TagbleType";

export const GeneralSettings = () => {
    // useEffect(() => {
    //     console.log("GeneralSettings");
    // }, []);

    return (
        <div className={styles.container}>
            <div>GeneralSettings</div>

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
