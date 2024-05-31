import { InvalidVariants } from "@/helpers";

export function clsx(...args: Array<string | undefined | boolean>): string {
  return args.filter(Boolean).join(" ");
}

export function removeBraces(str: string): string {
  const pattern = /\(([^)]+)\)/g;
  return str.replace(pattern, "");
}

export function createUrl(
  url: string,
  query: Record<string, string> = {},
): string {
  return query ? `${url}?${new URLSearchParams(query).toString()}` : url;
}

export function getErrorMessage(value?: string): string {
  switch (value) {
    case InvalidVariants.inActivePairs:
    case InvalidVariants.pairsInActive:
      return "this pair is disabled now";
    case InvalidVariants.outOfMinAmount:
      return "Out of min amount";
    case InvalidVariants.depositTooSmall:
      return "Check amount field";
    default:
      return typeof value === "string" ? value : "Unknown error";
  }
}
