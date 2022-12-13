import React from "react";
import ReactApexChart from "react-apexcharts";
export default class MaintainanceGuage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [78],
      options: {
        chart: {
          type: "radialBar",
          // offsetY: 0,
          // offsetX: 50,
          // sparkline: {
          //     enabled: true
          // }
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              size: "70%",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24,
              },
            },
            track: {
              background: "#ffdde1",
              strokeWidth: "100%",
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },
            dataLabels: {
              name: {
                offsetY: -10,
                show: true,
                color: "#E4E6E9",
                fontSize: "17px",
              },
              value: {
                offsetY: 10,
                fontSize: "22px",
                color: "#E4E6E9",
              },
            },
          },
        },
        grid: {
          padding: {
            top: 0,
          },
        },
        fill: {
          // type: "gradient",
          gradient: {
            // shade: "dark",
            type: "horizontal",
            // shadeIntensity: 0.5,
            gradientToColors: ["#DE9EA0"],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        fill: {
          colors: ["#F15F79"],
          type: "solid",
        },
        stroke: {
          lineCap: "round",
          colors: "#ee9ca7",
        },
        labels: ["RQI"],
      },
    };
  }

  render() {
    return (
      <div id="card">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={300}
          />
        </div>
      </div>
    );
  }
}
