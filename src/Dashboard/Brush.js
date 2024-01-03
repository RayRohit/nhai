import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import BrushGraph from "./BrushGraph";
import DropDown from "./Dropdown";

export default function Brush() {
  return (
    <>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          height: "335px",
          borderRadius: "10px",
        }}
      >
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h5"
              sx={{ color: "#e4e6e9", fontWeight: "bolder" }}
            >
              Static Elastic Modulus Curve
            </Typography>
            <Box sx={{ ml: "auto", mb: 1 }}>
              <DropDown
                label={"Static Elastic Modulus"}
                item1={"Static Elastic Modulus"}
                item2={"Elastic Modulus Bituminous"}
                item3={"Elastic Modulus Granular"}
              />
            </Box>
          </Box>
          <Typography variant="p" sx={{ color: "#969ea9" }}>
            Static Elastic Modulus curve for each point on the road vs the
            experimental data available of the road.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", pt: 2 }}>
            <Box sx={{ width: "30vw" }}>
              <BrushGraph />
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
