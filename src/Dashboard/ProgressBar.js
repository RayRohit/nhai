import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AppContext } from "../AppContext/AppContext";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function ProgressBar() {
  const [progress, setProgress] = React.useState(10);
  const { state } = React.useContext(AppContext);
  const [Interval, setNewInterval] = React.useState(0);

  React.useEffect(() => {
    let Interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 10);
    }, 1000);
    setNewInterval(Interval);
  }, []);

  React.useEffect(() => {
    if (progress === 100) {
      clearInterval(Interval);
    }
  }, [progress]);

  return (
    <Box sx={{ width: "100%", visibility: `${state.visibility}` }}>
      {progress === 100 ? (
        <h6>Analysing Video !</h6>
      ) : (
        <LinearProgressWithLabel value={progress} />
      )}
    </Box>
  );
}
