import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlowChartType1 from "./components/Flow-Chart/Type1/index";
import ExistingFlowChart from "./components/Flow-Chart/Existing-Node/type-1";
import CreateNewNode from "./components/New-Node/create-node";
import NewNode from "./components/New-Node/index";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={Layout} />
        <Route exact path="/flow-chart" element={FlowChartType1} />
        <Route exact path="/edit" element={ExistingFlowChart} />
        <Route exact path="/new-node" element={NewNode} />
        <Route exact path="/create-node" element={CreateNewNode} />
      </Routes>
    </Router>
  );
}

export default App;
