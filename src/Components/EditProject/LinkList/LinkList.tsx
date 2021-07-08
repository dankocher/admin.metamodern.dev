import styles from "./index.module.scss";

import React, { FC, ReactElement } from "react";

import { LinkInput } from "../LinkInput";

import { playMarketIcon } from "../../../assets/icons/playMarket-icon";
import { appsAppleIcon } from "../../../assets/icons/appsApple-icon";
import { figmaIcon } from "../../../assets/icons/figma-icon";
import { siteIcon } from "../../../assets/icons/site-icon";

export const LinkList = (): ReactElement => {
    return (
        <div className={styles.container}>
            <span className=" adminkaH6">{"Ссылки"}</span>

            <div className={styles.container__linkList}>
                <LinkInput
                    icon={appsAppleIcon}
                    fontClass="body1"
                    placeholder="apps.apple.com"
                />

                <LinkInput
                    icon={playMarketIcon}
                    fontClass="body1"
                    placeholder="play.market.com"
                />

                <LinkInput
                    icon={figmaIcon}
                    fontClass="body1"
                    placeholder="figma.com"
                />

                <LinkInput
                    icon={siteIcon}
                    fontClass="body1"
                    placeholder="site.com"
                    isSite={true}
                />
            </div>
        </div>
    );
};
