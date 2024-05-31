import { Typography } from "@/components";
import { ArrowDown, Cross } from "@/assets";

import s from "./SelectTrigger.module.scss";

type Props = {
  src?: string;
  alt?: string;
  title?: string;
  open?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

export const SelectTrigger = ({
  src,
  alt,
  title,
  open,
  onClick,
  disabled = false,
}: Props) => {
  return (
    <button className={s.trigger} onClick={onClick} disabled={disabled}>
      <img className={s.image} src={src} alt={alt} />
      <Typography.Subtitle1 className={s.title}>{title}</Typography.Subtitle1>
      {open ? <Cross className={s.icon} /> : <ArrowDown className={s.icon} />}
    </button>
  );
};
