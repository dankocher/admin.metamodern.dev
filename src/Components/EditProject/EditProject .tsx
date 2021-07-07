import styles from "./index.module.scss";

import React from "react";

import { ProjectPreviewSettings } from "./ProjectPreviewSettings";
import { ProjectContent } from "./ProjectContent";

export const EditProject = () => {
    const inputFont = "body2";

    return (
        <div className={styles.container}>
            <span className="subtitle3">Date: 15.12.2020</span>

            <ProjectPreviewSettings />

            <hr />

            <ProjectContent />
        </div>
    );
};
