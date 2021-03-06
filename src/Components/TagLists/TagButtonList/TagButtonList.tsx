import styles from "../index.module.scss";

import React, { FC, ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";

import translation from "../../../language/ru.json";

import { selectKeyArr, selectTagList } from "../../../redux/reducers/tagsState";
import { selectChoosedTagList } from "../../../redux/reducers/projectsReducer";

import { TagListProps } from "../TagListProps";
import { TagButton } from "../TagButton";

export const TagButtonList: FC<TagListProps> = ({
    projectId,
    tagListType,
    header,
}): ReactElement => {
    const tagList = useSelector(selectTagList || {});

    const filtredKeyList = useSelector(
        (state) => selectKeyArr(state, tagListType) || []
    );

    const choosedTagList = useSelector(
        (state): Array<string> => {
            if (!projectId) return [];
            return selectChoosedTagList(state, projectId);
        }
    );

    const getIsChoosedTag = (id) => {
        if (!choosedTagList) return;
        return choosedTagList.includes(id);
    };

    return (
        <div className={styles.container}>
            <span className={`${styles.container__header} adminkaH6`}>
                {header}
            </span>

            <div className={styles.container__tagList}>
                {filtredKeyList.length === 0 ? (
                    <span
                        className={`${styles.container__tagList__message} subtitle3`}
                    >
                        {translation.addTagsInGeneralSettings}
                    </span>
                ) : (
                    filtredKeyList?.map((id: string, index) => {
                        const tag = tagList[id];

                        return (
                            <TagButton
                                key={id}
                                projectId={projectId}
                                index={index}
                                tagId={id}
                                value={tag.value}
                                isChoosed={getIsChoosedTag(id)}
                                isHasCheckbox={tag.isChecked === true}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
};
