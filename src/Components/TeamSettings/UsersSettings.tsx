import styles from "./index.module.scss";

import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import { MetRectangleIconBtn } from "@metamodern.dev/metamodern-ui/";

import {
  getEditTeamMemberUrl,
  getEditAccessRightsUrl,
} from "../../Navigation/constants";

import { addTeamMember } from "../../redux/actions/teamActions";

export const TeamSettings = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const goToEditer = (_) => {
    const id = uuidv4();

    // dispatch(addTeamMember(id));
    // history.push(getEditTeamMemberUrl(id));
    history.push(getEditAccessRightsUrl(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__addBtn}>
        <MetRectangleIconBtn onClick={goToEditer} />
      </div>
      TeamSettings
    </div>
  );
};
