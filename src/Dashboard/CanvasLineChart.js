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
        title: "Rating",
        titleFontColor: "#fff",
        labelFontColor: "#fff",
      },
      axisX: {
        title: "Seconds",
        titleFontColor: "#fff",
        labelFontColor: "#fff",
      },
      toolTip: {
        shared: "true",
      },
      legend: {
        cursor: "pointer",
        fontColor: "#fff",
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
        title: "Rating",
        titleFontColor: "#fff",
        labelFontColor: "#fff",
      },
      axisX: {
        title: "Seconds",
        titleFontColor: "#fff",
        labelFontColor: "#fff",
      },
      toolTip: {
        shared: "true",
      },
      legend: {
        cursor: "pointer",
        fontColor: "#fff",
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
  }
    
  return <CanvasJSChart options={option} />;
}

export default CanvasLineCharts;
