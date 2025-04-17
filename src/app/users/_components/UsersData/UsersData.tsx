"use client";

import Link from "next/link";
import styles from "./UsersData.module.scss";
import { UserProps } from "@/data-types/props";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/common/fetcher";
import { observer } from "mobx-react-lite";

// TODO: Исправить ошибку, когда при очистке всех данных нужно обновлять страницу, чтобы увидеть результат
export const UsersData = observer(() => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return (
    <div className={styles.root}>
      {users.map((user: UserProps, index) => (
        <Link key={index} href={`/users/${index}`}>
          <div className={styles.user_card}>
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
          </div>
        </Link>
      ))}
    </div>
  );
});
