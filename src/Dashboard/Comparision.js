import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import Compare from "./Compare";
import ComparisionGraph from "./ComparisionGraph";
import CompGuage from "./CompGuage";
import CompPie from "./CompPie";
import video from "../videos/comp.mp4";
import { AppContext } from "../AppContext/AppContext";

export default function Comparision() {
  const { state } = useContext(AppContext);

  console.log(state.comparisonjson);

  return (
    <>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          borderRadius: "10px",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            color="#E4E6E9"
            sx={{ fontWeight: "bolder" }}
          >
            Comparison Analysis Summary of
            "Static/Uploads/Comparisonvideo/Comparison"
          </Typography>
          <Typography variant="p" color="#969ea9" sx={{ fontWeight: "14px" }}>
            <i>
              Statistics for a{" "}
              {parseFloat(state.comparisonjson?.Time_of_Video / 60).toFixed(2)}{" "}
              minutes video spanning across {parseFloat(state.comparisonjson?.Distance_Traversed / 1000).toFixed(2)}
              kilometers of the national highway.
            </i>
          </Typography>
        </Box>
      </Paper>
      <Box
        sx={{
          background: "#273143",
          //   p: 2,
          borderRadius: "10px",
          my: 1,
        }}
      >
        <Box sx={{ py: 1 }}>
          <ComparisionGraph graphdata={state.comparisonjson} /> 
        </Box>
      </Box>
      <Grid container spacing={2} sx={{ my: 1 }}>
        <Grid item xs={6}>
          <Paper
            sx={{
              background: "#273143",
              p: 2,
              borderRadius: "10px",
              color: "#e4e6e9",
              fontSize: "24px",
              fontWeight: "bolder",
            }}
          >
            Previous Analysis
          </Paper>
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
                  <Typography variant="h6">{state.comparisonjson?.Left.RSI_Left} %</Typography>
                </Card>
                <Box>
                  <CompGuage previous={true} graphdata={state.comparisonjson}/> 
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
                  {100 - state.comparisonjson?.Left.RSI_Left} 
                  </Typography>
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
              borderRadius: "10px",
              color: "#e4e6e9",
              fontWeight: "bolder",
              fontSize: "24px",
            }}
          >
            Current Analysis
          </Paper>
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
                  <Typography variant="h6">{state.comparisonjson?.Right.RSI_Right} %</Typography>
                </Card>
                <Box>
                  <CompGuage previous={false} graphdata={state.comparisonjson} />
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
                  <Typography variant="h6">{100 - state.comparisonjson?.Right.RSI_Right}</Typography>
                </Card>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
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
                  Gap Analysis of <span style={{ color: "red" }}>{100 - state.comparisonjson?.Left.RSI_Left} %</span> for
                  RQI
                </Typography>
                <Typography variant="p" sx={{ color: "#969ea9" }}>
                  Spread of paramaters contributing to RQI
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Box sx={{ my: 2, width: "100%" }}>
                    <CompPie  previous={true} graphdata={state.comparisonjson} />
                  </Box>
                </Box>
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
            }}
          >
            <Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ color: "#e4e6e9", fontWeight: "bolder" }}
                >
                  Gap Analysis of <span style={{ color: "red" }}>{100 - state.comparisonjson?.Right.RSI_Right}%</span> for
                  RQI
                </Typography>
                <Typography variant="p" sx={{ color: "#969ea9" }}>
                  Spread of paramaters contributing to RQI
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Box sx={{ my: 2, width: "100%" }}>
                    <CompPie  previous={false} graphdata={state.comparisonjson} />
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
