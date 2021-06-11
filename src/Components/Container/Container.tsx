import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";

import { ContainerProps } from "./index";

import { routConstants } from "../../Navigation";

const headerList = {
    [routConstants.HOME]: "Портфолио",
    [routConstants.GENERAL_SETTINGS]: "Общие настройки",
    [routConstants.USERS_SETTINGS]: "Настройки команды",
};

export const Container: FC<ContainerProps> = ({ children }): ReactElement => {
    const location = useLocation();

    const header = headerList[location.pathname];

    return (
        <div className={styles.ground}>
            <div className={styles.ground__centred}>
                <div className={styles.ground__centred__header}>
                    <span className="adminkaH5">{header}</span>
                </div>
                <div className={styles.ground__centred__container}>
                    {children}
                </div>
            </div>
        </div>
    );
};
