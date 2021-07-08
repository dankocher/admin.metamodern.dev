import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";

import { ModalBtnProps } from "./ModalBtnProps";

export const ModalBtn: FC<ModalBtnProps> = ({
    state,
    label,
    onClick,
}): ReactElement => {
    return (
        <div
            role="button"
            onClick={onClick}
            className={`${state ? styles.okBtn : styles.cancelBtn} body1`}
        >
            {label}
        </div>
    );
};
