import { Box, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
// import ApexChart from "../Dashboard/ApexCharts";
import CanvasLineCharts from "../Dashboard/CanvasLineChart";
import jsCookie from "js-cookie";
import { AppContext } from "../AppContext/AppContext";

export default function LineGraph(props) {
  const { state, setState } = useContext(AppContext);

  function HighEfficiencyCS() {
    const prsrange = props.PositiveServiceRoad.map((el) => {
      return { F: "P", V: parseInt(el[3].toFixed(0)) };
    });
    const nrsrange = props.NegativeServiceRoad.map((el) => {
      return { F: "N", V: parseInt(el[3].toFixed(0)) };
    });

    const ncwrange = props.NegativeCarriageWay.map((el) => {
      return { F: "N", V: parseInt(el[3].toFixed(0)) };
    });
    const pcwrange = props.PositiveCarriageWay.map((el) => {
      return { F: "P", V: parseInt(el[3].toFixed(0)) };
    });

    const SRrange = [
      ...props.PositiveServiceRoad.map((el) => parseInt(el[3].toFixed(0))),
      ...props.NegativeServiceRoad.map((el) => parseInt(el[3].toFixed(0))),
    ].sort((a, b) => a - b);

    const CWrange = [
      ...props.NegativeCarriageWay.map((el) => parseInt(el[3].toFixed(0))),
      ...props.PositiveCarriageWay.map((el) => parseInt(el[3].toFixed(0))),
    ].sort((a, b) => a - b);
    const allCWrange = [...ncwrange, ...pcwrange].sort((a, b) => a.V - b.V);

    let carriageFlag = true;
    let carriagePeak = 1;
    let peak = 3;
    let serviceRoadCoords = [];
    let carriageWayCoords = [];

    CWrange.forEach((num) => {
      let coords = {};
      for (let el of allCWrange) {
        if (el.V === num && el.F === "P") {
          if (carriageFlag) {
            coords["y"] = 1;
            coords["x"] = num;
            carriageWayCoords.push(coords);
            break;
          } else {
            coords["y"] = 0;
            coords["x"] = num;
            carriageWayCoords.push(coords);
            break;
          }
        } else if (el.V === num && el.F === "N") {
          coords["y"] = 0;
          coords["x"] = num;
          carriagePeak = 0;
          carriageFlag = false;
          carriageWayCoords.push(coords);
          break;
        }
      }
    });
    const allSRrange = [...nrsrange, ...prsrange].sort((a, b) => a.V - b.V);
    SRrange.forEach((num) => {
      let coords = {};
      for (let el of allSRrange) {
        if (el.V === num && el.F === "N") {
          if (peak >= 0) {
            peak = peak - 0.002;
            coords["x"] = num;
            coords["y"] = parseFloat(peak.toFixed(5));
            serviceRoadCoords.push(coords);
          } else {
            coords["x"] = num;
            coords["y"] = parseFloat(peak.toFixed(5));
            serviceRoadCoords.push(coords);
          }
        } else if (el.V === num && el.F === "P") {
          coords["x"] = num;
          coords["y"] = parseFloat(peak.toFixed(5));
          serviceRoadCoords.push(coords);
        }
      }
    });

    if (state.HED) {
      setState({
        ...state,
        HED: false,
        HEcarriagePeak: carriagePeak,
        HEserviceRoadPeak: peak,
      });
    }

    return {
      serviceRoadCoords,
      carriageWayCoords,
    };
  }

  function HighSafetyCC() {
    const pcbrange = props.PositiveCrashBarrier.map((el) => {
      return { F: "P", V: parseInt(el[3].toFixed(0)) };
    });
    const ncbrange = props.NegativeCrashBarrier.map((el) => {
      return { F: "N", V: parseInt(el[3].toFixed(0)) };
    });

    ncbrange.sort((a, b) => a.V - b.V);
    pcbrange.sort((a, b) => a.V - b.V);

    const ncmrange = props.PositiveCrossMovementStructure.map((el) => {
      return { F: "P", V: parseInt(el[3].toFixed(0)) };
    });
    const pcmrange = props.NegativeCrossMovementStructure.map((el) => {
      return { F: "N", V: parseInt(el[3].toFixed(0)) };
    });

    const CBrange = [
      ...props.PositiveCrashBarrier.map((el) => parseInt(el[3].toFixed(0))),
      ...props.NegativeCrashBarrier.map((el) => parseInt(el[3].toFixed(0))),
    ].sort((a, b) => a - b);

    const CMrange = [
      ...props.PositiveCrossMovementStructure.map((el) =>
        parseInt(el[3].toFixed(0))
      ),
      ...props.NegativeCrossMovementStructure.map((el) => parseInt(el[3])),
    ].sort((a, b) => a - b);

    const allCBrange = [...ncbrange, ...pcbrange].sort((a, b) => a.V - b.V);

    let cbpeak = CBrange.length === 0 ? 0 : 1;
    let cmpeak = CMrange.length === 0 ? 0 : 2;
    let crossMovementCoords = [];
    let crashBarrierCoords = [];

    for (let el of allCBrange) {
      let coords = {};
      for (let num of CBrange) {
        if (el.F === "N" && el.V === num) {
          if (cbpeak >= 0) {
            cbpeak = cbpeak - 0.0001;
            coords["x"] = num;
            coords["y"] = parseFloat(cbpeak.toFixed(5));
            crashBarrierCoords.push(coords);
            break;
          } else {
            coords["x"] = num;
            coords["y"] = parseFloat(cbpeak.toFixed(5));
            crashBarrierCoords.push(coords);
            break;
          }
        } else if (el.F === "P" && el.V === num) {
          coords["x"] = num;
          coords["y"] = parseFloat(cbpeak.toFixed(5));
          crashBarrierCoords.push(coords);
          break;
        }
      }
    }

    const allCMrange = [...ncmrange, ...pcmrange].sort((a, b) => a.V - b.V);

    CMrange.forEach((num) => {
      let coords = {};
      for (let el of allCMrange) {
        if (el.V === num && el.F === "N") {
          if (cmpeak >= 0) {
            cmpeak = cmpeak - 0.0001;
            coords["x"] = num;
            coords["y"] = parseFloat(cmpeak.toFixed(5));
            crossMovementCoords.push(coords);
          } else {
            coords["x"] = num;
            coords["y"] = parseFloat(cmpeak.toFixed(5));
            crossMovementCoords.push(coords);
          }
        } else if (el.V === num && el.F === "P") {
          coords["x"] = num;
          coords["y"] = parseFloat(cmpeak.toFixed(5));
          crossMovementCoords.push(coords);
        }
      }
    });

    if (state.HSD) {
      setState({
        ...state,
        HSD: false,
        HSCrossMovementPeak: cmpeak,
        HSCrashBarrierPeak: cbpeak,
      });
    }
    jsCookie.set("CrossMovementPeak", cmpeak);
    jsCookie.set("CrashBarrierPeak", cbpeak);
    return {
      crashBarrierCoords,
      crossMovementCoords,
    };
  }

  function HighEfficiencySM() {
    const proadsignrange = props.PositiveRoadSign.map((el) => {
      return { F: "P", V: parseInt(el[3].toFixed(0)) };
    });
    const nroadsignrange = props.NegativeRoadSign.map((el) => {
      return { F: "N", V: parseInt(el[3].toFixed(0)) };
    });

    const nroadmarkingrange = props.NegativeRoadMarking.map((el) => {
      return { F: "N", V: parseInt(el[3].toFixed(0)) };
    });
    const proadmarkingrange = props.PositiveRoadMarking.map((el) => {
      return { F: "P", V: parseInt(el[3].toFixed(0)) };
    });

    const SRange = [
      ...proadsignrange.map((el) => el.V),
      ...nroadsignrange.map((el) => el.V),
    ].sort((a, b) => a - b);
    const allroadSignageRange = [...nroadsignrange, ...proadsignrange].sort(
      (a, b) => a.V - b.V
    );

    const MRange = [
      ...proadmarkingrange.map((el) => el.V),
      ...nroadmarkingrange.map((el) => el.V),
    ].sort((a, b) => a - b);
    const allroadMarkingRange = [
      ...nroadmarkingrange,
      ...proadmarkingrange,
    ].sort((a, b) => a.V - b.V);

    let roadMarkingPeak = allroadMarkingRange.length === 0 ? 0 : 2;
    let roadSinagePeak = allroadSignageRange.length === 0 ? 0 : 2;
    let roadMarkingCoords = [];
    let roadSignageCoords = [];

    for (let num of SRange) {
      let coords = {};
      for (let el of allroadSignageRange) {
        if (el.V === num && el.F === "N") {
          if (roadSinagePeak >= 0) {
            roadSinagePeak = roadSinagePeak - 0.0002;
            coords["x"] = num;
            coords["y"] = parseFloat(roadSinagePeak.toFixed(5));
            roadSignageCoords.push(coords);
            break;
          } else {
            coords["x"] = num;
            coords["y"] = parseFloat(roadSinagePeak.toFixed(5));
            roadSignageCoords.push(coords);
            break;
          }
        } else if (el.V === num && el.F === "P") {
          coords["x"] = num;
          coords["y"] = parseFloat(roadSinagePeak.toFixed(5));
          roadSignageCoords.push(coords);
          break;
        }
      }
    }

    for (let num of MRange) {
      let coords = {};
      for (let el of allroadMarkingRange) {
        if (el.V === num && el.F === "N") {
          if (roadMarkingPeak >= 0) {
            roadMarkingPeak = roadMarkingPeak - 0.0002;
            coords["x"] = num;
            coords["y"] = parseFloat(roadMarkingPeak.toFixed(5));
            roadMarkingCoords.push(coords);
            break;
          } else {
            coords["x"] = num;
            coords["y"] = parseFloat(roadMarkingPeak.toFixed(5));
            roadMarkingCoords.push(coords);
            break;
          }
        } else if (el.V === num && el.F === "P") {
          coords["x"] = num;
          coords["y"] = parseFloat(roadMarkingPeak.toFixed(5));
          roadMarkingCoords.push(coords);
          break;
        }
      }
    }

    if (state.HEN) {
      setState({
        ...state,
        HEN: false,
        HEStandardSignagePeak: roadSinagePeak,
        HEStardardMarkingPeak: roadMarkingPeak,
      });
    }
    jsCookie.set("HEStardardMarkingPeak", roadMarkingPeak);
    jsCookie.set("HEStandardSignagePeak", roadSinagePeak);
    return {
      roadSignageCoords,
      roadMarkingCoords,
    };
  }

  function HighSafetyBM() {
    const pearthenshoulder = props.PositiveEarthenShoulder.map((el) => {
      return { F: "P", V: parseInt(el[3].toFixed(0)) };
    });
    const nearthenshoulder = props.NegativeEarthenShoulder.map((el) => {
      return { F: "N", V: parseInt(el[3].toFixed(0)) };
    });

    const nmedian = props.NegativeMedian.map((el) => {
      return { F: "N", V: parseInt(el[3].toFixed(0)) };
    });
    const pmedian = props.PositiveMedian.map((el) => {
      return { F: "P", V: parseInt(el[3].toFixed(0)) };
    });

    var SRange = [
      ...pearthenshoulder.map((el) => el.V),
      ...nearthenshoulder.map((el) => el.V),
    ].sort((a, b) => a - b);
    var allEarthenShoulderRange = [
      ...pearthenshoulder,
      ...nearthenshoulder,
    ].sort((a, b) => a.V - b.V);

    const MRange = [
      ...nmedian.map((el) => el.V),
      ...pmedian.map((el) => el.V),
    ].sort((a, b) => a - b);
    const allMedianRange = [...nmedian, ...pmedian].sort((a, b) => a.V - b.V);

    let MedianPeak = allMedianRange.length === 0 ? 0 : 2;
    let EarthenPeak = allEarthenShoulderRange.length === 0 ? 0 : 2;
    let EarthenCoords = [];
    let MedianCoords = [];

    for (let num of SRange) {
      let coords = {};
      for (let el of allEarthenShoulderRange) {
        if (el.V === num && el.F === "N") {
          if (EarthenPeak >= 0) {
            EarthenPeak = EarthenPeak - 0.0002;
            coords["x"] = num;
            coords["y"] = parseFloat(EarthenPeak.toFixed(5));
            EarthenCoords.push(coords);
            break;
          } else {
            coords["x"] = num;
            coords["y"] = parseFloat(EarthenPeak.toFixed(5));
            EarthenCoords.push(coords);
            break;
          }
        } else if (el.V === num && el.F === "P") {
          coords["x"] = num;
          coords["y"] = parseFloat(EarthenPeak.toFixed(5));
          EarthenCoords.push(coords);
          break;
        }
      }
    }

    for (let num of MRange) {
      let coords = {};
      for (let el of allMedianRange) {
        if (el.V === num && el.F === "N") {
          if (MedianPeak >= 0) {
            MedianPeak = MedianPeak - 0.0002;
            coords["x"] = num;
            coords["y"] = parseFloat(MedianPeak.toFixed(5));
            MedianCoords.push(coords);
            break;
          } else {
            coords["x"] = num;
            coords["y"] = parseFloat(MedianPeak.toFixed(5));
            MedianCoords.push(coords);
            break;
          }
        } else if (el.V === num && el.F === "P") {
          coords["x"] = num;
          coords["y"] = parseFloat(MedianPeak.toFixed(5));
          MedianCoords.push(coords);
          break;
        }
      }
    }

    const pSolarBlinkers =
      props.PositiveSolarBlinkers !== undefined
        ? props.PositiveSolarBlinkers.map((el) => {
            return { F: "P", V: parseInt(el[3].toFixed(0)) };
          })
        : [];
    const nSolarBlinkers =
      props.NegativeSolarBlinkers !== undefined
        ? props.NegativeSolarBlinkers.map((el) => {
            return { F: "N", V: parseInt(el[3].toFixed(0)) };
          })
        : [];
    var SRange = [
      ...pSolarBlinkers?.map((el) => el.V),
      ...nSolarBlinkers?.map((el) => el.V),
    ].sort((a, b) => a - b);

    var allSolarRange = [...pSolarBlinkers, ...nSolarBlinkers].sort(
      (a, b) => a.V - b.V
    );

    let SolarPeak = allSolarRange.length === 0 ? 0 : 3;
    let SolarCoords = [];
    for (let num of SRange) {
      let coords = {};
      for (let el of allSolarRange) {
        if (el.V === num && el.F === "N") {
          if (SolarPeak >= 0) {
            SolarPeak = SolarPeak - 0.0003;
            coords["x"] = num;
            coords["y"] = parseFloat(SolarPeak.toFixed(5));
            SolarCoords.push(coords);
            break;
          } else {
            coords["x"] = num;
            coords["y"] = parseFloat(SolarPeak.toFixed(5));
            SolarCoords.push(coords);
            break;
          }
        } else if (el.V === num && el.F === "P") {
          coords["x"] = num;
          coords["y"] = parseFloat(SolarPeak.toFixed(5));
          SolarCoords.push(coords);
          break;
        }
      }
    }

    if (state.HSN) {
      setState({
        ...state,
        HSN: false,
        HSEarthenShoulderPeak: EarthenPeak,
        HSMedianPeak: MedianPeak,
        HSSolarBlinkerPeak: SolarPeak,
      });
    }

    return {
      EarthenCoords,
      MedianCoords,
      SolarCoords,
    };
  }

  function UserServices() {
    const SpeedBreakers = props.SpeedBreakers.map((el) => {
      return { F: "P", V: parseInt(el[3].toFixed(0)) };
    });
    const TrafficBarriers = props.TrafficBarriers.map((el) => {
      return { F: "N", V: parseInt(el[3].toFixed(0)) };
    });
    const EncroachmentHoardings = props.EncroachmentHoardings.map((el) => {
      return { F: "N", V: parseInt(el[3].toFixed(0)) };
    });
    var EncroachmentHoardingsRange = EncroachmentHoardings.map(
      (el) => el.V
    ).sort((a, b) => a - b);
    let index = Math.ceil(0.035 * EncroachmentHoardingsRange.length);
    var EncroachmentHoardingsPeak = 2;
    var EncroachmentHoardingsCoords = [];
    for (let i in EncroachmentHoardingsRange) {
      let coords = {};
      if (parseInt(i) === index) {
        EncroachmentHoardingsPeak = EncroachmentHoardingsPeak - 1;
        coords["x"] = EncroachmentHoardingsRange[i];
        coords["y"] = EncroachmentHoardingsPeak;
        EncroachmentHoardingsCoords.push(coords);
      } else if (parseInt(i) === index + 1) {
        EncroachmentHoardingsPeak = EncroachmentHoardingsPeak - 1;
        coords["x"] = EncroachmentHoardingsRange[i];
        coords["y"] = EncroachmentHoardingsPeak;
        EncroachmentHoardingsCoords.push(coords);
      } else {
        coords["x"] = EncroachmentHoardingsRange[i];
        coords["y"] = EncroachmentHoardingsPeak;
        EncroachmentHoardingsCoords.push(coords);
      }
    }
    var TrafficBarrierRange = TrafficBarriers.map((el) => el.V).sort(
      (a, b) => a - b
    );
    var TrafficBarrierCoords = [];
    var TrafficBarrierPeak = TrafficBarrierRange.length===0?0:1;
    for (
      let i = 0;
      i <= TrafficBarrierRange[TrafficBarrierRange.length - 1];
      i++
    ) {
      let coords = {};
      if (i === TrafficBarrierRange[0]) {
        coords["x"] = i;
        TrafficBarrierPeak = TrafficBarrierPeak - 0.5;
        coords["y"] = parseFloat(TrafficBarrierPeak.toFixed(1));
        TrafficBarrierCoords.push(coords);
      } else if (i === TrafficBarrierRange[1]) {
        coords["x"] = i;
        TrafficBarrierPeak = TrafficBarrierPeak - 0.5;
        coords["y"] = parseFloat(TrafficBarrierPeak.toFixed(1));
        TrafficBarrierCoords.push(coords);
      } else {
        coords["x"] = i;
        coords["y"] = parseFloat(TrafficBarrierPeak.toFixed(1));
        TrafficBarrierCoords.push(coords);
      }
    }
    var SpeedBreakersRange = SpeedBreakers.map((el) => el.V).sort(
      (a, b) => a - b
    );
    var SpeedBreakersCoords = [];
    var SpeedBreakersPeak = 1;
    if (SpeedBreakersRange.length === 0) {
      SpeedBreakersCoords.push({ x: 0, y: 1 });
    } else {
      for (
        let i = 0;
        i <= SpeedBreakersRange[SpeedBreakersRange.length - 1];
        i++
      ) {
        let coords = {};
        if (i === SpeedBreakersRange[0]) {
          coords["x"] = i;
          SpeedBreakersPeak = SpeedBreakersPeak - 0.5;
          coords["y"] = parseFloat(SpeedBreakersPeak.toFixed(1));
          SpeedBreakersCoords.push(coords);
        } else if (i === SpeedBreakersRange[1]) {
          coords["x"] = i;
          SpeedBreakersPeak = SpeedBreakersPeak - 0.5;
          coords["y"] = parseFloat(SpeedBreakersPeak.toFixed(1));
          SpeedBreakersCoords.push(coords);
        } else {
          coords["x"] = i;
          coords["y"] = parseFloat(SpeedBreakersPeak.toFixed(1));
          SpeedBreakersCoords.push(coords);
        }
      }
    }

    if (state.US)
      setState({
        ...state,
        US: false,
        USTrafficBarrier: TrafficBarrierPeak,
        USSpeedBreakers: SpeedBreakersPeak,
        USIllegalEncroachment:EncroachmentHoardingsPeak
      });

    return {
      TrafficBarrierCoords,
      SpeedBreakersCoords,
      EncroachmentHoardingsCoords,
    };
  }

  function LineGraph() {
    if (props.text === "High Efficiency") {
      const { serviceRoadCoords, carriageWayCoords } = HighEfficiencyCS();
      const { roadSignageCoords, roadMarkingCoords } = HighEfficiencySM();
      return (
        <CanvasLineCharts
          text="High Efficiency"
          carriageWayCoords={carriageWayCoords}
          serviceRoadCoords={serviceRoadCoords}
          roadSignageCoords={roadSignageCoords}
          roadMarkingCoords={roadMarkingCoords}
        />
      );
    } else if (props.text === "Highway Safety") {
      var { crashBarrierCoords, crossMovementCoords } = HighSafetyCC();
      var { MedianCoords, EarthenCoords, SolarCoords } = HighSafetyBM();
      return (
        <CanvasLineCharts
          text="High Safety"
          carriageWayCoords={crashBarrierCoords}
          serviceRoadCoords={crossMovementCoords}
          MedianCoords={MedianCoords}
          EarthenCoords={EarthenCoords}
          solarBlinkersCoords={SolarCoords}
        />
      );
    } else if (props.text === "User Services") {
      const {
        TrafficBarrierCoords,
        SpeedBreakersCoords,
        EncroachmentHoardingsCoords,
      } = UserServices();
      return (
        <CanvasLineCharts
          text="User Services"
          TrafficBarrierCoords={TrafficBarrierCoords}
          SpeedBreakersCoords={SpeedBreakersCoords}
          EncroachmentHoardingsCoords={EncroachmentHoardingsCoords}
        />
      );
    }
  }

  return (
    <>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          height: "300px",
          borderRadius: "10px",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ color: "#e4e6e9", fontWeight: "bolder" }}
          >
            Rating Degradation Curve
          </Typography>
          <Typography variant="p" sx={{ color: "#969ea9",fontSize:'14px' }}>
            Line graph depicting No. Of Marks Scored/Deducted Per Second Of The
            Video
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Box sx={{ width: "30vw" }}>
              {/* <ApexChart /> */}
              {/* <CanvasLineCharts /> */}
              {LineGraph()}
            </Box>
          </Box>
        </Box>
      </Paper>
    </> 
  );
}
