import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AppContext = createContext();

export function GlobalState(props) {
  const [state, setState] = useState({
    HEserviceRoadPeak: 0,
    HEcarriagePeak: 0,
    HEStardardMarkingPeak: 0,
    HEStandardSignagePeak: 0,
    HSCrossMovementPeak: 0,
    HSCrashBarrierPeak: 0,
    HSEarthenShoulderPeak: 0,
    HSSolarBlinkerPeak: 0,
    HSMedianPeak: 0,
    USTrafficBarrier: 0,
    USSpeedBreakers: 0,
    USIllegalEncroachment: 0,
    HED: true,
    HEN: true,
    HSD: true,
    HSN: true,
    US: true,
    upload: false,
    comparisonVideo: undefined,
    comparisonjson:null,
    maintanancejson:null,
    maintananceVideo:undefined,
    maintananceUpload : false
  });

  useEffect(() => {
    try {
      const formdata = new FormData();
      formdata.append("videos", state.comparisonVideo);
      console.log(formdata.get("videos"), "formdata");
      // var interval;
      // const options = {
      //   onUploadProgress: (ProgressEvent) => {
      //     const { loaded, total } = ProgressEvent;
      //     let percentage = Math.floor((loaded * 100) / total);
      //     if (percentage < 100) {
      //       setPercent(percentage);
      //     }
      //     if (percentage === 100) {
      //       setProgressBarMsg("Processing video");
      //       setPercent(1);
      //       var i = 0;
      //       interval = setInterval(() => {
      //         i = i + 5;
      //         if (i < 100) {
      //           setPercent(i);
      //         }
      //       }, 18000);
      //     }
      //   },
      // };
      axios
        .post("http://209.209.41.154:5002/comparisonvideo", formdata, {
          "Content-Type": "multipart/form-data",
        })
        .then((res) => {
          setState({
            ...state,
            upload: false,
            comparisonjson:res.data
          });
          // setVideoData(res.data);
          // setPercent(100);
          // clearInterval(interval);
          // setProgressBarMsg("");
          // localStorage.setItem("videoData2", JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  }, [state.comparisonVideo]);
  useEffect(() => {
    try {
      const formdata = new FormData();
      formdata.append("videos", state.maintananceVideo);
      console.log(formdata.get("videos"), "formdata");
      axios
        .post("http://209.209.41.154:5002/maintenancevideo", formdata, {
          "Content-Type": "multipart/form-data",
        })
        .then((res) => {
          console.log(res.data)
          setState({
            ...state,
            maintananceUpload: false,
            maintanancejson:res.data
          });
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  }, [state.maintananceVideo]);

  return (
    <>
      <AppContext.Provider value={{ state, setState }}>
        {props.children}
      </AppContext.Provider>
    </>
  );
}
