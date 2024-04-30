import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button, Chip, Tab } from "@mui/material";

import {
  useLoaderData,
  useNavigation,
  Link,
  useLocation,
} from "react-router-dom";

import AnalylticsAPI, { MarginJobDetails } from "../../services/AnalyticsAPI";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DetailsORMarginView from "../../components/DetailsORMargin";

interface IdParam {
  id: string;
}

export const marginJobLoader =
  (api: AnalylticsAPI) =>
  async ({ params }: { params: any }) => {
    const data = await api.prod_margin_details(params.id);
    return data;
  };

const status_text = [
  "Wait for review",
  "Reviewed",
  "Approved",
  "Computed",
  "Published",
];

const status_color = [
  "primary" as "primary",
  "success" as "success",
  "error" as "error",
  "warning" as "warning",
  "info" as "info",
];

export default function MarginDetails() {
  const location = useLocation();
  console.log(location);

  const margin_job_details = useLoaderData() as MarginJobDetails;
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Container>Loading...</Container>;
  }

  const record = margin_job_details.margin;

  const name = record.name || record.creator + ": " + record.margin_date;

  const status =
    (record.published_at ? 1 : 0) +
    (record.updated_at ? 1 : 0) +
    (record.approved_at ? 1 : 0) +
    (record.reviewed_at ? 1 : 0);

  const [value, setValue] = React.useState("1");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff5f8",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Container sx={{ paddingTop: 3, paddingBottom: 5 }}>
        <Typography variant="h4"> Margins Job</Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          {`${name} (${record.id.split("-")[0]})`}
          <Chip
            label={status_text[status]}
            color={status_color[status]}
            sx={{ marginLeft: 1 }}
          />
        </Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleTabChange}
              aria-label="lab API tabs example"
            >
              <Tab label="OutRight Margin" value="1" />
              <Tab label="InterMonth Margin" value="2" />
              <Tab label="InterComm Margin" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <DetailsORMarginView or_details={margin_job_details.or_details} />
          </TabPanel>
          <TabPanel value="2">
            <UnderConstruction />
          </TabPanel>
          <TabPanel value="3">
            <UnderConstruction />
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
}

function UnderConstruction() {
  return <Typography variant="h4">Under Construction</Typography>;
}
