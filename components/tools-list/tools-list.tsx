import { toolsList } from "@data/tools";
import clsx from "clsx/lite";
import ToolsListEntry from "./tools-list-entry";

type ToolsListProps = {
  className?: string;
};

const ToolsList = (props: ToolsListProps) => {
  const { className } = props;

  const classString = clsx("list bg-base-200 rounded-box w-full max-w-lg shadow-md", className);

  return (
    <ul className={classString}>
      {toolsList.map((tool) => (
        <ToolsListEntry key={tool.id} data={tool} />
      ))}
    </ul>
  );
};

export default ToolsList;
