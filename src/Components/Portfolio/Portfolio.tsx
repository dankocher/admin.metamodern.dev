import styles from "./index.module.scss";

import React from "react";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { MetRectangleIconBtn } from "@metamodern.dev/metamodern-ui/";

import translation from "../../language/ru.json";

import { uncheckedStarIcon } from "../../assets/icons/unchecked-star-icon";

import { getEditProgectUrl } from "../../Navigation";
import { addProject } from "../../redux/actions/ProjectsActions";
import { TableTitle } from "./TableTitle";
import { CaseList } from "./CaseList";

export const Portfolio = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const goToEditProgect = (_) => {
        dispatch(addProject());
        history.push(getEditProgectUrl("newProject"));
    };

    return (
        <div className={styles.container}>
            <div className={styles.container__addBtn}>
                <MetRectangleIconBtn onClick={goToEditProgect} />
            </div>
            <div className={styles.container__header}>
                <div className={styles.container__header__icon}>
                    {uncheckedStarIcon}
                </div>
                <TableTitle title={translation.photo} />
                <TableTitle title={translation.title} />
                <TableTitle title={translation.tags} />
                <TableTitle title={translation.onOf} />
            </div>

            <CaseList />
        </div>
    );
};
