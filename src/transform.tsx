import { TransactionType } from "./types";

export const transformTransactions = (transactions: TransactionType[]) => [
  {
    id: "Stirling Residences",
    data: transactions.map((t) => ({
      areaSqft: Math.round(Number(t["area"]) * 10.7639),
      floorRange: t["floorRange"],
      x: `20${t["contractDate"].slice(2)}-${t["contractDate"].slice(0, 2)}-01`,
      y: Math.round(
        Number(t["price"]) / Math.round(Number(t["area"]) * 10.7639)
      ),
    })),
  },
];
