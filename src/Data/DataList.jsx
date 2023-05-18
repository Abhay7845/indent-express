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

export const SubmittedOption = ["yet to submit", "submitted"];

const ReportsHeadingL1L2 = [
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
  },
];
