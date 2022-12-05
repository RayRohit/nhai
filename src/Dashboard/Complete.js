import { Category } from "@mui/icons-material";
import React from "react";
import ReactApexChart from "react-apexcharts";
export default class Complete extends React.Component {
  constructor(props) {
    super(props);
    const total =
      props.totalObtained === undefined ? 33 : props.totalObtained.toFixed(1);
    const deducted =
      props.deductedPoints === undefined ? 33 : props.deductedPoints.toFixed(1);
    const nonAnalysed =
      props.nonAnalysedPoint === undefined
        ? 33
        : props.nonAnalysedPoint.toFixed(1);
    this.state = {
      series: [
        {
          name: "Points Obtained",
          data: [total],
        },
        {
          name: "Points Deducted",
          data: [deducted],
        },
        {
          name: "Non Analyzed",
          data: [nonAnalysed],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 200,
          stacked: true,
          // background: "#2F394C",
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              total: {
                enabled: true,
                offsetX: 0,
                style: {
                  fontSize: "1px",
                  fontWeight: 900,
                },
              },
            },
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        title: {
          style: {
            color: "#e4e6e9",
          },
        },
        xaxis: {
          // categories: ["Highway Rating"],
          labels: {
            show: "true",
            style: {
              colors: ["#E4E6E9"],
            },
          },
          title: {
            text: `Target Points : ${
              parseFloat(total) + parseFloat(deducted) + parseFloat(nonAnalysed)
            }`,
            style: {
              color: "#E4E6E9",
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 160,
            style: {
                colors: ["#273143"],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label',
            },
          },
          title: {
            text: "Highway Rating",
           
          },
          title: {
            text: "Highway Rating",
            rotate: -90,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: "#e4e6e9",
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-yaxis-title",
            },
          },
        },
        tooltip: {
          y: {
            // formatter: function (val) {
            //     return val + "K"
            // }
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
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
          type="bar"
          height={200}
          style={{ color: "#E4E6E9" }}
        />
      </div>
    );
  }
}
