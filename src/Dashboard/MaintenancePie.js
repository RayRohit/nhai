import React from "react";
import ReactApexChart from "react-apexcharts";
export default class MaintainancePie extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.graphdata);
    this.state = {
      series: [
        props.graphdata.Saftey_Index.blur_lines_points,
        props.graphdata.Saftey_Index.patch_work_points,
        props.graphdata.Saftey_Index.cracks_potholes_points,
        props.graphdata.Saftey_Index.traffic_cones_points,
        props.graphdata.Saftey_Index.road_stains_points,
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
