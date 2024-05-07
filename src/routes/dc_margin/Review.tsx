import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
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
import ReviewORMarginView from "../../components/ReviewORMargin";

interface IdParam {
  id: string;
}

export const marginReviewLoader =
  (api: AnalylticsAPI) =>
  async ({ params }: { params: any }) => {
    const data = await api.prod_tier_margin_details(params.id);
    return data;
  };

export default function MarginReview() {
  const tier_margin_details = useLoaderData() as MarginJobDetails;
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Container>Loading...</Container>;
  }

  const record = tier_margin_details.margin;

  const name = record.name || record.creator + ": " + record.margin_date;

  const [overrides, setOverrides] = React.useState<any>({or: Object(), im: Object()});
  const [progress, setProgress] = React.useState("1");
  const [currentTab, setCurrentTab] = React.useState("1");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  const handleOutrightReviewed = () => {
    setProgress("2");
    setCurrentTab("2");
  };

  const handleOutrightSaved = (updates: any) => {
    overrides.or = { ...overrides.or, ...updates };
    console.log("On Saved updates", overrides.or);
    setOverrides({...overrides});
  };

  const handleOutrightEdited = (unsaved_updates: any) => {
    console.log("unsaved", unsaved_updates);
    if (progress !== "1") {
      console.log("unsaved, set progress");
      setProgress("1");
    }
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
        <Typography variant="h4"> Review Margin</Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          {`${name} (${record.id.split("-")[0]})`}
        </Typography>
        <TabContext value={currentTab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleTabChange}
              aria-label="lab API tabs example"
            >
              <Tab label="OutRight Margin" value="1" />
              <Tab
                label="InterMonth Margin"
                value="2"
                disabled={progress < "2"}
              />
              <Tab
                label="InterComm Margin"
                value="3"
                disabled={progress < "3"}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ReviewORMarginView
              or_details={tier_margin_details.or_details}
              or_overrides={overrides.or}
              on_review={handleOutrightReviewed}
              on_save={handleOutrightSaved}
              on_edit={handleOutrightEdited}
            />
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
