import React from "react";
import ReactApexChart from "react-apexcharts";

const AvgHeight = (props) => {
  const series = [props?.height[0]?.avg_tree_height];

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
        dataLabels: {
          name: {
            offsetY: -10,
            show: true,
            color: "#E4E6E9",
            fontSize: "17px",
          },
          value: {
            formatter: function (val) {
              return `${val} feet`;
            },
            offsetY: 10,
            fontSize: "17px",
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
      gradient: {
        type: "horizontal",
        gradientToColors: ["#509EED"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    fill: {
      colors: ["#509EED"],
      type: "solid",
    },
    stroke: {
      lineCap: "round",
      colors: "#ee9ca7",
    },
    labels: ["Avg Tree Height"],
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

export default AvgHeight;

// import React from "react";
// import ReactApexChart from "react-apexcharts";

// const AvgHeight = (props) => {
//   const series = [props?.height[0]?.avg_tree_height];

//   const options = {
//     chart: {
//       type: "radialBar",
//     },
//     plotOptions: {
//       radialBar: {
//         startAngle: -135,
//         endAngle: 225,
//         hollow: {
//           size: "70%",
//           dropShadow: {
//             enabled: true,
//             top: 3,
//             left: 0,
//             blur: 4,
//             opacity: 0.24,
//           },
//         },
//         track: {
//           background: "#ffdde1",
//           strokeWidth: "100%",
//           margin: 5,
//           dropShadow: {
//             enabled: true,
//             top: -3,
//             left: 0,
//             blur: 4,
//             opacity: 0.35,
//           },
//         },
//         dataLabels: {
//           name: {
//             offsetY: -10,
//             show: true,
//             color: "#E4E6E9",
//             fontSize: "17px",
//           },
//           value: {
//             offsetY: 10,
//             fontSize: "22px",
//             color: "#E4E6E9",
//           },
//         },
//       },
//     },
//     grid: {
//       padding: {
//         top: 0,
//       },
//     },
//     fill: {
//       gradient: {
//         type: "horizontal",
//         gradientToColors: ["#509EED"],
//         inverseColors: false,
//         opacityFrom: 1,
//         opacityTo: 1,
//         stops: [0, 100],
//       },
//     },
//     fill: {
//       colors: ["#509EED"],
//       type: "solid",
//     },
//     stroke: {
//       lineCap: "round",
//       colors: "#ee9ca7",
//     },
//     labels: ["Avg Tree Height"],
//   };

//   return (
//     <div id="card">
//       <div id="chart">
//         <ReactApexChart
//           options={options}
//           series={series}
//           type="radialBar"
//           height={280}
//         />
//       </div>
//     </div>
//   );
// };

// export default AvgHeight;
