import Link from "next/link";
import styles from "./Users.module.scss";
import { Button } from "@mui/material";
import { UsersData } from "../UsersData";
import { GET } from "@/app/api/route";

export const Users = () => {
  GET()
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div className={styles.root}>
      <Link href={"/users/create"}>
        <Button>Добавить пользователя</Button>
      </Link>

      {/* Оставил место на будущие изменения */}

      <UsersData />
    </div>
  );
};
