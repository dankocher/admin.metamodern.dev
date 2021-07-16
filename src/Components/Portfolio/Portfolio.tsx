import styles from "./index.module.scss";

import React from "react";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { MetRectangleIconBtn } from "@metamodern.dev/metamodern-ui/";

import { getEditProgectUrl } from "../../Navigation";
import { addProject } from "../../redux/actions/ProjectsActions";

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
            IA PARFOLIO
        </div>
    );
};
