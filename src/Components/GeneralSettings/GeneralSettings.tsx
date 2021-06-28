import styles from "./index.module.scss";

import React from "react";

import { TagInputList } from "../TagLists/TagInputList";
import { TagbleType } from "../TagLists/TagbleType";

export const GeneralSettings = () => {
    return (
        <div className={styles.container}>
            <div>GeneralSettings</div>

            <hr />

            <TagInputList
                tagListType={TagbleType.BRIEF}
                header="Теги для брифа"
            />
        </div>
    );
};
