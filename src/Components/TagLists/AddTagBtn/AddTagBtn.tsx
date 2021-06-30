import styles from "./index.module.scss";

import React, { FC, ReactElement, useState } from "react";
import { AddTagBtnProps } from "./AddTagBtnProps";

export const AddTagBtn: FC<AddTagBtnProps> = ({ onClick }): ReactElement => {
    return (
        <div className={`${styles.container} body1`} onClick={onClick}>
            {"+ tag"}
        </div>
    );
};
