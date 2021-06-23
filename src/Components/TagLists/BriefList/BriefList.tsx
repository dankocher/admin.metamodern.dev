import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";

import { TagInput } from "../TagInput";
import { AddTagBtn } from "../AddTagBtn";

export const BriefList: FC<any> = (): ReactElement => {
    return (
        <div className={styles.container}>
            <span className="adminkaH6">Теги для брифа</span>

            <div className={styles.container__tagList}>
                <TagInput />

                <AddTagBtn />
            </div>
        </div>
    );
};
