import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import blurred from "../Assests/Images/blurred_lanes.png";
import cracks from "../Assests/Images/cracks.png";
import stains from "../Assests/Images/stains.png";
import traffic from "../Assests/Images/traffic.png";
import patch from "../Assests/Images/patch_works.png";
import PieGraph from "../TwoGraphs/PieGraph";
import CompGuage from "./CompGuage";

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
            <Paper
              sx={{
                background: "#273143",
                p: 2,
                borderRadius: "10px",
                color: "#E4E6E9",
                my: 2,
              }}
            >
              <Grid item xs>
                <Box
                  sx={{
                    background: "#273143",
                    p: 2,
                    borderRadius: "10px",
                    color: "#E4E6E9",
                    my: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Card
                    sx={{
                      background: "#1b2531",
                      display: "flex",
                      justifyContent: "space-between",
                      // flexDirection: "column",
                      alignItems: "center",
                      px: 2,
                      width: "20vw",
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
              <Grid item xs>
                <Box
                  sx={{
                    background: "#273143",
                    p: 2,
                    borderRadius: "10px",
                    color: "#E4E6E9",
                    my: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Card
                    sx={{
                      background: "#1b2531",
                      display: "flex",
                      justifyContent: "space-between",
                      // flexDirection: "column",
                      alignItems: "center",
                      px: 2,
                      width: "20vw",
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
              <Grid item xs>
                <Box
                  sx={{
                    background: "#273143",
                    p: 2,
                    borderRadius: "10px",
                    color: "#E4E6E9",
                    my: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Card
                    sx={{
                      background: "#1b2531",
                      display: "flex",
                      justifyContent: "space-between",
                      // flexDirection: "column",
                      alignItems: "center",
                      px: 2,
                      width: "20vw",
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
              <Grid item xs>
                <Box
                  sx={{
                    background: "#273143",
                    p: 2,
                    borderRadius: "10px",
                    color: "#E4E6E9",
                    my: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Card
                    sx={{
                      background: "#1b2531",
                      display: "flex",
                      justifyContent: "space-between",
                      // flexDirection: "column",
                      alignItems: "center",
                      px: 2,
                      width: "20vw",
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
              <Grid item xs>
                <Box
                  sx={{
                    background: "#273143",
                    p: 2,
                    borderRadius: "10px",
                    color: "#E4E6E9",
                    my: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Card
                    sx={{
                      background: "#1b2531",
                      display: "flex",
                      justifyContent: "space-between",
                      // flexDirection: "column",
                      alignItems: "center",
                      px: 2,
                      width: "20vw",
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
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={8} >
          <Grid container sx={{ml:12,mt:1}}>
            <grid item xs={12}>
              <Paper
                sx={{
                  background: "#273143",
                  p: 2,
                  borderRadius: "10px",
                  color: "#e4e6e9",
                  my: 1,
                  width:'51vw'
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
                      <Typography variant="h6">100%</Typography>
                    </Card>
                    <Box>
                      <CompGuage />
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
                        0
                      </Typography>
                    </Card>
                  </Box>
                </Box>
              </Paper>
            </grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
