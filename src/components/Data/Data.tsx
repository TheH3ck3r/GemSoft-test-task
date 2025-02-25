"use client";

import styles from "./Data.module.scss";
import useSWR from "swr";
import { BaseFetcher } from "@/common/fetcher";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Skeleton,
} from "@mui/material";
import { Vacancy } from "@/data-types/props";

export const Data = () => {
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
        {data?.map((vacancy: Vacancy, index: number) => (
          <Card key={index}>
            <CardContent className={styles.content}>
              <div className={styles.content_header}>{vacancy.name}</div>

              <div className={styles.content_info}>
                {vacancy.level} {vacancy.location} {vacancy.department}
              </div>
            </CardContent>
            <CardActions>
              <Button size="small">Подробнее</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
