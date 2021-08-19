import styles from "./index.module.scss";

import React, { FC, ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  MetTextField,
  MetToggle,
  MetSquareIconBtn,
  MetSelect,
} from "@metamodern.dev/metamodern-ui/";

import translation from "../../language/ru.json";

import {
  editName,
  editMail,
  onToggleIsUserDisable,
  editRole,
} from "../../redux/actions/usersActions";

import {
  getName,
  getMail,
  getIsDisable,
  getRole,
} from "../../redux/reducers/usersReducer";

const items = [
  { id: "01", value: "Itachi" },
  { id: "02", value: "RiBa" },
];

export const EditAccessRights = (): ReactElement => {
  const inputFont = "body2";
  const { id } = useParams();
  const dispatch = useDispatch();

  const [localName, setLocalName] = useState<string>("");
  const [localMail, setLocalMail] = useState<string>("");

  const name = useSelector((state) => getName(state, id));
  const mail = useSelector((state) => getMail(state, id));
  const isDisable = useSelector((state) => getIsDisable(state, id));
  const role = useSelector((state) => getRole(state, id));

  useEffect(() => {
    setLocalName(name);
    setLocalMail(mail);
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
              isChecked={isDisable}
              onChange={(_) => onToggleHandler(onToggleIsUserDisable)}
            />
          </div>
          <MetSquareIconBtn />
        </div>
      </div>
      <div className={styles.container__info}>
        <MetTextField
          inputFontClass={inputFont}
          placeholder={translation.mail}
          value={localMail}
          onChange={(event) => onChangeTextHandler(event, setLocalMail)}
          onBlur={(_) => onBlureHandler(editMail, localMail)}
        />

        <MetSelect
          placeholder={translation.chooseRole}
          items={items}
          isHaveLabel={false}
          defaultSelection={role}
          onChange={(selection) => onBlureHandler(editRole, selection)}
        />
      </div>
    </div>
  );
};
