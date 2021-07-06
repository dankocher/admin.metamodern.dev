import styles from "../index.module.scss";

import React, {
    FC,
    ReactElement,
    useRef,
    useEffect,
    useState,
    useLayoutEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootStateProps } from "../../../redux/redusers/rootReduser";
import { getTagArr } from "../../../redux/redusers/tagsState";

import { TagListProps } from "../TagListProps";
import { TagButton } from "../TagButton";

export const TagButtonList: FC<TagListProps> = ({
    tagListType,
    header,
}): ReactElement => {
    const tagList = useSelector((state: RootStateProps) => state.tagsState);

    const filtredKeyList = useSelector((state) =>
        getTagArr(state, tagListType)
    );

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
                        {"Добавте тэги в общих настройках."}
                    </span>
                ) : (
                    filtredKeyList?.map((id: string) => {
                        const tag = tagList[id];

                        return (
                            <TagButton
                                key={id}
                                value={tag.value}
                                isHasCheckbox={tag.isChecked === true}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
};
