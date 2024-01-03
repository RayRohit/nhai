import React from "react";
import ReactApexChart from "react-apexcharts";

const GradientTree = (props) => {
  const series = [props?.density[0]?.avg_relative_density];

  const options = {
    chart: {
      type: "radialBar",
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
          margin: 5,
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
        // dataLabels: {
        //   name: {
        //     offsetY: -10,
        //     show: true,
        //     color: "#E4E6E9",
        //     fontSize: "17px",
        //   },
        //   value: {
        //     offsetY: 10,
        //     fontSize: "22px",
        //     color: "#E4E6E9",
        //   },
        // },
        dataLabels: {
          name: {
            offsetY: -10,
            show: true,
            color: "#E4E6E9",
            fontSize: "17px",
          },
          value: {
            offsetY: 10,
            fontSize: "17px",
            color: "#E4E6E9",
            formatter: function (val) {
              return val;
            },
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
      gradient: {
        type: "horizontal",
        gradientToColors: ["#DE9EA0"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
      colors: "#ee9ca7",
    },
    labels: ["Trees per m²"],
  };

  return (
    <div id="card">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={280}
        />
      </div>
    </div>
  );
};

export default GradientTree;
