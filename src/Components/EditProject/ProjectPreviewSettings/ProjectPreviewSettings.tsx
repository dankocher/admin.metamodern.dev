import styles from "./index.module.scss";

import React, { FC, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    MetTextField,
    MetToggle,
    MetSquareIconBtn,
    MetSquareIconCheckbox,
    MetTextArea,
} from "@metamodern.dev/metamodern-ui/";

import translation from "../../../language/ru.json";

import {
    editFullName,
    editShortName,
    editShortDescriprion,
    toggleIsVisibleOnSite,
    toggleIsMainPageOnSite,
} from "../../../redux/actions/ProjectsActions";

import {
    selectIsVisibleOnSite,
    selectIsMainPageOnSite,
} from "../../../redux/reducers/ProjectsReducer";

import { linkIcon } from "../../../assets/icons/link-icon";
import { TagbleType } from "../../TagLists/TagbleType";
import { TagButtonList } from "../../TagLists/TagButtonList";

export const ProjectPreviewSettings: FC<{ id: string }> = ({
    id,
}): ReactElement => {
    const inputFont = "body2";
    const dispatch = useDispatch();

    const [localFullName, setLocalFullName] = useState("");
    const [localShortName, setLocalShortName] = useState("");
    const [localShortDescription, setLocalShortDescription] = useState("");

    const isVisibleOnSite = useSelector((state) =>
        selectIsVisibleOnSite(state, id)
    );

    const isMainPageOnSite = useSelector((state) =>
        selectIsMainPageOnSite(state, id)
    );

    const onChangeTextHandler = (event, setter) => {
        const value = event.target.value;
        setter(value);
    };

    const onBlureTextHandler = (action, value) => {
        dispatch(action(id, value));
    };

    const onBlureFullNameHandler = (_) => {
        if (id === "newProject") dispatch(editFullName(id, localFullName));
        if (localFullName === "") {
            setLocalFullName("oldName");
        } else {
            dispatch(editFullName(id, localFullName));
        }
    };

    const onChangeToggleHandler = (action) => {
        dispatch(action(id));
    };

    const copyUrlToClipboard = () => {
        const location = window.location.href;
        navigator.clipboard.writeText(location);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.container__nameWrapper}>
                    <MetTextField
                        inputFontClass={inputFont}
                        placeholder={translation.title}
                        value={localFullName}
                        onChange={(event) =>
                            onChangeTextHandler(event, setLocalFullName)
                        }
                        onBlur={onBlureFullNameHandler}
                    />
                    <div className={styles.container__nameWrapper__options}>
                        <div className={styles.toggleWrapper}>
                            <MetToggle
                                isChecked={isVisibleOnSite}
                                onChange={(_) =>
                                    onChangeToggleHandler(toggleIsVisibleOnSite)
                                }
                            />
                        </div>
                        <MetSquareIconCheckbox
                            isChecked={isMainPageOnSite}
                            onChange={(_) =>
                                onChangeToggleHandler(toggleIsMainPageOnSite)
                            }
                        />
                        <MetSquareIconBtn
                            icon={linkIcon}
                            onClick={(_) => copyUrlToClipboard()}
                        />
                        <MetSquareIconBtn />
                    </div>
                </div>

                <MetTextField
                    inputFontClass={inputFont}
                    placeholder={translation.shortTitle}
                    value={localShortName}
                    onChange={(event) =>
                        onChangeTextHandler(event, setLocalShortName)
                    }
                    onBlur={(_) =>
                        onBlureTextHandler(editShortName, localShortName)
                    }
                />

                <MetTextArea
                    inputFontClass={inputFont}
                    placeholder={translation.shortDescription}
                    value={localShortDescription}
                    onChange={(event) =>
                        onChangeTextHandler(event, setLocalShortDescription)
                    }
                    onBlur={(_) =>
                        onBlureTextHandler(
                            editShortDescriprion,
                            localShortDescription
                        )
                    }
                    rowsMins={3}
                    rowsMax={11}
                />
            </div>

            <div className={styles.tagLists}>
                <TagButtonList
                    projectId={id}
                    header={translation.tags}
                    tagListType={TagbleType.PROJECT}
                />
            </div>
        </>
    );
};
