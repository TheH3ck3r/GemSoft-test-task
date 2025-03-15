"use client";

import {
  Button,
  Input,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState<LoginData>({
    login: "",
    password: "",
  });

  const checkAuth = () => {
    if (loginData.login === "admin" && loginData.password === "12345") {
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
        />
        <Input
          fullWidth
          placeholder="Пароль"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          onChange={(event) => {
            setLoginData({
              login: loginData.login,
              password: event.target.value,
            });
          }}
        />
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
