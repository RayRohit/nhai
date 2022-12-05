import { Box, Card, Paper, Typography } from "@mui/material";
import React from "react";
import GaugeChart from "../Dashboard/GaugeChart";

export default function Gauge(props) {
  console.log(props)
  return (
    <>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          height:'300px',
          borderRadius:"10px"
        }}
      >
          <Box>
            <Typography
              variant="h5" sx={{ color: "#e4e6e9", fontWeight: "bolder" }}>
              Evaluation Rating Index (ERI)
            </Typography>
            <Typography variant="p" sx={{ color: "#969ea9" }}>
              Indicator of the Evaluation Rating based on the detected
              parameters.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Box>
                <Card
                  sx={{
                    mt: 6,
                    py: 2,
                    px: 3,
                    borderRadius: "20px",
                    background: "#1B2531",
                    color: "#E4E6E9",
                  }}
                >
                  <Typography variant="h6">Fit</Typography>
                  <Typography variant="p" sx={{ color: "#86C06A" }}>
                    {(props.GaugeValue?.toFixed(4) * 100).toFixed(2)}
                  </Typography>
                </Card>
              </Box>
              <Box>
                <GaugeChart {...props} />
              </Box>
              <Box>
                <Card
                  sx={{
                    mt: 6,
                    py: 2,
                    px: 3,
                    borderRadius: "20px",
                    background: "#1B2531",
                    color: "#E4E6E9",
                  }}
                >
                  <Typography variant="h6">Gap</Typography>
                  <Typography variant="p" sx={{ color: "#F5365C" }}>
                    {(100 - props.GaugeValue?.toFixed(4) * 100).toFixed(2)}
                  </Typography>
                </Card>
              </Box>
            </Box>
          </Box>
      </Paper>
    </>
  );
}
