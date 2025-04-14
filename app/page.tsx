import ToolsList from "@components/tools-list/tools-list";
import { ToolsIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Home() {
  return (
    <>
      <div className="bg-primary/60 text-primary-content mb-2 flex size-20 items-center justify-center rounded-xl">
        <HugeiconsIcon icon={ToolsIcon} size={48} />
      </div>
      <h1 className="text-center text-4xl font-bold">P.IVA Tools</h1>
      <p className="mt-2 text-center text-lg">
        Questo sito contiene una collezione (incompleta e approssimativa) di strumenti per la gestione della Partita IVA
        che ho creato <span className="text-secondary">ad uso personale</span>
      </p>
      <p className="mt-2 text-center text-lg">
        Non ti fidare ciecamente di questi strumenti, consulta <span className="text-secondary">sempre</span> un
        professionista qualificato!
      </p>
      <ToolsList className="mt-4" />
    </>
  );
}
