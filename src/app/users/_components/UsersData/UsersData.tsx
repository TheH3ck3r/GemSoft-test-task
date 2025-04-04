import styles from "./UsersData.module.scss";

export const UsersData = () => {
  const testUsers = [
    {
      firstName: "Имя 1",
      middleName: "Фамилия 1",
    },
    {
      firstName: "Имя 2",
      middleName: "Фамилия 2",
    },
    {
      firstName: "Имя 3",
      middleName: "Фамилия 3",
    },
    {
      firstName: "Имя 4",
      middleName: "Фамилия 4",
    },
    {
      firstName: "Имя 5",
      middleName: "Фамилия 5",
    },

    {
      firstName: "Имя 1",
      middleName: "Фамилия 1",
    },
    {
      firstName: "Имя 2",
      middleName: "Фамилия 2",
    },
    {
      firstName: "Имя 3",
      middleName: "Фамилия 3",
    },
    {
      firstName: "Имя 4",
      middleName: "Фамилия 4",
    },
    {
      firstName: "Имя 5",
      middleName: "Фамилия 5",
    },

    {
      firstName: "Имя 1",
      middleName: "Фамилия 1",
    },
    {
      firstName: "Имя 2",
      middleName: "Фамилия 2",
    },
    {
      firstName: "Имя 3",
      middleName: "Фамилия 3",
    },
    {
      firstName: "Имя 4",
      middleName: "Фамилия 4",
    },
    {
      firstName: "Имя 5",
      middleName: "Фамилия 5",
    },
  ];

  return (
    <div className={styles.root}>
      {testUsers.map((user, index) => (
        <div key={index} className={styles.user_card}>
          <div>{user.firstName}</div>
          <div>{user.middleName}</div>
        </div>
      ))}
    </div>
  );
};
