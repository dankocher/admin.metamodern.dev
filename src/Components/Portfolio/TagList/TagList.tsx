import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import { selectTagList } from "../../../redux/reducers/tagsState";

import { TagListProps } from "./TagListProps";
import { Tag } from "../Tag";

export const TagList: FC<TagListProps> = ({ tagKeyArr = [] }): ReactElement => {
    const tagList = useSelector(selectTagList || {});

    return (
        <div className={styles.container}>
            {tagKeyArr.map((id) => {
                const tag = tagList[id];
                return <Tag key={id} value={tag.value} />;
            })}
        </div>
    );
};
