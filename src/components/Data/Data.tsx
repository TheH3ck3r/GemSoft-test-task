"use client";

import { kNasaApiKey } from "@/common/app";
import styles from "./Data.module.scss";
import useSWR from "swr";
import { GETBaseFetcher } from "@/common/fetcher";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Skeleton,
} from "@mui/material";

export const Data = () => {
  const {
    data: data,
    isLoading: dataLoading,
    error: dataError,
  } = useSWR(() => {
    return `planetary/apod?api_key=${kNasaApiKey}`;
  }, GETBaseFetcher);

  if (dataLoading) {
    return (
      <div className={styles.root}>
        <div className={styles.wrapper}>
          {/* TODO: Сделать нормально скелетоны */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width={401}
              height={401}
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
      <div className={styles.wrapper}>
        {Array(data)?.map((data, index: number) => (
          <Card key={index}>
            <CardContent>{data.date}</CardContent>
            <CardActions>
              <Button size="small">Подробнее</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
