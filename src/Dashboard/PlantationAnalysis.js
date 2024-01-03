import {
  Card,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Paper,
  Box,
  Button,
  Modal,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TreeBar from "./TreeBar";
import GradientTree from "./GradientTree";
import AvgHeight from "./AvgHeight";
import output from "../videos/output.mp4";
import plantation from "../Assests/Images/plantation.png";
import { FileUploader } from "react-drag-drop-files";
import upload from "../Assests/Images/uploadd.png";
import axios from "axios";
import ProgressBar from "./ProgressBar";
import ScatterTree from "./ScatterTree";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import seg from "../videos/inference_video.mp4";

const fileTypes = ["MP4"];

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

export default function PlantationAnalysis() {
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  const [isPostRequestCompleted, setIsPostRequestCompleted] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState("");
  const [scatter, setScatterData] = useState(null);
  const [segment, setSegment] = useState(null);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = async (files) => {
    const uploadedFile = files[0];
    setFile(URL.createObjectURL(uploadedFile));
    const formData = new FormData();
    formData.append("videos", uploadedFile);

    try {
      const response = await axios.post(
        "http://209.209.41.154:5003/plantrating",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setIsPostRequestCompleted(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      if (file) {
        try {
          const response = await axios.get(
            "http://209.209.41.154:5003/jsondata"
          );
          const jsonFilePath = response.data.file_path;
          // console.log(jsonFilePath);

          const jsonDataResponse = await axios.get(
            `http://209.209.41.154:5003/${jsonFilePath}`
          );
          console.log(typeof jsonDataResponse.data);
          console.log(jsonDataResponse.data);
          if (typeof jsonDataResponse.data === "object") {
            setJsonData(jsonDataResponse.data);
          } else {
            console.error("Data is not of object type");
          }
          // setJsonData(jsonDataResponse.data);
        } catch (error) {
          console.error(error);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [file]);
  useEffect(() => {
    if (isPostRequestCompleted) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://209.209.41.154:5003/scatterdata"
          );
          const jsonScatterPath = response.data.file_path;

          const jsonScatterResponse = await axios.get(
            `http://209.209.41.154:5003/${jsonScatterPath}`
          );
          console.log("scatter", jsonScatterResponse.data);
          setScatterData(jsonScatterResponse.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [isPostRequestCompleted]);

  useEffect(() => {
    if (isPostRequestCompleted) {
      setSegment(seg);
      // const fetchData = async () => {
      //   try {
      //     const response = await axios.get(
      //       "http://209.209.41.154:5003/videodata"
      //     );
      //     const jsonVideoPath = response.data.file_path;
      //     console.log("vide", jsonVideoPath);
      //     setSegment(jsonVideoPath);
      //   } catch (error) {
      //     console.error(error);
      //   }
      // };

      // fetchData();
    }
  }, [isPostRequestCompleted]);

  function ModalPopUp(img) {
    console.log("img", img);
    setImage(img);
    setOpen(true);
  }
  const handleReupload = () => {
    setFile(null);
    setJsonData(null);
    setIsPostRequestCompleted(false);
    setScatterData(null);
  };
  return (
    <>
      {file === null ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <Paper
              sx={{
                background: "#273143",
                p: 2,
                borderRadius: "10px",
                color: "#E4E6E9",
                width: "75vw",
                height: "60vh",
                py: 5,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                <img src={upload} alt="upload logo" width={100} />
              </Box>
              <Typography variant="h6" sx={{ textAlign: "center", py: 1 }}>
                Select Video To Upload
              </Typography>
              <Box
                sx={{
                  color: "#E4E6E9",
                  display: "flex",
                  justifyContent: "center",
                  py: 2,
                }}
              >
                <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                />
              </Box>
              <p style={{ textAlign: "center" }}>
                {/* {file ? `File name: ${file[0].name}` : "No Files Uploaded Yet"} */}
              </p>{" "}
              {/* {props.status === "comparison" ? <ProgressBar /> : <MainProgressBar />} */}
            </Paper>
          </Box>
        </>
      ) : (
        <>
          <Grid
            container
            spacing={2}
            sx={{
              border: "2px solid #e4e6e9",
              pr: 3.5,
              pb: 3,
              marginLeft: "-11px",
            }}
          >
            <Grid item xs={3}>
              <Paper
                sx={{
                  background: "#2f394c",
                  p: 2,
                  borderRadius: "10px",
                  height: "268px",
                }}
              >
                <Box sx={{ textAlign: "center", pt: 2 }}>
                  <img src={plantation} width="140px" alt="plantation" />
                </Box>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bolder",
                    color: "#E4E6E9",
                    textAlign: "center",
                  }}
                  gutterBottom
                >
                  Plantation Analysis
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper sx={{ background: "#2f394c", p: 2, borderRadius: "10px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: "#E4E6E9", fontWeight: "bold" }}
                    >
                      Original Video
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    onClick={handleReupload}
                    sx={{ color: "#e4e6e9" }}
                  >
                    Reupload
                  </Button>
                </Box>
                <Box sx={{ width: "100%", height: "200px" }}>
                  <video src={file} controls width="100%" height={200} />
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper
                elevation={3}
                sx={{
                  background: "#2f394c",
                  p: 2,
                  height: "300px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#e4e6e9", fontWeight: "bold" }}
                >
                  Plantation Count Summary
                </Typography>
                <Box>
                  {/* <TreeBar count={jsonData} /> */}
                  {jsonData && <TreeBar count={jsonData} />}
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper
                elevation={3}
                sx={{
                  background: "#2f394c",
                  p: 2,
                  height: "300px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#e4e6e9", fontWeight: "bold" }}
                >
                  Plantation Density
                </Typography>
                <Box>
                  {/* <GradientTree density={jsonData} /> */}
                  {jsonData && <GradientTree density={jsonData} />}
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={6}>
              <Paper
                elevation={3}
                sx={{
                  background: "#2f394c",
                  p: 2,
                  height: "300px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#e4e6e9", fontWeight: "bold" }}
                >
                  Plantation Average Height
                </Typography>
                <Box>
                  {/* <AvgHeight height={jsonData} /> */}
                  {jsonData && <AvgHeight height={jsonData} />}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                elevation={3}
                sx={{
                  background: "#2f394c",
                  p: 2,
                  height: "300px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#e4e6e9", fontWeight: "bold" }}
                >
                  Segmented Video
                </Typography>
                <Box sx={{ width: "100%", height: "200px", pt: 2 }}>
                  <video
                    src={segment}
                    // src={`http://209.209.41.154:5003/${segment}`}
                    controls
                    width="100%"
                    height={200}
                  />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                elevation={3}
                sx={{
                  background: "#2f394c",
                  p: 2,
                  height: "300px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#e4e6e9", fontWeight: "bold" }}
                >
                  Plantation Scatter Plot
                </Typography>
                <Box>
                  {scatter ? (
                    <ScatterTree ModalPopUp={ModalPopUp} scatter={scatter} />
                  ) : (
                    <>
                      <Box sx={{ textAlign: "center", pt: 4 }}>
                        <Typography variant="h5" sx={{ color: "#e4e6e9" }}>
                          {/* Generating Scatter Plot */}
                        </Typography>
                      </Box>
                    </>
                  )}
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                elevation={3}
                sx={{
                  background: "#2f394c",
                  p: 2,
                  height: "240px",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#e4e6e9", fontWeight: "bold" }}
                >
                  Summary
                </Typography>
                <Box sx={{ py: 1, color: "#E4E6E9" }}>
                  <ul>
                    <li>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "16px !important" }}
                      >
                        Tree's On Left:{" "}
                        <span>{jsonData && jsonData[0]?.left_tree_count}</span>
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "16px !important", py: 0.4 }}
                      >
                        Tree's On Right:{" "}
                        <span>{jsonData && jsonData[0]?.right_tree_count}</span>
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "16px !important", py: 0.4 }}
                      >
                        Total Tree's:{" "}
                        <span>{jsonData && jsonData[0]?.total_tree_count}</span>
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "16px !important", py: 0.4 }}
                      >
                        Percentage Relative Density:{" "}
                        <span>
                          {jsonData && jsonData[0]?.avg_relative_density}%
                        </span>
                      </Typography>
                    </li>
                    <li>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "16px !important", py: 0.4 }}
                      >
                        Average Tree Height:{" "}
                        <span>
                          {jsonData && jsonData[0]?.avg_tree_height} feet
                        </span>
                      </Typography>
                    </li>
                  </ul>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
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
                      alt="image"
                      width={600}
                    />
                  </TransformComponent>
                </React.Fragment>
              )}
            </TransformWrapper>
          </Box>
        </Modal>
      </div>
    </>
  );
}
