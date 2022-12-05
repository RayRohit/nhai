import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext } from "react";
import Gauge from "../TwoGraphs/Gauge";
import PieGraph from "../TwoGraphs/PieGraph";
import Stacked from "../TwoGraphs/Stacked";
import TwoCard from "../TwoGraphs/TwoCard";
import Cards from "./Card";
import GaugeChart from "./GaugeChart";
import Pie from "./Pie";
import StackedBar from "./StackedBar";
import fast from "../Assests/Images/fast.png";
// import StackedBar from "./StackedBar";
import drone from "../Assests/Images/drone.png";
import nsv from "../Assests/Images/nsv.png";
import toll from "../Assests/Images/toll.png";
import hedata from "./text_data.json";
import { AppContext } from "../AppContext/AppContext";

export default function HighwaySafety() {
  const matches = useMediaQuery("(min-width:2560px)");

  const { state } = useContext(AppContext);
  console.log(state);

  return (
    <>
      {matches ? (
        <>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "space-around", border: "1px solid" }}
          >
            <Grid item lg={3} xl={1.6}>
              <TwoCard image={drone} text={"Drone Data"} />
            </Grid>
            <Grid item lg={9} xl={3}>
              <Gauge
                status="HighWay Safety"
                text="Drone"
                GaugeValue={
                  (state.HSCrashBarrierPeak + state.HSCrossMovementPeak) / 3
                }
                DamagedBarrier={state.HSCrashBarrierPeak}
                CrossMovement={state.HSCrossMovementPeak}
              />
            </Grid>
            <Grid item lg={6} xl={4}>
              <PieGraph
                status="HighWay Safety"
                text="Drone"
                GaugeValue={
                  (state.HSCrashBarrierPeak + state.HSCrossMovementPeak) / 3
                }
                DamagedBarrier={state.HSCrashBarrierPeak}
                CrossMovement={state.HSCrossMovementPeak}
              />
            </Grid>
            <Grid item lg={6} xl={3}>
              <Stacked
                status="HighWay Safety"
                text="Drone"
                DamagedBarrier={state.HSCrashBarrierPeak}
                CrossMovement={state.HSCrossMovementPeak}
                // solarBlinkers={state.So}
              />
            </Grid>
            {/* -------------------------------------------- */}
            <Grid item lg={3} xl={1.6}>
              <TwoCard image={nsv} text={"NSV Data"} />
            </Grid>
            <Grid item lg={9} xl={3}>
              <Gauge
                status="HighWay Safety"
                text="NSV"
                GaugeValue={
                  (state.HSMedianPeak +
                    state.HSEarthenShoulderPeak +
                    state.HSSolarBlinkerPeak) /
                  7
                }
              />
            </Grid>
            <Grid item lg={6} xl={4}>
              <PieGraph
                status="HighWay Safety"
                text="NSV"
                GaugeValue={
                  (state.HSMedianPeak +
                    state.HSEarthenShoulderPeak +
                    state.HSSolarBlinkerPeak) /
                  7
                }
                Median={state.HSMedianPeak}
                EarthenShoulder={state.HSEarthenShoulderPeak}
                SolarBlinkers={state.HSSolarBlinkerPeak}
              />
            </Grid>
            <Grid item lg={6} xl={3}>
              <Stacked
                status="HighWay Safety"
                text="NSV"
                Median={state.HSMedianPeak}
                EarthenShoulder={state.HSEarthenShoulderPeak}
                SolarBlinkers={state.HSSolarBlinkerPeak}
              />
            </Grid>
            {/* =================================================== */}
            <Grid item lg={3} xl={1.6}>
              <TwoCard image={fast} text={"FASTag Data"} />
            </Grid>
            <Grid item lg={9} xl={3}>
              <Gauge
                status="HighWay Safety"
                text="FAStag"
                GaugeValue={
                  (hedata.Card_Value[0].Traffic_Volume +
                    hedata.Card_Value[0].Operating_Speed +
                    hedata.Card_Value[0].Delay_Toll_Plaza) /
                  23.5
                }
              />
            </Grid>
            <Grid item lg={6} xl={4}>
              <PieGraph
                status="HighWay Safety"
                GaugeValue={
                  (hedata.Card_Value[0].Traffic_Volume +
                    hedata.Card_Value[0].Operating_Speed +
                    hedata.Card_Value[0].Delay_Toll_Plaza) /
                  23.5
                }
                text="FAStag"
                TafficVolume={hedata.Card_Value[0].Traffic_Volume}
                OperatingSpeed={hedata.Card_Value[0].Operating_Speed}
                DelayTollPlaza={hedata.Card_Value[0].Delay_Toll_Plaza}
              />
            </Grid>
            <Grid item lg={6} xl={3}>
              <Stacked
                status="HighWay Safety"
                text="FAStag"
                TafficVolume={hedata.Card_Value[0].Traffic_Volume}
                OperatingSpeed={hedata.Card_Value[0].Operating_Speed}
                DelayTollPlaza={hedata.Card_Value[0].Delay_Toll_Plaza}
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid
            container
            spacing={3}
            sx={{
              border: "2px solid #e4e6e9",
              pr: 3.5,
              pb: 3,
              marginLeft: "-11px",
            }}
          >
            <Grid item lg={3} xl={3}>
              <TwoCard image={drone} text={"Drone Data"} />
            </Grid>
            <Grid item lg={9} xl={9}>
              <Gauge
                status="HighWay Safety"
                text="Drone"
                GaugeValue={
                  (state.HSCrashBarrierPeak + state.HSCrossMovementPeak) / 3
                }
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph
                status="HighWay Safety"
                text="Drone"
                GaugeValue={
                  (state.HSCrashBarrierPeak + state.HSCrossMovementPeak) / 3
                }
                DamagedBarrier={state.HSCrashBarrierPeak}
                CrossMovement={state.HSCrossMovementPeak}
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <Stacked
                status="HighWay Safety"
                text="Drone"
                DamagedBarrier={state.HSCrashBarrierPeak}
                CrossMovement={state.HSCrossMovementPeak}
              />
            </Grid>
          </Grid>

          {/* -------------------------------------------- */}
          <Grid
            container
            spacing={3}
            sx={{
              border: "2px solid #e4e6e9",
              pr: 3.5,
              pb: 3,
              my: 2,
              marginLeft: "-11px",
            }}
          >
            <Grid item lg={3} xl={3}>
              <TwoCard image={nsv} text={"NSV Data"} />
            </Grid>
            <Grid item lg={9} xl={9}>
              <Gauge
                status="HighWay Safety"
                text="NSV"
                GaugeValue={
                  (state.HSMedianPeak +
                    state.HSEarthenShoulderPeak +
                    state.HSSolarBlinkerPeak) /
                  7
                }
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph
                status="HighWay Safety"
                text="NSV"
                GaugeValue={
                  (state.HSMedianPeak +
                    state.HSEarthenShoulderPeak +
                    state.HSSolarBlinkerPeak) /
                  7
                }
                Median={state.HSMedianPeak}
                EarthenShoulder={state.HSEarthenShoulderPeak}
                SolarBlinkers={state.HSSolarBlinkerPeak}
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <Stacked
                status="HighWay Safety"
                text="NSV"
                Median={state.HSMedianPeak}
                EarthenShoulder={state.HSEarthenShoulderPeak}
                SolarBlinkers={state.HSSolarBlinkerPeak}
              />
            </Grid>
          </Grid>
          {/* =================================================== */}
          <Grid
            container
            spacing={3}
            sx={{
              border: "2px solid #e4e6e9",
              pr: 3.5,
              my: 2,
              pb: 3,
              marginLeft: "-11px",
            }}
          >
            <Grid item lg={3} xl={3}>
              <TwoCard image={toll} text={"Toll Data"} />
            </Grid>
            <Grid item lg={9} xl={9}>
              <Gauge
                status="HighWay Safety"
                text="Toll Data"
                GaugeValue={
                  (hedata.Card_Value[0].Accident_per_km +
                    hedata.Card_Value[0].Accident_Severity_Index +
                    hedata.Card_Value[0].Avg_Ambulance_Response_Time +
                    hedata.Card_Value[0].Avg_Incident_Response_Time +
                    hedata.Card_Value[0].Roadway_Clearance_Time) /
                  16
                }
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph
                status="HighWay Safety"
                GaugeValue={
                  (hedata.Card_Value[0].Accident_per_km +
                    hedata.Card_Value[0].Accident_Severity_Index +
                    hedata.Card_Value[0].Avg_Ambulance_Response_Time +
                    hedata.Card_Value[0].Avg_Incident_Response_Time +
                    hedata.Card_Value[0].Roadway_Clearance_Time) /
                  16
                }
                text="Toll Data"
                AccidentPerKM={hedata.Card_Value[0].Accident_per_km}
                AccidentSeverityIndex={
                  hedata.Card_Value[0].Accident_Severity_Index
                }
                AmbulanceResponseTime={
                  hedata.Card_Value[0].Avg_Ambulance_Response_Time
                }
                IncidentResponseTime={
                  hedata.Card_Value[0].Avg_Incident_Response_Time
                }
                RoadwayClearanceTime={
                  hedata.Card_Value[0].Roadway_Clearance_Time
                }
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <Stacked
                status="HighWay Safety"
                text="Toll Data"
                AccidentPerKM={hedata.Card_Value[0].Accident_per_km}
                AccidentSeverityIndex={
                  hedata.Card_Value[0].Accident_Severity_Index
                }
                AmbulanceResponseTime={
                  hedata.Card_Value[0].Avg_Ambulance_Response_Time
                }
                IncidentResponseTime={
                  hedata.Card_Value[0].Avg_Incident_Response_Time
                }
                RoadwayClearanceTime={
                  hedata.Card_Value[0].Roadway_Clearance_Time
                }
              />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
