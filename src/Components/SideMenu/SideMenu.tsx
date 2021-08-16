import styles from "./index.module.scss";

import React, { FC, ReactElement, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import { SideMenuProps } from "./index";
import { MenuOption } from "./MenuOption/index";

import { homeIcon } from "../../assets/icons/home-icon";
import { settingsIcon } from "../../assets/icons/settings-icon";
import { teamIcon } from "../../assets/icons/team-icon";
import { metamodernIcon } from "../../assets/icons/metamodern-icon";

import { routConstants } from "../../Navigation";

import imgUrl from "../../assets/img/test.png";

export const SideMenu: FC<SideMenuProps> = (): ReactElement => {
    const history = useHistory();
    const location = useLocation();

    const goHomeHandler = () => {
        history.push(routConstants.HOME);
    };
    const goUsersSettingsHandler = () => {
        history.push(routConstants.TEAM_SETTINGS);
    };
    const goGeneralSettingsHandler = () => {
        history.push(routConstants.GENERAL_SETTINGS);
    };

    const getIsSelected = (page: string) => {
        return page === location.pathname;
    };

    const userName = "Ronald Richards";
    const email = "ronald.richards@gmail.com";

    return (
        <div className={styles.container}>
            <i>{metamodernIcon}</i>
            <div className={styles.container__imgContainer}>
                <img src={imgUrl} alt="avatar" />
            </div>
            <div className={styles.container__description}>
                <span
                    className={`${styles.container__description__name} adminkaH6`}
                >
                    {userName}
                </span>
                <span
                    className={`${styles.container__description__mail} subtitle3`}
                >
                    {email}
                </span>
            </div>

            <MenuOption
                icon={homeIcon}
                label="Главная"
                onClick={goHomeHandler}
                isSelected={getIsSelected(routConstants.HOME)}
            />
            <MenuOption
                icon={settingsIcon}
                label="Общие настройки"
                onClick={goGeneralSettingsHandler}
                isSelected={getIsSelected(routConstants.GENERAL_SETTINGS)}
            />
            <MenuOption
                icon={teamIcon}
                label="Команда"
                onClick={goUsersSettingsHandler}
                isSelected={getIsSelected(routConstants.TEAM_SETTINGS)}
            />
        </div>
    );
};
