import styles from "./NotFound.module.scss";

export const NotFound = () => (
  <div className={styles.error}>
    <div className={styles.container}>
      <p className={styles.glitch}>
        <span aria-hidden="true">404</span>
        404
        <span aria-hidden="true">404</span>
      </p>
    </div>
  </div>
);
