import { TransactionType } from "./types";

export const transformTransactions = {
  nivo: (transactions: TransactionType[]) => {
    let transformedFields = transactions.map((t) => ({
      areaSqft: Math.round(Number(t["area"]) * 10.7639),
      floorRange: t["floorRange"],
      x: `20${t["contractDate"].slice(2)}-${t["contractDate"].slice(0, 2)}-01`,
      y: Math.round(
        Number(t["price"]) / Math.round(Number(t["area"]) * 10.7639)
      ),
    }));

    return [
      {
        id: "1st - 10th floor",
        data: transformedFields.filter((t) =>
          ["01-05", "06-10"].includes(t["floorRange"])
        ),
      },
      {
        id: "11th - 20th floor",
        data: transformedFields.filter((t) =>
          ["11-15", "16-20"].includes(t["floorRange"])
        ),
      },
      {
        id: "21st - 30th floor",
        data: transformedFields.filter((t) =>
          ["21-25", "26-30"].includes(t["floorRange"])
        ),
      },
      {
        id: "31st - 40th floor",
        data: transformedFields.filter((t) =>
          ["31-35", "36-40"].includes(t["floorRange"])
        ),
      },
    ];
  },
  plotly: (transactions: TransactionType[]) => {
    let transformedFields = transactions.map((t) => ({
      areaSqft: Math.round(Number(t["area"]) * 10.7639),
      floorRange: t["floorRange"],
      x: `20${t["contractDate"].slice(2)}-${t["contractDate"].slice(0, 2)}-01`,
      y: Math.round(
        Number(t["price"]) / Math.round(Number(t["area"]) * 10.7639)
      ),
    }));
    return transformedFields;
  },
  chartjs: (transactions: TransactionType[]) => {
    let transformedFields = transactions.map((t) => ({
      areaSqft: Math.round(Number(t["area"]) * 10.7639),
      floorRange: t["floorRange"],
      x: `20${t["contractDate"].slice(2)}-${t["contractDate"].slice(0, 2)}-01`,
      y: Math.round(
        Number(t["price"]) / Math.round(Number(t["area"]) * 10.7639)
      ),
    }));

    return {
      datasets: [
        {
          label: "1st - 10th floor",
          data: transformedFields
            .filter((t) => ["01-05", "06-10"].includes(t["floorRange"]))
            .map((t) => ({ x: t["x"], y: t["y"] })),
          pointRadius: 4,
          backgroundColor: "#58a832",
        },
        {
          label: "11th - 20th floor",
          data: transformedFields
            .filter((t) => ["11-15", "16-20"].includes(t["floorRange"]))
            .map((t) => ({ x: t["x"], y: t["y"] })),
          pointRadius: 4,
          backgroundColor: "#3281a8",
        },
        {
          label: "21st - 30th floor",
          data: transformedFields
            .filter((t) => ["21-25", "26-30"].includes(t["floorRange"]))
            .map((t) => ({ x: t["x"], y: t["y"] })),
          pointRadius: 4,
          backgroundColor: "#8d32a8",
        },
        {
          label: "31st - 40th floor",
          data: transformedFields
            .filter((t) => ["31-35", "36-40"].includes(t["floorRange"]))
            .map((t) => ({ x: t["x"], y: t["y"] })),
          pointRadius: 4,
          backgroundColor: "#a83246",
        },
      ],
    };
  },
  victory: (transactions: TransactionType[]) => {
    return transactions
      .map((t) => ({
        areaSqft: Math.round(Number(t["area"]) * 10.7639),
        floorRange: t["floorRange"],
        x: new Date(
          `20${t["contractDate"].slice(2)}-${t["contractDate"].slice(0, 2)}-01`
        ),
        y: Math.round(
          Number(t["price"]) / Math.round(Number(t["area"]) * 10.7639)
        ),
      }))
      .map((t) => ({
        x: t["x"],
        y: t["y"],
        floorRange: t["floorRange"],
        label: "Hello!",
        symbol: "triangleUp",
      }));
  },
};
