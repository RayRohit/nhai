import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default class Pie extends React.Component {
  constructor(props) {
    super(props);

    if (props.status === "HighWay Efficiency") {
      if (props.text === "Drone") {
        console.log(props);
        const cp = parseFloat(
          (1 - parseFloat(props.HEcarriagePeak.toFixed(2))).toFixed(2)
        );
        const sr = parseFloat(
          (3 - parseFloat(props.HEserviceRoadPeak.toFixed(2))).toFixed(2)
        );
        this.state = {
          series: [cp, sr],
          options: {
            chart: {
              type: "donut",
              // background: "#273143",
            },

            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100px",
                  },
                },
              },
            ],
            labels: ["Carriage Way", "Service Road"],
            legend: {
              // position: "bottom",
              fontSize: "12px",
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else if (props.text === "NSV") {
        console.log(props);
        const ss = parseFloat(
          (2 - parseFloat(props.StandardSignage.toFixed(2))).toFixed(2)
        );
        const sm = parseFloat(
          (2 - parseFloat(props.StardardMarking.toFixed(2))).toFixed(2)
        );
        this.state = {
          series: [ss, sm],
          options: {
            chart: {
              type: "donut",
              // background: "#273143",
            },

            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100px",
                  },
                },
              },
            ],
            labels: ["Standard Signage", "Stardard Marking"],
            legend: {
              // position: "bottom",
              fontSize: "12px",
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else if (props.text === "FAStag") {
        console.log(props);
        const dt = parseFloat(
          (4 - parseFloat(props.DelayTollPlaza.toFixed(2))).toFixed(2)
        );
        const os = parseFloat(
          (17 - parseFloat(props.OperatingSpeed.toFixed(2))).toFixed(2)
        );
        const tv = parseFloat(
          (2.5 - parseFloat(props.TafficVolume.toFixed(2))).toFixed(2)
        );
        this.state = {
          series: [dt, os, tv],
          options: {
            chart: {
              type: "donut",
              // background: "#273143",
            },

            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100px",
                  },
                },
              },
            ],
            labels: ["Delay Toll Plaza", "Operating Speed", "Taffic Volume"],
            legend: {
              // position: "bottom",
              fontSize: "12px",
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else {
        this.state = {
          series: [1, 3],
          options: {
            chart: {
              type: "donut",
              // background: "#273143",
            },

            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100px",
                  },
                },
              },
            ],
            labels: ["Carriage Way", "Service Road"],
            legend: {
              // position: "bottom",
              fontSize: "12px",
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
        const db = parseFloat(
          (1 - parseFloat(props.DamagedBarrier.toFixed(2))).toFixed(2)
        );
        const cm = parseFloat(
          (2 - parseFloat(props.CrossMovement.toFixed(2))).toFixed(2)
        );
        this.state = {
          series: [db, cm],
          options: {
            chart: {
              type: "donut",
              // background: "#273143",
            },

            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100px",
                  },
                },
              },
            ],
            labels: ["Damaged Barrier", "Cross Movement Structure"],
            legend: {
              // position: "bottom",
              fontSize: "12px",
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else if (props.text === "NSV") {
        console.log(props);
        const ES = parseFloat(
          (2 - props.EarthenShoulder?.toFixed(2)).toFixed(2)
        );
        const SB = parseFloat((3 - props.SolarBlinkers?.toFixed(2)).toFixed(2));
        const IM = parseFloat((2 - props.Median?.toFixed(2)).toFixed(2));
        this.state = {
          series: [ES, SB, IM],
          options: {
            chart: {
              type: "donut",
              // background: "#273143",
            },

            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100px",
                  },
                },
              },
            ],
            labels: ["Earthen Shoulder", "Solar Blinkers", "Illegal Median"],
            legend: {
              // position: "bottom",
              fontSize: "12px",
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else if (props.text === "Toll Data") {
        console.log(props);
        this.state = {
          series: [
            parseFloat(props.AccidentPerKM.toFixed(2)),
            parseFloat(props.AccidentSeverityIndex.toFixed(2)),
            parseFloat(props.AmbulanceResponseTime.toFixed(2)),
            parseFloat(props.IncidentResponseTime.toFixed(2)),
            parseFloat(props.RoadwayClearanceTime.toFixed(2))
          ],
          options: {
            chart: {
              type: "donut",
              // background: "#273143",
            },

            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100px",
                  },
                },
              },
            ],
            labels: ["AccidentPerKM", "AccidentSeverityIndex", "AmbulanceResponseTime","IncidentResponseTime","RoadwayClearanceTime"],
            legend: {
              // position: "bottom",
              fontSize: "12px",
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else {
        this.state = {
          series: [1, 3],
          options: {
            chart: {
              type: "donut",
              // background: "#273143",
            },

            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100px",
                  },
                },
              },
            ],
            labels: ["Carriage Way", "Service Road"],
            legend: {
              // position: "bottom",
              fontSize: "12px",
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      }
    } else if (props.status === "User Services") {
      if (props.text === "NSV") {
        console.log(props);
        const LE = parseFloat(
          (2 - parseFloat(props.Enchrochment.toFixed(2))).toFixed(2)
        );
        const SB = parseFloat(
          (1 - parseFloat(props.Speedbreaker.toFixed(2))).toFixed(2)
        );
        const TB = parseFloat(
          (1 - parseFloat(props.TrafficBarrier.toFixed(2))).toFixed(2)
        );
        this.state = {
          series: [LE, SB, TB],
          options: {
            chart: {
              type: "donut",
              // background: "#273143",
            },

            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100px",
                  },
                },
              },
            ],
            labels: [
              "Illegal Enchroachment",
              "Speed Breaker",
              "Traffic Barrier",
            ],
            legend: {
              // position: "bottom",
              fontSize: "12px",
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } else if(props.text === "Drone"){  
        const pl = parseFloat(
          (3 - parseFloat(props.Plantation.toFixed(3))).toFixed(3)
        );
        this.state = {
          series: [pl],
          options: {
            chart: {
              type: "donut",
              // background: "#273143",
            },

            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100px",
                  },
                },
              },
            ],
            labels: [
              "Plantation"
            ],
            legend: {
              // position: "bottom",
              fontSize: "12px",
              labels: {
                colors: ["#e4e6e9"],
                useSeriesColors: false,
              },
            },
          },
        };
      } 
      else {
        this.state = {
          series: [1, 3],
          options: {
            chart: {
              type: "donut",
              // background: "#273143",
            },

            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: "100px",
                  },
                },
              },
            ],
            labels: ["Carriage Way", "Service Road"],
            legend: {
              // position: "bottom",
              fontSize: "12px",
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
        series: [1, 3],
        options: {
          chart: {
            type: "donut",
            // background: "#273143",
          },

          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: "100px",
                },
              },
            },
          ],
          labels: ["Carriage Way", "Service Road"],
          legend: {
            // position: "bottom",
            fontSize: "12px",
            labels: {
              colors: ["#e4e6e9"],
              useSeriesColors: false,
            },
          },
        },
      };
    }

    // this.state = {
    //   series: [1, 3],
    //   options: {
    //     chart: {
    //       type: "donut",
    //       // background: "#273143",
    //     },

    //     responsive: [
    //       {
    //         breakpoint: 480,
    //         options: {
    //           chart: {
    //             width: "100px",
    //           },
    //         },
    //       },
    //     ],
    //     labels: ["Carriage Way", "Service Road"],
    //     legend: {
    //       // position: "bottom",
    //       fontSize: "12px",
    //       labels: {
    //         colors: ["#e4e6e9"],
    //         useSeriesColors: false,
    //       },
    //     },
    //   },
    // };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={220}
          // width={320}
        />
      </div>
    );
  }
}
