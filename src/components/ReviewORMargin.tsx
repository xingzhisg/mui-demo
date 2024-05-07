import {
  Button,
  List,
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
  or_overrides: any;
  on_review: () => void;
  on_save: (updates: any) => void;
  on_edit: (updates: any) => void;
}

function rowKey(row: any) {
  // create unique key for each row, i.e. combined_comm:tier
  return `${row.combined_comm}:${row.tier}`;
}

function mergedData(or_details: any[], or_overrides: any) {
  // merge or_details with or_overrides and return margins by `combined_comm:tier`
  return or_details.reduce((acc, item) => {
    const key = rowKey(item);
    acc[key] = or_overrides[key] || item.user_margin;
    return acc;
  }, Object());
}

function notEmpty(obj: any): boolean {
  // test if object is not empty;
  return Object.keys(obj).length > 0;
}


export default function ReviewORMarginView(props: ReviewORTableProps) {
  const { or_details } = props;
  const or_overrides = props.or_overrides || Object();

  const merged_margin = mergedData(or_details, or_overrides);

  const unique_ccc = Array.from(
    new Set(or_details.map((item: any) => item.combined_comm))
  ).sort();

  const [selectedOr, setSelectedOr] = React.useState<any[]>(or_details);
  const [unsaved, setUnsaved] = React.useState(Object());

  const handle_ccc_change = (ev: React.SyntheticEvent) => {
    const ccc = ev.currentTarget.textContent;
    if (ccc === "ALL") {
      setSelectedOr(or_details);
      return;
    }
    setSelectedOr(or_details.filter((item: any) => item.combined_comm === ccc));
  };

  const on_user_margin_change = (
    key: string,
    old_value: any,
    new_value: any
  ) => {
    // update unsaved
    const existing_value = merged_margin[key];
    console.log(key, old_value, new_value, existing_value);

    unsaved[key] = new_value;
    if (new_value === existing_value) {
      delete unsaved[key];
    }
    setUnsaved({...unsaved}); // has to save a different object to trigger re-render

    if (notEmpty(unsaved)) {
      props.on_edit(unsaved);
    }
  };

  return (
    <Box>
      <Box sx={{ width: "100%", maxHeight: 800, display: "flex" }}>
        <ReviewORTable
          or_details={selectedOr}
          or_overrides={merged_margin}
          or_unsaved={unsaved}
          onValueChange={on_user_margin_change}
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
          sx={{ marginRight: 2, display: (notEmpty(unsaved) ? "block" : "none") }}
          onClick={() => {
            props.on_save(unsaved);
            setUnsaved(Object());
          }}
        >
          Save
        </Button>

        <Button
          variant="contained"
          color="primary"
          disabled={notEmpty(unsaved)}
          onClick={props.on_review}
        >
          Next - VSR
        </Button>
      </Box>
    </Box>
  );
}

function ReviewORTable(props: any) {
  const { or_details, or_overrides, or_unsaved, onValueChange } = props;

  const updated_datails = or_details.map((item: any) => {
    const key = rowKey(item);
    const value = or_unsaved[key] || or_overrides[key];
    return {
      ...item,
      key: key,
      user_margin: value,
      same_as_origin: value === item.user_margin,
      same_as_override: value === or_overrides[key],
    };
  });

  return (
    <Box sx={{ maxHeight: 800, width: "100%" }}>
      <DataGrid
        rows={updated_datails}
        columns={columns}
        getRowId={(row) => row.key}
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
