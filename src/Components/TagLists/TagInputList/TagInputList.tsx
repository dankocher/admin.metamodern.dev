import styles from "./index.module.scss";

import React, {
    FC,
    ReactElement,
    useRef,
    useEffect,
    useState,
    useLayoutEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";

import { TagListProps } from "./TagListProps";

import { RootStateProps } from "../../../redux/redusers/rootReduser";

import { getTagArr } from "../../../redux/redusers/tagsState";
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

    const tagList = useSelector((state: RootStateProps) => state.tagsState);

    const filtredKeyList = useSelector((state) =>
        getTagArr(state, tagListType)
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
            <span className="adminkaH6">{header}</span>

            <div className={styles.container__tagList}>
                {filtredKeyList?.map((id: any, index) => {
                    const tag = tagList[id];

                    return (
                        <TagInput
                            key={id}
                            id={id}
                            defaultValue={tag.value}
                            isChecked={tag.isChecked}
                            tagType={tagListType}
                        />
                    );
                })}

                {isNewTagVisible ? (
                    <TagInput
                        onBlur={onBlurNewTag}
                        defaultValue={""}
                        innerRef={itemsRef}
                        isChecked={false}
                        tagType={tagListType}
                    />
                ) : null}

                <AddTagBtn onClick={addTagHandler} />
            </div>
        </div>
    );
};
