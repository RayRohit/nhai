import React from "react";
import ReactApexChart from "react-apexcharts";
export default class CompareGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Current",

          data: props.graphics_value_current.data,
        },

        {
          name: "Previous",

          data: props.graphics_value_previous.data,
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 430,
        },
        plotOptions: {
          bar: {
            horizontal: true,
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
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
          labels: {
            show: true,
            style: {
              colors: ["#E4E6E9", "#E4E6E9", "#E4E6E9"],
            },
          },
        },
        yaxis: {
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
                "#E4E6E9",
              ],
            },
          },
        },

        legend: {
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
          type="bar"
          height={400}
        />
      </div>
    );
  }
}
