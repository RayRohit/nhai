import ReactApexChart from "react-apexcharts";
import React from "react";
export default class Scatter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        props.graphdata.Heat_Map[0],
        props.graphdata.Heat_Map[1],
        props.graphdata.Heat_Map[2],
        props.graphdata.Heat_Map[3],
        props.graphdata.Heat_Map[4],
      ],
      // series: [

      // ],     //props.graphdata.Heat_Map,
      options: {
        chart: {
          height: 350,
          type: "scatter",
          zoom: {
            enabled: true,
            type: "xy",
          },
          events: {
            click: function (event, chartContext, config) {
              props.ModalPopUp(
                chartContext.w.globals.initialSeries[config.seriesIndex]
                  ?.data?.[config.dataPointIndex]?.[2]
              );
            },
          },
        },
        xaxis: {
          tickAmount: 30,
          position: "bottom",
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
                "#E4E6E9",
                "#E4E6E9",
              ],
            },
          },
          title: {
            text: "Distance Traversed",
            offsetX: 0,
            offsetY: 85,
            style: {
              color: "#E4E6E9",
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-title",
            },
          },
        },
        // xaxis: {
        //   tickAmount: 30,
        //   position: "bottom",
        //   labels: {
        //     show: true,
        //     style: {
        //       colors: ["#fff"],
        //     },
        //   },
        //   title: {
        //     text: "Distance Traversed",
        //     offsetX: 0,
        //     offsetY: 80,
        //     style: {
        //       color: "#E4E6E9",
        //       fontSize: "12px",
        //       fontFamily: "Helvetica, Arial, sans-serif",
        //       fontWeight: 600,
        //       cssClass: "apexcharts-xaxis-title",
        //     },
        //   },
        // },
        yaxis: {
          tickAmount: 7,
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
          title: {
            text: "Width Of The Road",
            offsetX: 0,
            offsetY: 0,
            style: {
              color: "#E4E6E9",
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-title",
            },
          },
        },
        legend: {
          show: true,
          position: "bottom",
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
          type="scatter"
          height={350}
        />
      </div>
    );
  }
}
