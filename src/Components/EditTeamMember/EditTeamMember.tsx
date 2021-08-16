import styles from "./index.module.scss";

import React, { FC, ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  MetTextField,
  MetToggle,
  MetSquareIconBtn,
  MetTextArea,
  MetSelect,
} from "@metamodern.dev/metamodern-ui/";

import translation from "../../language/ru.json";

import { editName } from "../../redux/actions/teamActions";

const items = [
  { id: "01", value: "Itachi" },
  { id: "02", value: "RiBa" },
];

export const EditTeamMember: FC<any> = (): ReactElement => {
  const inputFont = "body2";
  const { id } = useParams();
  const dispatch = useDispatch();

  const [localName, setLocalName] = useState("");

  const onChangeTextHandler = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const onBlureTextHandler = (action, value) => {
    dispatch(action(id, value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__nameWrapper}>
        <MetTextField
          inputFontClass={inputFont}
          placeholder={translation.name}
          value={localName}
          onChange={(event) => onChangeTextHandler(event, setLocalName)}
          onBlur={(_) => onBlureTextHandler(editName, localName)}
        />

        <div className={styles.container__nameWrapper__optionsWrapper}>
          <div className={styles.toggleWrapper}>
            <MetToggle
            // isChecked={isVisibleOnSite}
            // onChange={(_) =>
            //     onChangeToggleHandler(toggleIsVisibleOnSite)
            // }
            />
          </div>
          <MetSquareIconBtn />
        </div>
      </div>
      <MetTextArea
        inputFontClass={inputFont}
        placeholder={translation.aboutYou}
        rowsMins={3}
        rowsMax={11}
      />
      <div className={styles.selectWrapper}>
        <MetSelect items={items} isHaveLabel={false} />
      </div>
    </div>
  );
};
