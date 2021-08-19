import styles from "./index.module.scss";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import { ProjectPreviewSettings } from "./ProjectPreviewSettings";
import { ProjectContent } from "./ProjectContent";

import { LinkList } from "./LinkList";
import { Modal } from "../Modal";
import {
    selectCreationDate,
    selectFullName,
} from "../../redux/reducers/projectsReducer";

const moment = require("moment");

// Введи имя, иначе я  ничего сохранять не буду, введите имя и перейдите к списку проектов.

export const EditProject = () => {
    const { id } = useParams();

    const creationDate = useSelector((state) => selectCreationDate(state, id));
    const fullName = useSelector((state) => selectFullName(state, id));

    const date = moment(creationDate).format("DD.MM.YYYY");

    const beforeunload = (event) => {
        event.preventDefault();

        // if (fullName != null && fullName !== "") return;

        return (event.returnValue = "sdfj");
    };

    useEffect(() => {
        window.addEventListener("beforeunload", beforeunload, {
            capture: true,
        });

        return () =>
            window.removeEventListener("beforeunload", beforeunload, {
                capture: true,
            });
    }, []);

    return (
        <div className={styles.container}>
            <span className="subtitle3">{`Date: ${date ||
                "Wait a second"}`}</span>

            <ProjectPreviewSettings id={id} />

            <LinkList id={id} />

            <hr />

            <ProjectContent id={id} />
        </div>
    );
};
