import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";

import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import {
    MetToggle,
    MetSquareIconBtn,
    MetSquareIconCheckbox,
} from "@metamodern.dev/metamodern-ui/";

import {
    toggleIsVisibleOnSite,
    toggleIsMainPageOnSite,
} from "../../../redux/actions/ProjectsActions";

import { getEditProgectUrl } from "../../../Navigation";
import { linkIcon } from "../../../assets/icons/link-icon";
import { CaseProps } from "./CaseProps";
import { TagList } from "../TagList";

export const Case: FC<CaseProps> = ({
    id,
    shortName,
    isVisibleOnSite,
    isMainPageOnSite,
    tagList,
}): ReactElement => {
    const history = useHistory();
    const dispatch = useDispatch();

    const imgUrl =
        "https://cwuobserver.com/wp-content/uploads/2021/01/Naruto-759x900.png";

    const goToEditProgect = (_) => {
        // return;
        history.push(getEditProgectUrl(id));
    };

    const onChangeToggleHandler = (action) => {
        dispatch(action(id));
    };

    return (
        <div className={styles.container}>
            <div
                className={`${styles.container__checkboxWrapper} ${
                    isMainPageOnSite
                        ? styles.container__checkboxWrapper__visible
                        : styles.container__checkboxWrapper__hidden
                }`}
            >
                <MetSquareIconCheckbox
                    hoverColor={"#DBDBDB"}
                    isChecked={isMainPageOnSite}
                    onChange={(event) => {
                        event.stopPropagation();
                        onChangeToggleHandler(toggleIsMainPageOnSite);
                    }}
                />
            </div>

            <div
                className={styles.container__clickable}
                onClick={goToEditProgect}
            >
                <div className={styles.container__clickable__imgWrapper}>
                    <img src={imgUrl} alt="avatar" />
                </div>

                <div className={styles.container__clickable__nameWrapper}>
                    <span className="subtitle2">{shortName}</span>
                </div>
                <div className={styles.container__clickable__tagListWrapper}>
                    <TagList tagKeyArr={tagList} />
                </div>
            </div>

            <div className={styles.container__toggleWrapper}>
                <div>
                    <MetToggle
                        isChecked={isVisibleOnSite}
                        onChange={(event) => {
                            event.stopPropagation();
                            onChangeToggleHandler(toggleIsVisibleOnSite);
                        }}
                    />
                </div>
            </div>
            <div className={styles.container__optionWrapper}>
                <MetSquareIconBtn
                    icon={linkIcon}
                    onClick={(_) => {}}
                    hoverColor={"#DBDBDB"}
                />
                <MetSquareIconBtn hoverColor={"#DBDBDB"} />
            </div>
        </div>
    );
};
