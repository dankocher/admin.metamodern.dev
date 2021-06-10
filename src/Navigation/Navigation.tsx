import React, { FC, ReactElement } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Portfolio } from "../Components/Portfolio";
import { UsersSettings } from "../Components/UsersSettings";
import { GeneralSettings } from "../Components/GeneralSettings";

import { routConstants } from "./index";

export const Navigation: FC<any> = (): ReactElement => {
    return (
        <Switch>
            <Route exact path={routConstants.HOME} component={Portfolio} />
            <Route
                path={routConstants.USERS_SETTINGS}
                component={UsersSettings}
            />
            <Route
                path={routConstants.GENERAL_SETTINGS}
                component={GeneralSettings}
            />
        </Switch>
    );
};
