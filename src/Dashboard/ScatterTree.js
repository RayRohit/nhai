import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ScatterTree = (props) => {
  const [series, setSeries] = useState([
    {
      name: "Vegetation Scatter Series",
      data: props.scatter.map((point) => ({
        x: point[0],
        y: point[1],
        z: point[2],
      })),
    },
  ]);

  const [options, setOptions] = useState({
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
            chartContext.w.globals.initialSeries[config.seriesIndex]?.data?.[
              config.dataPointIndex
            ].z
          );
        },
      },
    },
    tooltip: {
      enabled: true,
      x: {
        formatter: function (val) {
          return `x: ${val.toFixed(2)}`;
        },
      },
      y: {
        formatter: function (val) {
          return `y: ${val.toFixed(2)}`;
        },
      },
      z: {
        show: false, // hide the z value
      },
    },
    xaxis: {
      tickAmount: 30,
      position: "bottom",
      labels: {
        show: true,
        style: {
          colors: Array(100).fill("#E4E6E9"),
        },

        formatter: function (value) {
          const roundedValue = parseFloat(value).toFixed(2);
          return roundedValue.toString();
        },
      },
      axisBorder: {
        color: "#e4e6e9",
      },
      axisTicks: {
        color: "#e4e6e9",
      },

      title: {
        text: "Longitude",
        offsetX: 0,
        offsetY: 125,
        style: {
          color: "#E4E6E9",
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 600,
          cssClass: "apexcharts-xaxis-title",
        },
      },
    },

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
        text: "Latitude",
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
  });

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="scatter"
      height={250}
    />
  );
};

export default ScatterTree;
