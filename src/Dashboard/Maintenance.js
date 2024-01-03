import { Box, Button, Card, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import blurred from "../Assests/Images/blurred_lanes.png";
import cones from "../Assests/Images/cones.png";
import patchwork from "../Assests/Images/patchwork.png";
import potholes from "../Assests/Images/potholes.png";
import stains from "../Assests/Images/stainss.png";
import patch from "../Assests/Images/patch_works.png";
import MaintainanceGuage from "./MaintenanceGuage";
import MaintainancePie from "./MaintenancePie";
import Scatter from "./Scatter";
import video from "../videos/comp.mp4";
import { AppContext } from "../AppContext/AppContext";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from "@mui/material/Modal";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import Modall from "./Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Maintenance() {
  const { state } = useContext(AppContext);
  const [BluredLanes, setBluredLines] = useState(undefined);
  const [CracksPotholes, setCracksPotholes] = useState(undefined);
  const [PatchWork, setPatchWork] = useState(undefined);
  const [TrafficCones, setTrafficCones] = useState(undefined);
  const [RoadStains, setRoadStains] = useState(undefined);
  const [image, setImage] = useState("");

  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (state.maintanancejson !== undefined) {
      state.maintanancejson.Heat_Map.forEach((el) => {
        let object = {};
        if (el.name === "Blured Lanes") setBluredLines(el.data);
        else if (el.name === "Cracks & Potholes") setCracksPotholes(el.data);
        else if (el.name === "Patch Work") setPatchWork(el.data);
        else if (el.name === "Traffic Cones") setTrafficCones(el.data);
        else if (el.name === "Road Stains") setRoadStains(el.data);
      });
    }
  }, [state.maintanancejson]);
  console.log(state);
  function ModalPopUp(img) {
    console.log(img);
    setImage(img);
    setOpen(true);
  }
  console.log(state);

  return (
    <>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          borderRadius: "10px",
          color: "#E4E6E9",
        }}
      >
        <Typography variant="h5">
          Maintainance Analysis Summary of "Drone_video_4"
        </Typography>
        <Typography variant="h6" color="#969ea9" sx={{ fontSize: "16px" }}>
          Statistics for a{" "}
          <span style={{ fontWeight: "bolder" }}>
            {(state.maintanancejson.Time_of_Video / 60).toFixed(2)}
          </span>{" "}
          minutes video spanning across{" "}
          <span style={{ fontWeight: "bolder" }}>
            {(state.maintanancejson.Distance_Traversed / 1000).toFixed(2)}
          </span>{" "}
          kilometers of the national highway.
        </Typography>
      </Paper>
      <Grid container spacing={2} sx={{ my: 1 }}>
        <Grid item xs={2.4}>
          <Card
            sx={{
              background: "#273143",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#E4E6E9",
              borderRadius: "10px",
              p: 2,
              height: "170px",
            }}
          >
            <img src={blurred} width="60px" />
            <Typography variant="h6">Blurred Lanes</Typography>
            <Typography variant="h6">{BluredLanes?.length}</Typography>
          </Card>
        </Grid>
        <Grid item xs={2.4}>
          <Card
            sx={{
              background: "#273143",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#E4E6E9",
              borderRadius: "10px",
              p: 2,
              height: "170px",
            }}
          >
            <img src={patchwork} width="60px" />
            <Typography variant="h6" sx={{ pt: 1 }}>
              Patched Works
            </Typography>
            <Typography variant="h6">{PatchWork?.length}</Typography>
          </Card>
        </Grid>
        <Grid item xs={2.4}>
          <Card
            sx={{
              background: "#273143",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#E4E6E9",
              borderRadius: "10px",
              p: 2,
              height: "170px",
            }}
          >
            <img src={cones} width="60px" />
            <Typography variant="h6">Traffic Cones</Typography>
            <Typography variant="h6">{TrafficCones?.length}</Typography>
          </Card>
        </Grid>
        <Grid item xs={2.4}>
          <Card
            sx={{
              background: "#273143",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#E4E6E9",
              borderRadius: "10px",
              p: 2,
              height: "170px",
            }}
          >
            <img src={potholes} width="60px" />
            <Typography variant="h6" sx={{ pt: 1 }}>
              Cracks & Potholes
            </Typography>
            <Typography variant="h6">{CracksPotholes?.length}</Typography>
          </Card>
        </Grid>
        <Grid item xs={2.4}>
          <Card
            sx={{
              background: "#273143",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#E4E6E9",
              borderRadius: "10px",
              p: 2,
              height: "170px",
            }}
          >
            <img src={stains} width="60px" />
            <Typography variant="h6" sx={{ pt: 1 }}>
              Road Stains
            </Typography>
            <Typography variant="h6">{RoadStains?.length}</Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
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
                  height: "354px",
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
                    my: 1,
                  }}
                >
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    Fit
                  </Typography>
                  <Typography variant="h6">
                    {state.maintanancejson.Saftey_Index.Final_Saftey_Value}%
                  </Typography>
                </Card>
                <Box>
                  <MaintainanceGuage graphdata={state.maintanancejson} />
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
                  <Typography variant="h6">
                    {100 -
                      state.maintanancejson.Saftey_Index.Final_Saftey_Value}
                    %
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
              //   height: "300px",
              borderRadius: "10px",
              my: 1,
            }}
          >
            <Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ color: "#e4e6e9", fontWeight: "bolder" }}
                >
                  Gap Analysis of{" "}
                  <span style={{ color: "red" }}>
                    {100 -
                      state.maintanancejson.Saftey_Index.Final_Saftey_Value}
                    %
                  </span>{" "}
                  for RQI
                </Typography>
                <Typography variant="p" sx={{ color: "#969ea9" }}>
                  Spread of paramaters contributing to RQI
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    height: "354px",
                  }}
                >
                  <Box sx={{ my: 2, width: "100%" }}>
                    <MaintainancePie graphdata={state.maintanancejson} />
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
          //   height: "300px",
          borderRadius: "10px",
          my: 1,
          color: "#E4E6E9",
        }}
      >
        <Typography variant="h5">Detailed Quality Inference</Typography>
        <Typography variant="p" sx={{ fontSize: "15px", color: "#969ea9" }}>
          Scatter plot between the distance at which the anomaly is present
          along the road and the width of the road
        </Typography>
        <Box sx={{ py: 2 }}>
          <Scatter
            graphdata={state.maintanancejson}
            BluredLanes={BluredLanes}
            CracksPotholes={CracksPotholes}
            PatchWork={PatchWork}
            TrafficCones={TrafficCones}
            RoadStains={RoadStains}
            ModalPopUp={ModalPopUp}
          />
        </Box>
      </Paper>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          //   height: "300px",
          borderRadius: "10px",
          my: 1,
          color: "#E4E6E9",
        }}
      >
        <Typography variant="h5">Green Index</Typography>
        <Typography variant="p">
          Indicator Of Green Health Of Highway Based On Number Of Trees Along
          The Road With Respect To Ideal Number Of Trees
        </Typography>
        <ul style={{ fontWeight: "500", lineHeight: 2 }}>
          <li>
            Ideal number of trees per 100 meter of road -{" "}
            <span style={{ color: "" }}>9</span>
          </li>
          <li>
            Number of trees required for 9070 meters -{" "}
            <span style={{ color: "" }}>816</span>
          </li>
          <li>
            Trees detected along the traversed distance by the drone -{" "}
            <span style={{ color: "" }}>
              {state.maintanancejson.Trees_Detected}
            </span>
          </li>
        </ul>
      </Paper>
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
          <source
            src={`http://209.209.41.154:5003/${state.maintanancejson.Video_Name}.mp4`}
            type="video/mp4"
          />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </Paper>
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <img src={`http://209.209.41.154:5003/${image}`} alt={image} width={600}  /> */}
            <TransformWrapper>
              {/* <TransformComponent>
							<img src={img} alt="test" />
						</TransformComponent> */}
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                  <div className="p-2 d-flex justify-content-between	">
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Button variant="contained" onClick={handleClose}>
                        X
                      </Button>
                    </Box>
                    <Box sx={{ my: 1 }}>
                      <Button
                        variant="contained"
                        onClick={() => zoomIn()}
                        sx={{ m: 2 }}
                      >
                        +
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => zoomOut()}
                        sx={{ m: 2 }}
                      >
                        -
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => resetTransform()}
                      >
                        Reset
                      </Button>
                    </Box>
                  </div>
                  <TransformComponent>
                    <img
                      src={`http://209.209.41.154:5003/${image}`}
                      alt={image}
                      width={600}
                    />
                  </TransformComponent>
                </React.Fragment>
              )}
            </TransformWrapper>
          </Box>
        </Modal>
      </div>
      {/* <Modall /> */}
    </>
  );
}
