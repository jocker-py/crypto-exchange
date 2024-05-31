import { DynamicEndpoint, StaticEndpoint } from "@/api/endpoints";
import { Currency, ExchangeAmount, MinAmount } from "@/types";

export const api = {
  getCurrencies: (): Promise<Currency[]> =>
    fetch(StaticEndpoint.Currencies).then((res) => res.json()),

  getMinAmount: (from: string, to: string): Promise<MinAmount> =>
    fetch(DynamicEndpoint.MinAmount(from, to)).then((res) => res.json()),

  getExchangeAmount: (
    amount: string,
    from: string,
    to: string,
  ): Promise<ExchangeAmount> =>
    fetch(DynamicEndpoint.ExchangeAmount(amount, from, to)).then((res) =>
      res.json(),
    ),
};
