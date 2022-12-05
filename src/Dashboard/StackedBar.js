import React from "react";
import ReactApexChart from "react-apexcharts";
export default class StackedBar extends React.Component {
  constructor(props) {
    super(props);
    if (props.status === "HighWay Efficiency") {
      if (props.text === "Drone") {
        this.state = {
          series: [
            {
              name: "Service Road",
              data: [3, props.ServiceRoad?.toFixed(2)],
            },
            {
              name: "Carriageway Width ",
              data: [1, props.CarriageWay?.toFixed(2)],
            },
          ],
          options: {
            colors: ["#FF9800", "#3D9EED"],
            chart: {
              type: "bar",
              height: 150,
              stacked: true,
              // background: "#273143",
            },
            plotOptions: {
              bar: {
                horizontal: true,
                dataLabels: {
                  total: {
                    enabled: true,
                    offsetX: 0,
                    style: {
                      fontSize: "13px",
                      fontWeight: 900,
                      color: "#E4E6E9",
                    },
                  },
                },
              },
            },
            stroke: {
              width: 1,
              colors: ["#E4E6E9"],
            },
            title: {
              style: {
                color: "#E4E6E9",
              },
            },
            xaxis: {
              categories: ["Analyzed Points", "Achieved Points"],
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },

            fill: {
              opacity: 1,
            },
            legend: {
              position: "top",
              horizontalAlign: "center",
              offsetX: 40,
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else if (props.text === "NSV") {
        this.state = {
          series: [
            {
              name: "Standard Signage",
              data: [2, props.StandardSignage?.toFixed(2)],
            },
            {
              name: "Stardard Marking",
              data: [2, props.StardardMarking?.toFixed(2)],
            },
          ],

          options: {
            colors: ["#FF9800", "#3D9EED"],
            chart: {
              type: "bar",
              height: 150,
              stacked: true,
              // background: "#273143",
            },
            plotOptions: {
              bar: {
                horizontal: true,
                dataLabels: {
                  total: {
                    enabled: true,
                    offsetX: 0,
                    style: {
                      fontSize: "13px",
                      fontWeight: 900,
                      color: "#E4E6E9",
                    },
                  },
                },
              },
            },
            stroke: {
              width: 1,
              colors: ["#E4E6E9"],
            },
            title: {
              style: {
                color: "#E4E6E9",
              },
            },
            xaxis: {
              categories: ["Analyzed Points", "Achieved Points"],
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },

            fill: {
              opacity: 1,
            },
            legend: {
              position: "top",
              horizontalAlign: "center",
              offsetX: 40,
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else if (props.text === "FAStag") {
        this.state = {
          series: [
            {
              name: "Delay Toll Plaza",
              data: [4, props.DelayTollPlaza?.toFixed(2)],
            },
            {
              name: "Operating Speed",
              data: [17, props.OperatingSpeed?.toFixed(2)],
            },
            {
              name: "TafficVolume",
              data: [2.5, props.TafficVolume?.toFixed(2)],
            },
          ],

          options: {
            colors: ["#FF9800", "#3D9EED"],
            chart: {
              type: "bar",
              height: 150,
              stacked: true,
              // background: "#273143",
            },
            plotOptions: {
              bar: {
                horizontal: true,
                dataLabels: {
                  total: {
                    enabled: true,
                    offsetX: 0,
                    style: {
                      fontSize: "13px",
                      fontWeight: 900,
                      color: "#E4E6E9",
                    },
                  },
                },
              },
            },
            stroke: {
              width: 1,
              colors: ["#E4E6E9"],
            },
            title: {
              style: {
                color: "#E4E6E9",
              },
            },
            xaxis: {
              categories: ["Analyzed Points", "Achieved Points"],
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },

            fill: {
              opacity: 1,
            },
            legend: {
              position: "top",
              horizontalAlign: "center",
              offsetX: 40,
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else {
        this.state = {
          series: [
            {
              name: "Service Road",
              data: [3, 0],
            },
            {
              name: "Carriageway Width ",
              data: [1, 0.5],
            },
          ],
          options: {
            colors: ["#FF9800", "#3D9EED"],
            chart: {
              type: "bar",
              height: 150,
              stacked: true,
              // background: "#273143",
            },
            plotOptions: {
              bar: {
                horizontal: true,
                dataLabels: {
                  total: {
                    enabled: true,
                    offsetX: 0,
                    style: {
                      fontSize: "13px",
                      fontWeight: 900,
                      color: "#E4E6E9",
                    },
                  },
                },
              },
            },
            stroke: {
              width: 1,
              colors: ["#E4E6E9"],
            },
            title: {
              style: {
                color: "#E4E6E9",
              },
            },
            xaxis: {
              categories: ["Analyzed Points", "Achieved Points"],
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },

            fill: {
              opacity: 1,
            },
            legend: {
              position: "top",
              horizontalAlign: "center",
              offsetX: 40,
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      }
    } else if (props.status === "HighWay Safety") {
      if (props.text === "Drone") {
        console.log(props)
        this.state = {
          series: [
            {
              name: "Damaged Barrier",
              data: [1, props.DamagedBarrier?.toFixed(2)],
            },
            {
              name: "Cross Movement Structure",
              data: [2, props.CrossMovement?.toFixed(2)],
            },
          ],
          options: {
            colors: ["#FF9800","#58FFC5"],
            chart: {
              type: "bar",
              height: 150,
              stacked: true,
              // background: "#273143",
            },
            plotOptions: {
              bar: {
                horizontal: true,
                dataLabels: {
                  total: {
                    enabled: true,
                    offsetX: 0,
                    style: {
                      fontSize: "13px",
                      fontWeight: 900,
                      color: "#E4E6E9",
                    },
                  },
                },
              },
            },
            stroke: {
              width: 1,
              colors: ["#E4E6E9"],
            },
            title: {
              style: {
                color: "#E4E6E9",
              },
            },
            xaxis: {
              categories: ["Analyzed Points", "Achieved Points"],
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },

            fill: {
              opacity: 1,
            },
            legend: {
              position: "top",
              horizontalAlign: "center",
              offsetX: 40,
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else if (props.text === "NSV") {
        this.state = {
          series: [
            {
              name: "Illegal Median",
              data: [2, props.Median?.toFixed(2)],
            },
            {
              name: "Earthen Shoulder",
              data: [2, props.EarthenShoulder?.toFixed(2)],
            },
            {
              name: "Solar Blinker",
              data: [3, props.SolarBlinkers?.toFixed(2)],
            },
          ],

          options: {
            colors: ["#FF9800", "#3D9EED","#58ffc5"],
            chart: {
              type: "bar",
              height: 150,
              stacked: true,
              // background: "#273143",
            },
            plotOptions: {
              bar: {
                horizontal: true,
                dataLabels: {
                  total: {
                    enabled: true,
                    offsetX: 0,
                    style: {
                      fontSize: "13px",
                      fontWeight: 900,
                      color: "#E4E6E9",
                    },
                  },
                },
              },
            },
            stroke: {
              width: 1,
              colors: ["#E4E6E9"],
            },
            title: {
              style: {
                color: "#E4E6E9",
              },
            },
            xaxis: {
              categories: ["Analyzed Points", "Achieved Points"],
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },

            fill: {
              opacity: 1,
            },
            legend: {
              position: "top",
              horizontalAlign: "center",
              offsetX: 40,
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else if (props.text === "FAStag") {
        this.state = {
          series: [
            {
              name: "Delay Toll Plaza",
              data: [4, props.DelayTollPlaza?.toFixed(2)],
            },
            {
              name: "Operating Speed",
              data: [17, props.OperatingSpeed?.toFixed(2)],
            },
            {
              name: "TafficVolume",
              data: [2.5, props.TafficVolume?.toFixed(2)],
            },
          ],

          options: {
            colors: ["#FF9800", "#3D9EED","#66ffca"], 
            chart: {
              type: "bar",
              height: 150,
              stacked: true,
              // background: "#273143",
            },
            plotOptions: {
              bar: {
                horizontal: true,
                dataLabels: {
                  total: {
                    enabled: true,
                    offsetX: 0,
                    style: {
                      fontSize: "13px",
                      fontWeight: 900,
                      color: "#E4E6E9",
                    },
                  },
                },
              },
            },
            stroke: {
              width: 1,
              colors: ["#E4E6E9"],
            },
            title: {
              style: {
                color: "#E4E6E9",
              },
            },
            xaxis: {
              categories: ["Analyzed Points", "Achieved Points"],
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9",],
                },
              },
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },

            fill: {
              opacity: 1,
            },
            legend: {
              position: "top",
              horizontalAlign: "center",
              offsetX: 40,
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else {
        this.state = {
          series: [
            {
              name: "Service Road",
              data: [3, 0],
            },
            {
              name: "Carriageway Width ",
              data: [1, 0.5],
            },
          ],
          options: {
            colors: ["#FF9800", "#3D9EED"],
            chart: {
              type: "bar",
              height: 150,
              stacked: true,
              // background: "#273143",
            },
            plotOptions: {
              bar: {
                horizontal: true,
                dataLabels: {
                  total: {
                    enabled: true,
                    offsetX: 0,
                    style: {
                      fontSize: "13px",
                      fontWeight: 900,
                      color: "#E4E6E9",
                    },
                  },
                },
              },
            },
            stroke: {
              width: 1,
              colors: ["#E4E6E9"],
            },
            title: {
              style: {
                color: "#E4E6E9",
              },
            },
            xaxis: {
              categories: ["Analyzed Points", "Achieved Points"],
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },
            yaxis: {
              labels: {
                show: true,
                style: {
                  colors: ["#E4E6E9", "#E4E6E9"],
                },
              },
            },

            fill: {
              opacity: 1,
            },
            legend: {
              position: "top",
              horizontalAlign: "center",
              offsetX: 40,
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      }
    } else {
      this.state = {
        series: [
          {
            name: "Service Road",
            data: [3, 0],
          },
          {
            name: "Carriageway Width ",
            data: [1, 0.5],
          },
        ],
        options: {
          colors: ["#FF9800", "#3D9EED"],
          chart: {
            type: "bar",
            height: 150,
            stacked: true,
            // background: "#273143",
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                total: {
                  enabled: true,
                  offsetX: 0,
                  style: {
                    fontSize: "13px",
                    fontWeight: 900,
                    color: "#E4E6E9",
                  },
                },
              },
            },
          },
          stroke: {
            width: 1,
            colors: ["#E4E6E9"],
          },
          title: {
            style: {
              color: "#E4E6E9",
            },
          },
          xaxis: {
            categories: ["Analyzed Points", "Achieved Points"],
            labels: {
              show: true,
              style: {
                colors: ["#E4E6E9", "#E4E6E9"],
              },
            },
          },
          yaxis: {
            labels: {
              show: true,
              style: {
                colors: ["#E4E6E9", "#E4E6E9"],
              },
            },
          },

          fill: {
            opacity: 1,
          },
          legend: {
            position: "top",
            horizontalAlign: "center",
            offsetX: 40,
            labels: {
              colors: ["#e4e6e9"],
              useSeriesColors: false,
            },
          },
        },
      };
    }
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={200}
        />
      </div>
    );
  }
}

//--------------------

//-------------------
