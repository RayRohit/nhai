import { Button, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import React, { useContext, useState } from "react";
// import Boxes from "./Boxes";

import { Box } from "@mui/system";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";

import LineGraph from "../TwoGraphs/LineGraph";
import CompleteGraph from "../TwoGraphs/CompleteGraph";
import efficiency from "../Assests/Images/efficiency.png";
import safety from "../Assests/Images/safety.png";
import services from "../Assests/Images/services.png";
import { useNavigate } from "react-router-dom";
import Cards from "./Card";
import data from "./Drone_data.json";
import nsvdata from "./nsv_data.json";
import textjson from "./text_data.json";
import { AppContext } from "../AppContext/AppContext";
import { FileUploader } from "react-drag-drop-files";
import upload from "../Assests/Images/uploadd.png";
import ProgressBar from "./ProgressBar";

const fileTypes = ["MP4"];

export default function Dashboard() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const { state, setState } = useContext(AppContext);
  console.log("VideoData =>", state);
  console.log(textjson);
  console.log(data);

  console.log("LocalStorage =>", localStorage.getItem("videoData1"));
  console.log(
    "LocalStorage =>",
    JSON.parse(localStorage.getItem("videoData2"))
  );
  //--------------------------------------------HE
  const totalObtainedPoints =
    textjson.Card_Value[0].Operating_Speed +
    textjson.Card_Value[0].Delay_Toll_Plaza +
    textjson.Card_Value[0].Traffic_Volume +
    state.HEStandardSignagePeak +
    state.HEStardardMarkingPeak +
    state.HEcarriagePeak +
    state.HEserviceRoadPeak;

  const deductedPoints = textjson.Total_Value_HE - totalObtainedPoints;

  const totalObtainedPointsHS =
    textjson.Card_Value[0].Accident_per_km +
    textjson.Card_Value[0].Accident_Severity_Index +
    textjson.Card_Value[0].Avg_Ambulance_Response_Time +
    textjson.Card_Value[0].Avg_Incident_Response_Time +
    textjson.Card_Value[0].Roadway_Clearance_Time +
    state.HSCrossMovementPeak +
    state.HSCrashBarrierPeak +
    state.HSEarthenShoulderPeak +
    state.HSMedianPeak;

  const deductedHS = textjson.Total_Value_HS - totalObtainedPointsHS;
  //--------------------------------------------HS

  const totalObtainedPointsUS =
    state.USIllegalEncroachment +
    state.USSpeedBreakers +
    state.USTrafficBarrier +
    data.Card_Value.Plantation;
  const deductedUS = textjson.Total_Value_US - totalObtainedPointsUS;
  // console.log(data.Card_Value.Plantation)

  //--------------------------------------------US

  var PositiveServiceRoad;
  var PositiveCarriageWay;
  var PositiveCrashBarrier;
  var PositiveCrossMovementStructure;
  var NegativeServiceRoad;
  var NegativeCarriageWay;
  var NegativeCrashBarrier;
  var NegativeCrossMovementStructure;
  for (let category of data.Positive_Frame_Data) {
    if (category.name === "Positive_Service_Road")
      PositiveServiceRoad = category.data;
    else if (category.name === "Positive_Carriageway")
      PositiveCarriageWay = category.data;
    else if (category.name === "Positive_Crash_Barrier")
      PositiveCrashBarrier = category.data;
    else if (category.name === "Positive_Cross_Movement_Structure")
      PositiveCrossMovementStructure = category.data;
  }
  for (let category of data.Negative_Frame_Data) {
    if (category.name === "Negative_Service_Road")
      NegativeServiceRoad = category.data;
    else if (category.name === "Negative_Carriageway")
      NegativeCarriageWay = category.data;
    else if (category.name === "Negative_Crash_Barrier")
      NegativeCrashBarrier = category.data;
    else if (category.name === "Negative_Cross_Movement_Structure")
      NegativeCrossMovementStructure = category.data;
  }
  var NegativeRoadSign;
  var NegativeRoadMarking;
  var NegativeEarthenShoulder;
  var NegativeMedian;
  var PositiveRoadSign;
  var PositiveRoadMarking;
  var PositiveEarthenShoulder;
  var PositiveMedian;
  var PositiveFunctionalBlinkers;
  var NegativeFunctionalBlinkers;
  var SpeedBreakers;
  var TrafficBarriers;
  var EncroachmentHoardings;
  for (let category of nsvdata.Positive_Frame_Data) {
    if (category.name === "Positive_Road_Sign")
      PositiveRoadSign = category.data;
    else if (category.name === "Positive_Road_Markings")
      PositiveRoadMarking = category.data;
    else if (category.name === "Positive_Earthen_Shoulder")
      PositiveEarthenShoulder = category.data;
    else if (category.name === "Positive_Median")
      PositiveMedian = category.data;
    else if (category.name === "Positive_Functional_Blinkers")
      PositiveFunctionalBlinkers = category.data;
  }

  for (let category of nsvdata.Negative_Frame_Data) {
    if (category.name === "Negative_Road_Sign")
      NegativeRoadSign = category.data;
    else if (category.name === "Negative_Road_Markings")
      NegativeRoadMarking = category.data;
    else if (category.name === "Negative_Earthen_Shoulder")
      NegativeEarthenShoulder = category.data;
    else if (category.name === "Negative_Median")
      NegativeMedian = category.data;
    else if (category.name === "Speed_Breakers") SpeedBreakers = category.data;
    else if (category.name === "Traffic_Barriers")
      TrafficBarriers = category.data;
    else if (category.name === "Encroachment_Hoardings")
      EncroachmentHoardings = category.data;
  }
  const handleChange = (file) => {
    console.log("fileData =>", file);
    setFile(file[0]?.name);
    setTimeout(() => {
      setState((prev) => {
        return {
          ...prev,
          HRVideo: file[0],
        };
      });
    }, [7000]);
  };
  const handleReupload = () => {
    setFile(null);
    setState((prev) => {
      return {
        ...prev,
        HRVideo: null,
      };
    });
  };
  return (
    <>
      {state.HRVideo === null ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <Paper
              sx={{
                background: "#273143",
                p: 2,
                borderRadius: "10px",
                color: "#E4E6E9",
                width: "75vw",
                height: "60vh",
                py: 5,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                <img src={upload} alt="upload logo" width={100} />
              </Box>
              <Typography variant="h6" sx={{ textAlign: "center", py: 1 }}>
                Select Video To Upload
              </Typography>
              <Box
                sx={{
                  color: "#E4E6E9",
                  display: "flex",
                  justifyContent: "center",
                  py: 2,
                }}
              >
                <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                />
              </Box>
              <p style={{ textAlign: "center" }}>
                {console.log("file =>", file)}
                {file === null ? "No Files Uploaded Yet" : `File name: ${file}`}
              </p>{" "}
              {file === null ? null : (
                <LinearWithValueLabel sx={{ py: 0.8, borderRadius: "20px" }} />
              )}
            </Paper>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={handleReupload}
              sx={{ color: "#e4e6e9", mb: 2 }}
            >
              Reupload
            </Button>
            {/* <input /> */}
          </Box>
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item xs={2.5} md={1.5} lg={2} sx={{ mr: 6 }}>
              <Box
                onClick={() => {
                  navigate("/highway-rating-details");
                }}
              >
                <Cards image={efficiency} text={"Highway Efficiency"} />
              </Box>
            </Grid>
            <Grid item xs={5} md={5} lg={5} sx={{ ml: 2 }}>
              <LineGraph
                text="High Efficiency"
                NegativeCarriageWay={NegativeCarriageWay}
                PositiveCarriageWay={PositiveCarriageWay}
                NegativeServiceRoad={NegativeServiceRoad}
                PositiveServiceRoad={PositiveServiceRoad}
                NegativeRoadSign={NegativeRoadSign}
                PositiveRoadSign={PositiveRoadSign}
                NegativeRoadMarking={NegativeRoadMarking}
                PositiveRoadMarking={PositiveRoadMarking}
              />
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <CompleteGraph
                totalObtained={totalObtainedPoints}
                deductedPoints={deductedPoints}
                nonAnalysedPoint={textjson.Non_Analysed_HE}
              />
            </Grid>
            {/* -------------------------- */}
            <Grid item xs={2.5} md={1.5} lg={2} sx={{ mr: 6 }}>
              <Box
                onClick={() => {
                  navigate("/highway-safety");
                }}
              >
                <Cards image={safety} text={"Highway Safety"} />
              </Box>
            </Grid>
            <Grid item xs={5} md={5} lg={5} sx={{ ml: 2 }}>
              <LineGraph
                text="Highway Safety"
                PositiveEarthenShoulder={PositiveEarthenShoulder}
                NegativeEarthenShoulder={NegativeEarthenShoulder}
                PositiveFunctionalBlinkers={PositiveFunctionalBlinkers}
                PositiveMedian={PositiveMedian}
                NegativeMedian={NegativeMedian}
                PositiveCrashBarrier={PositiveCrashBarrier}
                NegativeCrashBarrier={NegativeCrashBarrier}
                PositiveCrossMovementStructure={PositiveCrossMovementStructure}
                NegativeCrossMovementStructure={NegativeCrossMovementStructure}
                PositiveSolarBlinkers={PositiveFunctionalBlinkers}
                NegativeSolarBlinkers={NegativeFunctionalBlinkers}
              />
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <CompleteGraph
                totalObtained={totalObtainedPointsHS}
                deductedPoints={deductedHS}
                nonAnalysedPoint={textjson.Non_Analysed_HS}
              />
            </Grid>
            {/* --------------------------------- */}
            <Grid item xs={2.5} md={2.5} lg={2} sx={{ mr: 6 }}>
              <Box
                onClick={() => {
                  navigate("/user-services");
                }}
              >
                <Cards image={services} text={"User Services"} />
              </Box>
            </Grid>
            <Grid item xs={5} md={5} lg={5} sx={{ ml: 2 }}>
              <LineGraph
                text="User Services"
                SpeedBreakers={SpeedBreakers}
                TrafficBarriers={TrafficBarriers}
                EncroachmentHoardings={EncroachmentHoardings}
              />
            </Grid>
            <Grid item xs={4} md={4} lg={4}>
              <CompleteGraph
                totalObtained={totalObtainedPointsUS}
                deductedPoints={deductedUS}
                nonAnalysedPoint={textjson.Non_Analysed_US}
              />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
{
  /* <Grid container sx={{ justifyContent: "space-around" }}>
<Grid item lg={2} md={2} xl={2}>
  <Grid container spacing={2} direction="column">
    <Grid item xs>
        <Cards />
    </Grid>
    <Grid item xs>
      <Cards />
    </Grid>
    <Grid item xs>
      <Cards />
    </Grid>
  </Grid>
</Grid>
<Grid item lg={5} md={5} xl={5}>
  <Grid container spacing={2} direction="column">
    <Grid item xs>
      <RangeMap />
    </Grid>
    <Grid item xs>
      <LineCharts />
    </Grid>
  </Grid>
</Grid>
{/* <Grid item lg={5} md={5} xl={5}>
  <LineCharts />
</Grid> */
}

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
