const ChooseReasonForNo = [
  " Not Relevant To Market",
  "Price is High",
  "Wearibility Issue",
  "Similar design Exists",
  "Design Not Applicable",
];

export const NoReasonOption = ChooseReasonForNo.map((element) => {
  return {
    value: element,
    label: element,
  };
});

const ReportsHeadingL1L2 = [
  "ID",
  "VIEW",
  "ITEMCODE",
  "COLLECTION",
  "NEEDSTATE",
  "IT GROUP",
  "CATEGORY",
  "STD WT",
  "STD UCP",
  "SALEABLE",
  "REASONS",
  "ACTION",
];

export const L1L2HeadingData = ReportsHeadingL1L2.map((element) => {
  return {
    value: element,
    label: element,
  };
});

const L1L2StatusData = [
  "ID",
  "NEEDSTATE",
  "TOTAL SKU",
  "SALABLE",
  "NOT SALABLE",
  "REMAINING SKU COUNT",
];

export const L1L2StatusHeading = L1L2StatusData.map((element) => {
  return {
    value: element,
    label: element,
  };
});

// FAKE DATA

export const ItemWiseReportsDropdown = [
  {
    value: "item_wise_report",
    label: "Item Wise Report",
  },
  {
    value: "NeedState",
    label: "NeedState",
  },
  {
    value: "Collection",
    label: "Collection",
  },
  {
    value: "ItGroup",
    label: "IT Group",
  },
  {
    value: "Cancel_item_List",
    label: "Cancel Item List",
  },
];
