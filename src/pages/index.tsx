import React from "react";
import TemplatesLogin from "../components/templates/block login/index";
// import TemplatesChat from "../components/templates/block chat/templatesChat";
// import { Route } from "react-router-dom";

function Index() {
  return (
    <>
      <TemplatesLogin />
      {/* <Route path="/Login" render={() => <TemplatesLogin />} />;
      <Route path="/Chat" render={() => <TemplatesChat />} />; */}
    </>
  );
}

export default Index;
