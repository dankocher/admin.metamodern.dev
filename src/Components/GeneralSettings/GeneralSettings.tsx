import styles from "./index.module.scss";
import React from "react";

import translation from "../../language/ru.json";

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
                    header={translation.briefTags}
                />
                <TagInputList
                    tagListType={TagbleType.PROJECT}
                    header={translation.сaseTags}
                />
                <TagInputList
                    tagListType={TagbleType.MAIL}
                    header={translation.mailForBrief}
                />
            </div>
        </div>
    );
};
