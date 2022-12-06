import React from "react";
import ReactApexChart from "react-apexcharts";
export default function GaugeChart(props) {
  let guagevalue = [(props.GaugeValue?.toFixed(4) * 100).toFixed(2)];
  // props.data ? [props.data] : [0]
  let options = {
    chart: {
      type: "radialBar",
      // offsetY: 0,
      // offsetX: 50,
      // sparkline: {
      //     enabled: true
      // }
    },
    // colors: [''],
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
    labels: ["ERI"],
  };
  return (
    <>
      <div className="py-2 d-flex justify-content-center w-75 mx-auto">
        <ReactApexChart
          options={options}
          series={guagevalue}
          type="radialBar"
          style={{ height: "180px" }}
        />
        {/* <GaugeChart id="gauge-chart3"
                      nrOfLevels={20}
                      arcsLength={[0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]}
                      arcWidth={0.2}
                      colors={['#F47004', '#34BF01',]}
                      percent={guagevalue / 100}
                      arcPadding={0.00}
                      cornerRadius={0}
                      textColor={'#000000'}
                      needleColor={'#7F7F7F'}
                      needleBaseColor={'#cccccc'}
                      animate={true}
                      formatTextValue={value => `${value}%`}
                  /> */}
      </div>
      {/* <h4 className="d-flex justify-content-center mt-3" >Safety Index</h4> */}
    </>
  );
}
// export default class GaugeChart extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props.GaugeValue?.toFixed(4)*100)
//     this.state = {
//       series: [props.GaugeValue*100],
//       options: {
//         chart: {
//           height: 350,
//           type: "radialBar",
//           sparkline:{
//             enabled:true
//           },
//           // background: "#273143",
//           toolbar: {
//             show: true,
//           },
//         },
//         plotOptions: {
//           radialBar: {
//             startAngle: -135,
//             endAngle: 225,
//             hollow: {
//               margin: 0,
//               size: "70%",
//               image: undefined,
//               imageOffsetX: 0,
//               imageOffsetY: 0,
//               position: "front",
//               dropShadow: {
//                 enabled: true,
//                 top: 3,
//                 left: 0,
//                 blur: 4,
//                 opacity: 0.24,
//               },
//             },
//             track: {
//               background: "#ffdde1",
//             //   strokeWidth: "67%",
//               margin: 0, // margin is in pixels
//               dropShadow: {
//                 enabled: true,
//                 top: -3,
//                 left: 0,
//                 // blur: 4,
//                 // opacity: 0.35,
//               },
//             },
//             dataLabels: {
//               show: true,
//               name: {
//                 offsetY: -10,
//                 show: true,
//                 color: "#E4E6E9",
//                 fontSize: "17px",
//               },
//               value: {
//                 formatter: function (val) {
//                   return parseInt(val);
//                 },
//                 color: "#E4E6E9",
//                 fontSize: "36px",
//                 show: true,
//               },
//             },
//           },
//         },
//         // fill: {
//         //   type: "gradient",
//         //   gradient: {
//         //     // shade: "dark",
//         //     type: "horizontal",
//         //     // shadeIntensity: 0.5,
//         //     gradientToColors: ["#DE9EA0"],
//         //     inverseColors: false,
//         //     opacityFrom: 1,
//         //     opacityTo: 1,
//         //     stops: [0, 100],
//         //   },
//         // },
//         fill:{
//             colors:['#F15F79'],
//             type: 'solid',
//         },
//         stroke: {
//         //   lineCap: "round",
//           colors:"#ee9ca7"
//         },
//         labels: ["ERI"],
//       },
//     };
//   }
//   render() {
//     return (
//       <div id="card">
//         <div id="chart">
//           <ReactApexChart
//             options={this.state.options}
//             series={this.state.series}
//             type="radialBar"
//             height={220}
//           />
//         </div>
//       </div>
//     );
//   }
// }