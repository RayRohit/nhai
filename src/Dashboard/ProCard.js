import { Box, Card, Typography } from "@mui/material";
import React from "react";

export default function ProCard(props) {
  return (
    <>
      <Box>
        <Card
          sx={{
            p: 2,
            background: "#273143",
            color: "#E4E6E9",
            width: "300px",
            borderRadius: "10px",
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
          }}
        >
            <Box>
                <img src={props.image} alt="progress logo" width={50}/>
            </Box>
            <Typography variant="h6" sx={{fontWeight:'bolder',fontSize:'16px',py:2}}>{props.title}</Typography>
            <Typography variant="h6" sx={{fontSize:'16px'}}>{props.value}</Typography>
        </Card>
      </Box>
    </>
  );
}
