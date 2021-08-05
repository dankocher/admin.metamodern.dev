import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";

import { TagProps } from "./TagProps";

export const Tag: FC<TagProps> = ({ value }): ReactElement => {
    return (
        <div className={styles.container}>
            <span className={"subtitle3"}>{value}</span>
        </div>
    );
};
