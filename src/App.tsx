import * as React from "react";
import Box from "@mui/material/Box";

import AppsIcon from "@mui/icons-material/Apps";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import GridOnIcon from "@mui/icons-material/GridOn";
import PaidIcon from "@mui/icons-material/Paid";

import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Apps from "./routes/Apps";
import DefaultMgmt from "./routes/DefaultMgmt";
import DCMargin from "./routes/DCMargin";
import Datatable from "./routes/Datatable";
import ComputedMargins, {
  marginListLoader,
} from "./routes/dc_margin/ComputedMargins";

import { AppContext } from "./app_context";
import MarginDetails, { marginJobLoader } from "./routes/dc_margin/Details";
import ReviewMargin, { marginReviewLoader } from "./routes/dc_margin/Review";
import ApproveMargin from "./routes/dc_margin/Approve";

// default App component
export default function App() {
  const { api } = React.useContext(AppContext);

  // Data Router API v6.4
  // https://reactrouter.com/en/main/routers/picking-a-router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<GlobalLayout />}>
        <Route path="default-mgmt" element={<DefaultMgmt />} />
        <Route path="dc-margin" element={<Outlet />}>
          <Route index element={<DCMargin />} />
          <Route path="computed-margins" element={<Outlet />}>
            <Route
              index
              element={<ComputedMargins />}
              loader={marginListLoader(api!)}
            />
            <Route
              path="details/:id"
              element={<MarginDetails />}
              loader={marginJobLoader(api!)}
            />
            <Route
              path="review/:id"
              element={<ReviewMargin />}
              loader={marginReviewLoader(api!)}
            />
            <Route path="approve/:id" element={<ApproveMargin />} />
          </Route>
        </Route>

        <Route path="data-table" element={<Datatable />} />
        <Route path="apps" element={<Apps />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

function GlobalLayout() {
  // global layout - left sidebar, right content
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#f8f4f8", display: "flex" }}>
      <Sidebar
        items={[
          {
            label: "Apps",
            icon: <AppsIcon fontSize="large" />,
            to: "/apps",
          },
          {
            label: "Default Mgmt",
            icon: <CrisisAlertIcon fontSize="large" />,
            to: "/default-mgmt",
          },
          {
            label: "DC Margin",
            icon: <PaidIcon fontSize="large" />,
            to: "/dc-margin",
          },
          {
            label: "DB Updater",
            icon: <GridOnIcon fontSize="large" />,
            to: "/data-table",
          },
        ]}
        sx={{ height: "100%", paddingTop: "20px", width: "90px" }}
      />
      <Box sx={{ width: "100%", backgroundColor: "white", marginRight: "5px", marginTop: "10px", borderRadius: "10px 10px 0px 0px", boxShadow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
