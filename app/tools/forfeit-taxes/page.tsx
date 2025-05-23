"use client";

import NumberInput from "@components/number-input";
import PageTitle from "@components/page-title";
import { tools } from "@data/tools";
import { Tool } from "@model/tool";
import clsx from "clsx/lite";
import { useState } from "react";

const data = tools[Tool.FORFEIT_TAXES];

export default function Page() {
  const { name, description } = data;
  const [state, setState] = useState<State>(defaultState);

  const handleChange = (key: keyof State) => (value: number) => {
    setState((prev) => {
      const state = { ...prev, [key]: value };
      state.direction = key === "gross" ? "forward" : key === "net" ? "backward" : state.direction;
      const baseRate = state.baseRate / 100;
      const inpsRate = state.inpsRate / 100;
      const taxRate = state.taxRate / 100;
      if (state.direction === "backward") {
        const denom = 1 - baseRate * (inpsRate + (1 - inpsRate) * taxRate);
        state.gross = Math.round((state.net / denom) * 100) / 100;
      }
      const inpsBase = state.gross * baseRate;
      state.inps = Math.round(inpsBase * inpsRate * 100) / 100;
      const taxBase = inpsBase - state.inps;
      state.tax = Math.round(taxBase * taxRate * 100) / 100;
      if (state.direction === "forward") {
        state.net = state.gross - state.inps - state.tax;
      }
      return state;
    });
  };

  const grossClass = clsx(state.direction === "forward" && "!input-info");
  const netClass = clsx(state.direction === "backward" && "!input-info");

  return (
    <div className="w-full flex-1">
      <PageTitle title={name} subtitle={description} backHref="/" />

      <div className="bg-base-200 rounded-box mt-8 grid grid-cols-4 gap-3 p-4 shadow-md max-sm:grid-cols-1">
        <h3 className="col-span-full font-bold">Valori in Fattura</h3>
        <p className="text-base-content/60 col-span-full">
          Inserisci i valori che vuoi calcolare. Puoi inserire il totale lordo o il totale netto, e il calcolo verrà
          fatto automaticamente
        </p>
        <NumberInput
          label="Totale Lordo"
          prefix="€"
          value={state.gross}
          onChange={handleChange("gross")}
          inputClassName={grossClass}
        />
        <NumberInput label="Totale INPS" prefix="€" value={state.inps} onChange={handleChange("inps")} disabled />
        <NumberInput label="Totale Imposte" prefix="€" value={state.tax} onChange={handleChange("tax")} disabled />
        <NumberInput
          label="Totale Netto"
          prefix="€"
          value={state.net}
          onChange={handleChange("net")}
          inputClassName={netClass}
        />

        <h3 className="col-span-full pt-4 font-bold">Variabili di calcolo</h3>
        <p className="text-base-content/60 col-span-full">
          Modifica questi valori in base al tuo tipo di partita IVA e al tuo codice ATECO
        </p>
        <NumberInput
          label="Coefficiente di Redditività"
          suffix="%"
          value={state.baseRate}
          onChange={handleChange("baseRate")}
        />
        <NumberInput label="Imposta Sostitutiva" suffix="%" value={state.taxRate} onChange={handleChange("taxRate")} />
        <NumberInput label="Contributi INPS" suffix="%" value={state.inpsRate} onChange={handleChange("inpsRate")} />
      </div>
    </div>
  );
}

type State = {
  baseRate: number;
  inpsRate: number;
  taxRate: number;
  gross: number;
  inps: number;
  tax: number;
  net: number;
  direction: "forward" | "backward";
};

const defaultState: State = {
  baseRate: 78,
  inpsRate: 26.07,
  taxRate: 5,
  gross: 0,
  inps: 0,
  tax: 0,
  net: 0,
  direction: "forward",
};
