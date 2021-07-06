import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";
import { AddTagBtnProps } from "./AddTagBtnProps";

export const AddTagBtn: FC<AddTagBtnProps> = ({
    onClick,
    label,
}): ReactElement => {
    return (
        <div
            role="button"
            className={`${styles.container} body1`}
            onClick={onClick}
        >
            {label}
        </div>
    );
};
