import AnalyticsAPI, {
  ComputedMargin,
  MarginJobDetails,
} from "../services/AnalyticsAPI";

import { margin_details, tier_margin_details } from "./margin_details";
import computed_margins from "./mocked_margin_data";

import mocked_data_records from "./mocked_datatable";

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
      mocked_data_records["broker"]["customers"]["meta"],
      mocked_data_records["broker"]["transactions"]["meta"],
      mocked_data_records["POI"]["airports"]["meta"],
      mocked_data_records["POI"]["shopping_malls"]["meta"],
    ];
  };

  data_table_records = async (schema: string, table: string) => {
    return mocked_data_records[schema][table];
  };
}
