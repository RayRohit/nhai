import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import blurred from "../Assests/Images/blurred_lanes.png";
import cones from "../Assests/Images/cones.png";
import patchwork from "../Assests/Images/patchwork.png";
import potholes from "../Assests/Images/potholes.png";
import stains from "../Assests/Images/stainss.png";
import patch from "../Assests/Images/patch_works.png";
import MaintainanceGuage from "./MaintenanceGuage";
import MaintainancePie from "./MaintenancePie";
import Scatter from "./Scatter";
import video from "../videos/comp.mp4";
import { AppContext } from "../AppContext/AppContext";


export default function Maintenance() {

  const {state} = useContext(AppContext)

  console.log(state)

  return (
    <>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          borderRadius: "10px",
          color: "#E4E6E9",
        }}
      >
        <Typography variant="h5">
          Maintainance Analysis Summary of "Drone_video_4"
        </Typography>
        <Typography variant="h6" color="#969ea9" sx={{ fontSize: "16px" }}>
          Statistics for a <span style={{ fontWeight: "bolder" }}>15.95</span>{" "}
          minutes video spanning across{" "}
          <span style={{ fontWeight: "bolder" }}>9.57</span> kilometers of the
          national highway.
        </Typography>
      </Paper>
      <Grid container spacing={2} sx={{ my: 1 }}>
        <Grid item xs={2.4}>
          <Card
            sx={{
              background: "#273143",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#E4E6E9",
              borderRadius: "10px",
              p: 2,
              height: "170px",
            }}
          >
            <img src={blurred} width="60px" />
            <Typography variant="h6">Blurred Lanes</Typography>
            <Typography variant="h6">211</Typography>
          </Card>
        </Grid>
        <Grid item xs={2.4}>
          <Card
            sx={{
              background: "#273143",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#E4E6E9",
              borderRadius: "10px",
              p: 2,
              height: "170px",
            }}
          >
            <img src={patchwork} width="60px" />
            <Typography variant="h6" sx={{ pt: 1 }}>
              Patched Works
            </Typography>
            <Typography variant="h6">211</Typography>
          </Card>
        </Grid>
        <Grid item xs={2.4}>
          <Card
            sx={{
              background: "#273143",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#E4E6E9",
              borderRadius: "10px",
              p: 2,
              height: "170px",
            }}
          >
            <img src={cones} width="60px" />
            <Typography variant="h6">Traffic Cones</Typography>
            <Typography variant="h6">211</Typography>
          </Card>
        </Grid>
        <Grid item xs={2.4}>
          <Card
            sx={{
              background: "#273143",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#E4E6E9",
              borderRadius: "10px",
              p: 2,
              height: "170px",
            }}
          >
            <img src={potholes} width="60px" />
            <Typography variant="h6" sx={{ pt: 1 }}>
              Craks & Potholes
            </Typography>
            <Typography variant="h6">211</Typography>
          </Card>
        </Grid>
        <Grid item xs={2.4}>
          <Card
            sx={{
              background: "#273143",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#E4E6E9",
              borderRadius: "10px",
              p: 2,
              height: "170px",
            }}
          >
            <img src={stains} width="60px" />
            <Typography variant="h6" sx={{ pt: 1 }}>
              Road Stains
            </Typography>
            <Typography variant="h6">211</Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper
            sx={{
              background: "#273143",
              p: 2,
              borderRadius: "10px",
              color: "#e4e6e9",
              my: 1,
            }}
          >
            <Box>
              <Typography variant="h6">Road Quality Index(RQI)</Typography>
              <Typography variant="p" color="#969ea9" sx={{ fontSize: "16px" }}>
                <i>Indicator of the road quality based on anomalies.</i>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "354px",
                }}
              >
                <Card
                  sx={{
                    p: 2,
                    background: "#1b2531",
                    color: "#e4e6e9",
                    fontWeight: "bolder",
                    borderRadius: "10px",
                    width: "105px",
                    textAlign: "center",
                    my: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    Fit
                  </Typography>
                  <Typography variant="h6">78%</Typography>
                </Card>
                <Box>
                  <MaintainanceGuage />
                </Box>
                <Card
                  sx={{
                    p: 2,
                    background: "#1b2531",
                    color: "#e4e6e9",
                    fontWeight: "bolder",
                    borderRadius: "10px",
                    width: "105px",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6">Gap</Typography>
                  <Typography variant="h6">22%</Typography>
                </Card>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            sx={{
              background: "#273143",
              p: 2,
              //   height: "300px",
              borderRadius: "10px",
              my: 1,
            }}
          >
            <Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ color: "#e4e6e9", fontWeight: "bolder" }}
                >
                  Gap Analysis of <span style={{ color: "red" }}>22%</span> for
                  RQI
                </Typography>
                <Typography variant="p" sx={{ color: "#969ea9" }}>
                  Spread of paramaters contributing to RQI
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    height: "354px",
                  }}
                >
                  <Box sx={{ my: 2, width: "100%" }}>
                    <MaintainancePie />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          //   height: "300px",
          borderRadius: "10px",
          my: 1,
          color: "#E4E6E9",
        }}
      >
        <Typography variant="h5">Detailed Quality Inference</Typography>
        <Typography variant="p" sx={{ fontSize: "15px", color: "#969ea9" }}>
          Scatter plot between the distance at which the anomaly is present
          along the road and the width of the road
        </Typography>
        <Box sx={{ py: 2 }}>
          <Scatter />
        </Box>
      </Paper>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          //   height: "300px",
          borderRadius: "10px",
          my: 1,
          color: "#E4E6E9",
        }}
      >
        <Typography variant="h5">Green Index</Typography>
        <Typography variant="p">
          Indicator Of Green Health Of Highway Based On Number Of Trees Along
          The Road With Respect To Ideal Number Of Trees
        </Typography>
        <ul style={{ fontWeight: "500", lineHeight: 2 }}>
          <li>
            Ideal number of trees per 100 meter of road -{" "}
            <span style={{ color: "" }}>9</span>
          </li>
          <li>
            Number of trees required for 9070 meters -{" "}
            <span style={{ color: "" }}>816</span>
          </li>
          <li>
            Trees detected along the traversed distance by the drone -{" "}
            <span style={{ color: "" }}>0</span>
          </li>
        </ul>
      </Paper>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          borderRadius: "10px",
          my: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "#e4e6e9", fontWeight: "bolder" }}
        >
          Detailed Quality Inference Video
        </Typography>
        <video width="100%" controls style={{ margin: "10px 0 10px 0" }}>
          <source src={video} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </Paper>
    </>
  );
}
