import { ComponentPropsWithoutRef, MouseEvent } from "react";
import { Typography } from "@/components";
import s from "./SelectOption.module.scss";
import { clsx } from "@/helpers";

type Props = {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  active?: boolean;
  onClick?: (e: MouseEvent<HTMLLIElement>) => void;
} & ComponentPropsWithoutRef<"li">;

export const SelectOption = ({
  src,
  alt,
  title,
  subtitle,
  active,
  onClick,
  ...rest
}: Props) => {
  return (
    <li
      className={clsx(s.option, active && s.active)}
      onClick={onClick}
      {...rest}
    >
      {src ? (
        <img className={s.image} src={src} alt={alt} />
      ) : (
        <div className={s.image} />
      )}
      <Typography.Subtitle1 className={s.title}>{title}</Typography.Subtitle1>
      <Typography.Subtitle1 className={s.subtitle}>
        {subtitle}
      </Typography.Subtitle1>
    </li>
  );
};
