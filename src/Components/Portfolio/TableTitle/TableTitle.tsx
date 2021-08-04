import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";

import { TableTitleProps } from "./TableTitleProps";

export const TableTitle: FC<TableTitleProps> = ({ title }): ReactElement => {
    return (
        <div className={styles.container}>
            <span className={"caption"}>{title}</span>
        </div>
    );
};
