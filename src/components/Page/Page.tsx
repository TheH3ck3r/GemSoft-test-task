"use client";

import React from "react";
import styles from "./Page.module.scss";

import { Header } from "../Header";
import { usePathname } from "next/navigation";

export type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  const pathname = usePathname();

  return (
    <div className={styles.page}>
      <div className={styles.page_wrapper}>
        <div className={styles.content}>
          {pathname != "/login" && <Header />}
          {children}
        </div>
      </div>
    </div>
  );
};
