export type Currency = {
  ticker: string;
  name: string;
  image: string;
  hasExternalId: boolean;
  isFiat: boolean;
  featured: boolean;
  isStable: boolean;
  supportsFixedRate: boolean;
};
export type ErrorType = {
  error?: string;
  message?: string;
};

export type MinAmount = {
  minAmount: number;
} & ErrorType;

export type ExchangeAmount = {
  estimatedAmount: number;
  transactionSpeedForecast: string;
  warningMessage: null | string;
} & ErrorType;
