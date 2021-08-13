import styles from "./index.module.scss";

import React from "react";

import { MetRectangleIconBtn } from "@metamodern.dev/metamodern-ui/";

export const UsersSettings = () => {

  const goToEditProgect = (_) => {
    // dispatch(addProject());
    // history.push(getEditProgectUrl("newProject"));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__addBtn}>
        <MetRectangleIconBtn onClick={goToEditProgect} />
      </div>
      UsersSettings
    </div>
  );
};
