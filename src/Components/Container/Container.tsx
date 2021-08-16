import styles from "./index.module.scss";

import React, { FC, ReactElement, useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { MetCircleBtn } from "@metamodern.dev/metamodern-ui/";

import translation from "../../language/ru.json";

import { ContainerProps } from "./index";

import { routConstants } from "../../Navigation";

const headerList = {
    [routConstants.HOME]: translation.portfolio,
    [routConstants.GENERAL_SETTINGS]: translation.generelSettings,
    [routConstants.TEAM_SETTINGS]: translation.userSettings,
};

export const Container: FC<ContainerProps> = ({ children }): ReactElement => {
    const location = useLocation();
    const history = useHistory();

    const [isHomePage, setIsHomePage] = useState(true);
    const [isHaveHeader, setIsHaveHeader] = useState(true);

    const header = headerList[location.pathname];

    useEffect(() => {
        setIsHomePage(location.pathname === routConstants.HOME);
        setIsHaveHeader(
            location.pathname === routConstants.HOME ||
                location.pathname === routConstants.GENERAL_SETTINGS ||
                location.pathname === routConstants.TEAM_SETTINGS
        );
    }, [location.pathname, setIsHomePage, setIsHaveHeader]);

    const setPath = () => {
        history.push(routConstants.HOME);
    };

    return (
        <div className={styles.ground}>
            <div className={styles.ground__centred}>
                {isHomePage ? null : (
                    <div className={styles.btnContainer}>
                        <MetCircleBtn onClick={setPath} />
                    </div>
                )}

                {isHaveHeader ? (
                    <div className={styles.ground__centred__header}>
                        <span className="adminkaH5">{header}</span>
                    </div>
                ) : null}

                <div className={styles.ground__centred__container}>
                    {children}
                </div>
            </div>
        </div>
    );
};
