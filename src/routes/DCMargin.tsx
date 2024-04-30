import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Container, Divider } from "@mui/material";
import AppGrid from "../components/AppGrid";
import dcmargin_config from "../config/dcmargin";

export default function DCMargin() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff5f8",
        display: "flex",
        flexDirection: "column",
        height: '100%',
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Container sx={{ paddingTop: 3 }}>
        <Typography variant="h4">DC Margin Settings</Typography>
        <Typography variant="body1">&nbsp;</Typography>
        <Typography variant="h5">Production</Typography>
        <Divider />
        <Container sx={{ my: 5 }}>
          <AppGrid apps={dcmargin_config.prod_apps} />
        </Container>
        <Typography variant="h5">Local</Typography>
        <Divider />

        <Container sx={{ my: 5 }}>
          <AppGrid apps={dcmargin_config.dev_apps} />
        </Container>
      </Container>
    </Box>
  );
}
