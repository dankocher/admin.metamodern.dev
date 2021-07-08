import styles from "./index.module.scss";

import React from "react";

import { ProjectPreviewSettings } from "./ProjectPreviewSettings";
import { ProjectContent } from "./ProjectContent";

import { LinkList } from "./LinkList";
import { Modal } from "../Modal";

export const EditProject = () => {
    return (
        <div className={styles.container}>
            <span className="subtitle3">Date: 15.12.2020</span>

            <ProjectPreviewSettings />

            <LinkList />

            <hr />

            <ProjectContent />
        </div>
    );
};
