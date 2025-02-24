import React from "react";
import styles from "./Page.module.scss";

export type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return (
    <div className={styles.page}>
      <div className={styles.page_wrapper}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
