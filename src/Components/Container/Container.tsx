import styles from "./index.module.scss";

import React, { FC, ReactElement, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { MetCircleBtn } from "@metamodern.dev/metamodern-ui/";

import { ContainerProps } from "./index";

import { routConstants } from "../../Navigation";

const headerList = {
    [routConstants.HOME]: "Портфолио",
    [routConstants.GENERAL_SETTINGS]: "Общие настройки",
    [routConstants.USERS_SETTINGS]: "Настройки команды",
};

export const Container: FC<ContainerProps> = ({ children }): ReactElement => {
    const location = useLocation();
    const history = useHistory();

    const [isHomePage, setIsHomePage] = useState(true);

    const header = headerList[location.pathname];

    useEffect(() => {
        setIsHomePage(location.pathname === routConstants.HOME);
    }, [location.pathname, setIsHomePage]);

    const setPath = () => {
        history.push(routConstants.HOME);
    };

    return (
        <div className={styles.ground}>
            <div className={styles.ground__centred}>
                <div className={styles.ground__centred__header}>
                    {isHomePage ? null : (
                        <div className={styles.btnContainer}>
                            <MetCircleBtn onClick={setPath} />
                        </div>
                    )}

                    <span className="adminkaH5">{header}</span>
                </div>
                <div className={styles.ground__centred__container}>
                    {children}
                </div>
            </div>
        </div>
    );
};
