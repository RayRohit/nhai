import React from "react";
import ReactApexChart from "react-apexcharts";
export default class ComparisionGraph extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.graphdata);
    this.state = {
      series: [
        {
          name: "Previous",
          data: [
            props.graphdata?.Left.Blur_Lines,
            props.graphdata?.Left.Patch_Work,
            props.graphdata?.Left.Cracks_and_Potholes,
            props.graphdata?.Left.Traffic_Cones,
            props.graphdata?.Left.Road_Markings,
          ],
        },
        {
          name: "Current",
          data: [
            props.graphdata?.Right.Blur_Lines,
            props.graphdata?.Right.Patch_Work,
            props.graphdata?.Right.Cracks_and_Potholes,
            props.graphdata?.Right.Traffic_Cones,
            props.graphdata?.Right.Road_Markings,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 430,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: "top",
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"],
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        xaxis: {
          categories: [
            "Blur_Lines",
            "Patch_Works",
            "Craks_Potholes",
            "Traffic_Cones",
            "Road_Markings",
          ],
          labels: {
            style: {
              colors: [
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
              ],
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: [
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
                "#E4E6E9",
              ],
            },
          },
        },
        legend: {
          labels: {
            colors: ["#E4E6E9"],
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
          type="bar"
          height={430}
        />
      </div>
    );
  }
}
