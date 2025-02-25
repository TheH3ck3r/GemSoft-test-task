"use client";

import { kNasaApiKey } from "@/common/app";
import styles from "./Data.module.scss";
import useSWR from "swr";
import { GETBaseFetcher } from "@/common/fetcher";

export const Data = () => {
  const {
    data: data,
    isLoading: dataLoading,
    error: dataError,
  } = useSWR(() => {
    return `planetary/apod?api_key=${kNasaApiKey}`;
  }, GETBaseFetcher);

  console.log(data, dataLoading, dataError);

  return <div className={styles.root}>{data?.date}</div>;
};
