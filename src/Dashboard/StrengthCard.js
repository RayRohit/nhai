import { Box, Card, Typography } from "@mui/material";
import React from "react";

export default function StrengthCard(props) {
  return (
    <>
      <Box>
        <Card
          sx={{
            p: 2,
            background: "#273143",
            color: "#E4E6E9",
            width: "240px",
            height: "208px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h2" sx={{ fontFamily: "Merriweather, serif" }}>
              E{" "}
              <sub style={{ fontSize: "20px", fontWeight: "bold" }}>
                {props.value}
              </sub>
            </Typography>
            <Typography variant="p" sx={{ fontSize: "14px" }}>
              {props.title}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontSize: "14px", py: 1 }}
            >
              {props.val}
            </Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
}
