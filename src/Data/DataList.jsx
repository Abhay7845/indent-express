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

export const SubmittedOption = [{ value: "scanned" }, { value: "unscanned" }];

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
  "QUALITY RATING",
  "QUALITY REASONS",
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
export const tableData = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMK7ZskPypvRb4Ewsyw6U1NEI8sahKwM0g2AsAiv0qA&s",
    itemCode: "ACFGFFDOGGRTGR",
    collection: "REASON-NPIM",
    needSate: "DAILY WEAR",
    itGroup: "DT-GOLD",
    category: "MANGALSUTRA",
    StdWt: "5",
    StdUCP: "3456",
    saleable: "N/A",
    reason: "N/A",
    qualityRating: "N/A",
    qualityReason: "N/A",
    gender: "MALE",
    complexity: "N/A",
    metalColor: "red",
    finding: "Bombay",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDaaMPxQTqQmJ8k436XYtwf-HrqdKimahIea5YIxg&s",
    itemCode: "ACFGFFDOGGRTGR",
    collection: "REASON-NPIM",
    needSate: "DAILY WEAR",
    itGroup: "DT-GOLD",
    category: "MANGALSUTRA",
    StdWt: "5",
    StdUCP: "3456",
    saleable: "N/A",
    reason: "N/A",
    qualityRating: "N/A",
    qualityReason: "N/A",
    gender: "FEMALE",
    complexity: "N/A",
    metalColor: "green",
    finding: "Delhi",
  },
];

export const remainingSKU = [
  {
    id: 1,
    consumerBase: "DAILY WEAR",
    totalSKU: "2689",
    saleable: "5",
    notSaleable: "10",
  },
  {
    id: 2,
    consumerBase: "ENGAGEMENT",
    totalSKU: "219",
    saleable: "10",
    notSaleable: "20",
  },
  {
    id: 3,
    consumerBase: "FGK",
    totalSKU: "409",
    saleable: "15",
    notSaleable: "25",
  },
];
