import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Complete from "../Dashboard/Complete";
import CompareGraph from "./CompareGraph";

export default function Compare() {
  return (
    <>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          height: "520px",
          borderRadius: "10px",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ color: "#e4e6e9", fontWeight: "bolder" }}
          >
           Progress Bar Stack
          </Typography>
          <Typography variant="p" sx={{ color: "#969ea9" }}>
            The graph shows completion of each phase in meters 
          </Typography>
          <Box>
            <CompareGraph />
          </Box>
        </Box>
      </Paper>
    </>
  );
}
