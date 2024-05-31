import {
  ChangeEvent,
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import s from "./SelectField.module.scss";
import { clsx } from "@/helpers";
import { TextField } from "@/components";
import { OptionType } from "@/types";
import { useClickOutside } from "@/hooks";
import { SelectTrigger } from "@/components/atoms/Select/SelectTrigger/SelectTrigger";
import { SelectList } from "@/components/molecules/SelectPairs/SelectList";

type Props = {
  value: string;
  selected: OptionType | null;
  onSelect: Dispatch<SetStateAction<OptionType | null>>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  options?: OptionType[];
  disabled?: boolean;
};

const TSelectField = ({
  selected,
  onSelect,
  value,
  onChange,
  options = [],
  disabled = false,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const toSearch = useDeferredValue(search);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleSelect = useCallback(
    (option: OptionType) => {
      onSelect(option);
      setOpen(false);
    },
    [onSelect, setOpen],
  );

  const containerRef = useClickOutside(handleClose);
  const searchRef = useRef<HTMLInputElement>(null);

  const trigger = (
    <SelectTrigger
      open={open}
      onClick={() => setOpen((prev) => !prev)}
      src={selected?.image}
      alt={selected?.name}
      title={selected?.ticker}
    />
  );

  useEffect(() => {
    searchRef?.current && searchRef.current.focus();
  }, [open]);

  return (
    <div className={clsx(s.container, open && s.open)} ref={containerRef}>
      {open ? (
        <TextField
          ref={searchRef}
          value={search}
          className={clsx(s.search, open && s.open)}
          onChange={handleSearch}
          placeholder={"Search"}
        >
          {trigger}
        </TextField>
      ) : (
        <TextField value={value} onChange={onChange} disabled={disabled}>
          {trigger}
        </TextField>
      )}
      {open && (
        <SelectList
          search={toSearch}
          options={options}
          selected={selected}
          onSelect={handleSelect}
        />
      )}
    </div>
  );
};

export const SelectField = memo(TSelectField);
