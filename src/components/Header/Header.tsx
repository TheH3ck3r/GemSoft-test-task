import Link from "next/link";
import styles from "./Header.module.scss";
import { LogoIcon } from "@/public/index";

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Link href={"/"}>
          <LogoIcon></LogoIcon>
        </Link>
        <div>test</div>
      </div>
    </div>
  );
};
