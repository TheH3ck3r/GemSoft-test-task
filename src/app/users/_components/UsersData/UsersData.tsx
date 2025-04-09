"use client";

import Link from "next/link";
import styles from "./UsersData.module.scss";
import { UserProps } from "@/types/props";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/common/fetcher";

export const UsersData = () => {
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
};
