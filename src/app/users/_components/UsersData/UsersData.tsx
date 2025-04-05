import Link from "next/link";
import styles from "./UsersData.module.scss";

export const UsersData = () => {
  const testUsers = [
    {
      id: "1",
      firstName: "Имя 1",
      middleName: "Фамилия 1",
    },
    {
      id: "1",
      firstName: "Имя 2",
      middleName: "Фамилия 2",
    },
    {
      id: "1",
      firstName: "Имя 3",
      middleName: "Фамилия 3",
    },
    {
      id: "1",
      firstName: "Имя 4",
      middleName: "Фамилия 4",
    },
    {
      id: "1",
      firstName: "Имя 5",
      middleName: "Фамилия 5",
    },

    {
      id: "1",
      firstName: "Имя 1",
      middleName: "Фамилия 1",
    },
    {
      id: "1",
      firstName: "Имя 2",
      middleName: "Фамилия 2",
    },
    {
      id: "1",
      firstName: "Имя 3",
      middleName: "Фамилия 3",
    },
    {
      id: "1",
      firstName: "Имя 4",
      middleName: "Фамилия 4",
    },
    {
      id: "1",
      firstName: "Имя 5",
      middleName: "Фамилия 5",
    },

    {
      id: "1",
      firstName: "Имя 1",
      middleName: "Фамилия 1",
    },
    {
      id: "1",
      firstName: "Имя 2",
      middleName: "Фамилия 2",
    },
    {
      id: "1",
      firstName: "Имя 3",
      middleName: "Фамилия 3",
    },
    {
      id: "1",
      firstName: "Имя 4",
      middleName: "Фамилия 4",
    },
    {
      id: "1",
      firstName: "Имя 5",
      middleName: "Фамилия 5",
    },
  ];

  return (
    <div className={styles.root}>
      {testUsers.map((user, index) => (
        <Link key={index} href={`/users/${user.id}`}>
          <div className={styles.user_card}>
            <div>{user.firstName}</div>
            <div>{user.middleName}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};
