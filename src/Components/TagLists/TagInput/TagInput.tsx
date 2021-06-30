import React, { FC, ReactElement, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { MetTagInput } from "@metamodern.dev/metamodern-ui/";

import { TagInputProps } from "./TagInputProps";

import {
    addTag,
    deleteTag,
    changeValue,
    changeToggle,
} from "../../../redux/actions/tagsActions";

import { TagbleType } from "../TagbleType";

export const TagInput: FC<TagInputProps> = ({
    id,
    defaultValue,
    isChecked,
    tagType,
    innerRef,
    onBlur,
}): ReactElement => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [isCheckedLockal, setIsCheckedLockal] = useState<boolean>(false);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
        if (isChecked == null) return;
        setIsCheckedLockal(isChecked);
    }, [isChecked]);

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const deleteTagHandler = () => {
        dispatch(deleteTag(id));
    };

    const onBlurHandler = (_) => {
        if (id == null) {
            if (onBlur == null) return;
            onBlur(value, isCheckedLockal);
        } else {
            if (value === "") {
                dispatch(deleteTag(id));
            } else {
                dispatch(changeValue(id, value));
            }
        }
    };

    const onToggle = () => {
        dispatch(changeToggle(id));
    };

    return (
        <MetTagInput
            innerRef={innerRef}
            value={value}
            onChange={onChange}
            onBlur={onBlurHandler}
            fontClass="body1"
            onClick={deleteTagHandler}
            isHasCheckbox={tagType === TagbleType.BRIEF}
            onToggle={onToggle}
            isChecked={isChecked}
        />
    );
};
