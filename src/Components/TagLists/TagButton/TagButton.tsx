import React, { FC, ReactElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MetTagButton } from "@metamodern.dev/metamodern-ui/";

import { selectChoosedTagList } from "../../../redux/reducers/projectsReducer";

import {
    chooseTagBtn,
    unchooseTagBtn,
} from "../../../redux/actions/ProjectsActions";

import { TagButtonProps } from "./TagButtonProps";

export const TagButton: FC<TagButtonProps> = ({
    projectId,
    tagId,
    index,
    isChoosed,
    value,
    isHasCheckbox,
}): ReactElement => {
    const dispatch = useDispatch();

    const choosedTagList = useSelector(
        (state): Array<string> => {
            if (!projectId) return [];
            return selectChoosedTagList(state, projectId);
        }
    );

    const getIsChoosedTagIndex = (id): number => choosedTagList.indexOf(id);

    const onToggleHandler = () => {
        if (!projectId || !tagId) return;
        if (isChoosed) {
            dispatch(unchooseTagBtn(projectId, getIsChoosedTagIndex(tagId)));
        } else {
            dispatch(chooseTagBtn(projectId, tagId));
        }
    };

    return (
        <MetTagButton
            isHasCheckbox={isHasCheckbox}
            value={value}
            fontClass="body1"
            onToggle={onToggleHandler}
            isChoosed={isChoosed}
        />
    );
};
