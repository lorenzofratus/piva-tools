import { CalculatorIcon } from "@hugeicons/core-free-icons";
import { Tool, ToolData } from "@model/tool";

export const tools: Record<Tool, ToolData> = {
  [Tool.FORFEIT_TAXES]: {
    id: Tool.FORFEIT_TAXES,
    name: "Calcolo Tassazione Forfettaria",
    description: "Calcola le tasse su una fattura per una partita IVA forfettaria",
    icon: CalculatorIcon,
    url: "/tools/forfeit-taxes",
  },
};

export const toolsList = Object.values(tools);
