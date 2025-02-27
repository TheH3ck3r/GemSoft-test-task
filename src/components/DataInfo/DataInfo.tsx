"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./DataInfo.module.scss";
import { VacancyFetcher } from "@/common/fetcher";

export const DataInfo = () => {
  const [uuid, setUuid] = useState("");

  useEffect(() => {
    const { pathname } = window.location;
    setUuid(pathname);
  }, []);

  const {
    data: dataInfo,
    isLoading: dataInfoLoading,
    error: dataInfoError,
  } = useSWR(() => {
    return `${uuid}1`;
  }, VacancyFetcher);

  if (dataInfoError) {
    return <div className={styles.error}>{"Ошибка :("}</div>;
  }

  return <>Test</>;
};
