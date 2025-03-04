"use client";

import { Button, Input, Alert } from "@mui/material";
import styles from "./Login.module.scss";
import { LogoIcon } from "@/public/index";
import { useState } from "react";
import { redirect } from "next/navigation";

type LoginData = {
  login: string;
  password: string;
};

export const Login = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    login: "",
    password: "",
  });

  // TODO: Обновить уведомление об неправильно пароле
  const checkAuth = () => {
    if (loginData.login == "admin" && loginData.password == "12345") {
      redirect("/");
    } else {
      return <Alert>test</Alert>;
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <LogoIcon />
        <Input
          fullWidth
          placeholder="Логин"
          onChange={(event) => {
            setLoginData({
              login: event.target.value,
              password: loginData.password,
            });
          }}
        ></Input>
        <Input
          fullWidth
          placeholder="Пароль"
          onChange={(event) => {
            setLoginData({
              login: loginData.login,
              password: event.target.value,
            });
          }}
        ></Input>
        <Button fullWidth onClick={checkAuth}>
          Войти
        </Button>
      </div>
    </div>
  );
};
