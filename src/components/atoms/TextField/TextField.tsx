import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";
import s from "./TextField.module.scss";
import { clsx } from "@/helpers";
import { Typography } from "@/components";

type Props = {
  label?: string;
} & ComponentPropsWithoutRef<"input">;

export const TTextField = (
  { className, label, children, ...rest }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) => (
  <div className={s.container}>
    {label && (
      <Typography.Subtitle1 className={s.label}>{label}</Typography.Subtitle1>
    )}
    <input className={clsx(s.input, className)} ref={ref} {...rest} />
    {children}
  </div>
);

export const TextField = forwardRef(TTextField);
