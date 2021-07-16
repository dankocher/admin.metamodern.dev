import styles from "./index.module.scss";

import React, { FC, ReactElement, useState } from "react";
import { useDispatch } from "react-redux";

import {
    editAppStoreLink,
    editPlayMarketLink,
    editFigmaLink,
    editSiteLink,
} from "../../../redux/actions/ProjectsActions";

import { LinkInput } from "../LinkInput";

import { playMarketIcon } from "../../../assets/icons/playMarket-icon";
import { appsAppleIcon } from "../../../assets/icons/appsApple-icon";
import { figmaIcon } from "../../../assets/icons/figma-icon";
import { siteIcon } from "../../../assets/icons/site-icon";

export const LinkList: FC<{ id: string }> = ({ id }): ReactElement => {
    const dispatch = useDispatch();

    const [localAppStore, setLocalAppStore] = useState("");
    const [localPlayMarket, setLocalPlayMarket] = useState("");
    const [localFigma, setLocalFigma] = useState("");
    const [localSite, setLocalSite] = useState("");

    const onChangeLinkHandler = (event, setter) => {
        const value = event.target.value;
        setter(value);
    };

    const onBlureLinkHandler = (action, value) => {
        dispatch(action(id, value));
    };

    return (
        <div className={styles.container}>
            <span className=" adminkaH6">{"Ссылки"}</span>

            <div className={styles.container__linkList}>
                <LinkInput
                    icon={appsAppleIcon}
                    fontClass="body1"
                    placeholder="apps.apple.com"
                    value={localAppStore}
                    onChange={(event) =>
                        onChangeLinkHandler(event, setLocalAppStore)
                    }
                    onBlur={(_) => {
                        onBlureLinkHandler(editAppStoreLink, localAppStore);
                    }}
                />

                <LinkInput
                    icon={playMarketIcon}
                    fontClass="body1"
                    placeholder="play.market.com"
                    value={localPlayMarket}
                    onChange={(event) =>
                        onChangeLinkHandler(event, setLocalPlayMarket)
                    }
                    onBlur={(_) => {
                        onBlureLinkHandler(editPlayMarketLink, localPlayMarket);
                    }}
                />

                <LinkInput
                    icon={figmaIcon}
                    fontClass="body1"
                    placeholder="figma.com"
                    value={localFigma}
                    onChange={(event) =>
                        onChangeLinkHandler(event, setLocalFigma)
                    }
                    onBlur={(_) => {
                        onBlureLinkHandler(editFigmaLink, localFigma);
                    }}
                />

                <LinkInput
                    icon={siteIcon}
                    fontClass="body1"
                    placeholder="site.com"
                    isSite={true}
                    value={localSite}
                    onChange={(event) =>
                        onChangeLinkHandler(event, setLocalSite)
                    }
                    onBlur={(_) => {
                        onBlureLinkHandler(editSiteLink, localSite);
                    }}
                />
            </div>
        </div>
    );
};
