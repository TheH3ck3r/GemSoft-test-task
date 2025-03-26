import { DataDisplay } from "./DataDisplay";
import { DataFiltration } from "./DataFiltration/DataFiltration";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.control}>
      <DataFiltration />
      <DataDisplay />
    </div>
  );
};
