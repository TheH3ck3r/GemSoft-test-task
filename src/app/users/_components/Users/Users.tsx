"use client";

import Link from "next/link";
import styles from "./Users.module.scss";
import { Button } from "@mui/material";
import { UsersData } from "../UsersData";
import { deleteUsers } from "@/common/fetcher";

export const Users = () => {
  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        <Link href={"/users/create"}>
          <Button>Добавить пользователя</Button>
        </Link>
        <Button color="error" onClick={() => deleteUsers()}>
          Очистить
        </Button>
      </div>

      <UsersData />
    </div>
  );
};
