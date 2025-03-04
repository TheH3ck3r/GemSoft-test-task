import { Button, Input, Link } from "@mui/material";
import styles from "./Login.module.scss";
import { LogoIcon } from "@/public/index";

export const Login = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <LogoIcon />
        <Input fullWidth placeholder="Логин"></Input>
        <Input fullWidth placeholder="Пароль"></Input>
        <Link href="\">
          <Button fullWidth>Войти</Button>
        </Link>
      </div>
    </div>
  );
};
