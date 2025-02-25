import Link from "next/link";
import styles from "./Header.module.scss";
import { LogoIcon } from "@/public/index";
import Avatar from "@mui/material/Avatar";

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Link href={"/"}>
          <LogoIcon></LogoIcon>
        </Link>
        <Avatar sx={{ bgcolor: "var(--gs-color-primary)" }}></Avatar>
      </div>
    </div>
  );
};
