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
import toll from "../Assests/Images/toll.png";
import { AppContext } from "../AppContext/AppContext";
import data from "./Drone_data.json";

export default function UserServices() {
  const matches = useMediaQuery("(min-width:2560px)");
  const { state } = useContext(AppContext);

  console.log(data);
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
              <Gauge GaugeValue={data.Card_Value.Plantation / 3} />
            </Grid>
            <Grid item lg={6} xl={4}>
              <PieGraph
                status="User Services"
                text="Drone"
                GaugeValue={3 - data.Card_Value.Plantation}
                Plantation={data.Card_Value.Plantation}
              />
            </Grid>
            <Grid item lg={6} xl={3}>
              <Stacked
                status="User Services"
                text="Drone"
                Plantation={data.Card_Value.Plantation}
              />
            </Grid>
            {/* -------------------------------------------- */}
            <Grid item lg={3} xl={1.6}>
              <TwoCard image={nsv} text={"NSV Data"} />
            </Grid>
            <Grid item lg={9} xl={3}>
              <Gauge
                status="User Services"
                text="NSV"
                GaugeValue={
                  (state.USIllegalEncroachment +
                    state.USSpeedBreakers +
                    state.USTrafficBarrier) /
                  4
                }
              />
            </Grid>
            <Grid item lg={6} xl={4}>
              <PieGraph
                status="User Services"
                text="NSV"
                GaugeValue={
                  (state.USIllegalEncroachment +
                    state.USSpeedBreakers +
                    state.USTrafficBarrier) /
                  4
                }
                Enchrochment={state.USIllegalEncroachment}
                Speedbreaker={state.USSpeedBreakers}
                TrafficBarrier={state.USTrafficBarrier}
              />
            </Grid>
            <Grid item lg={6} xl={3}>
              <Stacked
                status="User Services"
                text="NSV"
                Enchrochment={state.USIllegalEncroachment}
                Speedbreaker={state.USSpeedBreakers}
                TrafficBarrier={state.USTrafficBarrier}
              />
            </Grid>
            {/* =================================================== */}
            <Grid item lg={3} xl={1.6}>
              <TwoCard image={toll} text={"Toll Data"} />
            </Grid>
            <Grid item lg={9} xl={3}>
              <Gauge />
            </Grid>
            <Grid item lg={6} xl={4}>
              <PieGraph />
            </Grid>
            <Grid item lg={6} xl={3}>
              <Stacked />
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
              <Gauge GaugeValue={data.Card_Value.Plantation / 3} />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph
                status="User Services"
                text="Drone"
                GaugeValue={data.Card_Value.Plantation / 3}
                Plantation={data.Card_Value.Plantation}
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <Stacked
                status="User Services"
                text="Drone"
                Plantation={data.Card_Value.Plantation}
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
                status="User Services"
                text="NSV"
                GaugeValue={
                  (state.USIllegalEncroachment +
                    state.USSpeedBreakers +
                    state.USTrafficBarrier) /
                  4
                }
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph
                status="User Services"
                text="NSV"
                GaugeValue={
                  (state.USIllegalEncroachment +
                    state.USSpeedBreakers +
                    state.USTrafficBarrier) /
                  4
                }
                Enchrochment={state.USIllegalEncroachment}
                Speedbreaker={state.USSpeedBreakers}
                TrafficBarrier={state.USTrafficBarrier}
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <Stacked
                status="User Services"
                text="NSV"
                Enchrochment={state.USIllegalEncroachment}
                Speedbreaker={state.USSpeedBreakers}
                TrafficBarrier={state.USTrafficBarrier}
              />
            </Grid>
          </Grid>
          {/* <Grid item lg={3} xl={3}>
              <TwoCard image={nsv} text={"NSV Data"} />
            </Grid>
            <Grid item lg={9} xl={9}>
              <Gauge />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph />
            </Grid>
            <Grid item lg={6} xl={6}>
              <Stacked />
            </Grid> */}
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
              {/* <Gauge GaugeValue={0} /> */}
            </Grid>
            <Grid item lg={6} xl={6}>
              {/* <PieGraph
                status="User Services"
                text="Toll Data"
                // GaugeValue={0}
                // WaysideAmenities={4 - 0}
                // ToiletandDrinkingWater = {2-0}
                // SatisfactionIndex={4-0}
              /> */}
            </Grid>
            <Grid item lg={6} xl={6}>
              {/* <Stacked /> */}
            </Grid>
          </Grid>
          {/* <Grid item lg={3} xl={3}>
              <TwoCard image={fast} text={"FASTag Data"} />
            </Grid>
            <Grid item lg={9} xl={9}>
              <Gauge />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph />
            </Grid>
            <Grid item lg={6} xl={6}>
              <Stacked />
            </Grid> */}
        </>
      )}
    </>
  );
}
