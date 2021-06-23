import styles from "./index.module.scss";

import React from "react";

import { BriefList } from "../TagLists/BriefList";

export const GeneralSettings = () => {
    return (
        <div className={styles.container}>
            <div>GeneralSettings</div>

            <hr />

            <BriefList />
        </div>
    );
};
