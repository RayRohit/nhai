import { Grid, Typography } from "@mui/material";
import React from "react";
import ProCard from "./ProCard";
import drone from "../Assests/Images/drone.png";
import ex from "../Assests/Images/Excavationn.png";
import mount from "../Assests/Images/mountingg.png";
import fine from "../Assests/Images/fine.png";
import base from "../Assests/Images/base.png";
import paving from "../Assests/Images/paving.png";
import Compare from "./Compare";

export default function HighwayProgress() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <ProCard
                image={ex}
                title={"Clearing and Excavation"}
                value={0}
              />
            </Grid>
            <Grid item>
              <ProCard image={mount} title={"Mounting"} value={1004} />
            </Grid>
            <Grid item>
              <ProCard image={fine} title={"Fine Grading"} value={132} />
            </Grid>
            <Grid item>
              <ProCard image={paving} title={"Asphalt Paving"} value={603} />
            </Grid>

            <Grid item>
              <ProCard image={base} title={"Asphalt Base"} value={538} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} sx={{ ml: 8 }}>
          <Compare />
        </Grid>
        <Typography variant="h6" sx={{p:2,color:'#A2A99B',fontSize:'16px'}}>
          <span style={{color:'red'}}>*</span> The numerical values shown are the indicators of the distance covered
          by each phase in meters for the current month in the analysed video
        </Typography>
      </Grid>
    </>
  );
}
