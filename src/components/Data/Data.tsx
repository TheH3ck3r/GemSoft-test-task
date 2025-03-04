"use client";

import styles from "./Data.module.scss";
import useSWR from "swr";
import _ from "lodash";
import { BaseFetcher } from "@/common/fetcher";
import { Input, Skeleton, Tab, Tabs } from "@mui/material";
import { Cards } from "../Cards";
import { useState } from "react";
import { DataTable } from "../DataTable";
import { Vacancy } from "@/data-types/props";

export const Data = () => {
  const [isTable, setIsTable] = useState(false);
  const [search, setSearch] = useState("");

  const {
    data: data,
    isLoading: dataLoading,
    error: dataError,
  } = useSWR(() => {
    return `vacancy/`;
  }, BaseFetcher);

  if (dataLoading) {
    return (
      <div className={styles.root}>
        <div className={styles.wrapper}>
          {_.range(9).map((i: number) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width={401}
              height={250}
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

  const filteredData = data?.filter((vacancy: Vacancy) => {
    return (
      !search ||
      vacancy.name.toLowerCase().includes(search.toLowerCase()) ||
      !search ||
      vacancy.department.toLowerCase().includes(search.toLowerCase()) ||
      !search ||
      vacancy.level.toLowerCase().includes(search.toLowerCase()) ||
      !search ||
      vacancy.location.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className={styles.root}>
      <div className={styles.control}>
        <Input
          fullWidth
          placeholder="Поиск"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        <div>
          <Tabs value={isTable}>
            <Tab
              label="Карточки"
              value={false}
              onClick={() => setIsTable(false)}
            />
            <Tab
              label="Таблица"
              value={true}
              onClick={() => setIsTable(true)}
            />
          </Tabs>
        </div>
      </div>

      {isTable ? (
        <DataTable data={filteredData} />
      ) : (
        <Cards data={filteredData} />
      )}
    </div>
  );
};
