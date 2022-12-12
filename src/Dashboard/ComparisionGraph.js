import React from "react";
import ReactApexChart from "react-apexcharts";
export default class ComparisionGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [44, 55, 41, 64, 22],
        },
        {
          data: [53, 32, 33, 52, 13],
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
          categories: ["Blur_Lines","Patch_Works", "Craks_Potholes", "Traffic_Cones", "Road_Markings"],
          labels:{
            style:{
                colors:["#E4E6E9","#E4E6E9","#E4E6E9","#E4E6E9","#E4E6E9","#E4E6E9","#E4E6E9",]
            }
          }
        },
        yaxis: {
            labels:{
              style:{
                  colors:["#E4E6E9","#E4E6E9","#E4E6E9","#E4E6E9","#E4E6E9","#E4E6E9","#E4E6E9",]
              }
            }
          },
        legend:{
            labels:{
                colors:["#E4E6E9"]
            }
        }
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
