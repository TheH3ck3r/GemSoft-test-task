"use client";

import React, { useEffect } from "react";
import styles from "./Page.module.scss";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  const router = useRouter();

  useEffect(() => {
    if (
      Cookies.get("access_token") !== "47dd275d-e17f-4a3e-be33-f27095558bf1"
    ) {
      console.log("auth not passed");
      router.push("/login");
    } else {
      console.log("auth passed");
    }
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.page_wrapper}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
