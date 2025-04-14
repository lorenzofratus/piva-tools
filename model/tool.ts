import { IconSvgElement } from "@hugeicons/react";

export enum Tool {
  FORFEIT_TAXES = "forfeit-taxes",
}

export type ToolData = {
  id: string;
  name: string;
  description: string;
  icon: IconSvgElement;
  url: string;
};
