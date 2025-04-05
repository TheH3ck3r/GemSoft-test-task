import styles from "./UserInfo.module.scss";
import { Back } from "@/components/Back";

export const UserInfo = () => {
  return (
    <div className={styles.root}>
      <Back text="Все пользователи" path="/users" />

      <div>Тут будет инфа о пользователе</div>
    </div>
  );
};
