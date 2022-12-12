import React from "react";
import ReactApexChart from "react-apexcharts";
export default class CompPie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
            },
          },
        ],
        labels: ["Blured Lanes", "Patch Works","Craks and Patholes","Traffic Cones","Road Stains"],
        legend: {
          position: "top",
          fontSize: "12px",
          labels: {
            colors: ["#e4e6e9"],
            useSeriesColors: false,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={300}
        />
      </div>
    );
  }
}
