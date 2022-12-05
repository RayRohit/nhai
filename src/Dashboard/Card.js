import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

export default function Cards(props) {
  const matches = useMediaQuery("(min-width:2560px)");

  return (
    <>
      {matches ? (
        <>
          <Box>
            <Card
              sx={{
                width: "420px",
                height: "300px",
                background: "#2F394C",
                color: "#E4E6E9",
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100%",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={props.image} width="140px" />
                <CardContent>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: "bolder" }}
                    gutterBottom
                  >
                    {props.text}
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <Card
              sx={{
                width: "240px",
                height: "300px",
                background: "#2F394C",
                color: "#E4E6E9",
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100%",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img src={props.image} width="140px" />
                <CardContent>
                  <Typography
                    sx={{ fontSize: 18, fontWeight: "bolder" }}
                    gutterBottom
                  >
                    {props.text}
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
        </>
      )}
    </>
  );
}
