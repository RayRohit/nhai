import { Grid, Typography } from "@mui/material";
import React from "react";
import ProCard from "./ProCard";
// import drone from "../Assests/Images/drone.png";
import ex from "../Assests/Images/Excavationn.png";
import mount from "../Assests/Images/mountingg.png";
import fine from "../Assests/Images/fine.png";
import base from "../Assests/Images/base.png";
import paving from "../Assests/Images/paving.png";
import Compare from "./Compare";
import constdata from "./construction_data.json";
export default function HighwayProgress() {
  console.log(constdata);
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <ProCard image={ex} title={"Clearing and Excavation"} value={0} />
            </Grid>
            <Grid item>
              <ProCard
                image={mount}
                title={"Mounting"}
                value={constdata.card_value_current.Mounting}
              />
            </Grid>
            <Grid item>
              <ProCard
                image={fine}
                title={"Fine Grading"}
                value={constdata.card_value_current["Fine Grading"]}
              />
            </Grid>
            <Grid item>
              <ProCard
                image={paving}
                title={"Asphalt Paving"}
                value={constdata.card_value_current["Asphalt_Base"]} //Asphalt_Base
              />
            </Grid>
            <Grid item>
              <ProCard
                image={base}
                title={"Asphalt Base"}
                value={constdata.card_value_current["Asphalt Pavement"]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} sx={{ ml: 8 }}>
          <Compare  />
        </Grid>
        <Typography
          variant="h6"
          sx={{ p: 2, color: "#A2A99B", fontSize: "16px" }}
        >
          <span style={{ color: "red" }}>*</span> The numerical values shown are
          the indicators of the distance covered by each phase in meters for the
          current month in the analysed video
        </Typography>
      </Grid>
    </>
  );
}
