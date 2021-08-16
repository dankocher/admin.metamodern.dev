import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import {
    selectCaseKeyArr,
    selectCaseList,
} from "../../../redux/reducers/ProjectsReducer";

import { CaseListProps } from "./CaseListProps";
import { Case } from "../Case";

export const CaseList: FC<CaseListProps> = (): ReactElement => {
    const caseKeyArr = useSelector(selectCaseKeyArr || []);
    const caseList = useSelector(selectCaseList || {});

    return (
        <>
            {caseKeyArr.map((id) => {
                const item = caseList[id];
                return (
                    <Case
                        key={id}
                        id={id}
                        shortName={item.shortName}
                        isVisibleOnSite={item.isVisibleOnSite}
                        isMainPageOnSite={item.isMainPageOnSite}
                        tagList={item.tagList}
                    />
                );
            })}
        </>
    );
};
