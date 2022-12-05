import { createContext, useState } from "react";

export const AppContext = createContext();

export function GlobalState(props) {

    const [state, setState] = useState({
        HEserviceRoadPeak : 0,
        HEcarriagePeak:0,
        HEStardardMarkingPeak:0,
        HEStandardSignagePeak:0,
        HSCrossMovementPeak:0,
        HSCrashBarrierPeak:0,
        HSEarthenShoulderPeak:0,
        HSSolarBlinkerPeak:0,
        HSMedianPeak:0,
        HED : true,
        HEN : true,
        HSD:true,
        HSN:true,
    })

  return (
    <>
      <AppContext.Provider value={{ state, setState }}>
        {props.children}
      </AppContext.Provider>
    </>
  );
};
