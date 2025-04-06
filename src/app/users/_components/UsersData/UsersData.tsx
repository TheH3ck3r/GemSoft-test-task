import Link from "next/link";
import styles from "./UsersData.module.scss";

export const UsersData = () => {
  const testUsers = [
    {
      id: "1",
      firstName: "Имя 1",
      lastName: "Фамилия 1",
    },
    {
      id: "1",
      firstName: "Имя 2",
      lastName: "Фамилия 2",
    },
    {
      id: "1",
      firstName: "Имя 3",
      lastName: "Фамилия 3",
    },
    {
      id: "1",
      firstName: "Имя 4",
      lastName: "Фамилия 4",
    },
    {
      id: "1",
      firstName: "Имя 5",
      lastName: "Фамилия 5",
    },

    {
      id: "1",
      firstName: "Имя 1",
      lastName: "Фамилия 1",
    },
    {
      id: "1",
      firstName: "Имя 2",
      lastName: "Фамилия 2",
    },
    {
      id: "1",
      firstName: "Имя 3",
      lastName: "Фамилия 3",
    },
    {
      id: "1",
      firstName: "Имя 4",
      lastName: "Фамилия 4",
    },
    {
      id: "1",
      firstName: "Имя 5",
      lastName: "Фамилия 5",
    },

    {
      id: "1",
      firstName: "Имя 1",
      lastName: "Фамилия 1",
    },
    {
      id: "1",
      firstName: "Имя 2",
      lastName: "Фамилия 2",
    },
    {
      id: "1",
      firstName: "Имя 3",
      lastName: "Фамилия 3",
    },
    {
      id: "1",
      firstName: "Имя 4",
      lastName: "Фамилия 4",
    },
    {
      id: "1",
      firstName: "Имя 5",
      lastName: "Фамилия 5",
    },
  ];

  return (
    <div className={styles.root}>
      {testUsers.map((user, index) => (
        <Link key={index} href={`/users/${user.id}`}>
          <div className={styles.user_card}>
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};
