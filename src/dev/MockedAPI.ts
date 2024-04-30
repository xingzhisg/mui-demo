import AnalyticsAPI, { ComputedMargin, MarginJobDetails } from "../services/AnalyticsAPI";
import {margin_details, tier_margin_details} from "./margin_details";
import computed_margins from "./mocked_margin_data";

export default class MockedAPI implements AnalyticsAPI {
  prod_computed_margin_list = async () => {
    return computed_margins;
  };

  prod_margin_details = async (id: string) => {
    let copied = Object.assign({}, margin_details) as MarginJobDetails;

    for (let m of computed_margins) {
      if (m.id === id) {
        copied.margin = m;
        break;
      }
    }
    return copied;
  };

  prod_tier_margin_details = async (id: string) => {
    let copied = Object.assign({}, tier_margin_details) as MarginJobDetails;

    for (let m of computed_margins) {
      if (m.id === id) {
        copied.margin = m;
        break;
      }
    }
    return copied;
  };

  
  data_table_list = async () => {
    return [
    ];
  };

  data_table_records = async (schema: string, table: string) => {
    return {
      meta: {
        schema,
        table,
        primary_keys: [],
        columns: [],
      },
      records: [],
    };
  };
}
