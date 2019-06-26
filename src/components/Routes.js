import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Rooms from "./Rooms/Rooms";
import SingleRoom from "./SingleRoom/SingleRoom";
import PageNotFound from "./PageNotFound";

export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:roomid" component={SingleRoom} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
