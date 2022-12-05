import React from "react";
import ReactApexChart from "react-apexcharts";
export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Service Road",
          data: [150, 150, 150, 150, 150, 150, 150, 150, 150],
        },
        {
          name: "Carriageway Width",
          data: [148, 91, 69, 62, 49, 51, 35, 41, 10],
        },
      ],
      options: {
        chart: {
          // height: 350,
          type: "line",
          // background: "#2F394C",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
          width: 2,
        },
        title: {
          align: "left",
          style: {
            color: "#E4E6E9",
          },
        },
        grid: {
          row: {
            // colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],

          labels: {
            show: true,
            style: {
              colors: [
                "#E4E6E9",
                "#E4E6E9",
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
            show: true,
            style: {
              colors: ["#E4E6E9", "#E4E6E9", "#E4E6E9", "#E4E6E9"],
            },
          },
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          offsetX: 40,
          labels: {
            colors: ["#E4E6E9"],
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
          type="line"
          height={200}
        />
      </div>
    );
  }
}
