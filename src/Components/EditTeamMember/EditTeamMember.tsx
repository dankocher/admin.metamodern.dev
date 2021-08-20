import styles from "./index.module.scss";

import React, { FC, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  MetTextField,
  MetToggle,
  MetSquareIconBtn,
  MetTextArea,
  MetSelect,
} from "@metamodern.dev/metamodern-ui/";

import translation from "../../language/ru.json";

import {
  editName,
  editAbout,
  onToggleIsVisibleOnSite,
  editPosition,
} from "../../redux/actions/teamActions";

import {
  getName,
  getAbout,
  getIsVisibleOnSite,
  getPosition,
} from "../../redux/reducers/teamReducer";

const items = [
  { id: "01", value: "Itachi" },
  { id: "02", value: "RiBa" },
];

export const EditTeamMember = (): ReactElement => {
  const inputFont = "body2";
  const { id } = useParams();
  const dispatch = useDispatch();

  const [localName, setLocalName] = useState<string>("");
  const [localAbout, setLocalAbout] = useState<string>("");

  const name = useSelector((state) => getName(state, id));
  const about = useSelector((state) => getAbout(state, id));
  const isVisibleOnSite = useSelector((state) => getIsVisibleOnSite(state, id));
  const position = useSelector((state) => getPosition(state, id));

  useEffect(() => {
    setLocalName(name);
    setLocalAbout(about);
  }, []);

  const onChangeTextHandler = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const onBlureHandler = (action, value) => {
    dispatch(action(id, value));
  };

  const onToggleHandler = (action) => {
    dispatch(action(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__name}>
        <MetTextField
          inputFontClass={inputFont}
          placeholder={translation.name}
          value={localName}
          onChange={(event) => onChangeTextHandler(event, setLocalName)}
          onBlur={(_) => onBlureHandler(editName, localName)}
        />

        <div className={styles.container__name__options}>
          <div className={styles.toggleWrapper}>
            <MetToggle
              isChecked={isVisibleOnSite}
              onChange={(_) => onToggleHandler(onToggleIsVisibleOnSite)}
            />
          </div>
          <MetSquareIconBtn />
        </div>
      </div>
      <MetTextArea
        inputFontClass={inputFont}
        placeholder={translation.aboutYou}
        value={localAbout}
        onChange={(event) => onChangeTextHandler(event, setLocalAbout)}
        onBlur={(_) => onBlureHandler(editAbout, localAbout)}
        rowsMins={3}
        rowsMax={11}
      />
      <div className={styles.selectWrapper}>
        <MetSelect
          placeholder={translation.choosePosition}
          items={items}
          isHaveLabel={false}
          defaultSelection={position}
          onChange={(selection) => onBlureHandler(editPosition, selection)}
        />
      </div>
    </div>
  );
};
