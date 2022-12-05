import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import StackedBar from "../Dashboard/StackedBar";

export default function Stacked(props) {
  return (
    <>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          height: "300px",
          borderRadius:"10px"
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ color: "#e4e6e9", fontWeight: "bolder" }}
          >
            Detailed Score Analysis
          </Typography>
          <Typography variant="p" sx={{ color: "#969ea9" }}>
                 Stacked Bar Showing No. Of Points Acheived vs Target Points
                </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Box sx={{ width: "30vw" }}>
              <StackedBar {...props} />
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
