"use client";

import { useEffect, useState } from "react";
import styles from "./UserInfo.module.scss";
import { Back } from "@/components/Back";
import { getUserById } from "@/common/fetcher";

export const UserInfo = () => {
  const [user, setUser] = useState([]);

  console.log(user);

  useEffect(() => {
    getUserById(1).then(setUser);
  }, []);
  return (
    <div className={styles.root}>
      <Back text="Все пользователи" path="/users" />

      <div>Тут будет инфа о пользователе</div>
    </div>
  );
};
