import styles from "./index.module.scss";

import React, { FC, ReactElement, useState } from "react";

export const AddTagBtn: FC<any> = (): ReactElement => {
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return <div className={styles.container}>{"+ Tag"}</div>;
};
