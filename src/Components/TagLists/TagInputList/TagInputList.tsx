import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TagListProps } from "./TagListProps";

import { rootStateProps } from "../../../redux/redusers/rootReduser";

import { addTag } from "../../../redux/actions/tagsActions";

import { TagInput } from "../TagInput";
import { AddTagBtn } from "../AddTagBtn";

export const TagInputList: FC<TagListProps> = ({
    tagListType,
    header,
}): ReactElement => {
    const dispatch = useDispatch();

    const tagList = useSelector((state: rootStateProps) => state.tagsState);

    const addTagHandler = () => {
        dispatch(addTag(tagListType));
    };

    return (
        <div className={styles.container}>
            <span className="adminkaH6">{header}</span>

            <div className={styles.container__tagList}>
                {Object.keys(tagList).map((key) => {
                    const item = tagList[key];
                    if (item.tagType === tagListType)
                        return (
                            <TagInput
                                key={`${item.tagType}-${key}`}
                                id={key}
                                defaultValue={item.value}
                                isChecked={item.isChecked}
                                tagType={item.tagType}
                            />
                        );
                })}

                <AddTagBtn onClick={addTagHandler} />
            </div>
        </div>
    );
};
