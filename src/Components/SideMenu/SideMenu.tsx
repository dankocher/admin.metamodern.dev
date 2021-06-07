import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";

import { SideMenuProps } from "./index";
import { MenuOption } from "./MenuOption/index";

import { homeIcon } from "../../assets/icons/home-icon";
import { settingsIcon } from "../../assets/icons/settings-icon";
import { teamIcon } from "../../assets/icons/team-icon";
import { metamodernIcon } from "../../assets/icons/metamodern-big-icon";

import imgUrl from "../../assets/img/test.png";

export const SideMenu: FC<SideMenuProps> = (
    {
        // imgUrl,
        // userName,
        // email,
    }
): ReactElement => {
    // const imgUrl = "../../assets/img/test.png";
    const userName = "Ronald Richards";
    const email = "ronald.richards@gmail.com";

    return (
        <div className={styles.container}>
            <i>{metamodernIcon}</i>
            <div className={styles.container__imgContainer}>
                <img src={imgUrl} alt="photo" />
            </div>
            <span>{userName}</span>
            <span>{email}</span>
            <MenuOption icon={homeIcon} label="Главная" />
            <MenuOption icon={settingsIcon} label="Общие настройки" />
            <MenuOption icon={teamIcon} label="Команда" />
        </div>
    );
};
