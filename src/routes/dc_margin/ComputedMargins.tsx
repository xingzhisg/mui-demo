import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  List,
  ListItem,
} from "@mui/material";

import {
  useLoaderData,
  useNavigation,
  Link,
  useLocation,
} from "react-router-dom";

import AnalylticsAPI, { ComputedMargin } from "../../services/AnalyticsAPI";

export const marginListLoader = (api: AnalylticsAPI) => async () => {
  const data = await api.prod_computed_margin_list();
  return data;
};

const status_text = [
  "Wait for review",
  "Wait for approval",
  "Wait for computation finalization",
  "Wait for publication",
  "Published",
];
const status_color = [
  "primary" as "primary",
  "success" as "success",
  "error" as "error",
  "warning" as "warning",
  "info" as "info",
];

export default function ComputedMargins() {
  const location = useLocation();
  console.log(location);

  const margin_records = useLoaderData() as ComputedMargin[];
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Container>Loading...</Container>;
  }

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
        <Typography variant="h4">Computed Margins</Typography>
        <Typography variant="body1">&nbsp;</Typography>
        <Divider />
        <Container maxWidth="md" sx={{ marginTop: 3 }}>
          <div>
            {margin_records.map((record: any) => {
              const name =
                record.name || record.creator + ": " + record.margin_date;

              const status =
                (record.published_at ? 1 : 0) +
                (record.updated_at ? 1 : 0) +
                (record.approved_at ? 1 : 0) +
                (record.reviewed_at ? 1 : 0);

              return (
                <Accordion key={record.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-content-${record.id}`}
                    id={`panel-header-${record.id}`}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>
                        {`${name} (${record.id.split("-")[0]})    `}
                      </Typography>
                      <Chip
                        label={status_text[status]}
                        color={status_color[status]}
                        variant="outlined"
                        sx={{ marginRight: 5 }}
                      />
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                      <ListItem sx={{ py: 0.5 }}>
                        <Typography>
                          {`Created by ${record.creator} at ${record.created_at}`}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ py: 0.5 }}>
                        <Typography>
                          {record.reviewed_at
                            ? `Reviewed by ${record.reviewer} at ${record.reviewed_at} - `
                            : "Not yet reviewed"}
                          {record.reviewed_at ? (
                            <Link to={`https://jira.com/${record.review_id}`}>
                              {record.review_id}
                            </Link>
                          ) : (
                            <></>
                          )}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ py: 0.5 }}>
                        <Typography>
                          {record.approved_at
                            ? `Approved by ${record.approver} at ${record.approved_at}`
                            : "Not yet approved"}
                        </Typography>
                      </ListItem>
                      <ListItem sx={{ py: 0.5 }}>
                        <Typography>
                          {record.published_at
                            ? `Published at ${record.published_at}`
                            : "Not yet published"}
                        </Typography>
                      </ListItem>
                    </List>
                  </AccordionDetails>
                  <AccordionActions>
                    <Link to={`${location.pathname}/details/${record.id}`}>
                      <Button variant="outlined">Details</Button>
                    </Link>
                    {!record.reviewed_at ? (
                      <Link to={`${location.pathname}/review/${record.id}`}>
                        <Button variant="contained">Review</Button>
                      </Link>
                    ) : null}
                    {record.reviewed_at && !record.approved_at ? (
                      <Link to={`${location.pathname}/approve/${record.id}`}>
                        <Button variant="contained" color="success">
                          Check & Approve
                        </Button>
                      </Link>
                    ) : null}
                    {record.updated_at && !record.published_at ? (
                      <Link to={`${location.pathname}/publish/${record.id}`}>
                        <Button variant="contained" color="warning">
                          Publish
                        </Button>
                      </Link>
                    ) : null}
                  </AccordionActions>
                </Accordion>
              );
            })}
          </div>
        </Container>
      </Container>
    </Box>
  );
}
