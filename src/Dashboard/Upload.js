import { useContext, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Box, Paper, Typography } from "@mui/material";
import upload from "../Assests/Images/uploadd.png";
import { AppContext } from "../AppContext/AppContext";
import ProgressBar from "./ProgressBar";
import MainProgressBar from "./MainProgressBar";

const fileTypes = ["MP4"];

export default function Upload(props) {
  const [file, setFile] = useState(null);
  const { state, setState } = useContext(AppContext);
  const handleChange = (file) => {
    setFile(file);
  };

  useEffect(() => {
    if (file !== null) {
      if (props.status === "comparison") {
        setState({
          ...state,
          comparisonVideo: file[0],
          visibility: "visible",
        });
        setFile(null);
      } else {
        setState({
          ...state,
          maintananceVideo: file[0],
          mainvisibility: "visible",
        });
        setFile(null);
      }
    }
  }, [file]);
  return (
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
        {props.status === "comparison" ? <ProgressBar /> : <MainProgressBar />}
      </Paper>

      {/* <h1>Hello To Drag & Drop Files</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
    </Box>
  );
}

// import { Box, Paper, Typography } from "@mui/material";
// import React from "react";

// export default function Upload() {
//   return (
//     <Box
//       sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,height:'100vh'}}
//     >
//       <Paper
//         sx={{
//           background: "#273143",
//           p: 2,
//           borderRadius: "10px",
//           color: "#E4E6E9",
//         }}
//       >
//         <Typography variant="h6" sx={{color:'#e4e6e9'}}>Select a Drone Video to Upload</Typography>
//       </Paper>
//     </Box>
//   );
// }
