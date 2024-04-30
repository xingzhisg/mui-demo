import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import theme from "./theme";
import { AppContext, createAppContextValues } from "./app_context";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
      <AppContext.Provider value={createAppContextValues('development')}>
        <App />
      </AppContext.Provider>
  </ThemeProvider>
);
