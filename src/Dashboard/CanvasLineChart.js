import React from "react";
import CanvasJSReact from "./canvasjs/canvasjs.react.js";
import './Canvas.css'
// import data from "./Drone_data.json";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function CanvasLineCharts(props) {
  let option;
  if (props.text === "High Efficiency")
    option = {
      height: 140,
      zoomEnabled: true,
      zoomType: "xy",
      backgroundColor: "#273143",
      theme: "dark",
      animationEnabled: true,
      axisY: {
        title: "KPI Score",
        titleFontColor: "#E4E6E9",
        labelFontColor: "#E4E6E9",
      },
      axisX: {
        title: "Seconds",
        titleFontColor: "#E4E6E9",
        labelFontColor: "#E4E6E9",
      },
      toolTip: {
        shared: "true",
      },
      legend: {
        cursor: "pointer",
        fontColor: "#E4E6E9",
        itemclick: (e) => {
          if (
            typeof e.dataSeries.visible === "undefined" ||
            e.dataSeries.visible
          ) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }

          e.chart.render();
        },
      },
      data: [
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "0#.00",
          name: "Service Road",
          dataPoints: props.serviceRoadCoords,
        },
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "0#.00",
          name: "Carriage Way",
          dataPoints: props.carriageWayCoords,
        },
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "0#.00",
          name: "Standard Signage",
          dataPoints: props.roadSignageCoords,
        },
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "0#.00",
          name: "Standard Marking",
          dataPoints: props.roadMarkingCoords.length === 0 ? [{x:0,y:2}] : props.roadMarkingCoords
        },
      ],
    };
  else if(props.text === "High Safety"){
    option = {
      height: 140,
      zoomEnabled: true,
      zoomType: "xy",
      backgroundColor: "#273143",
      theme: "dark",
      animationEnabled: true,
      axisY: {
        title: "KPI Score",
        titleFontColor: "#e4e6e9",
        labelFontColor: "#e4e6e9",
      },
      axisX: {
        title: "Seconds",
        titleFontColor: "#e4e6e9",
        labelFontColor: "#e4e6e9",
      },
      toolTip: {
        shared: "true",
      },
      legend: {
        cursor: "pointer",
        fontColor: "#e4e6e9",
        itemclick: (e) => {
          if (
            typeof e.dataSeries.visible === "undefined" ||
            e.dataSeries.visible
          ) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }

          e.chart.render();
        },
      },
      data: [
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "0#.0000",
          name: "Cross Movement",
          dataPoints: props.serviceRoadCoords,
        },
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "0#.0000",
          name: "Crash Barrier",
          dataPoints: props.carriageWayCoords,
        },
        {
          type: "spline",
          visible:true,
          showInLegend: true,
          yValueFormatString: "0#.0000",
          name: "Median Standard",
          dataPoints: props.MedianCoords,
        },
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "0#.0000",
          name: "Earthen Shoulder",
          dataPoints: props.EarthenCoords,
        },
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "0#.0000",
          name: "Solar Blinkers",
          dataPoints: props.solarBlinkersCoords,
        },
      ],
    };
  }else if(props.text === "User Services"){
    option = {
      height: 140,
      zoomEnabled: true,
      zoomType: "xy",
      backgroundColor: "#273143",
      theme: "dark",
      animationEnabled: true,
      axisY: {
        title: "KPI Score",
        titleFontColor: "#E4E6E9",
        labelFontColor: "#E4E6E9",
      },
      axisX: {
        title: "Seconds",
        titleFontColor: "#E4E6E9",
        labelFontColor: "#E4E6E9",
      },
      toolTip: {
        shared: "true",
      },
      legend: {
        cursor: "pointer",
        fontColor: "#E4E6E9",
        itemclick: (e) => {
          if (
            typeof e.dataSeries.visible === "undefined" ||
            e.dataSeries.visible
          ) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }

          e.chart.render();
        },
      },
      data: [
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "0#.0000",
          name: "Traffic Barrier",
          dataPoints: props.TrafficBarrierCoords,
        },
        {
          type: "spline",
          visible: true,
          showInLegend: true,
          yValueFormatString: "0#.0000",
          name: "Speed Breakers",
          dataPoints: props.SpeedBreakersCoords,
        },
        {
          type: "spline",
          visible:true,
          showInLegend: true,
          yValueFormatString: "0#.0000",
          name: "Encroachment Hoardings",
          dataPoints: props.EncroachmentHoardingsCoords,
        }
      ],
    };
  }
    
  return <CanvasJSChart options={option} />;
}

export default CanvasLineCharts;
