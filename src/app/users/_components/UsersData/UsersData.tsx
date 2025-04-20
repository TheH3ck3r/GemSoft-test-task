"use client";

import Link from "next/link";
import styles from "./UsersData.module.scss";
import { UserProps } from "@/data-types/props";
import { FC } from "react";
import { observer } from "mobx-react-lite";

type UsersDataProps = {
  users: UserProps[];
};

export const UsersData: FC<UsersDataProps> = observer(({ users }) => (
  <>
    {users.length > 0 ? (
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
    ) : (
      <div className={styles.no_data}>Данных нет</div>
    )}
  </>
));
