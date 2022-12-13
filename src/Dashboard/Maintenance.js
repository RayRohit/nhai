import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import blurred from "../Assests/Images/blurred_lanes.png";
import cones from "../Assests/Images/cones.png";
import patchwork from "../Assests/Images/patchwork.png";
import potholes from "../Assests/Images/potholes.png";
import patch from "../Assests/Images/patch_works.png";  
import MaintainanceGuage from "./MaintenanceGuage";
import MaintainancePie from "./MaintenancePie";

export default function Maintenance() {
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
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Grid container>
            <Grid item>
              <Box
                sx={{
                  // background: "#273143",
                  p: 2,
                  borderRadius: "10px",
                  color: "#E4E6E9",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card
                  sx={{
                    background: "#273143",
                    display: "flex",
                    justifyContent: "space-between",
                    // flexDirection: "column",
                    alignItems: "center",
                    p: 2,
                    width: "20vw",borderRadius:"10px"
                  }}
                >
                  <Box>
                    <img src={blurred} alt="blurred lanes" width="50px" />
                  </Box>
                  <Typography variant="h6" color="#E4E6E9">
                    Blurred Lanes
                  </Typography>
                  <Typography variant="h6" color="#E4E6E9">
                    211
                  </Typography>
                </Card>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  // background: "#273143",
                  p: 2,
                  borderRadius: "10px",
                  color: "#E4E6E9",
                  // my: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card
                  sx={{
                    background: "#273143",
                    display: "flex",
                    justifyContent: "space-between",
                    // flexDirection: "column",
                    alignItems: "center",
                    p: 2,
                    width: "20vw",borderRadius:"10px"
                  }}
                >
                  <Box>
                    <img src={blurred} alt="blurred lanes" width="50px" />
                  </Box>
                  <Typography variant="h6" color="#E4E6E9">
                    Blurred Lanes
                  </Typography>
                  <Typography variant="h6" color="#E4E6E9">
                    211
                  </Typography>
                </Card>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  // background: "#273143",
                  p: 2,
                  borderRadius: "10px",
                  color: "#E4E6E9",
                  // my: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card
                  sx={{
                    background: "#273143",
                    display: "flex",
                    justifyContent: "space-between",
                    // flexDirection: "column",
                    alignItems: "center",
                    p: 2,
                    width: "20vw",borderRadius:"10px"
                  }}
                >
                  <Box>
                    <img src={blurred} alt="blurred lanes" width="50px" />
                  </Box>
                  <Typography variant="h6" color="#E4E6E9">
                    Blurred Lanes
                  </Typography>
                  <Typography variant="h6" color="#E4E6E9">
                    211
                  </Typography>
                </Card>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  // background: "#273143",
                  p: 2,
                  borderRadius: "10px",
                  color: "#E4E6E9",
                  // my: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card
                  sx={{
                    background: "#273143",
                    display: "flex",
                    justifyContent: "space-between",
                    // flexDirection: "column",
                    alignItems: "center",
                    p: 2,
                    width: "20vw",borderRadius:"10px"
                  }}
                >
                  <Box>
                    <img src={blurred} alt="blurred lanes" width="50px" />
                  </Box>
                  <Typography variant="h6" color="#E4E6E9">
                    Blurred Lanes
                  </Typography>
                  <Typography variant="h6" color="#E4E6E9">
                    211
                  </Typography>
                </Card>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  // background: "#273143",
                  p: 2,
                  borderRadius: "10px",
                  color: "#E4E6E9",
                  // my: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card
                  sx={{
                    background: "#273143",
                    display: "flex",
                    justifyContent: "space-between",
                    // flexDirection: "column",
                    alignItems: "center",
                    p: 2,
                    width: "20vw",borderRadius:"10px"
                  }}
                >
                  <Box>
                    <img src={blurred} alt="blurred lanes" width="50px" />
                  </Box>
                  <Typography variant="h6" color="#E4E6E9">
                    Blurred Lanes
                  </Typography>
                  <Typography variant="h6" color="#E4E6E9">
                    211
                  </Typography>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid container sx={{ ml: 12, mt: 1 }}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  background: "#273143",
                  p: 2,
                  borderRadius: "10px",
                  color: "#e4e6e9",
                  my: 1,
                  width: "51vw",
                }}
              >
                <Box>
                  <Typography variant="h6">Road Quality Index(RQI)</Typography>
                  <Typography
                    variant="p"
                    color="#969ea9"
                    sx={{ fontSize: "16px" }}
                  >
                    <i>Indicator of the road quality based on anomalies.</i>
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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
                      }}
                    >
                      <Typography variant="h6" sx={{ textAlign: "center" }}>
                        Gap
                      </Typography>
                      <Typography variant="h6" sx={{ textAlign: "center" }}>
                        22%
                      </Typography>
                    </Card>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={{
                  background: "#273143",
                  p: 2,
                  //   height: "300px",
                  borderRadius: "10px",
                }}
              >
                <Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ color: "#e4e6e9", fontWeight: "bolder" }}
                    >
                      Gap Analysis of <span style={{ color: "red" }}>22%</span>{" "}
                      for RQI
                    </Typography>
                    <Typography variant="p" sx={{ color: "#969ea9" }}>
                      Spread of paramaters contributing to RQI
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-evenly" }}
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
        </Grid>
      </Grid>
    </>
  );
}
