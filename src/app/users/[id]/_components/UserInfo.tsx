"use client";

import { useEffect, useState } from "react";
import styles from "./UserInfo.module.scss";
import { Back } from "@/components/Back";
import { getUserById } from "@/common/fetcher";
import { UserProps } from "@/types/props";

export const UserInfo = () => {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const { pathname } = window.location;
    getUserById(pathname.split("/")[2]).then(setUser);
  }, []);
  return (
    <div className={styles.root}>
      <Back text="Все пользователи" path="/users" />

      <div>
        {user?.firstName} {user?.lastName} {user?.middleName}
      </div>
    </div>
  );
};
