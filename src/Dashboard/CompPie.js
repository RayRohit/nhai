import React from "react";
import ReactApexChart from "react-apexcharts";
export default class CompPie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: props.previous
        ? [
            props.graphdata?.Left.Blur_Lines,
            props.graphdata?.Left.Patch_Work,
            props.graphdata?.Left.Cracks_and_Potholes,
            props.graphdata?.Left.Traffic_Cones,
            props.graphdata?.Left.Road_Markings,
          ]
        : [
          props.graphdata?.Right.Blur_Lines,
          props.graphdata?.Right.Patch_Work,
          props.graphdata?.Right.Cracks_and_Potholes,
          props.graphdata?.Right.Traffic_Cones,
          props.graphdata?.Right.Road_Markings,
        ],
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
        labels: [
          "Blured Lanes",
          "Patch Works",
          "Craks and Patholes",
          "Traffic Cones",
          "Road Stains",
        ],
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
