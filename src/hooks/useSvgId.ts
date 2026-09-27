import { useId } from "react";

export const useSvgId = (prefix: string) => `${prefix}${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
