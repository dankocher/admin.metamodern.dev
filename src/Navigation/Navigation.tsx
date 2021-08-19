import React, { useEffect } from "react";

import { Redirect, Switch, Route } from "react-router-dom";

import { Portfolio } from "../Components/Portfolio";
import { TeamSettings } from "../Components/TeamSettings";
import { GeneralSettings } from "../Components/GeneralSettings";
import { EditProject } from "../Components/EditProject";
import { EditTeamMember } from "../Components/EditTeamMember";
import { EditAccessRights } from "../Components/EditAccessRights";

import { routConstants } from "./index";

export const Navigation = () => {
  // useEffect(() => {
  //     console.log("Navigation");
  // }, []);

  return (
    <Switch>
      <Route exact path={routConstants.HOME} component={Portfolio} />
      <Route
        path={routConstants.GENERAL_SETTINGS}
        component={GeneralSettings}
      />
      <Route
        exact
        path={routConstants.TEAM_SETTINGS}
        component={TeamSettings}
      />

      <Route path={routConstants.EDIT_PROGECT} component={EditProject} />
      <Route path={routConstants.EDIT_TEAM_MEMBER} component={EditTeamMember} />
      <Route
        path={routConstants.EDIT_ACCESS_RIGHTS}
        component={EditAccessRights}
      />
      <Redirect from="*" to={routConstants.HOME} />
    </Switch>
  );
};
