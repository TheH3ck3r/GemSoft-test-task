"use client";

import { useEffect, useState } from "react";
import styles from "./UserInfo.module.scss";
import { Back } from "@/components/Back";
import { deleteUser, getUserById } from "@/common/fetcher";
import { UserProps } from "@/types/props";
import Link from "next/link";
import { Button } from "@mui/material";

export const UserInfo = () => {
  const [user, setUser] = useState<UserProps>();

  // TODO: исправить ошибку с тем, что window.location not defined, когда оно не в useEffect()
  useEffect(() => {
    const { pathname } = window.location;
    const id = pathname.split("/")[2];
    getUserById(id).then(setUser);
  }, []);

  return (
    <div className={styles.root}>
      <Back text="Все пользователи" path="/users" />

      <div>
        {user?.firstName} {user?.lastName} {user?.middleName}
        <Link href={"/users"}>
          <Button
            color="error"
            onClick={() => {
              // TODO: Убрать дублирование кода
              const { pathname } = window.location;
              const id = pathname.split("/")[2];
              deleteUser(+id);
            }}
          >
            Удалить
          </Button>
        </Link>
      </div>
    </div>
  );
};
