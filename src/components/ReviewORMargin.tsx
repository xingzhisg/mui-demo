import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import Box from "@mui/material/Box";
import { GridCellEditStopParams, MuiEvent } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridColDef } from "@mui/x-data-grid/models/colDef";
import * as React from "react";

interface ReviewORTableProps {
  or_details: any[];
  or_overrides?: any;
  on_save: (updates: any) => void;
  on_edit: (updates: any) => void;
}

export default function ReviewORMarginView(props: ReviewORTableProps) {
  const { or_details } = props;

  const unique_ccc = Array.from(
    new Set(or_details.map((item: any) => item.combined_comm))
  ).sort();

  const [selectedOr, setSelectedOr] = React.useState<any[]>(or_details);

  const handle_ccc_change = (ev: React.SyntheticEvent) => {
    const ccc = ev.currentTarget.textContent;
    if (ccc === "ALL") {
      setSelectedOr(or_details);
      return;
    }
    setSelectedOr(or_details.filter((item: any) => item.combined_comm === ccc));
  };

  const [margins, setMargins] = React.useState({
    origin: Object(),
    saved: Object(),
    unsaved: Object(),
  });

  const [hasUnsaved, setHasUnsaved] = React.useState(false);
  const on_margin_change = (key: string, old_value: any, new_value: any) => {
    // record origin values
    if (!Object.hasOwn(margins.origin, key)) {
      margins.origin[key] = old_value;
    }
    // find current value
    const existing_value = margins.saved[key] || margins.origin[key];
    console.log(
      key,
      old_value,
      new_value,
      margins.saved[key],
      margins.origin[key],
      existing_value
    );
    if (new_value === existing_value) {
      if (Object.hasOwn(margins.unsaved, key)) {
        delete margins.unsaved[key];
      }
    } else {
      margins.unsaved[key] = new_value;
    }
    setHasUnsaved(Object.keys(margins.unsaved).length > 0);
    setMargins(margins);
    if (Object.keys(margins.unsaved).length > 0) {
      props.on_edit(margins.saved);
    }
  };

  return (
    <Box>
      <Box sx={{ width: "100%", maxHeight: 800, display: "flex" }}>
        <ReviewORTable
          or_details={selectedOr}
          or_overrides={props.or_overrides || Object()}
          onValueChange={on_margin_change}
        />
        <List
          sx={{ width: "130px", marginTop: 5, marginLeft: 2 }}
          subheader={
            <ListSubheader
              sx={{ backgroundColor: "transparent", fontSize: 10 }}
            >
              Combined Comm
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemText primary="ALL" onClick={handle_ccc_change} />
          </ListItemButton>
          {unique_ccc.map((ccc) => (
            <ListItemButton key={ccc as string} onClick={handle_ccc_change}>
              <ListItemText primary={ccc as string} />
            </ListItemButton>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: 15,
          paddingTop: 6,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginRight: 2, display: hasUnsaved ? "block" : "none" }}
          onClick={() => {
            Object.keys(margins.unsaved).forEach(function (key) {
              margins.saved[key] = margins.unsaved[key];
              if (margins.origin[key] === margins.saved[key]) {
                delete margins.saved[key];
              }
            });
            margins.unsaved = Object();
            setHasUnsaved(false);
            setMargins(margins);
          }}
        >
          Save
        </Button>

        <Button
          variant="contained"
          color="primary"
          disabled={hasUnsaved}
          onClick={() => props.on_save && props.on_save(margins.saved)}
        >
          Next - Inter Month
        </Button>
      </Box>
    </Box>
  );
}

function ReviewORTable(props: any) {
  const { or_details, or_overrides, onValueChange } = props;
  console.log("or_overrides", or_overrides);
  const updated_datails = or_details.map((item: any) => {
    const key = `${item.combined_comm}:${item.tier}`;
    let output = item;
    if (Object.hasOwn(or_overrides, key)) {
      console.log("found", key, or_overrides[key]);
      output = { ...item, user_margin: or_overrides[key] };
    }
    return output;
  });

  return (
    <Box sx={{ maxHeight: 800, width: "100%" }}>
      <DataGrid
        rows={updated_datails}
        columns={columns}
        getRowId={(row) => `${row.combined_comm}:${row.tier}`}
        onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
          console.log(
            params.row.combined_comm,
            params.row.tier,
            params.row.user_margin,
            ((event as React.SyntheticEvent).target as HTMLInputElement).value
          );
          const key = `${params.row.combined_comm}:${params.row.tier}`;
          const old_value = parseFloat(params.row.user_margin.toString());
          const new_value = parseFloat(
            (
              (event as React.SyntheticEvent).target as HTMLInputElement
            ).value.toString()
          );
          onValueChange(key, old_value, new_value);
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
      />
    </Box>
  );
}

const columns: GridColDef<any[number]>[] = [
  {
    field: "combined_comm",
    headerName: "Combined Comm",
    width: 150,
  },
  {
    field: "product",
    headerName: "Product",
    width: 100,
  },
  {
    field: "tier",
    headerName: "Tier",
    width: 60,
  },
  {
    field: "product_name",
    headerName: "Product Name",
    width: 180,
    sortable: false,
  },
  {
    field: "currency",
    headerName: "CCY",
    width: 60,
    sortable: false,
  },
  {
    field: "prev_margin",
    headerName: "Prev Margin",
    type: "number",
    width: 100,
    sortable: false,
  },
  {
    field: "min_margin",
    headerName: "Minimum Margin",
    type: "number",
    width: 100,
    sortable: false,
  },
  {
    field: "recommend_margin",
    headerName: "Recommended Margin",
    type: "number",
    width: 100,
    sortable: false,
  },
  {
    field: "user_margin",
    headerName: "User Margin",
    type: "number",
    width: 100,
    editable: true,
    //valueGetter: (value, row) => overrides[`${row.combined_comm}:${row.tier}`] || value,
  },
];
