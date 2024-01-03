import React from "react";
import ReactApexChart from "react-apexcharts";

const TreeBar = (props) => {
  const options = {
    chart: {
      type: "bar3d",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        depth: 40,
      },
    },
    xaxis: {
      categories: ["Trees on the Left", "Trees on the Right", "Total"],
      labels: {
        style: {
          colors: "#E4E6E9",
        },
      },
    },
    yaxis: {
      title: {
        text: "Count",
        style: {
          color: "#E4E6E9",
        },
      },
      labels: {
        style: {
          colors: "#E4E6E9",
        },
      },
    },
    legend: {
      labels: {
        colors: ["#E4E6E9"],
      },
    },
  };

  const series = [
    {
      name: "Count",
      data: [
        props?.count[0]?.left_tree_count,
        props?.count[0]?.right_tree_count,
        props?.count[0]?.total_tree_count,
      ],
    },
  ];

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default TreeBar;

// import React from "react";
// import ReactApexChart from "react-apexcharts";

// class TreeBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           type: "bar3d",
//           toolbar: {
//             show: false,
//           },
//         },
//         plotOptions: {
//           bar: {
//             horizontal: false,
//             depth: 40,
//           },
//         },
//         xaxis: {
//           categories: ["Trees on the Left", "Trees on the Right", "Total"],
//           labels: {
//             style: {
//               colors: "#E4E6E9",
//             },
//           },
//         },
//         yaxis: {
//           title: {
//             text: "Count",
//             style: {
//               color: "#E4E6E9",
//             },
//           },
//           labels: {
//             style: {
//               colors: "#E4E6E9",
//             },
//           },
//         },
//         legend: {
//           labels: {
//             colors: ["#E4E6E9"],
//           },
//         },
//       },
//       series: [
//         {
//           name: "Count",
//           data: [10, 20, 30],
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <ReactApexChart
//           options={this.state.options}
//           series={this.state.series}
//           type="bar"
//           height={250}
//         />
//       </div>
//     );
//   }
// }

// export default TreeBar;
