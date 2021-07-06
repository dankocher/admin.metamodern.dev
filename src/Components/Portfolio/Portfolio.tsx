import styles from "./index.module.scss";

import React from "react";

import { useHistory } from "react-router-dom";
import { MetRectangleIconBtn } from "@metamodern.dev/metamodern-ui/";

import { getEditProgectUrl } from "../../Navigation";

export const Portfolio = () => {
    const history = useHistory();

    const goToEditProgect = (_) => {
        history.push(getEditProgectUrl(""));
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
