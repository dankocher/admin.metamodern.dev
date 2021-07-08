import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";

import { ModalProps } from "./ModalProps";
import { ModalBtn } from "./ModalBtn";

export const Modal: FC<ModalProps> = ({ message, onClick }): ReactElement => {
    return (
        <div className={styles.container}>
            <div className={styles.container__modal}>
                <div className="subtitle1">{message}</div>
                <div className={styles.container__modal__footer}>
                    <ModalBtn state={false} label={"Отмена"} />
                    <ModalBtn state={true} label={"Удалить"} />
                </div>
            </div>
        </div>
    );
};
