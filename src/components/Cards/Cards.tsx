/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Vacancy } from "@/data-types/props";
import styles from "./Cards.module.scss";
import { Button, Card, CardActions, CardContent, Divider } from "@mui/material";
import { FC } from "react";

type CardsProps = {
  data: Vacancy;
};

export const Cards: FC<CardsProps> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {/* TODO: Исправить этот недочёт */}
      {/* @ts-expect-error */}
      {data?.map((vacancy: Vacancy, index: number) => (
        <Card key={index} className={styles.card}>
          <CardContent className={styles.content}>
            <div className={styles.content_header}>{vacancy.name}</div>
            <Divider></Divider>
            <div className={styles.content_info}>
              <div>{vacancy.level}</div> <div>{vacancy.department}</div>
              <div>{vacancy.location}</div>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small">Подробнее</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
