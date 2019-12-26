import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
//import axios from "axios";

export default class BarChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {}
    };
  }

  componentDidMount() {
    let playername = ["Neymar", "Messi", "Ronaldo", "Kane", "Ben Yedder"];
    let playerscore = [6, 6, 12, 7, 8];

    this.setState({
      Data: {
        labels: playername,
        datasets: [
          {
            label: "Champions League 2017/2018 Top Scorer",
            data: playerscore,
            backgroundColor: [
              "rgba(255,105,145,0.6)",
              "rgba(155,100,210,0.6)",
              "rgba(90,178,255,0.6)",
              "rgba(240,134,67,0.6)",
              "rgba(120,120,120,0.6)",
              "rgba(250,55,197,0.6)"
            ]
          }
        ]
      }
    });
  }
  render() {
    return (
      <div>
        <Bar data={this.state.Data} options={{ maintainAspectRatio: false }} />
      </div>
    );
  }
}
