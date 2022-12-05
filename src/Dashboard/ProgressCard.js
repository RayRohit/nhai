import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import React from "react";
import Intersection from "../Assests/Images/intersection.png";



export default function ProgressCard(props) {
  const [progress, setProgress] = React.useState(2.996);
  return (
    <Box sx={{ display: "flex", alignItems: "center" ,width:'200px'}}>
    <Box sx={{ width: "100%", mr: 1 }}>
      <LinearProgress
        sx={{ p: 0.4, borderRadius: "10px", ml: 3 }}
        variant="determinate"
        {...props}
      />
    </Box>
    <Box sx={{ minWidth: 35 }}>
      <Typography variant="body2" color="text.secondary">
        {props.value}%
      </Typography>
    </Box>
  </Box>
  );
}

{
  /* <Box
        elevation={3}
        sx={{
          width: "200px",
          height: "120px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          m: 2,
        }}
      >
        <Box sx={{ py: 1 }}>
          <img src={Intersection} alt="intersection logo" width="100px" />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
            Service Road
          </Typography>
        </Box>
        
      </Box> */
}
