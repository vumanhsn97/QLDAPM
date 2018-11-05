import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import NewProject from "./pages/newproject/NewProject";
import IssueDetails from "./pages/issuedetails/IssueDetails";
import ListIssue from "./pages/listissue/ListIssue"
import NewIssue from "./pages/newissue/NewIssue"

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/new-project" exact component={NewProject} />
    <Route path="/issue-details" exact component={IssueDetails} />
    <Route path="/list-issue" exact component={ListIssue} />
    <Route path="/new-issue" exact component={NewIssue} />
    { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
  </Switch>;
