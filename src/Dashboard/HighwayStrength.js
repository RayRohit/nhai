import { Grid } from "@mui/material";
import React from "react";
import LineGraph from "../TwoGraphs/LineGraph";
import ApexChart from "./ApexCharts";
import Brush from "./Brush";
import Line from "./Line";
import StrengthCard from "./StrengthCard";

export default function HighwayStrength() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <StrengthCard
                title={"Static Elastic Modulus"}
                val={"2.12*10^-4 MPa"}
              />
            </Grid>
            <Grid item>
              <StrengthCard
                value={1}
                title={"Elastic Modulus Bituminous"}
                val={"2.01*10^-4 MPa"}
              />
            </Grid>
            <Grid item>
              <StrengthCard
                value={2}
                title={"Elastic Modulus Granular"}
                val={"1.92*10^-4 MPa"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9} spacing={3} sx={{ ml: 10 }}>
          <Grid container direction="column" spacing={3}>
            <Grid item xs={6}>
              <Brush />
            </Grid>
            <Grid item xs={6}>
              <Line  />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
