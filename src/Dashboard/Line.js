import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ApexChart from "../Dashboard/ApexCharts";
import Drop from "./Drop";
import DropDown from "./Dropdown";

export default function Line() {
  return (
    <>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          height: "322px",
          borderRadius: "10px",
        }}
      >
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h5"
              sx={{ color: "#e4e6e9", fontWeight: "bolder" }}
            >
              Degradation Curve
            </Typography>
            <Box sx={{ ml:'auto' }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "14px", color: "#e4e6e9" }}
              >
                Weather
              </Typography>
              <Drop
                label={"Harsh"}
                item1={"Harsh"}
                item2={"Moderate"}
                item3={"Mild"}
              />
            </Box>
            <Box sx={{ mx:2 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "14px", color: "#e4e6e9" }}
              >
                Traffic
              </Typography>
              <Drop
                label={"Heavy"}
                item1={"Heavy"}
                item2={"Moderate"}
                item3={"Light  "}
              />
            </Box>
            <Box sx={{  }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "14px", color: "#e4e6e9" }}
              >
                Time
              </Typography>

              <Drop
                label={"Month"}
                item1={"Month"}
                item2={"Year"}
                item3={"Decade"}
              />
            </Box>
          </Box>
          <Typography variant="p" sx={{ color: "#969ea9" }}>
            Degradation curve of Static Elastic Modulus with respect to time.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Box sx={{ width: "30vw" }}>
              <ApexChart />
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
