import styles from "./index.module.scss";

import React, {
    FC,
    ReactElement,
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
} from "react";
import { useSelector, useDispatch } from "react-redux";

import translation from "../../../language/ru.json";

import { ContentBlock } from "./ContentBlock";
import { AddSectionBtn } from "../AddSectionBtn";

import { selectContentList } from "../../../redux/reducers/ProjectsReducer";
import {
    addContentBlock,
    deleteContentBlock,
    editHeadingContentBlock,
    editDescriptionContentBlock,
} from "../../../redux/actions/ProjectsActions";

import { usePrevious } from "../../../utils/usePrevious";

export const ProjectContent: FC<{ id: string }> = ({ id }): ReactElement => {
    const dispatch = useDispatch();
    const itemsRef = useRef<HTMLElement>();

    const [isNewBlockVisible, setIsNewBlockVisible] = useState(false);

    const contentList = useSelector((state) => selectContentList(state, id));
    const prevContentList = usePrevious(contentList);

    useLayoutEffect(() => {
        if (contentList.length === 0) {
            setIsNewBlockVisible(true);
        } else if (
            prevContentList != null &&
            contentList.length > prevContentList.length
        ) {
            setIsNewBlockVisible(false);
        }
    }, [contentList.length]);

    useEffect(() => {
        if (!isNewBlockVisible || contentList.length === 0) return;
        itemsRef.current?.focus();
    }, [isNewBlockVisible]);

    const addNewContentBlock = () => {
        const lastContentBlock = contentList[contentList.length];

        if (lastContentBlock?.heading === "" || lastContentBlock?.description)
            return;

        setIsNewBlockVisible(true);
    };

    const onBlurHeadingHandler = (index, heading, description) => {
        console.log(id, index, heading, description);
        if (heading === "" && description === "") {
            dispatch(deleteContentBlock(id, index));
        } else {
            dispatch(editHeadingContentBlock(id, index, heading));
        }
    };

    const onBlurDescriptionHandler = (index, heading, description) => {
        if (heading === "" && description === "") {
            dispatch(deleteContentBlock(id, index));
        } else {
            dispatch(editDescriptionContentBlock(id, index, description));
        }
    };

    const onBlurNewBlockHandler = (heading, description) => {
        if (heading === "" && description === "" && contentList.length !== 0) {
            setIsNewBlockVisible(false);
            return;
        }

        dispatch(addContentBlock(id, heading, description));
    };

    const deleteContentBlockHandler = (index) => {
        dispatch(deleteContentBlock(id, index));
    };

    return (
        <div className={styles.container}>
            <span className={`${styles.container__header} adminkaH6`}>
                {translation.content}
            </span>
            <div className={styles.container__contentList}>
                {contentList?.map((item, index) => (
                    <ContentBlock
                        key={item.id}
                        defaultHeading={item.heading}
                        defaultDescription={item.description}
                        onBlurHeading={(heading, description) =>
                            onBlurHeadingHandler(index, heading, description)
                        }
                        onBlurDescription={(heading, description) =>
                            onBlurDescriptionHandler(
                                index,
                                heading,
                                description
                            )
                        }
                        deleteContentBlock={() =>
                            deleteContentBlockHandler(index)
                        }
                    />
                ))}
                {isNewBlockVisible && (
                    <ContentBlock
                        onBlurHeading={onBlurNewBlockHandler}
                        onBlurDescription={onBlurNewBlockHandler}
                        deleteContentBlock={() =>
                            deleteContentBlockHandler(contentList.length - 1)
                        }
                        isNewBlock={true}
                        innerRef={itemsRef}
                    />
                )}
            </div>
            <AddSectionBtn
                label={translation.addBlock}
                onClick={addNewContentBlock}
            />
        </div>
    );
};
