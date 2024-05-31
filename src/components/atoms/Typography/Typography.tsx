import { clsx } from "@/helpers";
import { TypographyProps, TypographyType } from "./Typography.types";
import s from "./Typography.module.scss";

const templates = {
  body1: "p",
  body2: "p",
  body3: "p",
  subtitle1: "p",
  subtitle2: "p",
} as const;

export const createTypographyComponent = (tag: TypographyType) => {
  const Component = templates[tag];
  return ({ children, className }: TypographyProps) => (
    <Component className={clsx(`${s[tag]}`, className)}>{children}</Component>
  );
};

export const Typography = {
  Body1: createTypographyComponent("body1"),
  Body2: createTypographyComponent("body2"),
  Body3: createTypographyComponent("body3"),
  Subtitle1: createTypographyComponent("subtitle1"),
  Subtitle2: createTypographyComponent("subtitle2"),
};
