import { ChangeEvent, memo, useCallback, useEffect, useState } from "react";
import { Button, SelectField, TextField } from "@/components";
import { Swap } from "@/assets";
import { Currency, OptionType } from "@/types";
import { useDebounce } from "@/hooks";
import { api } from "@/api";

import s from "./SelectPairs.module.scss";
import { getErrorMessage } from "@/helpers";

const TSelectPairs = () => {
  const [error, setError] = useState<string | null>(null);
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  const [amount, setAmount] = useState<number | null>(null);
  const [minAmount, setMinAmount] = useState<number>(0);
  const [value, setValue] = useState("");

  const [from, setFrom] = useState<OptionType | null>(null);
  const [to, setTo] = useState<OptionType | null>(null);

  const debouncedValue = useDebounce(value, 500);

  const changeFromValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim();
      const isNumber = !isNaN(Number(value));

      if (isNumber) {
        if (Number(value) < minAmount) {
          setError("Out of min amount");
        } else {
          setError(null);
        }
        setValue(value);
      }
    },
    [minAmount],
  );

  const handleSwap = () => {
    setTo(from);
    setFrom(to);
    setValue("");
    setAmount(null);
    setError(null);
    setMinAmount(0);
  };

  const fetchCurrencies = () =>
    api
      .getCurrencies()
      .then((data) => {
        setCurrencies(data);
        setFrom(data[0]);
        setTo(data[1]);
      })
      .catch(setError);

  const fetchMinAmount = () => {
    from?.ticker &&
      to?.ticker &&
      api
        .getMinAmount(from?.ticker, to?.ticker)
        .then((data) => {
          if (data?.error) {
            setError(getErrorMessage(data.error));
          } else if (data?.minAmount) {
            setMinAmount(data.minAmount);
            setValue(data.minAmount.toString());
          }
        })
        .catch(setError);
  };

  const fetchExchangeAmount = () =>
    debouncedValue &&
    from?.ticker &&
    to?.ticker &&
    api
      .getExchangeAmount(debouncedValue, from?.ticker, to?.ticker)
      .then((data) => {
        if (data.estimatedAmount) {
          setAmount(data.estimatedAmount);
        } else if (data?.warningMessage || data?.error) {
          setError(getErrorMessage(data?.warningMessage || data?.error || ""));
        }
      })
      .catch(setError);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    fetchMinAmount();
  }, [from, to]);

  useEffect(() => {
    fetchExchangeAmount();
  }, [debouncedValue, from, to]);

  return (
    <>
      <div className={s.container}>
        <SelectField
          options={currencies}
          selected={from}
          value={value}
          onSelect={setFrom}
          onChange={changeFromValue}
        />
        <Swap className={s.swap} onClick={handleSwap} />
        <SelectField
          options={currencies}
          selected={to}
          onSelect={setTo}
          value={error || !amount ? "-" : `${amount}`}
          disabled
        />
      </div>
      <div className={s.address}>
        <TextField label={`Your ${to ? to.name : ""} address`} />
        <Button className={s.button} error={error} disabled={!!error}>
          EXCHANGE
        </Button>
      </div>
    </>
  );
};

export const SelectPairs = memo(TSelectPairs);
