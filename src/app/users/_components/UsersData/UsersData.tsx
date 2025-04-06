"use client";

import Link from "next/link";
import styles from "./UsersData.module.scss";
// import { GET } from "@/app/api/route";
// import { useState } from "react";
import { UserProps } from "@/types/props";

export const UsersData = () => {
  // const [users, setUsers] = useState([]);

  // GET()
  //   .then((response) => response.json())
  //   .then((data) => setUsers(data));

  const users: UserProps[] = [
    {
      firstName: "Тестовое имя 1",
      lastName: "Тестовая фамилия 1",
      middleName: "Тестовое очество 1",
      age: 21,
      gender: "male",
      interests: ["music", "games"],
      musicGenre: "rock",
    },
    {
      firstName: "Тестовое имя 2",
      lastName: "Тестовая фамилия 2",
      middleName: "Тестовое очество 2",
      age: 35,
      gender: "female",
      interests: ["music"],
      musicGenre: "hiphop",
    },
  ];

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
