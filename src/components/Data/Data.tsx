"use client";

import styles from "./Data.module.scss";
import useSWR from "swr";
import { BaseFetcher } from "@/common/fetcher";
import { Skeleton, Tab, Tabs } from "@mui/material";
import { Cards } from "../Cards";
import { useState } from "react";
import { DataTable } from "../DataTable";

export const Data = () => {
  const [isTable, setIsTable] = useState(false);

  const {
    data: data,
    isLoading: dataLoading,
    error: dataError,
  } = useSWR(() => {
    return `vacancy`;
  }, BaseFetcher);

  if (dataLoading) {
    return (
      <div className={styles.root}>
        <div className={styles.wrapper}>
          {/* TODO: Сделать нормально скелетоны */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width={401}
              height={160}
              animation="wave"
            />
          ))}
        </div>
      </div>
    );
  }

  if (dataError) {
    return <div className={styles.error}>{"Ошибка :("}</div>;
  }

  return (
    <div className={styles.root}>
      <Tabs value={isTable}>
        <Tab
          label="Карточки"
          value={false}
          onClick={() => setIsTable(false)}
        ></Tab>
        <Tab
          label="Таблица"
          value={true}
          onClick={() => setIsTable(true)}
        ></Tab>
      </Tabs>
      {isTable ? <DataTable data={data}></DataTable> : <Cards data={data}></Cards>}
    </div>
  );
};
