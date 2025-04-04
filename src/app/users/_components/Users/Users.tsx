import Link from "next/link";
import styles from "./Users.module.scss";
import { Button } from "@mui/material";
import { UsersData } from "../UsersData";

export const Users = () => {
  return (
    <div className={styles.root}>
      <Link href={"/users/create"}>
        <Button>Добавить пользователя</Button>
      </Link>

      {/* Оставил место на будущие изменения */}

      <UsersData />
    </div>
  );
};
