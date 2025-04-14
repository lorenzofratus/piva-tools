import ToolsList from "@components/tools-list/tools-list";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="icon0.svg" alt="Logo" width={64} height={64} className="mb-2 rounded-xl" />
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
