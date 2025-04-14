import { ArrowRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ToolData } from "@model/tool";
import clsx from "clsx/lite";
import Link from "next/link";

type ToolsListEntryProps = {
  data: ToolData;
  className?: string;
};

const ToolsListEntry = (props: ToolsListEntryProps) => {
  const { data, className } = props;
  const { name, description, icon, url } = data;

  const classString = clsx("list-row", className);

  return (
    <li className={classString}>
      <div className="avatar avatar-placeholder bg-primary/60 text-primary-content flex size-10 items-center justify-center rounded">
        <HugeiconsIcon icon={icon} />
      </div>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-xs opacity-60">{description}</div>
      </div>
      <Link href={url} className="btn btn-square btn-ghost">
        <HugeiconsIcon icon={ArrowRightIcon} />
      </Link>
    </li>
  );
};

export default ToolsListEntry;
