import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import clsx from "clsx/lite";
import Link from "next/link";

type PageTitleProps = {
  title: string;
  subtitle?: string;
  backHref?: string;
  className?: string;
};

const PageTitle = (props: PageTitleProps) => {
  const { title, subtitle, backHref, className } = props;

  const classString = clsx("w-full space-y-2", className);

  return (
    <div className={classString}>
      <div className="flex w-full items-center gap-4">
        {backHref && (
          <Link href={backHref} className="btn btn-square btn-ghost">
            <HugeiconsIcon icon={ArrowLeft01Icon} size={32} strokeWidth={2} />
          </Link>
        )}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      {subtitle && <p className="text-base-content/60 text-lg">{subtitle}</p>}
    </div>
  );
};

export default PageTitle;
