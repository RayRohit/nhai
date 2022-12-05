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
// import StackedBar from "./StackedBar";
import drone from "../Assests/Images/drone.png";
import nsv from "../Assests/Images/nsv.png";
import fast from "../Assests/Images/fast.png";
import hedata from "./text_data.json";
import { AppContext } from "../AppContext/AppContext";

export default function PageTwo() {
  const matches = useMediaQuery("(min-width:2560px)");
  const { state } = useContext(AppContext);
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
                status="HighWay Efficiency"
                text="Drone"
                GaugeValue={
                  (state.HEserviceRoadPeak + state.HEcarriagePeak) / 4
                }
              />
            </Grid>
            <Grid item lg={6} xl={4}>
              <PieGraph
                status="HighWay Efficiency"
                text="Drone"
                GaugeValue={
                  (state.HEserviceRoadPeak + state.HEcarriagePeak) / 4
                }
                HEserviceRoadPeak={state.HEserviceRoadPeak}
                HEcarriagePeak={state.HEcarriagePeak}
              />
            </Grid>
            <Grid item lg={6} xl={3}>
              <Stacked
                status="HighWay Efficiency"
                text="Drone"
                ServiceRoad={state.HEserviceRoadPeak}
                CarriageWay={state.HEcarriagePeak}
              />
            </Grid>
            {/* -------------------------------------------- */}
            <Grid item lg={3} xl={1.6}>
              <TwoCard image={nsv} text={"NSV Data"} />
            </Grid>
            <Grid item lg={9} xl={3}>
              <Gauge
                status="HighWay Efficiency"
                text="NSV"
                GaugeValue={
                  (state.HEStandardSignagePeak + state.HEStardardMarkingPeak) /
                  4
                }
              />
            </Grid>
            <Grid item lg={6} xl={4}>
              <PieGraph
                status="HighWay Efficiency"
                text="NSV"
                GaugeValue={
                  (state.HEStandardSignagePeak + state.HEStardardMarkingPeak) /
                  4
                }
                StandardSignage={state.HEStandardSignagePeak}
                StardardMarking={state.HEStardardMarkingPeak}
              />
            </Grid>
            <Grid item lg={6} xl={3}>
              <Stacked
                status="HighWay Efficiency"
                text="NSV"
                StandardSignage={state.HEStandardSignagePeak}
                StardardMarking={state.HEStardardMarkingPeak}
              />
            </Grid>
            {/* =================================================== */}
            <Grid item lg={3} xl={1.6}>
              <TwoCard image={fast} text={"FASTag Data"} />
            </Grid>
            <Grid item lg={9} xl={3}>
              <Gauge
                status="HighWay Efficiency"
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
                status="HighWay Efficiency"
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
                status="HighWay Efficiency"
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
                status="HighWay Efficiency"
                text="Drone"
                GaugeValue={
                  (state.HEserviceRoadPeak + state.HEcarriagePeak) / 4
                }
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph
                status="HighWay Efficiency"
                text="Drone"
                GaugeValue={
                  (state.HEserviceRoadPeak + state.HEcarriagePeak) / 4
                }
                HEserviceRoadPeak={state.HEserviceRoadPeak}
                HEcarriagePeak={state.HEcarriagePeak}
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <Stacked
                status="HighWay Efficiency"
                text="Drone"
                ServiceRoad={state.HEserviceRoadPeak}
                CarriageWay={state.HEcarriagePeak}
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
                status="HighWay Efficiency"
                text="NSV"
                GaugeValue={
                  (state.HEStandardSignagePeak + state.HEStardardMarkingPeak) /
                  4
                }
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph
                status="HighWay Efficiency"
                text="NSV"
                GaugeValue={
                  (state.HEStandardSignagePeak + state.HEStardardMarkingPeak) /
                  4
                }
                StandardSignage={state.HEStandardSignagePeak}
                StardardMarking={state.HEStardardMarkingPeak}
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <Stacked
                status="HighWay Efficiency"
                text="NSV"
                StandardSignage={state.HEStandardSignagePeak}
                StardardMarking={state.HEStardardMarkingPeak}
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
              <TwoCard image={fast} text={"FASTag Data"} />
            </Grid>
            <Grid item lg={9} xl={9}>
              <Gauge
                status="HighWay Efficiency"
                text="FAStag"
                GaugeValue={
                  (hedata.Card_Value[0].Traffic_Volume +
                    hedata.Card_Value[0].Operating_Speed +
                    hedata.Card_Value[0].Delay_Toll_Plaza) /
                  23.5
                }
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph
                status="HighWay Efficiency"
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
            <Grid item lg={6} xl={6}>
              <Stacked
                status="HighWay Efficiency"
                text="FAStag"
                TafficVolume={hedata.Card_Value[0].Traffic_Volume}
                OperatingSpeed={hedata.Card_Value[0].Operating_Speed}
                DelayTollPlaza={hedata.Card_Value[0].Delay_Toll_Plaza}
              />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
