import React, { FC, ReactElement, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { TagInputProps } from "./TagInputProps";

import { MetTagInput } from "@metamodern.dev/metamodern-ui/";

import { deleteTag, changeValue } from "../../../redux/actions/tagsActions";

export const TagInput: FC<TagInputProps> = ({
    id,
    defaultValue,
    isChecked,
    tagType,
}): ReactElement => {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(defaultValue);
    }, []);

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const deleteTagHandler = () => {
        dispatch(deleteTag(id));
    };

    const onBlur = (event) => {
        const value = event.target.value;
        console.log("onBlure");

        console.log(value);
        dispatch(changeValue(id, value));
    };

    return (
        <MetTagInput
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            fontClass="body1"
            onClick={deleteTagHandler}
        />
    );
};
