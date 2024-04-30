/*

export interface MarginJobDetails {
  margin: ComputedMargin;
  or_details: any[];
  im_details: any[];
  ic_details: any[];
  or_tiers: any[];
  im_tiers: any[];
  ic_tiers: any[];
}
*/

const margin_details = {
  margin: {
    id: "427e1df8-37c9-46bb-9df3-a4cb61326fe6",
    name: null,
    margin_date: "2024-04-29",
    created_at: "2021-04-26 09:12:22",
    creator: "Prod Daily",
    reviewed_at: null,
    reviewer: null,
    approved_at: null,
    approver: null,
    updated_at: null,
    published_at: null,
  },
  or_details: [
    {'combined_comm': 'ABC', 'product_name': 'ABC Industries', 'series': 'ABCJ24', 'currency': 'USD', 'model_margin': 4310.53, 'tier': 1, 'tier_margin': 4524.01, 'tier_margin_pct': 0.0521, 'user_margin': 5200},
    {'combined_comm': 'ABC', 'product_name': 'ABC Industries', 'series': 'ABCK24', 'currency': 'USD', 'model_margin': 4524.01, 'tier': 1, 'tier_margin': 4524.01, 'tier_margin_pct': 0.0532, 'user_margin': 5200},
    {'combined_comm': 'ABC', 'product_name': 'ABC Industries', 'series': 'ABCM24', 'currency': 'USD', 'model_margin': 4121.90, 'tier': 2, 'tier_margin': 4183.59, 'tier_margin_pct': 0.0541, 'user_margin': 5000},
    {'combined_comm': 'ABC', 'product_name': 'ABC Industries', 'series': 'ABCN24', 'currency': 'USD', 'model_margin': 4183.59, 'tier': 2, 'tier_margin': 4183.59, 'tier_margin_pct': 0.0544, 'user_margin': 5000},
    {'combined_comm': 'ABC', 'product_name': 'ABC Industries', 'series': 'ABCQ24', 'currency': 'USD', 'model_margin': 4019.96, 'tier': 3, 'tier_margin': 4036.72, 'tier_margin_pct': 0.0534, 'user_margin': 4900},
    {'combined_comm': 'ABC', 'product_name': 'ABC Industries', 'series': 'ABCU24', 'currency': 'USD', 'model_margin': 4036.72, 'tier': 3, 'tier_margin': 4036.72, 'tier_margin_pct': 0.0537, 'user_margin': 4900},

    {'combined_comm': 'XYZ', 'product_name': 'XYZ Commodities', 'series': 'XYZJ24', 'currency': 'JPY', 'model_margin': 104310.53, 'tier': 1, 'tier_margin': 104524.01, 'tier_margin_pct': 0.0331, 'user_margin': 115200},
    {'combined_comm': 'XYZ', 'product_name': 'XYZ Commodities', 'series': 'XYZK24', 'currency': 'JPY', 'model_margin': 104524.01, 'tier': 1, 'tier_margin': 104524.01, 'tier_margin_pct': 0.0352, 'user_margin': 115200},
    {'combined_comm': 'XYZ', 'product_name': 'XYZ Commodities', 'series': 'XYZM24', 'currency': 'JPY', 'model_margin': 99322.90, 'tier': 2, 'tier_margin': 98759.96, 'tier_margin_pct': 0.0344, 'user_margin': 105000},
    {'combined_comm': 'XYZ', 'product_name': 'XYZ Commodities', 'series': 'XYZN24', 'currency': 'JPY', 'model_margin': 98332.59, 'tier': 2, 'tier_margin': 98759.96, 'tier_margin_pct': 0.0353, 'user_margin': 105000},
    {'combined_comm': 'XYZ', 'product_name': 'XYZ Commodities', 'series': 'XYZQ24', 'currency': 'JPY', 'model_margin': 98759.96, 'tier': 2, 'tier_margin': 98759.96, 'tier_margin_pct': 0.0351, 'user_margin': 104900},
    {'combined_comm': 'XYZ', 'product_name': 'XYZ Commodities', 'series': 'XYZU24', 'currency': 'JPY', 'model_margin': 93852.72, 'tier': 2, 'tier_margin': 98759.96, 'tier_margin_pct': 0.0360, 'user_margin': 104900},
  ],
  im_details: [],
  ic_details: [],
  or_tiers: [
    {'commbined_comm': 'ABC', 'tier_number': 1, 'ending_series_seq': 2, 'start_year': 2024, 'start_month': 4, 'end_year': 2024, 'end_month': 5},
    {'commbined_comm': 'ABC', 'tier_number': 2, 'ending_series_seq': 4, 'start_year': 2024, 'start_month': 5, 'end_year': 2024, 'end_month': 6},
    {'commbined_comm': 'ABC', 'tier_number': 3, 'ending_series_seq': 9999, 'start_year': 2024, 'start_month': 7, 'end_year': 2024, 'end_month': 8},

    {'commbined_comm': 'XYZ', 'tier_number': 1, 'ending_series_seq': 2, 'start_year': 2024, 'start_month': 4, 'end_year': 2024, 'end_month': 5},
    {'commbined_comm': 'XYZ', 'tier_number': 2, 'ending_series_seq': 9999, 'start_year': 2024, 'start_month': 5, 'end_year': 2024, 'end_month': 8},
  ],
  im_tiers: [],
  ic_tiers: [],
};


const tier_margin_details = {
  margin: {
    id: "427e1df8-37c9-46bb-9df3-a4cb61326fe6",
    name: null,
    margin_date: "2024-04-29",
    created_at: "2021-04-26 09:12:22",
    creator: "Prod Daily",
    reviewed_at: null,
    reviewer: null,
    approved_at: null,
    approver: null,
    updated_at: null,
    published_at: null,
  },
  or_details: [
    {'combined_comm': 'ABC', 'product': 'ABC', 'product_name': 'ABC Industries', 'currency': 'USD', 'tier': 1, 'prev_margin': 5000, 'min_margin': 4524.01, 'recommend_margin': 4600, 'user_margin': 500},
    {'combined_comm': 'ABC', 'product': 'ABC', 'product_name': 'ABC Industries', 'currency': 'USD', 'tier': 2, 'prev_margin': 4900, 'min_margin': 4183.59, 'recommend_margin': 4200, 'user_margin': 4900},
    {'combined_comm': 'ABC', 'product': 'ABC', 'product_name': 'ABC Industries', 'currency': 'USD', 'tier': 3, 'prev_margin': 4800, 'min_margin': 4036.72, 'recommend_margin': 4100, 'user_margin': 4800},

    {'combined_comm': 'XYZ', 'product': 'XYZF', 'product_name': 'XYZ Commodities', 'currency': 'JPY', 'tier': 1, 'prev_margin': 100000, 'min_margin': 104524.01, 'recommend_margin': 105000, 'user_margin': 105000},
    {'combined_comm': 'XYZ', 'product': 'XYZF', 'product_name': 'XYZ Commodities', 'currency': 'JPY', 'tier': 2, 'prev_margin': 100000, 'min_margin': 98759.96, 'recommend_margin': 99000, 'user_margin': 100000},
  ],
  im_details: [],
  ic_details: [],
  or_tiers: [
    {'commbined_comm': 'ABC', 'tier_number': 1, 'ending_series_seq': 2, 'start_year': 2024, 'start_month': 4, 'end_year': 2024, 'end_month': 5},
    {'commbined_comm': 'ABC', 'tier_number': 2, 'ending_series_seq': 4, 'start_year': 2024, 'start_month': 5, 'end_year': 2024, 'end_month': 6},
    {'commbined_comm': 'ABC', 'tier_number': 3, 'ending_series_seq': 9999, 'start_year': 2024, 'start_month': 7, 'end_year': 2024, 'end_month': 8},

    {'commbined_comm': 'XYZ', 'tier_number': 1, 'ending_series_seq': 2, 'start_year': 2024, 'start_month': 4, 'end_year': 2024, 'end_month': 5},
    {'commbined_comm': 'XYZ', 'tier_number': 2, 'ending_series_seq': 9999, 'start_year': 2024, 'start_month': 5, 'end_year': 2024, 'end_month': 8},
  ],
  im_tiers: [],
  ic_tiers: [],
};

export {
  margin_details,
  tier_margin_details,
}