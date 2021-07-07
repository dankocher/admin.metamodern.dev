import React, { FC, ReactElement, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { MetTagButton } from "@metamodern.dev/metamodern-ui/";

import { TagButtonProps } from "./TagButtonProps";

import {
    deleteTag,
    changeValue,
    changeToggle,
} from "../../../redux/actions/tagsActions";

export const TagButton: FC<TagButtonProps> = ({
    id,

    value,

    onBlur,
    isHasCheckbox,
}): ReactElement => {
    const dispatch = useDispatch();

    return (
        <MetTagButton
            isHasCheckbox={isHasCheckbox}
            value={value}
            fontClass="body1"
        />
    );
};
