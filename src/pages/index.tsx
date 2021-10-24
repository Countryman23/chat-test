import React from "react";
import TemplatesLogin from "../components/templates/blockLogin/index";
import TemplatesChat from "../components/templates/blockChat/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Index() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TemplatesLogin}></Route>
        <Route path="/Chat" component={TemplatesChat}></Route>
      </Switch>
    </Router>
  );
}

export default Index;
