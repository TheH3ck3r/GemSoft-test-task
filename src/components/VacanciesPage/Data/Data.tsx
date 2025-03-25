"use client";

import styles from "./Data.module.scss";
import useSWR from "swr";
import _ from "lodash";
import { BaseFetcher } from "@/common/fetcher";
import { Skeleton } from "@mui/material";
import { Cards } from "../Cards";
import { DataTable } from "../DataTable";
import vacanciesDataStore from "@/common/stores/vacanciesDataStore";
import vacanciesPageSettingsStore from "@/common/stores/vacanciesPageSettingsStore";
import { Navbar } from "./Navbar/Navbar";

export const Data = () => {
  const {
    data: data,
    isLoading: dataLoading,
    error: dataError,
  } = useSWR(() => {
    return `vacancy/`;
  }, BaseFetcher);

  vacanciesDataStore.setVacanciesData(data);

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

  console.log(vacanciesDataStore.vacancies);

  return (
    <div className={styles.root}>
      <Navbar></Navbar>

      {vacanciesPageSettingsStore.isCards ? (
        <Cards vacancies={vacanciesDataStore.vacancies} />
      ) : (
        <DataTable vacancies={vacanciesDataStore.vacancies} />
      )}
    </div>
  );
};
