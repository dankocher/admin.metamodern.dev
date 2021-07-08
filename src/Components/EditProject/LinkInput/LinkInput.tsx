import styles from "./index.module.scss";

import React, { FC, ReactElement, useState, useRef } from "react";

import { LinkInputProps } from "./LinkInputProps";

const classNames = require("classnames");

export const LinkInput: FC<LinkInputProps> = ({
    value = "",
    onChange,
    onBlur,
    icon,
    fontClass,
    placeholder,
}): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);

    const onBlurHandler = (event) => {
        setIsFocused(false);

        if (onBlur == null) return;
        onBlur(event);
    };

    const focusHandel = () => {
        setIsFocused(true);

        if (inputRef.current == null) return;
        inputRef.current.select();
    };

    const stateStyle = classNames(styles.container, {
        [styles.focused]: isFocused,
        [styles.iconColorOn]: value !== "",
    });

    return (
        <div
            className={stateStyle}
            onBlur={onBlurHandler}
            onClick={focusHandel}
        >
            <div className={styles.container__iconWrapper}>{icon}</div>
            <input
                ref={inputRef}
                className={`${fontClass}`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};
