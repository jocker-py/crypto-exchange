import { clsx, removeBraces } from "@/helpers";
import { SelectOption } from "@/components";
import { OptionType } from "@/types";
import { memo } from "react";
import s from "@/components/atoms/Select/SelectField/SelectField.module.scss";

type Props = {
  search: string;
  selected: OptionType | null;
  options: OptionType[];
  onSelect: (option: OptionType) => void;
};

const TSelectList = ({ selected, onSelect, search, options }: Props) => {
  const filteredItems = options.filter((item) => {
    const str = `${item.ticker.toLowerCase()} ${removeBraces(item.name).toLowerCase()}`;
    return str.includes(search.toLowerCase());
  });

  return (
    <ul className={clsx(s.options)}>
      {filteredItems.map((option: OptionType) => (
        <SelectOption
          key={option.ticker}
          src={option.image}
          alt={option.ticker}
          title={option.ticker}
          subtitle={removeBraces(option.name)}
          active={selected?.ticker === option.ticker}
          onClick={() => onSelect(option)}
        />
      ))}
    </ul>
  );
};

export const SelectList = memo(TSelectList);
