import styles from "./CreateUserForm.module.scss";
import { Back } from "@/components/Back";

export const CreateUserForm = () => {
  return (
    <div className={styles.root}>
      <Back text="Все пользователи" path="/users" />

      <div>Тут будет форма</div>
    </div>
  );
};
