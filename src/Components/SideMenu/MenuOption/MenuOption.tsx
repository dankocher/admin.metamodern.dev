import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";
import { MenuOptionProps } from "./index";

export const MenuOption: FC<MenuOptionProps> = ({
    icon,
    label,
}): ReactElement => {
    return (
        <div className={styles.container}>
            <i>{icon}</i>
            <span>{label}</span>
            <div className={styles.container__focused} />
            <div className={styles.container__description}>
                <span>{label}</span>
            </div>
        </div>
    );
};

export default MenuOption;
