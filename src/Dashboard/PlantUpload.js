// import { useContext, useEffect, useState } from "react";
// import { FileUploader } from "react-drag-drop-files";
// import { Box, Paper, Typography } from "@mui/material";
// import upload from "../Assests/Images/uploadd.png";
// import { AppContext } from "../AppContext/AppContext";
// import ProgressBar from "./ProgressBar";
// import MainProgressBar from "./MainProgressBar";

// export default function PlantUpload(props) {
//   const [file, setFile] = useState(null);
//   //   const { state, setState } = useContext(AppContext);
//   const handleChange = (file) => {
//     setFile(file);
//   };
//   console.log(file);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "80vh",
//       }}
//     >
//       <Paper
//         sx={{
//           background: "#273143",
//           p: 2,
//           borderRadius: "10px",
//           color: "#E4E6E9",
//           width: "75vw",
//           height: "60vh",
//           py: 5,
//         }}
//       >
//         <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
//           <img src={upload} alt="upload logo" width={100} />
//         </Box>
//         <Typography variant="h6" sx={{ textAlign: "center", py: 1 }}>
//           Select Video To Upload
//         </Typography>
//         <Box
//           sx={{
//             color: "#E4E6E9",
//             display: "flex",
//             justifyContent: "center",
//             py: 2,
//           }}
//         >
//           <FileUploader
//             multiple={true}
//             handleChange={handleChange}
//             name="file"
//             types={fileTypes}
//           />
//         </Box>
//         <p style={{ textAlign: "center" }}>
//           {/* {file ? `File name: ${file[0].name}` : "No Files Uploaded Yet"} */}
//         </p>{" "}
//         {/* {props.status === "comparison" ? <ProgressBar /> : <MainProgressBar />} */}
//       </Paper>
//     </Box>
//   );
// }
