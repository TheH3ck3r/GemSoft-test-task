"use client";

import Link from "next/link";
import styles from "./Users.module.scss";
import { Button } from "@mui/material";
import { UsersData } from "../UsersData";
import { deleteUsers, getAllUsers } from "@/common/fetcher";
import { useEffect, useState } from "react";
import { UserProps } from "@/types/props";

export const Users = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        <Link href={"/users/create"}>
          <Button>Добавить пользователя</Button>
        </Link>
        <Button
          color="error"
          onClick={async () => {
            await deleteUsers();
            const updatedUsers = await getAllUsers();
            setUsers(updatedUsers);
          }}
        >
          Очистить
        </Button>
      </div>

      <UsersData users={users} />
    </div>
  );
};
