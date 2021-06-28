import styles from "./index.module.scss";

import React, { FC, ReactElement, useState } from "react";
import { AddTagBtnProps } from "./AddTagBtnProps";

export const AddTagBtn: FC<AddTagBtnProps> = ({ onClick }): ReactElement => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={styles.container} onClick={onClick}>
            {"+ Tag"}
        </div>
    );
};
