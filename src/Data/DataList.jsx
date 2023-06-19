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

const AddedCarHeadingL3 = [
  "IMAGE",
  "ITEMCODE",
  "NEEDSTATE",
  "IT GROUP",
  "INDENT CATEGORY",
  "STD WT",
  "STD UCP",
  "STONE QUALITY",
  "STONE QUALITY VAL",
  "SIZE",
  "UMO SIZE",
  "ITEM QUANTITY",
  "TOTAL WEIGHT",
  "TOTAL COST",
  "REVISED ITEMCODE",
  "CONFIRM STATUS",
  "ACTION",
];
export const L3AddedCartHeadingData = AddedCarHeadingL3.map((element) => {
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
export const IMAGE_URL =
  "https://jewbridge.titanjew.in/CatalogImages/api/ImageFetch/?Type=ProductImages&ImageName=";

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
