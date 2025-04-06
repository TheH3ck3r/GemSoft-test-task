import Link from "next/link";
import styles from "./Back.module.scss";
import { FC } from "react";
import { BackArrowIcon } from "@/public/index";

type BackProps = {
  text: string;
  path: string;
};

export const Back: FC<BackProps> = ({ path, text }) => (
  <div className={styles.root}>
    <Link href={path} className={styles.link}>
      <div className={styles.arrow}>
        <BackArrowIcon />
      </div>
      {text}
    </Link>
  </div>
);
