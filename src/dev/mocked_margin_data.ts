/*
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
*/

const computed_margins = [
  {
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
  {
    id: "3eb7b443-9844-4063-ba00-1b97e416129e",
    name: null,
    margin_date: "2024-04-26",
    created_at: "2024-04-25 09:11:41",
    creator: "Prod Daily",
    reviewed_at: "2024-04-25 15:33:20",
    reviewer: "Shu Yu",
    review_id: "RJL-1234",
    approved_at: null,
    approver: null,
    updated_at: null,
    published_at: null,
  },
  {
    id: "c8c8c664-5e4d-475b-bc45-3f8963fb5185",
    name: null,
    margin_date: "2024-04-25",
    created_at: "2024-04-24 09:11:41",
    creator: "Prod Daily",
    reviewed_at: "2024-04-24 15:33:20",
    reviewer: "Patrick",
    review_id: "RJL-1123",
    approved_at: "2024-04-24 15:40:51",
    approver: "Hui Sim",
    updated_at: "2024-04-24 15:45:49",
    published_at: null
  },
  {
    id: "d11dbb22-e390-4266-b9ec-682b64a28489",
    name: null,
    margin_date: "2024-04-24",
    created_at: "2024-04-22 09:11:41",
    creator: "Prod Daily",
    reviewed_at: "2024-04-22 15:33:20",
    reviewer: "York Hao",
    review_id: "RJL-1121",
    approved_at: "2024-04-22 15:40:51",
    approver: "Hui Sim",
    updated_at: "2024-04-22 15:45:49",
    published_at: "2024-04-22 17:33:10",
  },
  {
    id: "a6b4e6c5-7f3a-4c4a-9b0d-4c5c1b3b4d8b",
    name: "New Product XYZ Launch",
    margin_date: "2024-04-15",
    created_at: "2024-04-08 09:11:41",
    creator: "Prod Adhoc",
    reviewed_at: "2024-04-11 16:33:20",
    reviewer: "Ze An",
    review_id: "RJL-1120",
    approved_at: "2024-04-11 16:40:51",
    approver: "Hui Sim",
    updated_at: "2024-04-11 16:45:49",
    published_at: "2024-04-11 18:33:10",
  },
];

export default computed_margins;
