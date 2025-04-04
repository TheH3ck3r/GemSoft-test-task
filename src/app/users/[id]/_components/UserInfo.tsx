import Link from "next/link";
import styles from "./UserInfo.module.scss";
import { BackArrowIcon } from "@/public/index";

export const UserInfo = () => {
  return (
    <div className={styles.root}>
      <div className={styles.back}>
        <Link href="/users" className={styles.link}>
          <div className={styles.arrow}>
            <BackArrowIcon />
          </div>
          Все пользователи
        </Link>
      </div>

      <div>Тут будет инфа о пользователе</div>
    </div>
  );
};
