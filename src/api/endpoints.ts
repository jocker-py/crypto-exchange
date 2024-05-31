import { createUrl } from "@/helpers/utils";
import { API_KEY, Directories } from "@/api/constants";

export const StaticEndpoint = {
  Currencies: createUrl(Directories.Currencies, { active: "true" }),
};

export const DynamicEndpoint = {
  MinAmount: (from: string, to: string) =>
    createUrl(`${Directories.MinAmount}/${from}_${to}`, { api_key: API_KEY }),

  ExchangeAmount: (amount: string, from: string, to: string) =>
    createUrl(`${Directories.ExchangeAmount}/${amount}/${from}_${to}`, {
      api_key: API_KEY,
    }),
};
