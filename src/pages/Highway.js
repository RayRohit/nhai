import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import Inter from "../Assests/Images/Inter.png";
import cross from '../Assests/Images/cross.png'
import service from '../Assests/Images/service.png'
import damaged from '../Assests/Images/damaged.png'
import plantation from '../Assests/Images/plantation.png'


import {
  Preferences,
  Actions,
  Analytics,
  Contacts,
  MyCalender,
  MyCard,
  MyTeam,
  solidadd,
  SidebarAdd,
  grayLogo,
  license,
  BillingManagement,
  NavajnaLogo,
} from "../Assests";

import InsightsIcon from "@mui/icons-material/Insights";

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";

import WebMap from "@arcgis/core/WebMap";
import ArcGISMap from "@arcgis/core/Map";
import WebScene from "@arcgis/core/WebScene";
import ProgressCard from "../Dashboard/ProgressCard";
import ProCard from "../Dashboard/ProCard";

const Highway = () => {
  const mapDiv = useRef(null);
  const threeDMapDiv = useRef(null);
  const [show3dMap, setShow3dMap] = useState(false);

  // const appConfig = {
  //     mapView: null,
  //     sceneView: null,
  //     activeView: null,
  //     container: mapDiv.current // use same container for views
  // };

  // const [appConfig, setAppConfig] = useState({
  //     mapView: null,
  //     sceneView: null,
  //     activeView: null,
  //     container: mapDiv.current // use same container for views
  // })

  // const initialViewParams = {
  //     center: [78.9629, 20.5937],
  //     zoom: 5,
  //     container: appConfig.container
  // };

  // const webmap = new ArcGISMap({
  //     basemap: "streets-navigation-vector",
  //     layers: [layer]
  // });
  // const scene = new WebScene({
  //     portalItem: {
  //         // autocasts as new PortalItem()
  //         id: "c8cf26d7acab4e45afcd5e20080983c1"
  //     },
  //     layers: [layer]
  // });

  useEffect(() => {
    if (mapDiv.current) {
      // create 3D view, won't initialize until container is set
      // initialViewParams.container = null;
      // initialViewParams.map = scene;
      // appConfig.sceneView = createView(initialViewParams, "3d");

      // // create 2D view and and set active
      // appConfig.mapView = createView(initialViewParams, "2d");
      // appConfig.mapView.map = webmap;
      // appConfig.activeView = appConfig.mapView;

      // setAppConfig(appConfig);

      const layer = new FeatureLayer({
        portalItem: {
          id: "9447b883e8564fc3bf1993736d07884a",
        },
        popupEnabled: true,
      });

      const map = new ArcGISMap({
        basemap: {
          portalItem: {
            id: "28f49811a6974659988fd279de5ce39f",
          },
        },
        // basemap: "streets-navigation-vector", //
        layers: [layer],
      });

      const view = new MapView({
        container: mapDiv.current,
        map: map,
        center: [78.9629, 20.5937],
        zoom: 5,
        // extent: {
        //     spatialReference: {
        //         latestWkid: 3857,
        //         wkid: 102100
        //     },
        //     xmin: -17811118.5269238,
        //     ymin: -15538711.0963092,
        //     xmax: 17811118.5269238,
        //     ymax: 15538711.0963092
        // }
      });
      view.popup.defaultPopupTemplateEnabled = true;

      view.popup.dockEnabled = true;
      view.popup.dockOptions = {
        // Disables the dock button from the popup
        buttonEnabled: false,
        // Ignore the default sizes that trigger responsive docking
        breakpoint: true,
      };
    }
    if (threeDMapDiv.current) {
      const layer = new FeatureLayer({
        portalItem: {
          id: "9447b883e8564fc3bf1993736d07884a",
        },
        popupEnabled: true,
      });
      const scene = new ArcGISMap({
        basemap: {
          portalItem: {
            id: "28f49811a6974659988fd279de5ce39f",
          },
        },
        // basemap: "imagery-hybrid",
        layers: [layer],
      });

      const view = new SceneView({
        center: [78.9629, 20.5937],
        zoom: 5,
        container: threeDMapDiv.current,
        map: scene,
      });
      view.popup.defaultPopupTemplateEnabled = true;
      view.popup.dockEnabled = true;
      view.popup.dockOptions = {
        // Disables the dock button from the popup
        buttonEnabled: false,
        // Ignore the default sizes that trigger responsive docking
        breakpoint: true,
      };
    }
  }, []);

  const onViewChanged = (e) => {
    setShow3dMap((prev) => !prev);
  };

  return (
    <div className="container mt-5">
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography color="white">2D</Typography>
        <AntSwitch
          onChange={onViewChanged}
          inputProps={{ "aria-label": "ant design" }}
        />
        <Typography color="white">3D</Typography>
      </Stack>
      <Grid container spacing={2}>
        <Grid container item md={9} xs={12}>
          <div
            className="mapDiv"
            ref={mapDiv}
            style={{ display: show3dMap ? "none" : "flex" }}
          ></div>
          <div
            className="mapDiv"
            ref={threeDMapDiv}
            style={{ display: show3dMap ? "flex" : "none" }}
          ></div>
        </Grid>
        <Grid
          container
          item
          md={3}
          xs={12}
          spacing={0}
          justifyContent="center"
          alignContent="space-between"
        >
          <Stack spacing={4}>
           
            <Card variant="outlined" sx={{ height: 70, background: "#273143",mt:4 }}>
              {/* sx={{ height: 60 }} */}
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                  
                >
                  <Stack direction="row" spacing={3} alignItems="center">
                    <img height={30} src={service} />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="#E4E6E9"
                      gutterBottom
                    >
                      Service Road
                    </Typography>
                  </Stack>

                  {/* <Box>
                    <ProgressCard value="0" />
                  </Box> */}
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 600,color:'#e4e6e9' }}
                    gutterBottom
                  >
                    2.996%
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ height: 70, background: "#273143" }}>
              {/* sx={{ height: 60 }} */}
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={3} alignItems="center">
                    <img height={30} src={Inter} />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="#E4E6E9"
                      gutterBottom
                    >
                      Uniform Carriage
                    </Typography>
                  </Stack>

                  {/* <Box>
                    <ProgressCard value="0" />
                  </Box> */}
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 600,color:'#e4e6e9' }}
                    gutterBottom
                  >
                    0%
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ height: 70, background: "#273143" }}>
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={3} alignItems="center">
                    <img height={30} src={damaged} />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="#E4E6E9"
                      gutterBottom
                    >
                      Damaged Barriers
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="#E4E6E9"
                    gutterBottom
                  >
                    0.998%
                  </Typography>
                  <Box>
                    {/* <ProgressCard value="0.998" />
                     */}
                  </Box>
                </Stack>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ height: 70, background: "#273143" }}>
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={3} alignItems="center">
                    <img height={30} src={plantation} />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="#E4E6E9"
                      gutterBottom
                    >
                      Plantations
                    </Typography>
                  </Stack>

                  {/* <Box>
                    <ProgressCard value="2.99" />
                  </Box> */}
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="#E4E6E9"
                    gutterBottom
                  >
                    2.99%
                  </Typography>
                  
                </Stack>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ height: 70, background: "#273143" }}>
              <CardContent>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" spacing={3} alignItems="center">
                    <img height={30} src={cross} />
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="#E4E6E9"
                      gutterBottom
                    >
                      Cross Movement Structures
                    </Typography>
                  </Stack>

                  {/* <Box>
                    <ProgressCard value="2" />
                  </Box> */}
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="#E4E6E9"
                    gutterBottom
                  >
                    2%
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export default Highway;
