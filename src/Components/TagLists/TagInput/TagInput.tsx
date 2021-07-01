import React, { FC, ReactElement, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { MetTagInput } from "@metamodern.dev/metamodern-ui/";

import { TagInputProps } from "./TagInputProps";

import {
    deleteTag,
    changeValue,
    changeToggle,
} from "../../../redux/actions/tagsActions";

// import { TagbleType } from "../TagbleType";

export const TagInput: FC<TagInputProps> = ({
    id,
    defaultValue,
    isChecked,
    innerRef,
    onBlur,
    isHasCheckbox,
}): ReactElement => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [isCheckedLocal, setIsCheckedLocal] = useState<boolean>(false);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
        if (isChecked == null) return;
        setIsCheckedLocal(isChecked);
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
            onBlur(value, isCheckedLocal);
        } else {
            if (value === "") {
                dispatch(deleteTag(id));
            } else {
                dispatch(changeValue(id, value, isCheckedLocal));
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
            isHasCheckbox={isHasCheckbox}
            onToggle={onToggle}
            isChecked={isCheckedLocal}
        />
    );
};
