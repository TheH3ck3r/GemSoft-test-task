"use client";

import { Button, Input, Alert } from "@mui/material";
import styles from "./Login.module.scss";
import { LogoIcon } from "@/public/index";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type LoginData = {
  login: string;
  password: string;
};

export const Login = () => {
  const router = useRouter();

  const [isAlert, setIsAlert] = useState(false);

  const [loginData, setLoginData] = useState<LoginData>({
    login: "",
    password: "",
  });

  const checkAuth = () => {
    if (loginData.login == "admin" && loginData.password == "12345") {
      Cookies.set("access_token", "47dd275d-e17f-4a3e-be33-f27095558bf1", {
        expires: new Date(Date.now() + 5 * 60 * 1000),
        path: "/",
      });

      router.push("/");
    } else {
      setIsAlert(true);
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
        {isAlert && (
          <Alert variant="filled" severity="error">
            Неверный логин или пароль
          </Alert>
        )}
      </div>
    </div>
  );
};
