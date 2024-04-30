export interface ComputedMargin {
  id: string;
  name?: string | null;
  margin_date: string;
  created_at: string;
  creator: string;
  reviewed_at?: string | null;
  reviewer?: string | null;
  review_id?: string | null; // jira issue id
  approved_at?: string | null;
  approver?: string | null;
  updated_at?: string | null;
  published_at?: string | null;
}

export interface MarginJobDetails {
  margin: ComputedMargin;
  or_details: any[];
  im_details: any[];
  ic_details: any[];
  or_tiers: any[];
  im_tiers: any[];
  ic_tiers: any[];
}


export interface DataTableMeta {
  schema: string;
  table: string;
  primary_keys?: string[] | null;
  columns?: string[] | null;
}

export interface DataTableRecords {
  meta: DataTableMeta;
  records: any[];
}

export default interface AnalylticsAPI {
  prod_computed_margin_list: () => Promise<ComputedMargin[]>;
  prod_margin_details: (id: string) => Promise<MarginJobDetails>;
  prod_tier_margin_details: (id: string) => Promise<MarginJobDetails>;
  data_table_list: () => Promise<DataTableMeta[]>;
  data_table_records: (schema: string, table: string) => Promise<DataTableRecords>;
}
