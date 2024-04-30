import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { GridColDef } from "@mui/x-data-grid/models/colDef";
import * as React from "react";

interface DetailsORTableProps {
  or_details: any[];
}

export default function DetailsORMarginView(props: any) {
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

  return (
    <Box sx={{ width: "100%", maxHeight: 800, display: "flex" }}>
      <DetailsORTable or_details={selectedOr} />
      <List
        sx={{ width: "130px", marginTop: 5, marginLeft: 2 }}
        subheader={
          <ListSubheader sx={{ backgroundColor: "transparent", fontSize: 10 }}>
            Combined Comm
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemText primary="ALL" onClick={handle_ccc_change}/>
        </ListItemButton>
        {unique_ccc.map((ccc) => (
          <ListItemButton key={ccc as string} onClick={handle_ccc_change}>
            <ListItemText primary={ccc as string} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

function DetailsORTable(props: any) {
  const { or_details } = props;

  return (
    <Box sx={{ maxHeight: 800, width: "100%" }}>
      <DataGrid
        rows={or_details}
        columns={columns}
        getRowId={(row) => row.series}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        //checkboxSelection
        //disableRowSelectionOnClick
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
    field: "product_group",
    headerName: "Product Group",
    width: 180,
    sortable: false,
  },
  {
    field: "series",
    headerName: "Series",
    //type: 'number',
    width: 110,
    //editable: true,
  },
  {
    field: "currency",
    headerName: "CCY",
    width: 60,
    sortable: false,
  },
  {
    field: "model_margin",
    headerName: "Model Margin",
    type: "number",
    width: 100,
    sortable: false,
  },
  {
    field: "tier",
    headerName: "Tier",
    //type: 'int',
    width: 40,
    sortable: false,
  },
  {
    field: "tier_margin",
    headerName: "Tier Margin",
    type: "number",
    width: 100,
  },
  {
    field: "tier_margin_pct",
    headerName: "Tier Margin %",
    type: "number",
    width: 100,
    valueGetter: (value, row) => `${(value * 100).toFixed(2)}%`,
  },
];
