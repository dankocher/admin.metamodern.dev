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

import { TagListProps } from "../TagListProps";

import { TagbleType } from "../TagbleType";

import { selectKeyArr, selectTagList } from "../../../redux/reducers/tagsState";
import { addTag } from "../../../redux/actions/tagsActions";

import { TagInput } from "../TagInput";
import { AddTagBtn } from "../AddTagBtn";

export const TagInputList: FC<TagListProps> = ({
    tagListType,
    header,
}): ReactElement => {
    const dispatch = useDispatch();
    const itemsRef = useRef<HTMLElement>();

    const [isNewTagVisible, setIsNewTagVisible] = useState(false);

    const tagList = useSelector(selectTagList || {});

    const filtredKeyList = useSelector(
        (state) => selectKeyArr(state, tagListType) || []
    );

    useLayoutEffect(() => {
        setIsNewTagVisible(false);
    }, [filtredKeyList.length]);

    useEffect(() => {
        if (!isNewTagVisible) return;
        itemsRef.current?.focus();
    }, [isNewTagVisible]);

    const addTagHandler = () => {
        setIsNewTagVisible(true);
    };

    const onBlurNewTag = (value, isChecked) => {
        if (value === "") {
            setIsNewTagVisible(false);
        } else {
            dispatch(addTag(tagListType, value, isChecked));
        }
    };

    return (
        <div className={styles.container}>
            <span className={`${styles.container__header} adminkaH6`}>
                {header}
            </span>

            <div className={styles.container__tagList}>
                {filtredKeyList?.map((id: string) => {
                    const tag = tagList[id];

                    return (
                        <TagInput
                            key={id}
                            id={id}
                            defaultValue={tag.value}
                            isChecked={tag.isChecked}
                            isHasCheckbox={tagListType === TagbleType.PROJECT}
                        />
                    );
                })}

                {isNewTagVisible ? (
                    <TagInput
                        onBlur={onBlurNewTag}
                        defaultValue={""}
                        innerRef={itemsRef}
                        isChecked={false}
                        isHasCheckbox={false}
                    />
                ) : null}

                <AddTagBtn onClick={addTagHandler} label="+ tag" />
            </div>
        </div>
    );
};
