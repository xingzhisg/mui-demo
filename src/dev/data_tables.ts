export const data_tables = [
  {
    schema: "RESOURCE",
    table: "TBL_USER",
    primary_keys: ["ID"],
    columns: ["ID", "NAME", "DESCRIPTION"],
  },
  {
    schema: "RESOURCE",
    table: "TBL_ASSET",
    primary_keys: ["MACHINE_NAME", "DATE_FROM"],
    columns: [
      "MACHINE_NAME",
      "ADDRESS",
      "ASSERT_OWNER",
      "DATE_FROM",
      "DATE_TO",
    ],
  },
  {
    schema: "SYSTEM",
    table: "TBL_TXN",
    primary_keys: ["ID"],
    columns: ["ID", "TIMESTAMP", "PRICE", "QUANTITY"],
  },
];

export const data_table_records = {
    "RESOURCE.TBL_USER": {
    },
    "RESOURCE.TBL_ASSET": {
    },
    "SYSTEM.TBL_TXN": {
    },
};
