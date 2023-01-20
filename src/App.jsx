import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FlowChartType1 from "./components/Flow-Chart/Type1/index";
import ExistingFlowChart from "./components/Flow-Chart/Existing-Node/type-1";
import CreateNewNode from "./components/New-Node/create-node";
import NewNode from "./components/New-Node/index";
import Layout from "../../src/Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Layout}></Route>
        <Route exact path="/flow-chart" component={FlowChartType1}></Route>
        <Route exact path="/edit" component={ExistingFlowChart}></Route>
        <Route exact path="/new-node" component={NewNode}></Route>
        <Route exact path="/create-node" component={CreateNewNode}></Route>
      </Switch>
    </Router>
  );
}

export default App;
