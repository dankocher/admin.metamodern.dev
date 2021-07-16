import styles from "./index.module.scss";

import React, { FC, ReactElement, useState, useEffect } from "react";

// import { useDispatch } from "react-redux";

import {
    MetTextField,
    MetTextArea,
    MetSquareIconBtn,
} from "@metamodern.dev/metamodern-ui/";

export const ContentBlock: FC<{
    onBlurHeading?: (heading: string, description: string) => void;
    onBlurDescription?: (heading: string, description: string) => void;
    deleteContentBlock?: () => void;
    defaultHeading?: string;
    defaultDescription?: string;
    isNewBlock?: boolean;
    innerRef?: any;
}> = ({
    onBlurHeading,
    onBlurDescription,
    defaultHeading,
    defaultDescription,
    isNewBlock,
    innerRef,
    deleteContentBlock,
}): ReactElement => {
    const inputFont = "body2";
    // const dispatch = useDispatch();

    const [localHeading, setLocalHeading] = useState("");
    const [localDescription, setLocalDescription] = useState("");

    useEffect(() => {
        if (defaultHeading == null) return;

        setLocalHeading(defaultHeading);
    }, [defaultHeading]);

    useEffect(() => {
        if (defaultDescription == null) return;

        setLocalDescription(defaultDescription);
    }, [defaultDescription]);

    const onChangeTextHandler = (event, setter) => {
        const value = event.target.value;
        setter(value);
    };

    const onBlureHeadingHandler = (_) => {
        if (onBlurHeading == null) return;
        onBlurHeading(localHeading, localDescription);
    };

    const onBlureDescriptionHandler = (_) => {
        if (onBlurDescription == null) return;
        onBlurDescription(localHeading, localDescription);
    };

    const deleteContentBlockHandler = (event) => {
        if (deleteContentBlock == null) return;
        deleteContentBlock();
    };

    return (
        <div className={styles.container}>
            <MetTextField
                inputFontClass={inputFont}
                placeholder={"Заголовок"}
                value={localHeading}
                onChange={(event) =>
                    onChangeTextHandler(event, setLocalHeading)
                }
                onBlur={onBlureHeadingHandler}
                innerRef={innerRef}
            />

            <MetTextArea
                inputFontClass={inputFont}
                defaultValue={defaultDescription}
                value={localDescription}
                onChange={(event) =>
                    onChangeTextHandler(event, setLocalDescription)
                }
                onBlur={onBlureDescriptionHandler}
                placeholder={"Описание"}
                rowsMins={3}
                rowsMax={11}
            />
            {isNewBlock ? null : (
                <div className={styles.container__btnWrapper}>
                    <MetSquareIconBtn onClick={deleteContentBlockHandler} />
                </div>
            )}
        </div>
    );
};
