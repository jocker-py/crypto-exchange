import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type TypographyType =
  | "body1"
  | "body2"
  | "body3"
  | "subtitle1"
  | "subtitle2";

export type TypographyProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<ElementType>;
