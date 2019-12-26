import React, { Component } from "react";
import "./styles.css";
import BarChartComponent from "./components/BarChartComponents";
import PieChartComponent from "./components/PieChartComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>BarChart</h1>
        <BarChartComponent />
        <h1>PieChart</h1>
        <PieChartComponent />
      </div>
    );
  }
}

export default App;
