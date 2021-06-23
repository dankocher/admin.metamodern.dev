import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";
import { MenuOptionProps } from "./index";

export const MenuOption: FC<MenuOptionProps> = ({
    icon,
    label,
    isSelected,
    onClick,
}): ReactElement => {
    const handleClick = () => {
        if (onClick == null) return;
        onClick();
    };

    return (
        <div
            className={`${styles.container} ${
                isSelected ? styles.selected : ""
            }`}
            onClick={handleClick}
        >
            <i>{icon}</i>
            <span className="subtitle1">{label}</span>
            <div className={styles.container__description}>
                <span className="caption">{label}</span>
            </div>

            {isSelected ? <div className={styles.container__focused} /> : null}
        </div>
    );
};

export default MenuOption;
