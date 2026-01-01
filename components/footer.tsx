"use client";

import { CopyrightIcon, GithubIcon, SourceCodeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import clsx from "clsx/lite";

type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps) => {
  const { className } = props;

  const classString = clsx("text-base-content/60 p-3 text-sm", className);

  return (
    <footer className={classString}>
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-1">
          <HugeiconsIcon icon={CopyrightIcon} size={16} />
          {new Date().getFullYear()}
        </div>
        -
        <div className="flex items-center gap-1">
          <HugeiconsIcon icon={SourceCodeIcon} size={16} />
          <a href="https://lorenzofratus.it" target="_blank" rel="noopener noreferrer" className="link">
            Lorenzo Fratus
          </a>
        </div>
        -
        <div className="flex items-center gap-1">
          <HugeiconsIcon icon={GithubIcon} size={16} />
          <a
            href="https://github.com/lorenzofratus/piva-tools"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
        </div>
      </div>
      <p className="mt-2 text-justify text-sm break-words">
        Gli strumenti presenti in questo sito potrebbero contenere errori o inesattezze e non sono destinati a
        sostituire consulenze professionali. Il proprietario del sito non si assume alcuna responsabilità per eventuali
        danni o perdite derivanti dall&apos;uso di queste informazioni. Si consiglia di consultare sempre un
        professionista qualificato per tutte le questioni fiscali o legali.
      </p>
    </footer>
  );
};

export default Footer;
