import { SettingsTabs } from "./SettingsTabs";
import { DataFiltration } from "./DataFiltration/DataFiltration";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.control}>
      <DataFiltration />
      <SettingsTabs />
    </div>
  );
};
