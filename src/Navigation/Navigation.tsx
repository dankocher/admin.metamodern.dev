import React, { useEffect } from "react";

import { Redirect, Switch, Route } from "react-router-dom";

import { Portfolio } from "../Components/Portfolio";
import { UsersSettings } from "../Components/UsersSettings";
import { GeneralSettings } from "../Components/GeneralSettings";
import { EditProject } from "../Components/EditProject";

import { routConstants } from "./index";

export const Navigation = () => {
    // useEffect(() => {
    //     console.log("Navigation");
    // }, []);

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
            <Route path={routConstants.EDIT_PROGECT} component={EditProject} />
            <Redirect from="*" to={routConstants.HOME} />
        </Switch>
    );
};
