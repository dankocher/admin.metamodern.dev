import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";

import { AddSectionBtnProps } from "./AddSectionBtnProps";

export const AddSectionBtn: FC<AddSectionBtnProps> = ({
    label,
    onClick,
}): ReactElement => {
    return (
        <div role="button" onClick={onClick} className={styles.container}>
            {label}
        </div>
    );
};
