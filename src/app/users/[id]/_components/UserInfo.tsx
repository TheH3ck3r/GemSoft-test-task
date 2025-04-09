"use client";

import { useEffect, useState } from "react";
import styles from "./UserInfo.module.scss";
import { Back } from "@/components/Back";
import { getUserById } from "@/common/fetcher";

export const UserInfo = () => {
  const [user, setUser] = useState([]);

  console.log(user);

  useEffect(() => {
    const { pathname } = window.location;
    console.log(pathname);
    getUserById("0").then(setUser);
  }, []);
  return (
    <div className={styles.root}>
      <Back text="Все пользователи" path="/users" />

      <div>Тут будет инфа о пользователе</div>
    </div>
  );
};
