import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";
import { clsx } from "@/helpers";

import s from "./Button.module.scss";
import { Typography } from "@/components";

type ButtonProps = {
  error?: string | null;
} & ComponentPropsWithoutRef<"button">;

const ButtonTemplate = (
  { className, children, error, ...rest }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <div className={clsx(s.container, className)}>
      <button {...rest} className={s.button} ref={ref}>
        {children}
      </button>
      {error && (
        <Typography.Subtitle1 className={s.error}>{error}</Typography.Subtitle1>
      )}
    </div>
  );
};

export const Button = forwardRef(ButtonTemplate);
